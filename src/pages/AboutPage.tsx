import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Compass, Phone, Shield } from 'lucide-react';
import { EditablePlaceholder } from '../components/EditablePlaceholder';
import { FinalConversion } from '../components/FinalConversion';
import { RevealBlock } from '../components/RevealBlock';
import { BUSINESS } from '../config/business';
import { usePageMeta } from '../hooks/usePageMeta';

export function AboutPage() {
  usePageMeta({
    title: 'About T3 Pest Management | Providing Results, Not Excuses',
    description:
      'Learn about T3 Pest Management (T3 Pest Control), our results-first approach to pest eradication and general pest control, and our flexible service options.',
    path: '/about',
  });

  return (
    <>
      {/* Editorial Dark Hero Banner */}
      <section className="border-b border-white/10 bg-[#101D2B] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A53]">
              <span className="h-px w-8 bg-[#C69A53]" aria-hidden="true" />
              <span>About T3 Pest Management</span>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl">
              Practical Pest Control Guided by One Standard.
            </h1>
            <p className="mt-6 font-editorial text-2xl italic text-[#E2D6BE]">
              &ldquo;{BUSINESS.slogan}&rdquo;
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#B9C2CA] sm:text-lg">
              Operating as {BUSINESS.brandName} and {BUSINESS.alternateName}, our focus
              is straightforward: deliver dependable pest eradication and general pest
              control without unnecessary complexity or excuses.
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Philosophy Split */}
      <section className="bg-[#F7F6F2] py-20 text-[#101D2B] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <RevealBlock>
                <div className="relative overflow-hidden rounded-sm border border-[#101D2B]/15 bg-[#18232D] shadow-xl">
                  <img
                    src="/images/about-technician.jpg"
                    alt="T3 Pest Management technician reviewing a property inspection checklist outdoors"
                    width={1264}
                    height={848}
                    className="h-full w-full object-cover"
                  />
                </div>
              </RevealBlock>
            </div>

            <div className="lg:col-span-6">
              <RevealBlock delayMs={80}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F7837]">
                  Who We Are &amp; How We Work
                </span>
                <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-[#101D2B] sm:text-4xl">
                  Focused on Resolving the Problem at Hand.
                </h2>
                <div className="mt-5 h-[2px] w-14 bg-[#C69A53]" aria-hidden="true" />

                <div className="mt-6 space-y-5 text-base leading-relaxed text-[#2D3945]">
                  <p>
                    Pest issues disrupt how comfortable and secure you feel in your own
                    space. T3 Pest Management approaches every call with practical focus,
                    whether handling routine general pest concerns or addressing tougher
                    challenges like rodents, roaches, bed bugs, and scorpions.
                  </p>
                  <p>
                    Instead of locking every homeowner into rigid terms that do not fit
                    their situation, T3 offers both targeted one-time services and
                    regularly scheduled maintenance—backed by direct communication 5 days
                    a week.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-sm border border-[#101D2B]/12 bg-white p-5">
                    <Compass className="h-5 w-5 text-[#C69A53]" aria-hidden="true" />
                    <h3 className="mt-3 font-editorial text-lg font-medium text-[#101D2B]">
                      Clear Scope
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#43505C]">
                      General pest control, rodent elimination and basic exclusion, roach
                      control, bed bug control, and scorpion control.
                    </p>
                  </div>
                  <div className="rounded-sm border border-[#101D2B]/12 bg-white p-5">
                    <Shield className="h-5 w-5 text-[#C69A53]" aria-hidden="true" />
                    <h3 className="mt-3 font-editorial text-lg font-medium text-[#101D2B]">
                      Honest Options
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#43505C]">
                      Choose a one-time service for an immediate concern or ongoing
                      scheduled maintenance for continuous protection.
                    </p>
                  </div>
                </div>
              </RevealBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Principles + Editable Company Profile Placeholders */}
      <section className="border-t border-[#101D2B]/10 bg-white py-20 text-[#101D2B] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealBlock>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F7837]">
                  Our Service Standard
                </span>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#101D2B] sm:text-4xl">
                  Built on Accountability, Not Exaggeration.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#43505C]">
                  Every commitment published here reflects confirmed facts about how T3
                  Pest Management operates. Optional company history and licensing details
                  below are prepared as editable slots for owner confirmation.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact#inquiry-form"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#101D2B] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#18232D]"
                  >
                    <span>Schedule an Appointment</span>
                    <ArrowRight className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
                  </Link>
                  <a
                    href={BUSINESS.phone.href}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-[#101D2B]/25 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B] transition-colors hover:border-[#C69A53]"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-[#C69A53]" aria-hidden="true" />
                    <span>{BUSINESS.phone.display}</span>
                  </a>
                </div>
              </RevealBlock>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <RevealBlock delayMs={60}>
                <div className="rounded-sm border border-[#101D2B]/12 bg-[#F7F6F2] p-7">
                  <h3 className="font-editorial text-2xl font-medium text-[#101D2B]">
                    What You Can Expect From T3
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#2D3945]">
                    {[
                      'Direct, practical service centered on pest eradication and general pest control.',
                      'Targeted support across rodents (including basic exclusion), roaches, bed bugs, and scorpions.',
                      'Flexible choice between one-time service and regularly scheduled maintenance.',
                      'Responsive availability open 5 days a week with straightforward appointment scheduling.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A53]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealBlock>

              {/* Clearly Marked Editable Placeholders for Optional Owner Details */}
              <RevealBlock delayMs={120}>
                <div className="rounded-sm border border-[#101D2B]/12 bg-white p-7">
                  <h3 className="font-editorial text-xl font-medium text-[#101D2B]">
                    Owner-Editable Company Profile Details
                  </h3>
                  <p className="mt-2 text-sm text-[#43505C]">
                    To uphold strict accuracy, unverified credentials and background stories
                    are held as editable placeholders until supplied:
                  </p>
                  <div className="mt-5 space-y-3">
                    <EditablePlaceholder text="[Company Background Placeholder: Optional verified founding story, ownership details, or years in operation if desired.]" />
                    <EditablePlaceholder text={`[Service Area Placeholder: ${BUSINESS.serviceArea.value}]`} />
                    <EditablePlaceholder text="[Credentials Placeholder: Verified state pest control license numbers, insurance statement, or certifications if applicable.]" />
                  </div>
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
