import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { nurseryAssets } from '../data/assets';

export const ChilliSeedlings: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const seedlingFeatures = [
    {
      title: 'Strong White Root Plug Development',
      desc: 'Uniform root ball formation in pro-trays ensuring zero shock and immediate soil take-up when transplanted.',
    },
    {
      title: 'Optimal Stem Sturdiness & Vigor',
      desc: 'Balanced internode spacing and firm stem caliber capable of withstanding open field winds.',
    },
    {
      title: 'Disease-Shielded Greenhouse Nursing',
      desc: 'Raised on sterile cocopeat beds under insect-proof net house protection during vulnerable early stages.',
    },
    {
      title: 'Field-Toughened Seedling Batches',
      desc: 'Systematically hardened with controlled light exposure so plants adjust smoothly to direct sunlight.',
    },
  ];

  return (
    <section id="seedlings" className="py-20 lg:py-28 bg-[#f5f7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase with 3 Real Agricultural Photos */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Primary Image: Young Seedlings in Trays */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 group">
              <img
                src={nurseryAssets.seedlingsTray}
                alt="Young Chilli Seedling Trays at Rythu Mithra Nursery"
                className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061e10]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-300">
                  Mirapa Naru • Pro-Tray Cultivation
                </span>
                <p className="text-lg font-bold font-display text-white mt-0.5">
                  Young Chilli Seedlings on Raised Nursery Beds
                </p>
              </div>
            </div>

            {/* Two Side-by-side Sub Images: Healthy Root Plug & Shade Net Polyhouse */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-stone-200 group aspect-4/3">
                <img
                  src={nurseryAssets.seedlingRoots}
                  alt="Healthy Chilli Seedling Root Formation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">
                    Strong Root Plug
                  </span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-md border border-stone-200 group aspect-4/3">
                <img
                  src={nurseryAssets.nurseryShadeNet}
                  alt="Protected Nursery Shade Net House"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">
                    Protected Net House
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Seedling Information & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Core Specialty
            </div>

            <h2
              id="chilli-seedlings-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-6"
            >
              Quality Chilli Seedlings (Mirapa Naru)
            </h2>

            <p
              id="chilli-seedlings-content"
              className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal mb-8"
            >
              "We raise chilli seedlings with attention to nursery care and plant development, helping farmers begin their crop with healthy planting material."
            </p>

            {/* Seedling Quality List */}
            <div className="space-y-4 w-full mb-8">
              {seedlingFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-stone-200/90 shadow-xs"
                >
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0e381f] font-display">
                      {feat.title}
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              id="enquire-seedlings-btn"
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 hover:from-emerald-600 hover:to-emerald-500 text-white font-semibold text-base rounded-xl shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Enquire About Seedlings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
