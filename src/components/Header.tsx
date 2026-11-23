import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Calendar, ChevronDown, Menu, Phone, X } from 'lucide-react';
import { BUSINESS } from '../config/business';
import { PEST_SERVICES } from '../data/services';
import { BrandMark } from './BrandMark';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-[13px] font-medium tracking-[0.06em] uppercase transition-colors duration-200 ${
      isActive ? 'text-[#C69A53]' : 'text-white/85 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Slim Top Announcement Bar */}
      <div className="border-b border-white/10 bg-[#18232D] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-2 font-medium tracking-[0.14em] uppercase text-white/90">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#C69A53]"
                aria-hidden="true"
              />
              Open 5 Days a Week
            </span>
            <span className="hidden text-white/25 sm:inline" aria-hidden="true">
              |
            </span>
            <Link
              to="/contact#inquiry-form"
              className="inline-flex items-center gap-1.5 font-medium tracking-[0.14em] uppercase text-[#C69A53] transition-colors hover:text-[#DFB977]"
            >
              <Calendar className="h-3 w-3" aria-hidden="true" />
              Schedule an Appointment
            </Link>
          </div>

          <a
            href={BUSINESS.phone.href}
            className="hidden items-center gap-1.5 font-medium tracking-[0.08em] text-[#D7DEE4] transition-colors hover:text-[#C69A53] sm:inline-flex"
          >
            <Phone className="h-3 w-3 text-[#C69A53]" aria-hidden="true" />
            <span>{BUSINESS.phone.display}</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-[#C69A53]/20 bg-[#101D2B]/96 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md'
            : 'border-white/10 bg-[#101D2B]/92 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" aria-label="T3 Pest Management Home" className="shrink-0">
            <BrandMark variant="light" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <NavLink to="/services" className={navLinkClass}>
                  Services
                </NavLink>
                <button
                  type="button"
                  aria-label="Toggle services submenu"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="p-1 text-white/75 transition-colors hover:text-[#C69A53]"
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-[#C69A53]' : ''
                    }`}
                  />
                </button>
              </div>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-68 rounded-sm border border-[#C69A53]/25 bg-[#18232D] p-2 shadow-2xl">
                    <Link
                      to="/services"
                      className="block border-b border-white/10 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#C69A53] transition-colors hover:bg-white/5"
                    >
                      All Services Overview
                    </Link>
                    <div className="mt-1 space-y-0.5">
                      {PEST_SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="block rounded-sm px-3.5 py-2 text-[13px] text-white/85 transition-colors hover:bg-white/5 hover:text-[#C69A53]"
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/why-t3" className={navLinkClass}>
              Why T3
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={BUSINESS.phone.href}
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all hover:border-[#C69A53] hover:text-[#C69A53]"
            >
              <Phone className="h-3.5 w-3.5 text-[#C69A53]" aria-hidden="true" />
              Call Now
            </a>
            <Link
              to="/contact#inquiry-form"
              className="inline-flex items-center justify-center rounded-sm bg-[#C69A53] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] text-[#101D2B] shadow-sm transition-all hover:bg-[#D4AC6A]"
            >
              Request an Estimate
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={BUSINESS.phone.href}
              aria-label={`Call T3 Pest Management at ${BUSINESS.phone.display}`}
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#C69A53]/45 bg-[#18232D] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white"
            >
              <Phone className="h-3.5 w-3.5 text-[#C69A53]" aria-hidden="true" />
              <span>Call</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-[#18232D] text-white transition-colors hover:border-[#C69A53]"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-[112px] bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-[#101D2B] px-5 pb-28 pt-6 lg:hidden"
        >
          <nav className="space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block border-b border-white/10 py-3.5 text-base font-medium ${
                  isActive ? 'text-[#C69A53]' : 'text-white'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block border-b border-white/10 py-3.5 text-base font-medium ${
                  isActive ? 'text-[#C69A53]' : 'text-white'
                }`
              }
            >
              About
            </NavLink>

            <div className="border-b border-white/10 py-3.5">
              <div className="flex items-center justify-between">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `text-base font-medium ${isActive ? 'text-[#C69A53]' : 'text-white'}`
                  }
                >
                  Services
                </NavLink>
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#87919B]">
                  5 Solutions
                </span>
              </div>
              <div className="mt-3 grid grid-cols-1 gap-1.5 pl-3 border-l border-[#C69A53]/30">
                {PEST_SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="py-1.5 text-sm text-white/80 hover:text-[#C69A53]"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/why-t3"
              className={({ isActive }) =>
                `block border-b border-white/10 py-3.5 text-base font-medium ${
                  isActive ? 'text-[#C69A53]' : 'text-white'
                }`
              }
            >
              Why T3
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block border-b border-white/10 py-3.5 text-base font-medium ${
                  isActive ? 'text-[#C69A53]' : 'text-white'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="mt-7 space-y-3">
            <Link
              to="/contact#inquiry-form"
              className="flex w-full items-center justify-center rounded-sm bg-[#C69A53] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#101D2B]"
            >
              Request an Estimate
            </Link>
            <a
              href={BUSINESS.phone.href}
              className="flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              <Phone className="h-4 w-4 text-[#C69A53]" aria-hidden="true" />
              Call {BUSINESS.phone.display}
            </a>
          </div>

          <p className="mt-6 text-center text-xs italic text-[#87919B]">
            &ldquo;{BUSINESS.slogan}&rdquo;
          </p>
        </div>
      )}
    </header>
  );
}
