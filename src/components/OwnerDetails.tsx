import React from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Sprout,
  Award,
  Truck,
  Layers,
  CheckCircle2,
  UserCheck,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO, OWNER_OFFICIAL_DETAILS } from '../data/nurseryData';
import { nurseryAssets } from '../data/assets';

interface OwnerDetailsProps {
  onSelectVariety?: (varietyName: string) => void;
}

export const OwnerDetails: React.FC<OwnerDetailsProps> = ({ onSelectVariety }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-emerald-600" />;
      case 'PhoneCall':
        return <Phone className="w-5 h-5 text-amber-500" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-emerald-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-600" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-emerald-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  const handleVarietyClick = (varietyName: string) => {
    if (onSelectVariety) {
      onSelectVariety(varietyName);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const directWhatsAppOwner = encodeURIComponent(
    `Hello Khakmuri Venkata Reddy Garu,\nI am contacting you from the Rythu Mithra Nursery website regarding chilli seedlings (Mirapa Naru).\nPlease let me know variety availability and batch schedules.`
  );

  return (
    <section id="owner-details" className="py-20 lg:py-28 bg-[#f5f7f2] relative overflow-hidden">
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Verified Nursery Information & Leadership
          </div>
          <h2
            id="owner-details-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-4"
          >
            Owner & Nursery Details
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            Official business profile and proprietor credentials for Rythu Mithra Nursery, serving agricultural farmers with trust and transparency.
          </p>
        </div>

        {/* Main Grid: Left Side Owner Profile & Photos | Right Side 8 Official Nursery Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Owner Profile Showcase Card with Real Photographs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xl overflow-hidden relative">
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500" />

              {/* Owner Portrait & Field Inspection Badges */}
              <div className="relative mb-6 rounded-2xl overflow-hidden bg-stone-900 border border-stone-200">
                <div className="aspect-4/3 w-full relative">
                  <img
                    id="owner-portrait-image"
                    src={nurseryAssets.ownerPortrait}
                    alt="Khakmuri Venkata Reddy - Owner of Rythu Mithra Nursery"
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Overlay Name & Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-[11px] font-bold uppercase tracking-wider inline-block mb-1">
                      Nursery Proprietor
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      Khakmuri Venkata Reddy
                    </h3>
                    <p className="text-xs text-emerald-200 font-medium">
                      ఖాక్మూరి వెంకట రెడ్డి • రైతు మిత్ర నర్సరీ
                    </p>
                  </div>
                </div>

                {/* Floating Experience Ribbon */}
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  10+ Years Experience
                </div>
              </div>

              {/* Field Walking Photo & In-Person Inspection Highlight */}
              <div className="grid grid-cols-12 gap-3.5 p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100 mb-6 items-center">
                <div className="col-span-4 aspect-square rounded-xl overflow-hidden bg-stone-900 shrink-0">
                  <img
                    src={nurseryAssets.ownerFieldWalk}
                    alt="Khakmuri Venkata Reddy inspecting chilli crops"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-span-8 pr-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Direct Field Oversight
                  </span>
                  <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
                    Khakmuri Venkata Reddy regularly visits farmer chilli fields across Andhra Pradesh & Telangana to monitor crop vigor, seedling root performance, and fruit set.
                  </p>
                </div>
              </div>

              {/* Owner Direct Contact Buttons */}
              <div className="space-y-3">
                <a
                  id="owner-direct-call-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4 animate-bounce" />
                  <span>Call Khakmuri Venkata Reddy (9949247738)</span>
                </a>

                <a
                  id="owner-direct-whatsapp-btn"
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${directWhatsAppOwner}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message on WhatsApp (9949247738)</span>
                </a>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-stone-500 font-medium">
                  Direct phone dialer opens immediately upon tapping the call button.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: 8 Numbered Official Nursery Details */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-md">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0e381f]">
                    Official Nursery Credentials
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500">
                    All 8 key registration & operating parameters
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Sprout className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4">
                {OWNER_OFFICIAL_DETAILS.map((item) => (
                  <div
                    key={item.num}
                    id={`owner-detail-item-${item.num}`}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      item.highlight
                        ? 'bg-emerald-50/50 border-emerald-200/90 hover:bg-emerald-50'
                        : 'bg-stone-50/70 border-stone-200/80 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      {/* Number Pill */}
                      <span className="w-7 h-7 rounded-lg bg-emerald-800 text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow-xs">
                        {item.num}
                      </span>

                      {/* Icon */}
                      <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center shrink-0">
                        {getIcon(item.icon)}
                      </div>

                      {/* Label & Telugu Title */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-100/70 px-2 py-0.5 rounded-md">
                            {item.teluguTitle}
                          </span>
                        </div>
                        <p className="text-base sm:text-lg font-bold text-[#0e381f] mt-0.5">
                          {item.value}
                        </p>
                        <p className="text-xs text-stone-500">
                          {item.subvalue}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Action for Contact or Varieties */}
                    {item.isContact && (
                      <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                        <a
                          href={`tel:${BUSINESS_INFO.phone}`}
                          className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call 9949247738</span>
                        </a>
                        <a
                          href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${directWhatsAppOwner}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-xs"
                          title="WhatsApp"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                      </div>
                    )}

                    {item.isVarieties && (
                      <div className="flex flex-wrap gap-1.5 max-w-xs shrink-0 pt-2 sm:pt-0">
                        {BUSINESS_INFO.varietiesList.map((variety) => (
                          <button
                            key={variety}
                            type="button"
                            onClick={() => handleVarietyClick(variety)}
                            className="px-2.5 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold transition-all shadow-2xs hover:scale-103 cursor-pointer flex items-center gap-1"
                          >
                            <span>{variety}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
