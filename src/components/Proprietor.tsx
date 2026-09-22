import React from 'react';
import { Phone, MapPin, Award, CheckCircle, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/nurseryData';
import { nurseryAssets } from '../data/assets';

export const Proprietor: React.FC = () => {
  return (
    <section id="proprietor" className="py-20 lg:py-28 bg-[#fbfcf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Leadership & Trust
          </div>
          <h2
            id="proprietor-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-3"
          >
            Meet the Proprietor
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            Personal commitment to seedling quality, transparency, and agricultural excellence.
          </p>
        </div>

        {/* Proprietor Showcase Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Left Column: Agricultural Nursery Image (per explicit prompt instructions) */}
            <div className="md:col-span-5 relative h-72 md:h-full min-h-[340px] bg-emerald-950">
              <img
                src={nurseryAssets.nurseryShadeNet}
                alt="Rythu Mithra Nursery Facilities under Khakmuri Venkata Reddy supervision"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061e10]/90 via-[#061e10]/40 to-transparent" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold tracking-wide shadow-md">
                  <Award className="w-3.5 h-3.5" />
                  10+ Years of Nursery Experience
                </span>
                <p className="text-white text-xs mt-2 font-medium">
                  Supervising daily nursery operations & seedling health
                </p>
              </div>
            </div>

            {/* Right Column: Clean Proprietor Information Card */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-700">
                  Proprietor Details
                </span>

                <h3
                  id="proprietor-name"
                  className="text-3xl sm:text-4xl font-extrabold text-[#0e381f] font-display tracking-tight mt-1 mb-1"
                >
                  {BUSINESS_INFO.proprietor}
                </h3>

                <p
                  id="proprietor-role"
                  className="text-emerald-700 font-bold text-base sm:text-lg mb-6"
                >
                  {BUSINESS_INFO.role}
                </p>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  With over a decade of dedicated hands-on experience in raising chilli seedlings (Mirapa Naru), Khakmuri Venkata Reddy personally oversees seedling batch care, seed quality selection, and farmer dispatches from Chandrapalem Mandal across Andhra Pradesh and Telangana.
                </p>

                {/* Key commitments */}
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct farmer consultations for seasonal nursery bookings</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Focus on vigorous root plugs and uniform tray germination</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Transparent batch status & timely supply coordination</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-100">
                <a
                  id="proprietor-call-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                <a
                  id="proprietor-whatsapp-btn"
                  href={`https://wa.me/91${BUSINESS_INFO.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
