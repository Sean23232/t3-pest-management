import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { EditablePlaceholder } from '../components/EditablePlaceholder';
import { FinalConversion } from '../components/FinalConversion';
import { RevealBlock } from '../components/RevealBlock';
import { BUSINESS } from '../config/business';
import { getServiceBySlug, PEST_SERVICES } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  usePageMeta({
    title: service ? service.seoTitle : 'Service Not Found | T3 Pest Management',
    description: service
      ? service.seoDescription
      : 'Professional pest management services by T3 Pest Management.',
    path: service ? `/services/${service.slug}` : '/services',
  });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = PEST_SERVICES.filter((item) => item.slug !== service.slug);

  return (
    <>
      {/* Dark Service Hero */}
      <section className="border-b border-white/10 bg-[#101D2B] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-7">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#C69A53] transition-colors hover:text-[#DFB977]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>All Services</span>
            </Link>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C69A53]">
                {service.cardHeadline}
              </span>
              <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-[#C7D0D8] sm:text-lg">
                {service.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
                <Link
                  to={`/contact?pest=${service.slug}#inquiry-form`}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#C69A53] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] transition-colors hover:bg-[#D4AC6A]"
                >
                  <span>Request an Estimate</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
                <a
                  href={BUSINESS.phone.href}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-white/25 bg-[#18232D] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#C69A53] hover:text-[#C69A53]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#C69A53]" aria-hidden="true" />
                  <span>Call {BUSINESS.phone.display}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-sm border border-[#C69A53]/25 bg-[#18232D] shadow-2xl">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width={1200}
                  height={896}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Scope & Service Focus */}
      <section className="bg-[#F7F6F2] py-20 text-[#101D2B] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <RevealBlock>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F7837]">
                  Service Overview
                </span>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#101D2B] sm:text-4xl">
                  A Direct, Practical Approach to {service.shortTitle}.
                </h2>
                <div className="mt-5 h-[2px] w-14 bg-[#C69A53]" aria-hidden="true" />

                <div className="mt-6 space-y-5 text-base leading-relaxed text-[#2D3945]">
                  {service.overviewParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 space-y-5">
                  <h3 className="font-editorial text-2xl font-medium text-[#101D2B]">
                    What This Service Addresses
                  </h3>
                  <div className="space-y-4">
                    {service.focusAreas.map((area) => (
                      <div
                        key={area.title}
                        className="rounded-sm border border-[#101D2B]/12 bg-white p-6"
                      >
                        <div className="flex items-start gap-3.5">
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-[#C69A53]"
                            aria-hidden="true"
                          />
                          <div>
                            <h4 className="font-sans-ui text-sm font-bold uppercase tracking-[0.1em] text-[#101D2B]">
                              {area.title}
                            </h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-[#43505C]">
                              {area.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <EditablePlaceholder text={service.editableScopePlaceholder} />
                </div>
              </RevealBlock>
            </div>

            {/* Right Sidebar: Service Options & Other Services */}
            <aside className="space-y-8 lg:col-span-5">
              <RevealBlock delayMs={80}>
                <div className="rounded-sm border border-[#C69A53]/35 bg-[#101D2B] p-8 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C69A53]">
                    Scheduling Options
                  </span>
                  <h3 className="mt-3 font-editorial text-2xl font-medium text-white">
                    One-Time or Ongoing Care
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#C7D0D8]">
                    {service.serviceOptionsNote}
                  </p>
                  <p className="mt-4 text-xs tracking-wide text-[#87919B]">
                    Availability: {BUSINESS.hours.verifiedSummary}
                  </p>

                  <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                    <Link
                      to={`/contact?pest=${service.slug}#inquiry-form`}
                      className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#C69A53] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] transition-colors hover:bg-[#D4AC6A]"
                    >
                      <span>Schedule an Appointment</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <a
                      href={BUSINESS.phone.href}
                      className="flex w-full items-center justify-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#C69A53] hover:text-[#C69A53]"
                    >
                      <Phone className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                      <span>{BUSINESS.phone.display}</span>
                    </a>
                  </div>
                </div>
              </RevealBlock>

              <RevealBlock delayMs={140}>
                <div className="rounded-sm border border-[#101D2B]/12 bg-white p-7">
                  <h3 className="font-sans-ui text-xs font-semibold uppercase tracking-[0.18em] text-[#9F7837]">
                    Other T3 Services
                  </h3>
                  <ul className="mt-4 divide-y divide-[#101D2B]/10">
                    {otherServices.map((other) => (
                      <li key={other.slug}>
                        <Link
                          to={`/services/${other.slug}`}
                          className="group flex items-center justify-between py-3.5 text-sm font-medium text-[#101D2B] transition-colors hover:text-[#9F7837]"
                        >
                          <span>{other.title}</span>
                          <ArrowRight
                            className="h-4 w-4 text-[#C69A53] transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealBlock>
            </aside>
          </div>
        </div>
      </section>

      <FinalConversion />
    </>
  );
}
