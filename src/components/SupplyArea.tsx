import React from 'react';
import { MapPin, Navigation, ArrowRight, Truck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';

export const SupplyArea: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="supply" className="py-20 lg:py-28 bg-[#f5f7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0e381f] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-emerald-800">
          {/* Subtle agricultural background grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold tracking-wider uppercase mb-4">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                Agricultural Seedling Distribution
              </div>

              <h2
                id="supply-area-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-6 leading-tight"
              >
                Serving Farmers Across Andhra Pradesh & Telangana
              </h2>

              {/* State Highlights */}
              <div className="grid grid-cols-2 gap-4 w-full mb-8">
                <div className="bg-[#072412] p-5 rounded-2xl border border-emerald-700/60 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    State Coverage
                  </div>
                  <div className="mt-3">
                    <p className="text-2xl font-black font-display text-white tracking-tight">
                      ANDHRA PRADESH
                    </p>
                    <p className="text-xs text-emerald-200/80 mt-1">
                      Direct farm pickups & regional transport routes
                    </p>
                  </div>
                </div>

                <div className="bg-[#072412] p-5 rounded-2xl border border-emerald-700/60 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    State Coverage
                  </div>
                  <div className="mt-3">
                    <p className="text-2xl font-black font-display text-white tracking-tight">
                      TELANGANA
                    </p>
                    <p className="text-xs text-emerald-200/80 mt-1">
                      Bulk seedling supply for chilli cultivation seasons
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 bg-emerald-950/80 border border-emerald-600/40 px-4 py-3 rounded-xl mb-8 w-full sm:w-auto">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <p className="text-sm font-semibold text-emerald-100">
                  Based in <span className="text-amber-300 font-bold">{BUSINESS_INFO.location}</span>
                </p>
              </div>

              {/* Button */}
              <button
                id="contact-for-supply-btn"
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-base rounded-xl shadow-lg shadow-black/40 hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Contact for Supply</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Map Illustration Column */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg bg-[#072513] rounded-3xl p-6 sm:p-8 border border-emerald-700/50 shadow-inner">
                {/* Visual Cartographic Map Illustration */}
                <div className="relative w-full aspect-4/3 flex items-center justify-center">
                  <svg
                    viewBox="0 0 500 400"
                    className="w-full h-full text-emerald-800 drop-shadow-md"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Stylized Telangana State Silhouette */}
                    <path
                      d="M170,90 Q240,60 300,90 Q340,130 330,190 Q290,220 220,210 Q160,200 140,150 Z"
                      fill="#144d28"
                      stroke="#22c55e"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      className="opacity-90"
                    />

                    {/* Stylized Andhra Pradesh Coastal & Rayalaseema State Silhouette */}
                    <path
                      d="M220,210 Q290,220 330,190 Q370,160 410,140 Q440,170 380,260 Q340,320 280,360 Q210,360 190,300 Q180,250 220,210 Z"
                      fill="#0f3b1e"
                      stroke="#4ade80"
                      strokeWidth="2.5"
                    />

                    {/* Supply Routes Rays */}
                    <line x1="280" y1="260" x2="230" y2="150" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />
                    <line x1="280" y1="260" x2="350" y2="200" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />
                    <line x1="280" y1="260" x2="240" y2="330" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />

                    {/* Telangana Label */}
                    <text x="235" y="145" fill="#a7f3d0" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="2">
                      TELANGANA
                    </text>

                    {/* Andhra Pradesh Label */}
                    <text x="320" y="290" fill="#ecfdf5" fontSize="17" fontWeight="bold" textAnchor="middle" letterSpacing="2">
                      ANDHRA PRADESH
                    </text>

                    {/* Nursery Location Pin (Chandrapalem Mandal) */}
                    <g transform="translate(280, 255)">
                      <circle r="18" fill="#f59e0b" fillOpacity="0.25">
                        <animate attributeName="r" values="8;24;8" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <circle r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                    </g>
                  </svg>

                  {/* Callout Tag on Map */}
                  <div className="absolute bottom-4 right-4 bg-emerald-950/90 border border-amber-400/60 rounded-xl p-3 text-xs shadow-lg max-w-[210px]">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      Nursery Hub
                    </div>
                    <p className="font-semibold text-white">Rythu Mithra Nursery</p>
                    <p className="text-[11px] text-emerald-200">Chandrapalem Mandal, AP</p>
                  </div>
                </div>

                {/* State Legend */}
                <div className="mt-4 pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-200">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    Active Supply Territory
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    Daily Dispatch Hub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
