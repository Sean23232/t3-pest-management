import { useEffect } from 'react';
import { BUSINESS } from '../config/business';

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
}

export function usePageMeta({ title, description, path = '/' }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Local SEO Structured Data with verified info + clearly marked placeholders
    const schemaId = 't3-local-business-schema';
    let script = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaPayload = {
      '@context': 'https://schema.org',
      '@type': 'PestControlService',
      name: BUSINESS.brandName,
      alternateName: BUSINESS.alternateName,
      slogan: BUSINESS.slogan,
      url: `${BUSINESS.websiteUrl}${path === '/' ? '' : path}`,
      telephone: BUSINESS.phone.display,
      areaServed: BUSINESS.serviceArea.isPlaceholder
        ? '[EDITABLE PLACEHOLDER: Verified Service Area]'
        : BUSINESS.serviceArea.value,
      openingHours: BUSINESS.hours.verifiedSummary,
      knowsAbout: [
        'General Pest Control',
        'Pest Eradication',
        'Rodent Control',
        'Basic Rodent Exclusion',
        'Roach Control',
        'Bed Bug Control',
        'Scorpion Control',
      ],
    };

    script.textContent = JSON.stringify(schemaPayload);
  }, [title, description, path]);
}
