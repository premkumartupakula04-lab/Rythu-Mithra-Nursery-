import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { nurseryAssets } from '../data/assets';
import { BUSINESS_INFO } from '../data/nurseryData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Agricultural Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={nurseryAssets.hero}
          alt="Rythu Mithra Nursery Chilli Seedling Pro-trays in Shade Net Polyhouse"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Deep agricultural gradient overlay ensuring optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061e10]/95 via-[#0a2c17]/85 to-[#061e10]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061e10] via-transparent to-[#061e10]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Badges container */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span
                id="hero-badge-experience"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                10+ YEARS OF EXPERIENCE
              </span>

              <span
                id="hero-badge-location"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs sm:text-sm font-medium backdrop-blur-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Serving Andhra Pradesh & Telangana
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-main-heading"
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-3 sm:mb-4 font-display"
            >
              {BUSINESS_INFO.name}
            </h1>

            {/* Telugu Native Name Accent */}
            <p className="text-emerald-300 font-medium text-base sm:text-xl tracking-wide mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {BUSINESS_INFO.teluguName} • {BUSINESS_INFO.localProductName}
            </p>

            {/* Subheading */}
            <h2
              id="hero-subheading"
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-100 max-w-2xl leading-snug mb-3"
            >
              {BUSINESS_INFO.tagline}
            </h2>

            {/* Supporting text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-emerald-200/90 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {BUSINESS_INFO.subtext} Raised with professional nursery care in Chandrapalem Mandal.
            </p>

            {/* Hero CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                id="hero-primary-btn"
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-base rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Contact Nursery</span>
                <ArrowRight className="w-4 h-4 text-emerald-100" />
              </button>

              <button
                id="hero-secondary-btn"
                type="button"
                onClick={() => scrollTo('varieties')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/25 hover:border-white/40 font-semibold text-base rounded-xl backdrop-blur-sm transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Explore Varieties</span>
              </button>

              <a
                id="hero-quick-call-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base rounded-xl shadow-md transition-all duration-200 active:scale-95 sm:hidden"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Trust highlights below CTA */}
            <div className="mt-8 pt-6 border-t border-emerald-800/50 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-emerald-200/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Root Plug Seedlings (Trays)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Proprietor: {BUSINESS_INFO.proprietor}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Chandrapalem Mandal
              </span>
            </div>
          </div>

          {/* Floating Information Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              id="hero-floating-card"
              className="w-full max-w-sm bg-[#0c311a]/85 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6 text-white shadow-2xl shadow-emerald-950/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-700/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">
                    Nursery Spotlight
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 font-semibold border border-amber-400/30">
                  AP & TG Supply
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-tight">
                  Quality Chilli Seedlings
                </h3>
                <p className="text-emerald-300 font-semibold text-base mt-1">
                  Mirapa Naru (మిరప నారు)
                </p>
                <p className="text-xs text-emerald-100/80 mt-2 leading-relaxed">
                  Carefully raised in modern shade-net facilities with high germination vigor and strong root systems for seamless field transplantation.
                </p>
              </div>

              {/* Quick specs pill */}
              <div className="bg-[#072010]/70 rounded-xl p-3.5 border border-emerald-800/60 mb-5 space-y-2 text-xs">
                <div className="flex justify-between items-center text-emerald-200">
                  <span className="text-emerald-300/80">Experience:</span>
                  <span className="font-semibold text-white">10+ Years</span>
                </div>
                <div className="flex justify-between items-center text-emerald-200">
                  <span className="text-emerald-300/80">Location:</span>
                  <span className="font-semibold text-white">Chandrapalem Mandal</span>
                </div>
                <div className="flex justify-between items-center text-emerald-200">
                  <span className="text-emerald-300/80">Phone:</span>
                  <span className="font-semibold text-amber-300">{BUSINESS_INFO.phone}</span>
                </div>
              </div>

              <a
                id="hero-card-call-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-200" />
                <span>Direct Nursery Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
