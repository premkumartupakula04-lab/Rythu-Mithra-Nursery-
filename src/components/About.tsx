import React from 'react';
import { Calendar, Sprout, Users, Map } from 'lucide-react';
import { nurseryAssets } from '../data/assets';

export const About: React.FC = () => {
  const featureCards = [
    {
      id: 'feature-exp',
      title: '10+ Years',
      subtitle: 'Experience',
      description: 'More than a decade of dedicated expertise in chilli seedling propagation and nursery management.',
      icon: Calendar,
      color: 'border-emerald-500/20 bg-emerald-50/80 text-emerald-800',
      iconBg: 'bg-emerald-600 text-white',
    },
    {
      id: 'feature-quality',
      title: 'Quality',
      subtitle: 'Chilli Seedlings',
      description: 'Healthy, vigorous seedlings raised in pro-trays with optimal root balls ready for the field.',
      icon: Sprout,
      color: 'border-emerald-500/20 bg-emerald-50/80 text-emerald-800',
      iconBg: 'bg-emerald-700 text-white',
    },
    {
      id: 'feature-farmer',
      title: 'Farmer',
      subtitle: 'Focused',
      description: 'Built directly around the seasonal timing, field conditions, and practical needs of chilli growers.',
      icon: Users,
      color: 'border-emerald-500/20 bg-emerald-50/80 text-emerald-800',
      iconBg: 'bg-emerald-600 text-white',
    },
    {
      id: 'feature-supply',
      title: 'AP & Telangana',
      subtitle: 'Supply',
      description: 'Dependable seedling dispatch and logistical support serving agricultural belts across both Telugu states.',
      icon: Map,
      color: 'border-emerald-500/20 bg-emerald-50/80 text-emerald-800',
      iconBg: 'bg-emerald-800 text-white',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f5f7f2] relative overflow-hidden">
      {/* Decorative leaf watermarks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Nursery Overview
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-6"
          >
            About Rythu Mithra Nursery
          </h2>
          <p
            id="about-content"
            className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal"
          >
            Rythu Mithra Nursery specializes in quality chilli seedlings (Mirapa Naru), serving farmers across Andhra Pradesh and Telangana. With more than 10 years of experience, the nursery focuses on raising healthy chilli seedlings for farmers and supporting them from nursery stage to field transplantation.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-sm hover:shadow-md hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0e381f] font-display tracking-tight leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-emerald-700 font-semibold text-base mb-3">
                    {card.subtitle}
                  </p>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-3">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Agricultural Highlight Banner */}
        <div className="bg-[#0e381f] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-emerald-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-emerald-300 text-xs font-bold tracking-widest uppercase">
                Dedicated Chilli Nursery Excellence
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display mt-2 mb-4 text-white leading-tight">
                Healthy Roots, Uniform Growth & Direct Farmer Value
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Our nursery is designed to give farmers peace of mind during the critical initial 30–40 days of seedling establishment. By strictly adhering to disciplined watering, disease-shielded shade nets, and tested growing mediums, each seedling achieves the stem thickness and root cohesion essential for high survival after transplantation.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-emerald-200">
                <span className="bg-[#072412] px-3.5 py-1.5 rounded-lg border border-emerald-700/50">
                  ✓ Protected Shade Net Environment
                </span>
                <span className="bg-[#072412] px-3.5 py-1.5 rounded-lg border border-emerald-700/50">
                  ✓ Micro-Nutrient Fortified
                </span>
                <span className="bg-[#072412] px-3.5 py-1.5 rounded-lg border border-emerald-700/50">
                  ✓ Ready for AP & TG Soils
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-600/40 aspect-4/3 max-w-md mx-auto">
                <img
                  src={nurseryAssets.seedlingsTray}
                  alt="Young chilli seedlings in nursery trays"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow-md">
                Field Ready Mirapa Naru
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
