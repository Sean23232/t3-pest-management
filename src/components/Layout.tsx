import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../config/business';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col bg-[#101D2B] text-[#101D2B]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-[#C69A53] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-widest focus:text-[#101D2B]"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>

      <Footer />

      {/* Persistent Mobile Conversion Strip */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C69A53]/25 bg-[#101D2B]/96 px-3 py-2.5 backdrop-blur-md lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
          <a
            href={BUSINESS.phone.href}
            className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-white/20 bg-[#18232D] px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
          >
            <Phone className="h-3.5 w-3.5 text-[#C69A53]" aria-hidden="true" />
            <span>Call T3</span>
          </a>
          <Link
            to="/contact#inquiry-form"
            className="inline-flex items-center justify-center rounded-sm bg-[#C69A53] px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#101D2B]"
          >
            Request Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
