import { Link } from 'react-router-dom';
import { ArrowRight, CalendarClock, Check, Phone } from 'lucide-react';
import { EditablePlaceholder } from '../components/EditablePlaceholder';
import { FinalConversion } from '../components/FinalConversion';
import { RevealBlock } from '../components/RevealBlock';
import { BUSINESS } from '../config/business';
import { PEST_SERVICES } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

export function ServicesPage() {
  usePageMeta({
    title: 'Pest Control Services | T3 Pest Management',
    description:
      'Explore T3 Pest Management services: General Pest Control, Rodent Control & Basic Exclusion, Roach Control, Bed Bug Control, and Scorpion Control.',
    path: '/services',
  });

  return (
    <>
      {/* Dark Editorial Header */}
      <section className="border-b border-white/10 bg-[#101D2B] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A53]">
              <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
              <span>Services Overview</span>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl">
              Targeted Pest Management Built Around Real Problems.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#B9C2CA] sm:text-lg">
              T3 Pest Management specializes in pest eradication and general pest control,
              offering focused solutions for rodents, roaches, bed bugs, scorpions, and
              everyday pest concerns.
            </p>
          </div>

          {/* Quick Service Anchor Strip */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {PEST_SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="rounded-sm border border-white/15 bg-[#18232D] px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase text-white/90 transition-colors hover:border-[#C69A53] hover:text-[#C69A53]"
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Index */}
      <section className="bg-[#F7F6F2] py-20 text-[#101D2B] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {PEST_SERVICES.map((service, index) => (
              <RevealBlock key={service.slug} delayMs={index * 45}>
                <article className="overflow-hidden rounded-sm border border-[#101D2B]/12 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="relative aspect-[4/3] bg-[#18232D] lg:col-span-5 lg:aspect-auto">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        width={1200}
                        height={896}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute left-5 top-5 rounded-sm bg-[#101D2B]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C69A53]">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-7">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9F7837]">
                          {service.cardHeadline}
                        </span>
                        <h2 className="mt-2 font-editorial text-3xl font-medium text-[#101D2B]">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-[#43505C]">
                          {service.heroSubtitle}
                        </p>

                        <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-[#101D2B]/10 pt-6 sm:grid-cols-2">
                          {service.focusAreas.map((area) => (
                            <li
                              key={area.title}
                              className="flex items-start gap-2.5 text-sm text-[#2D3945]"
                            >
                              <Check
                                className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A53]"
                                aria-hidden="true"
                              />
                              <span>{area.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#101D2B]/10 pt-6">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 rounded-sm bg-[#101D2B] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#18232D]"
                        >
                          <span>View Service Details</span>
                          <ArrowRight className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                        </Link>
                        <Link
                          to={`/contact?pest=${service.slug}#inquiry-form`}
                          className="inline-flex items-center gap-2 rounded-sm border border-[#C69A53] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] transition-colors hover:bg-[#C69A53]/10"
                        >
                          <span>Request Estimate</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Scheduling Strip */}
      <section className="border-t border-[#101D2B]/10 bg-white py-16 text-[#101D2B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-[#101D2B]/12 bg-[#F7F6F2] p-8 lg:flex-row lg:items-center lg:p-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9F7837]">
                <CalendarClock className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                <span>One-Time &amp; Scheduled Maintenance Available</span>
              </div>
              <h2 className="mt-3 font-editorial text-2xl font-medium text-[#101D2B] sm:text-3xl">
                Unsure Which Service Option Fits Your Property?
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#43505C] sm:text-base">
                Tell us what you are seeing and we will help you evaluate whether a
                one-time service or regularly scheduled maintenance makes the most sense.
              </p>
              <div className="mt-4">
                <EditablePlaceholder
                  text={`[Service Area Note: ${BUSINESS.serviceArea.value}]`}
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
              <Link
                to="/contact#inquiry-form"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#C69A53] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] transition-colors hover:bg-[#D4AC6A]"
              >
                <span>Request an Estimate</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={BUSINESS.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#101D2B]/25 bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] transition-colors hover:border-[#C69A53]"
              >
                <Phone className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                <span>{BUSINESS.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalConversion />
    </>
  );
}
