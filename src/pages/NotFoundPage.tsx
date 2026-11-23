import { Link } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { BUSINESS } from '../config/business';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found | T3 Pest Management',
    description: 'The requested page could not be found on T3 Pest Management.',
    path: '/404',
  });

  return (
    <section className="flex min-h-[65vh] items-center bg-[#101D2B] py-24 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#C69A53]">
          404 &middot; Page Not Found
        </span>
        <h1 className="mt-4 font-editorial text-4xl font-medium text-white sm:text-5xl">
          This Page Could Not Be Located.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#B9C2CA]">
          Return to the homepage, explore our pest management services, or reach T3 Pest
          Management directly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-sm bg-[#C69A53] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] hover:bg-[#D4AC6A]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <a
            href={BUSINESS.phone.href}
            className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:border-[#C69A53] hover:text-[#C69A53]"
          >
            <Phone className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
            <span>Call {BUSINESS.phone.display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
