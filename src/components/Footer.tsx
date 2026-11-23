import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS } from '../config/business';
import { PEST_SERVICES } from '../data/services';
import { BrandMark } from './BrandMark';
import { EditablePlaceholder } from './EditablePlaceholder';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#18232D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" aria-label="T3 Pest Management Home">
              <BrandMark variant="light" />
            </Link>
            <p className="mt-5 font-editorial text-lg italic text-[#E7E2D8]">
              &ldquo;{BUSINESS.slogan}&rdquo;
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#87919B]">
              {BUSINESS.brandName} ({BUSINESS.alternateName}) provides pest eradication and
              general pest control focused on practical execution and dependable results.
            </p>

            {/* Social Links — rendered ONLY when actual verified profiles are supplied */}
            {BUSINESS.socialProfiles.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {BUSINESS.socialProfiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:border-[#C69A53] hover:text-[#C69A53]"
                  >
                    {profile.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="font-sans-ui text-xs font-semibold uppercase tracking-[0.2em] text-[#C69A53]">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                <Link to="/" className="transition-colors hover:text-[#C69A53]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-[#C69A53]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#C69A53]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-t3" className="transition-colors hover:text-[#C69A53]">
                  Why T3
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-[#C69A53]">
                  Contact &amp; Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-sans-ui text-xs font-semibold uppercase tracking-[0.2em] text-[#C69A53]">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {PEST_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="transition-colors hover:text-[#C69A53]"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3">
            <h3 className="font-sans-ui text-xs font-semibold uppercase tracking-[0.2em] text-[#C69A53]">
              Contact &amp; Availability
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A53]"
                  aria-hidden="true"
                />
                <div>
                  <a
                    href={BUSINESS.phone.href}
                    className="font-semibold text-white transition-colors hover:text-[#C69A53]"
                  >
                    {BUSINESS.phone.display}
                  </a>
                  <p className="mt-0.5 text-xs text-[#87919B]">
                    Direct line (verified on existing site)
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A53]"
                  aria-hidden="true"
                />
                <div>
                  {BUSINESS.email.isPlaceholder ? (
                    <EditablePlaceholder
                      inline
                      surface="dark"
                      text={BUSINESS.email.value}
                    />
                  ) : (
                    <a
                      href={`mailto:${BUSINESS.email.value}`}
                      className="text-white/90 hover:text-[#C69A53]"
                    >
                      {BUSINESS.email.value}
                    </a>
                  )}
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A53]"
                  aria-hidden="true"
                />
                <div>
                  {BUSINESS.serviceArea.isPlaceholder ? (
                    <EditablePlaceholder
                      inline
                      surface="dark"
                      text={BUSINESS.serviceArea.value}
                    />
                  ) : (
                    <span className="text-white/90">{BUSINESS.serviceArea.value}</span>
                  )}
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A53]"
                  aria-hidden="true"
                />
                <div className="space-y-1.5">
                  <span className="block font-medium text-white">
                    {BUSINESS.hours.verifiedSummary}
                  </span>
                  {BUSINESS.hours.isDetailPlaceholder && (
                    <EditablePlaceholder
                      inline
                      surface="dark"
                      text={BUSINESS.hours.detailPlaceholder}
                    />
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#101D2B]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-[#87919B] sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {currentYear} {BUSINESS.brandName} ({BUSINESS.alternateName}). All rights
            reserved.
          </p>
          <p className="text-center sm:text-right">
            Open 5 days a week &middot;{' '}
            <Link to="/contact#inquiry-form" className="text-[#C69A53] hover:underline">
              Schedule an Appointment
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
