import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS } from '../config/business';
import { RevealBlock } from './RevealBlock';

export function FinalConversion() {
  return (
    <section className="relative overflow-hidden border-t border-[#C69A53]/25 bg-[#101D2B] py-20 sm:py-24 lg:py-28">
      {/* Restrained architectural hairline accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C69A53]/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-[#C69A53]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-[#C69A53]/15"
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <RevealBlock>
          <div className="mx-auto inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A53]">
            <span className="h-px w-8 bg-[#C69A53]/60" aria-hidden="true" />
            <span>Schedule With Confidence</span>
            <span className="h-px w-8 bg-[#C69A53]/60" aria-hidden="true" />
          </div>

          <h2 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&rsquo;s Get Your Pest Problem Under Control.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#B9C2CA] sm:text-lg">
            Tell us what you&rsquo;re dealing with. Connect with T3 Pest Management to
            discuss your service needs.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact#inquiry-form"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-[#C69A53] px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#101D2B] shadow-lg transition-all hover:bg-[#D4AC6A] sm:w-auto"
            >
              <span>Request an Estimate</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={BUSINESS.phone.href}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm border border-[#C69A53]/55 bg-[#18232D] px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all hover:border-[#C69A53] hover:text-[#C69A53] sm:w-auto"
            >
              <Phone className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
              <span>Call Now &middot; {BUSINESS.phone.display}</span>
            </a>
          </div>

          <p className="mt-7 text-xs tracking-[0.16em] uppercase text-[#87919B]">
            Open 5 Days a Week &middot; Providing Results, Not Excuses
          </p>
        </RevealBlock>
      </div>
    </section>
  );
}
