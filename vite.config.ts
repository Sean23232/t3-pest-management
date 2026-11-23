import fs from 'node:fs';
import path from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function inquiryApiPlugin(): Plugin {
  return {
    name: 't3-inquiry-api',
    configureServer(server) {
      server.middlewares.use('/api/inquiries', (req: IncomingMessage, res: ServerResponse, next) => {
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ status: 'ok', service: 't3-pest-management-inquiries' }));
          return;
        }

        if (req.method !== 'POST') {
          next();
          return;
        }

        let body = '';
        req.on('data', (chunk: Buffer | string) => {
          body += chunk.toString();
          if (body.length > 64 * 1024) {
            res.statusCode = 413;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Payload too large.' }));
            req.destroy();
          }
        });

        req.on('end', () => {
          try {
            const payload = JSON.parse(body || '{}') as Record<string, unknown>;
            const name = typeof payload.name === 'string' ? payload.name.trim() : '';
            const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
            const email = typeof payload.email === 'string' ? payload.email.trim() : '';
            const pestConcern = typeof payload.pestConcern === 'string' ? payload.pestConcern.trim() : '';
            const description = typeof payload.description === 'string' ? payload.description.trim() : '';
            const preferredMethod = typeof payload.preferredMethod === 'string' ? payload.preferredMethod.trim() : '';

            const errors: Record<string, string> = {};
            if (name.length < 2) errors.name = 'Please enter your full name.';
            if (phone.replace(/\D/g, '').length < 10) errors.phone = 'Please provide a valid 10-digit phone number.';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please provide a valid email address.';
            if (!pestConcern) errors.pestConcern = 'Please select the pest concern you need assistance with.';
            if (description.length < 10) errors.description = 'Please describe what you are experiencing (at least 10 characters).';
            if (!preferredMethod) errors.preferredMethod = 'Please choose your preferred contact method.';

            if (Object.keys(errors).length > 0) {
              res.statusCode = 422;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: false, message: 'Please review the highlighted fields.', errors }));
              return;
            }

            const referenceId = `T3-${Date.now().toString(36).toUpperCase().slice(-6)}`;
            const record = {
              referenceId,
              receivedAt: new Date().toISOString(),
              name,
              phone,
              email,
              propertyType: typeof payload.propertyType === 'string' ? payload.propertyType.trim() : 'Not specified',
              servicePreference: typeof payload.servicePreference === 'string' ? payload.servicePreference.trim() : 'Not specified',
              pestConcern,
              description,
              preferredMethod,
            };

            const dataDir = path.resolve('/tmp/t3-inquiries');
            fs.mkdirSync(dataDir, { recursive: true });
            const logFile = path.join(dataDir, 'submissions.json');
            let existing: unknown[] = [];
            if (fs.existsSync(logFile)) {
              try {
                existing = JSON.parse(fs.readFileSync(logFile, 'utf-8')) as unknown[];
              } catch {
                existing = [];
              }
            }
            existing.push(record);
            fs.writeFileSync(logFile, JSON.stringify(existing, null, 2));

            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                ok: true,
                referenceId,
                receivedAt: record.receivedAt,
                message: 'Your inquiry has been logged cleanly for follow-up.',
              })
            );
          } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: false, message: 'Unable to parse inquiry request.' }));
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inquiryApiPlugin()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
});
