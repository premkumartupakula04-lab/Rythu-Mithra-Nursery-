import React from 'react';
import { nurseryAssets } from '../data/assets';
import { HeartHandshake, Eye, Sparkles } from 'lucide-react';

export const FieldExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#fbfcf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Field Connection
          </div>
          <h2
            id="field-experience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-3"
          >
            From Nursery to Field
          </h2>
          <p
            id="field-experience-subheading"
            className="text-xl sm:text-2xl text-emerald-800 font-semibold mb-6"
          >
            Supporting farmers beyond the nursery.
          </p>

          <div className="p-5 sm:p-6 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-2xl">
            <p
              id="field-experience-statement"
              className="text-base sm:text-lg text-stone-800 font-medium italic leading-relaxed"
            >
              "Our focus is to provide quality chilli seedlings and maintain a farmer-oriented nursery experience from seedling stage to field supply."
            </p>
          </div>
        </div>

        {/* Large Photographs Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Field Photo */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden shadow-lg border border-stone-200 group min-h-[320px] sm:min-h-[420px]">
            <img
              src={nurseryAssets.fieldChilliGrowth}
              alt="Flourishing chilli crop field in Andhra Pradesh"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase">
                Field Performance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display mt-1">
                Field Growth of Transplanted Chilli Seedlings
              </h3>
              <p className="text-sm text-stone-200 mt-1 max-w-xl">
                Healthy root structure and plant vigor established in our nursery translate into resilient vegetative growth in open agricultural fields.
              </p>
            </div>
          </div>

          {/* Right Column with 2 stacked images: mature chilli pods & nursery plants */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200 group flex-1 min-h-[200px]">
              <img
                src={nurseryAssets.chilliCropHarvest}
                alt="Mature chilli plants with ripe pods"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-xs text-emerald-300 font-semibold">Crop Fruiting</span>
                  <p className="text-white text-sm font-bold font-display">Mature Chilli Plants</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200 group flex-1 min-h-[200px]">
              <img
                src={nurseryAssets.seedlingsTray}
                alt="Chilli nursery seedling development"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-xs text-emerald-300 font-semibold">Nursery Care</span>
                  <p className="text-white text-sm font-bold font-display">Vigorous Seedlings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Pillars under photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#0e381f] text-base font-display">Field Observations</h4>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">Understanding how our seedling varieties behave across different field soils and weather.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#0e381f] text-base font-display">Farmer Guidance</h4>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">Advising farmers on nursery pickup timing and optimal field transplanting conditions.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#0e381f] text-base font-display">Continuous Feedback</h4>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">Maintaining long-term relationships with growers across Andhra Pradesh and Telangana.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
