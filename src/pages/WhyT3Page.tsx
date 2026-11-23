import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  FileCheck2,
  Phone,
  Shield,
  Target,
} from 'lucide-react';
import { EditablePlaceholder } from '../components/EditablePlaceholder';
import { FinalConversion } from '../components/FinalConversion';
import { RevealBlock } from '../components/RevealBlock';
import { BUSINESS } from '../config/business';
import { usePageMeta } from '../hooks/usePageMeta';

export function WhyT3Page() {
  usePageMeta({
    title: 'Why T3 Pest Management | Providing Results, Not Excuses',
    description:
      'Discover why property owners choose T3 Pest Management: a results-first philosophy, one-time treatments, scheduled maintenance, and basic rodent exclusion.',
    path: '/why-t3',
  });

  const pillars = [
    {
      icon: Target,
      number: '01',
      title: 'A Results-First Philosophy',
      copy: 'Every service decision starts with the T3 standard: "Providing results, not excuses." Rather than offering vague assurances, T3 Pest Management focuses on addressing your pest issue with practical, thorough execution.',
    },
    {
      icon: CheckCircle2,
      number: '02',
      title: 'One-Time Service Without Pressure',
      copy: 'If you have a specific, isolated pest concern, you can schedule a one-time treatment focused squarely on resolving the immediate problem—without being pushed into an unnecessary agreement.',
    },
    {
      icon: CalendarClock,
      number: '03',
      title: 'Regularly Scheduled Maintenance',
      copy: 'For customers who want consistent property care, T3 Pest Management offers regularly scheduled maintenance designed to keep unwanted pest activity in check over time.',
    },
    {
      icon: Shield,
      number: '04',
      title: 'Rodent Elimination + Basic Exclusion',
      copy: 'Resolving a rodent issue means addressing how rodents gain access. Alongside elimination, T3 offers basic exclusion services to help address structural entry points.',
    },
  ];

  return (
    <>
      {/* Editorial Dark Header */}
      <section className="border-b border-white/10 bg-[#101D2B] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A53]">
              <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
              <span>Why T3 Pest Management</span>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl">
              Not Just Pest Control. A Commitment to Practical Results.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#B9C2CA] sm:text-lg">
              Property owners turn to T3 Pest Management when they want straightforward
              service options, direct communication, and clear accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Four Confirmed Pillars */}
      <section className="bg-[#F7F6F2] py-20 text-[#101D2B] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <RevealBlock key={pillar.title} delayMs={idx * 60}>
                  <article className="h-full rounded-sm border border-[#101D2B]/12 bg-white p-8 sm:p-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#C69A53]/35 bg-[#101D2B] text-[#C69A53]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-editorial text-2xl font-medium text-[#C69A53]">
                        {pillar.number}
                      </span>
                    </div>

                    <h2 className="mt-6 font-editorial text-2xl font-medium text-[#101D2B] sm:text-3xl">
                      {pillar.title}
                    </h2>
                    <div className="mt-4 h-px w-12 bg-[#C69A53]" aria-hidden="true" />
                    <p className="mt-5 text-base leading-relaxed text-[#43505C]">
                      {pillar.copy}
                    </p>
                  </article>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment & Warranty Confirmation Section */}
      <section className="border-t border-[#101D2B]/10 bg-white py-20 text-[#101D2B] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealBlock>
                <div className="overflow-hidden rounded-sm border border-[#101D2B]/12 bg-[#101D2B]">
                  <img
                    src="/images/difference-equipment.jpg"
                    alt="T3 Pest Management diagnostic inspection flashlight, mirror, exclusion mesh, and field equipment"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </RevealBlock>
            </div>

            <div className="lg:col-span-7">
              <RevealBlock delayMs={80}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F7837]">
                  Direct Access &amp; Clarity
                </span>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#101D2B] sm:text-4xl">
                  Built Around Clear Expectations.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#43505C]">
                  Open 5 days a week, T3 Pest Management keeps scheduling direct so you can
                  connect by phone or submit your pest concern online and plan the right
                  next step for your property.
                </p>

                {/* Warranty Section — Only published verbatim after owner confirmation */}
                {BUSINESS.warranty.isConfirmed ? (
                  <div className="mt-8 rounded-sm border border-[#C69A53]/40 bg-[#F7F6F2] p-6">
                    <div className="flex items-start gap-3">
                      <FileCheck2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#C69A53]"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-editorial text-xl font-medium text-[#101D2B]">
                          Confirmed Warranty Coverage
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#2D3945]">
                          {BUSINESS.warranty.confirmedSummary}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 rounded-sm border border-[#101D2B]/15 bg-[#F7F6F2] p-6">
                    <div className="flex items-start gap-3">
                      <FileCheck2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#C69A53]"
                        aria-hidden="true"
                      />
                      <div className="space-y-3">
                        <h3 className="font-editorial text-xl font-medium text-[#101D2B]">
                          Warranty Section (Pending Final Term Confirmation)
                        </h3>
                        <p className="text-sm leading-relaxed text-[#43505C]">
                          Formal warranty copy is intentionally withheld on this page until
                          confirmed by the owner. The existing website references a
                          60-unit warranty covering most pests, and exact terms will appear
                          here once verified.
                        </p>
                        <EditablePlaceholder text={BUSINESS.warranty.placeholderText} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact#inquiry-form"
                    className="inline-flex items-center gap-2 rounded-sm bg-[#101D2B] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#18232D]"
                  >
                    <span>Request an Estimate</span>
                    <ArrowRight className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                  </Link>
                  <a
                    href={BUSINESS.phone.href}
                    className="inline-flex items-center gap-2 rounded-sm border border-[#101D2B]/25 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] transition-colors hover:border-[#C69A53]"
                  >
                    <Phone className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                    <span>{BUSINESS.phone.display}</span>
                  </a>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      <FinalConversion />
    </>
  );
}
