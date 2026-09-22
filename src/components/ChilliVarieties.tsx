import React from 'react';
import { Phone, ArrowRight, Tag, HelpCircle } from 'lucide-react';
import { CHILLI_VARIETIES, BUSINESS_INFO } from '../data/nurseryData';
import { ChilliVariety } from '../types';

interface ChilliVarietiesProps {
  onSelectVariety?: (varietyName: string) => void;
}

export const ChilliVarieties: React.FC<ChilliVarietiesProps> = ({ onSelectVariety }) => {
  const handleCheckAvailability = (variety: ChilliVariety) => {
    if (onSelectVariety) {
      onSelectVariety(variety.name);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="varieties" className="py-20 lg:py-28 bg-[#fbfcf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
            Nursery Offerings
          </div>
          <h2
            id="varieties-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-4"
          >
            Our Chilli Varieties
          </h2>
          <p
            id="varieties-subtitle"
            className="text-lg sm:text-xl text-stone-600 font-normal"
          >
            Explore the chilli varieties available through Rythu Mithra Nursery.
          </p>
        </div>

        {/* 5 Large Variety Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {CHILLI_VARIETIES.map((variety, index) => (
            <div
              key={variety.id}
              id={`variety-card-${variety.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
                <img
                  src={variety.image}
                  alt={`Chilli variety ${variety.name} crop reference`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-emerald-300 border border-emerald-400/30 text-xs font-semibold">
                    <Tag className="w-3 h-3 text-emerald-400" />
                    {variety.category}
                  </span>
                </div>

                {/* Field Reference Image badge */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-block text-[11px] text-stone-200/90 italic bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    Field reference image
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-700">
                      Variety #{index + 1}
                    </span>
                    <span className="text-xs font-medium text-stone-500">
                      Seedling Plug Trays
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0e381f] font-display tracking-tight mb-2">
                    {variety.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 mb-6">
                    Healthy seedling batches raised to order for field transplanting across Andhra Pradesh and Telangana.
                  </p>
                </div>

                {/* Action button inside card */}
                <button
                  type="button"
                  onClick={() => handleCheckAvailability(variety)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white border border-emerald-300 hover:border-emerald-600 font-semibold text-sm rounded-xl transition-all duration-200 cursor-pointer active:scale-95 group-hover:bg-emerald-600 group-hover:text-white"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick Contact Promo Card as 6th block for visual grid balance */}
          <div className="bg-gradient-to-br from-[#0c311a] to-[#061e10] rounded-3xl p-7 text-white flex flex-col justify-between border border-emerald-800 shadow-md">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold mb-4">
                Nursery Desk
              </span>
              <h3 className="text-2xl font-bold font-display text-white mb-3">
                Need a Specific Chilli Variety?
              </h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed mb-6">
                Looking for specific Sakata batches or other chilli hybrids for the upcoming planting window? Call proprietor Khakmuri Venkata Reddy directly for scheduling.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-emerald-800/60">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <p className="text-[11px] text-center text-emerald-300/80">
                Chandrapalem Mandal, AP
              </p>
            </div>
          </div>
        </div>

        {/* Notice & Overall Check Availability Banner */}
        <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-900 font-display">
                Seasonal Batch Information
              </h4>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-2xl leading-relaxed">
                "Variety availability may vary by season and nursery stock. Contact Rythu Mithra Nursery for current availability and batch details."
              </p>
            </div>
          </div>

          <button
            id="check-all-availability-btn"
            type="button"
            onClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="shrink-0 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};
