import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  Phone,
  Shield,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { EditablePlaceholder } from '../components/EditablePlaceholder';
import { FinalConversion } from '../components/FinalConversion';
import { RevealBlock } from '../components/RevealBlock';
import { BUSINESS } from '../config/business';
import { FAQ_ITEMS } from '../data/faq';
import { PEST_SERVICES } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

export function HomePage() {
  usePageMeta({
    title: 'T3 Pest Management | Professional Pest Control — Providing Results, Not Excuses',
    description:
      'T3 Pest Management (T3 Pest Control) specializes in pest eradication and general pest control for rodents, roaches, bed bugs, and scorpions. Open 5 days a week.',
    path: '/',
  });

  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* =========================================================
          SECTION 1 — PREMIUM HERO
         ========================================================= */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-[#101D2B] lg:min-h-[760px]">
        <img
          src="/images/hero-inspection.jpg"
          alt="Pest management technician conducting a careful residential foundation inspection at dusk"
          width={1376}
          height={768}
          className="absolute inset-0 h-full w-full object-cover object-center sm:object-[68%_center]"
        />

        {/* Directional Dark Navy Overlay for Editorial Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#101D2B] via-[#101D2B]/84 to-[#101D2B]/32"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101D2B] via-transparent to-[#101D2B]/35"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A53]">
              <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
              <span>Professional Pest Management</span>
            </div>

            <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[62px]">
              Take Back Your Space.
              <span className="mt-1 block text-[#F7F6F2]">Leave the Pests to Us.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#D0D7DE] sm:text-lg">
              From everyday pest problems to more challenging infestations, T3 Pest
              Management provides professional pest control solutions designed to help
              protect your home and property.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                to="/contact#inquiry-form"
                className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#C69A53] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#101D2B] shadow-lg transition-all hover:bg-[#D4AC6A]"
              >
                <span>Request an Estimate</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <a
                href={BUSINESS.phone.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-white/25 bg-[#101D2B]/65 px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all hover:border-[#C69A53] hover:text-[#C69A53]"
              >
                <Phone className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                <span>Call T3 &middot; {BUSINESS.phone.display}</span>
              </a>
            </div>

            {/* Subtle Brand Signature */}
            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-6">
              <span className="font-editorial text-lg italic text-[#E7DFCF]">
                &ldquo;{BUSINESS.slogan}&rdquo;
              </span>
              <span className="hidden h-3.5 w-px bg-white/20 sm:inline-block" aria-hidden="true" />
              <span className="text-xs tracking-[0.14em] uppercase text-[#87919B]">
                {BUSINESS.brandName} &middot; {BUSINESS.alternateName}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — TRUST STRIP
         ========================================================= */}
      <section
        aria-label="Service Highlights"
        className="border-y border-white/10 bg-[#18232D] text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            <div className="flex items-center gap-3.5 py-5 sm:pr-6 lg:py-6">
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#C69A53]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">
                  Professional Pest Control
                </p>
                <p className="mt-0.5 text-xs text-[#87919B]">
                  Eradication &amp; general pest service
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 py-5 sm:pl-6 lg:px-6 lg:py-6">
              <Shield className="h-5 w-5 shrink-0 text-[#C69A53]" aria-hidden="true" />
              <div>
                {BUSINESS.propertyScope.isConfirmed ? (
                  <p className="text-sm font-semibold tracking-wide text-white">
                    {BUSINESS.propertyScope.confirmedLabel}
                  </p>
                ) : (
                  <>
                    <EditablePlaceholder
                      inline
                      surface="dark"
                      text={BUSINESS.propertyScope.placeholderLabel}
                    />
                    <p className="mt-1 text-xs text-[#87919B]">
                      Property coverage confirmation placeholder
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3.5 py-5 sm:border-t sm:border-white/10 sm:pr-6 lg:border-t-0 lg:px-6 lg:py-6">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C69A53]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">
                  One-Time Treatments
                </p>
                <p className="mt-0.5 text-xs text-[#87919B]">
                  Targeted help for specific pest issues
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 py-5 sm:border-t sm:border-white/10 sm:pl-6 lg:border-t-0 lg:pl-6 lg:py-6">
              <CalendarClock className="h-5 w-5 shrink-0 text-[#C69A53]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">
                  Ongoing Maintenance
                </p>
                <p className="mt-0.5 text-xs text-[#87919B]">
                  Regularly scheduled service plans
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 — INTRODUCTION
         ========================================================= */}
      <section className="bg-[#F7F6F2] py-20 text-[#101D2B] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Editorial Copy Column */}
            <div className="lg:col-span-7">
              <RevealBlock>
                <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9F7837]">
                  <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
                  <span>Practical Precision</span>
                </div>

                <h2 className="mt-5 text-3xl font-medium leading-[1.15] tracking-tight text-[#101D2B] sm:text-4xl lg:text-[46px]">
                  Effective Pest Control Starts With the Right Approach.
                </h2>

                <div className="mt-6 h-[2px] w-16 bg-[#C69A53]" aria-hidden="true" />

                <p className="mt-7 max-w-xl text-base leading-relaxed text-[#2D3945] sm:text-lg">
                  T3 Pest Management specializes in pest eradication and general pest
                  control. Whether you&rsquo;re dealing with rodents, roaches, bed bugs,
                  or scorpions, the goal is simple: address the problem with a practical,
                  professional approach.
                </p>

                {/* Verified Core Pest Focus Pills */}
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {[
                    'General Pests',
                    'Rodents',
                    'Roaches',
                    'Bed Bugs',
                    'Scorpions',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-[#101D2B]/15 bg-white px-3.5 py-1.5 text-xs font-medium tracking-[0.06em] text-[#101D2B]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#101D2B] transition-colors hover:text-[#9F7837]"
                  >
                    <span>About T3 Pest Management</span>
                    <ArrowRight className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#576370] transition-colors hover:text-[#101D2B]"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </RevealBlock>
            </div>

            {/* Asymmetric Portrait Inspection Photograph */}
            <div className="lg:col-span-5">
              <RevealBlock delayMs={100}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-4 -right-4 top-4 left-4 border border-[#C69A53]/50"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#18232D] shadow-xl">
                    <img
                      src="/images/intro-precision.jpg"
                      alt="Specialist using an angled inspection mirror and LED diagnostic light along stone and timber trim"
                      width={768}
                      height={1376}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#101D2B]/70 to-transparent"
                    />
                    <p className="absolute bottom-4 left-5 right-5 text-xs font-medium tracking-[0.14em] uppercase text-[#F7F6F2]">
                      Thorough Property Inspection &amp; Practical Execution
                    </p>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4 — SERVICES
         ========================================================= */}
      <section className="border-t border-[#101D2B]/10 bg-white py-20 text-[#101D2B] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealBlock>
            <div className="flex flex-col justify-between gap-6 border-b border-[#101D2B]/10 pb-8 md:flex-row md:items-end">
              <div>
                <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9F7837]">
                  <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
                  <span>Core Service Capabilities</span>
                </div>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#101D2B] sm:text-4xl lg:text-[46px]">
                  Targeted Solutions. Real Results.
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#101D2B] transition-colors hover:text-[#9F7837]"
              >
                <span>View Full Services Overview</span>
                <ArrowRight className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
              </Link>
            </div>
          </RevealBlock>

          {/* 5 Uniform Service Cards + 1 Balanced Assessment Card */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PEST_SERVICES.map((service, index) => (
              <RevealBlock key={service.slug} delayMs={index * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#101D2B]/10 bg-[#F7F6F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#C69A53]/55 hover:shadow-[0_18px_40px_-18px_rgba(16,29,43,0.18)]">
                  <Link
                    to={`/services/${service.slug}`}
                    className="relative aspect-[4/3] overflow-hidden bg-[#18232D]"
                  >
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      width={1200}
                      height={896}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#101D2B]/55 via-transparent to-transparent"
                    />
                    <span className="absolute left-4 top-4 rounded-sm border border-white/20 bg-[#101D2B]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C69A53] backdrop-blur-sm">
                      0{index + 1}
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-sans-ui text-sm font-bold uppercase tracking-[0.16em] text-[#101D2B]">
                      <Link
                        to={`/services/${service.slug}`}
                        className="transition-colors group-hover:text-[#9F7837]"
                      >
                        {service.cardHeadline}
                      </Link>
                    </h3>

                    <div
                      aria-hidden="true"
                      className="mt-3 h-px w-10 bg-[#C69A53] transition-all duration-300 group-hover:w-16"
                    />

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-[#43505C]">
                      {service.cardDescription}
                    </p>

                    <div className="mt-6 border-t border-[#101D2B]/10 pt-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#101D2B] transition-colors group-hover:text-[#9F7837]"
                      >
                        <span>Learn More</span>
                        <ArrowRight
                          className="h-3.5 w-3.5 text-[#C69A53] transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              </RevealBlock>
            ))}

            {/* 6th Architectural Consultation Card for Visual Balance & Conversion */}
            <RevealBlock delayMs={300}>
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-sm border border-[#C69A53]/30 bg-[#101D2B] p-8 text-white">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#C69A53]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C69A53]" aria-hidden="true" />
                    <span>Direct Assessment</span>
                  </div>

                  <h3 className="mt-5 font-editorial text-2xl font-medium leading-snug text-white">
                    Dealing With an Active Pest Issue?
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#B9C2CA]">
                    Not sure whether your property needs targeted eradication, rodent
                    exclusion, or ongoing scheduled maintenance? Speak directly with T3
                    Pest Management.
                  </p>
                </div>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  <Link
                    to="/contact#inquiry-form"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#C69A53] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] transition-colors hover:bg-[#D4AC6A]"
                  >
                    <span>Request an Estimate</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a
                    href={BUSINESS.phone.href}
                    className="flex w-full items-center justify-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#C69A53] hover:text-[#C69A53]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#C69A53]" aria-hidden="true" />
                    <span>{BUSINESS.phone.display}</span>
                  </a>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5 — THE T3 DIFFERENCE
         ========================================================= */}
      <section className="relative overflow-hidden bg-[#101D2B] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Split: Headline + Visual */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <RevealBlock>
                <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C69A53]">
                  <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
                  <span>The T3 Difference</span>
                </div>

                <h2 className="mt-5 text-3xl font-medium leading-[1.14] tracking-tight text-white sm:text-4xl lg:text-[44px]">
                  Not Just Pest Control. A Commitment to Results.
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-[#87919B] sm:text-base">
                  Built on straightforward service options and accountability, T3 Pest
                  Management keeps the focus on resolving your pest problem properly.
                </p>

                <div className="mt-8 overflow-hidden rounded-sm border border-[#C69A53]/25 bg-[#18232D]">
                  <div className="relative aspect-square">
                    <img
                      src="/images/difference-equipment.jpg"
                      alt="Precision pest inspection mirror, brass-accent flashlight, stainless steel exclusion mesh, and field equipment"
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#101D2B]/75 via-transparent to-transparent"
                    />
                  </div>
                </div>
              </RevealBlock>
            </div>

            {/* Right Split: 5 Structured Commitment Rows */}
            <div className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {[
                  {
                    icon: Target,
                    title: 'Results-First Philosophy',
                    body: 'Every visit is anchored by our guiding principle: "Providing results, not excuses." We focus on practical resolution rather than unnecessary filler.',
                  },
                  {
                    icon: CheckCircle2,
                    title: 'One-Time Service Options',
                    body: 'Need targeted help for a single active pest issue? Book a one-time service focused directly on addressing the problem at hand.',
                  },
                  {
                    icon: CalendarClock,
                    title: 'Regularly Scheduled Maintenance',
                    body: 'Prefer ongoing peace of mind? Regularly scheduled maintenance helps keep pest activity controlled consistently across seasons.',
                  },
                  {
                    icon: Shield,
                    title: 'Basic Rodent Exclusion Services',
                    body: "We don't stop at removing active rodents—T3 also offers basic exclusion services to help address structural entry points.",
                  },
                  {
                    icon: FileCheck2,
                    title: 'Warranty Coverage (Pending Exact Terms)',
                    body: BUSINESS.warranty.referenceNote,
                    placeholder: BUSINESS.warranty.placeholderText,
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <RevealBlock key={item.title} delayMs={idx * 60}>
                      <div className="flex gap-5 py-7 sm:py-8">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[#C69A53]/35 bg-[#18232D] text-[#C69A53]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-editorial text-2xl font-medium text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2.5 text-sm leading-relaxed text-[#B9C2CA] sm:text-base">
                            {item.body}
                          </p>
                          {item.placeholder && (
                            <div className="mt-3.5">
                              <EditablePlaceholder
                                surface="dark"
                                text={item.placeholder}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </RevealBlock>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  to="/why-t3"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#C69A53] transition-colors hover:text-[#DFB977]"
                >
                  <span>Explore Why T3</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6 — SERVICE OPTIONS COMPARISON
         ========================================================= */}
      <section className="bg-[#F7F6F2] py-20 text-[#101D2B] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealBlock>
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9F7837]">
                <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
                <span>Service Options</span>
                <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#101D2B] sm:text-4xl lg:text-[46px]">
                Flexible Service. Your Needs. Your Schedule.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#43505C]">
                Choose the service arrangement that fits your situation—whether an
                immediate single-visit response or ongoing scheduled care.
              </p>
            </div>
          </RevealBlock>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* One-Time Service Panel */}
            <RevealBlock delayMs={50}>
              <div className="flex h-full flex-col justify-between rounded-sm border border-[#101D2B]/12 border-t-[3px] border-t-[#101D2B] bg-white p-8 shadow-sm sm:p-10">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#576370]">
                    Option 01 &middot; Targeted Response
                  </span>
                  <h3 className="mt-3 font-editorial text-3xl font-medium text-[#101D2B]">
                    One-Time Service
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#43505C]">
                    For customers who need help addressing a specific pest problem.
                  </p>

                  <ul className="mt-7 space-y-3.5 border-t border-[#101D2B]/10 pt-7 text-sm text-[#2D3945]">
                    {[
                      'Direct attention to an active pest concern',
                      'Available for general pests, rodents, roaches, bed bugs, or scorpions',
                      'No ongoing commitment required',
                      'Practical appointment scheduling 5 days a week',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A53]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9 pt-4">
                  <Link
                    to="/contact?serviceType=one-time#inquiry-form"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#101D2B] bg-[#101D2B] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#18232D]"
                  >
                    <span>Schedule One-Time Service</span>
                    <ArrowRight className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </RevealBlock>

            {/* Ongoing Maintenance Panel */}
            <RevealBlock delayMs={120}>
              <div className="flex h-full flex-col justify-between rounded-sm border border-[#C69A53]/40 border-t-[3px] border-t-[#C69A53] bg-[#101D2B] p-8 text-white shadow-xl sm:p-10">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C69A53]">
                    Option 02 &middot; Ongoing Protection
                  </span>
                  <h3 className="mt-3 font-editorial text-3xl font-medium text-white">
                    Ongoing Maintenance
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#C7D0D8]">
                    For customers who prefer regularly scheduled pest management.
                  </p>

                  <ul className="mt-7 space-y-3.5 border-t border-white/10 pt-7 text-sm text-[#E1E6EB]">
                    {[
                      'Consistent scheduled visits arranged around your needs',
                      'Proactive support for general pest control and property protection',
                      'Direct communication with your pest management provider',
                      'Ideal for long-term property peace of mind',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A53]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <EditablePlaceholder
                      surface="dark"
                      text="[Editable Placeholder: Confirm maintenance interval options and pricing once finalized.]"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    to="/contact?serviceType=maintenance#inquiry-form"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#C69A53] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#101D2B] transition-colors hover:bg-[#D4AC6A]"
                  >
                    <span>Schedule Maintenance Inquiry</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 7 — BRAND STATEMENT
         ========================================================= */}
      <section className="relative overflow-hidden bg-[#101D2B] py-28 text-white sm:py-36">
        <img
          src="/images/statement-horizon.jpg"
          alt="Contemporary residential property illuminated warmly under a calm midnight-navy evening sky"
          width={1376}
          height={768}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#101D2B]/78 via-[#101D2B]/84 to-[#101D2B]/78"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <RevealBlock>
            <div className="mx-auto mb-7 h-[1.5px] w-16 bg-[#C69A53]" aria-hidden="true" />
            <h2 className="font-editorial text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              &ldquo;Providing Results, Not Excuses.&rdquo;
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#EDF1F5] sm:text-lg">
              Professional service starts with taking your pest concerns seriously.
            </p>
            <div className="mx-auto mt-8 h-[1.5px] w-16 bg-[#C69A53]" aria-hidden="true" />
          </RevealBlock>
        </div>
      </section>

      {/* =========================================================
          SECTION 8 — FAQ ACCORDION
         ========================================================= */}
      <section className="bg-white py-20 text-[#101D2B] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <RevealBlock>
                <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9F7837]">
                  <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
                  <span>Common Questions</span>
                </div>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#101D2B] sm:text-4xl">
                  Answers Built on Clear Information.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#43505C]">
                  Everything listed reflects verified T3 Pest Management services. Unconfirmed
                  policy specifics are explicitly marked as editable placeholders until verified.
                </p>

                <div className="mt-8 rounded-sm border border-[#101D2B]/12 bg-[#F7F6F2] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9F7837]">
                    Speak With T3 Directly
                  </p>
                  <p className="mt-2 text-sm text-[#43505C]">
                    Have a specific question about your home or pest concern?
                  </p>
                  <a
                    href={BUSINESS.phone.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#101D2B] transition-colors hover:text-[#9F7837]"
                  >
                    <Phone className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                    <span>{BUSINESS.phone.display}</span>
                  </a>
                </div>
              </RevealBlock>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-[#101D2B]/12 border-y border-[#101D2B]/12">
                {FAQ_ITEMS.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div key={item.id} className="py-1">
                      <h3>
                        <button
                          type="button"
                          id={`faq-btn-${item.id}`}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${item.id}`}
                          onClick={() => toggleFaq(item.id)}
                          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#9F7837]"
                        >
                          <span className="font-editorial text-xl font-medium text-[#101D2B]">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-[#C69A53] transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      </h3>

                      <div
                        id={`faq-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${item.id}`}
                        data-open={isOpen}
                        className="accordion-content"
                      >
                        <div className="accordion-inner">
                          <div className="pb-6 pr-6 text-sm leading-relaxed text-[#43505C] sm:text-base">
                            <p>{item.answer}</p>
                            {item.isPlaceholder && item.placeholderNote && (
                              <div className="mt-3">
                                <EditablePlaceholder
                                  surface="light"
                                  text={item.placeholderNote}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 9 — FINAL CONVERSION
         ========================================================= */}
      <FinalConversion />
    </>
  );
}
