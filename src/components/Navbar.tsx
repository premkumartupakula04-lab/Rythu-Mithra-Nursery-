import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sprout, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Owner Details', href: '#owner-details' },
    { name: 'Seedlings', href: '#seedlings' },
    { name: 'Varieties', href: '#varieties' },
    { name: 'Our Farmers', href: '#our-farmers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Seedling Enquiry', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a2715]/95 backdrop-blur-md shadow-lg border-b border-emerald-900/40 py-3'
          : 'bg-gradient-to-b from-[#061e10]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-6 h-6 text-emerald-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-display leading-tight group-hover:text-emerald-300 transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-xs text-emerald-300/90 font-medium tracking-wide">
                మిరప నారు • {BUSINESS_INFO.location.split(',')[0]}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-emerald-100/90 hover:text-white hover:bg-emerald-800/40 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call Now CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-sm font-semibold rounded-lg shadow-md shadow-emerald-950/30 hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 text-emerald-100 animate-pulse" />
              <span>Call Now</span>
              <span className="hidden md:inline text-xs text-emerald-100 font-normal pl-1 border-l border-emerald-400/40">
                {BUSINESS_INFO.phone}
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-call"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm sm:hidden"
              aria-label="Call nursery"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-800/60 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0c2e19] border-b border-emerald-800/60 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-emerald-100 hover:text-white hover:bg-emerald-800/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-emerald-800/60 grid grid-cols-2 gap-3">
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 px-3 py-3 bg-emerald-600 text-white text-sm font-semibold rounded-lg shadow-sm active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              id="mobile-drawer-whatsapp-btn"
              href={`https://wa.me/91${BUSINESS_INFO.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-lg shadow-sm active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
