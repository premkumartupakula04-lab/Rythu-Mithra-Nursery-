import React from 'react';
import { 
  Sprout, 
  Target, 
  Award, 
  HeartHandshake, 
  Layers, 
  Truck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      id: 'why-healthy-seedlings',
      title: 'Healthy Seedlings',
      description: 'Carefully raised chilli seedlings prepared for field transplantation.',
      icon: Sprout,
      accent: 'border-emerald-200 hover:border-emerald-500',
      iconColor: 'text-emerald-700 bg-emerald-100',
    },
    {
      id: 'why-chilli-specialization',
      title: 'Chilli Specialization',
      description: 'Focused specifically on chilli seedlings and nursery requirements.',
      icon: Target,
      accent: 'border-emerald-200 hover:border-emerald-500',
      iconColor: 'text-rose-700 bg-rose-100',
    },
    {
      id: 'why-experience',
      title: '10+ Years Experience',
      description: 'More than a decade of nursery experience.',
      icon: Award,
      accent: 'border-emerald-200 hover:border-emerald-500',
      iconColor: 'text-amber-700 bg-amber-100',
    },
    {
      id: 'why-farmer-focused',
      title: 'Farmer Focused',
      description: 'Designed around the practical needs of chilli farmers.',
      icon: HeartHandshake,
      accent: 'border-emerald-200 hover:border-emerald-500',
      iconColor: 'text-emerald-700 bg-emerald-100',
    },
    {
      id: 'why-bulk-supply',
      title: 'Bulk Supply',
      description: 'Support for larger farmer and agricultural requirements.',
      icon: Layers,
      accent: 'border-emerald-200 hover:border-emerald-500',
      iconColor: 'text-teal-700 bg-teal-100',
    },
    {
      id: 'why-wide-supply-area',
      title: 'Wide Supply Area',
      description: 'Serving farmers across Andhra Pradesh and Telangana.',
      icon: Truck,
      accent: 'border-emerald-200 hover:border-emerald-500',
      iconColor: 'text-emerald-700 bg-emerald-100',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#fbfcf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Nursery Values
          </div>
          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-4"
          >
            Why Farmers Choose Rythu Mithra Nursery
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            Trusted by agricultural communities for healthy planting material, dependable advice, and consistent nursery standards season after season.
          </p>
        </div>

        {/* 6 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="group bg-white rounded-2xl p-7 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-start relative overflow-hidden"
              >
                {/* Subtle top indicator on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0e381f] font-display tracking-tight leading-snug group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  "{item.description}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
