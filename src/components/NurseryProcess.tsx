import React from 'react';
import { NURSERY_PROCESS_STEPS } from '../data/nurseryData';

export const NurseryProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#f5f7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Nursery Workflow
          </div>
          <h2
            id="nursery-process-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-4"
          >
            From Seedling to Field
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            A disciplined, step-by-step agricultural process ensuring every seedling reaches the farmer's field with strong roots and active growth.
          </p>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NURSERY_PROCESS_STEPS.map((stepItem) => (
            <div
              key={stepItem.step}
              id={`process-step-${stepItem.step}`}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Thumbnail */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-stone-100">
                <img
                  src={stepItem.image}
                  alt={`Rythu Mithra Nursery step ${stepItem.step}: ${stepItem.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Step Number Tag */}
                <div className="absolute top-4 left-4">
                  <span className="w-10 h-10 rounded-xl bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center shadow-md border border-emerald-500/30 font-display">
                    {stepItem.step}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0e381f] font-display mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-700 font-medium">
                  <span>Step {stepItem.step} of 06</span>
                  <span className="text-stone-400">Rythu Mithra Standard</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
