import React from 'react';
import { Phone, MapPin, Sprout, ArrowUp, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Owner Details', href: '#owner-details' },
    { name: 'Seedlings', href: '#seedlings' },
    { name: 'Varieties', href: '#varieties' },
    { name: 'Our Farmers', href: '#our-farmers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Seedling Enquiry', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#061e10] text-emerald-100/90 pt-16 pb-12 border-t border-emerald-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/70">
          {/* Col 1: Nursery Brand & Local Identity */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-6 h-6 text-emerald-100" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white tracking-tight leading-tight">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {BUSINESS_INFO.teluguName}
                </p>
              </div>
            </div>

            <p className="text-base text-emerald-200 font-semibold mb-2">
              {BUSINESS_INFO.productName} ({BUSINESS_INFO.localProductName})
            </p>
            <p className="text-xs sm:text-sm text-emerald-300/80 leading-relaxed max-w-sm mb-6">
              Specialized in raising healthy, vigorous chilli seedlings in pro-trays, serving agricultural farmers with reliability across Andhra Pradesh and Telangana.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold border border-emerald-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-300" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-200 text-xs font-semibold border border-[#25D366]/40 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    id={`footer-link-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-emerald-200/80 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Nursery Location & Proprietor */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-4">
              Nursery Details
            </h4>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">
                Location
              </span>
              <p className="text-sm font-medium text-white flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </p>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">
                Phone
              </span>
              <p className="text-sm font-bold text-amber-300 mt-0.5">
                {BUSINESS_INFO.phone}
              </p>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">
                Supply Area
              </span>
              <p className="text-sm text-white mt-0.5">
                {BUSINESS_INFO.supplyArea}
              </p>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">
                Proprietor
              </span>
              <p className="text-sm font-semibold text-white mt-0.5">
                {BUSINESS_INFO.proprietor}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright & scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80">
          <p id="footer-copyright">
            © 2026 Rythu Mithra Nursery. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
