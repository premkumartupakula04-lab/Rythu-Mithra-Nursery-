import React, { useState } from 'react';
import {
  Users,
  MapPin,
  Sprout,
  Maximize2,
  Phone,
  MessageSquare,
  CheckCircle,
  Tractor,
} from 'lucide-react';
import { FARMERS_DATA, BUSINESS_INFO } from '../data/nurseryData';
import { FarmerCropRecord, GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface OurFarmersProps {
  onSelectVariety?: (varietyName: string) => void;
}

export const OurFarmers: React.FC<OurFarmersProps> = ({ onSelectVariety }) => {
  const [selectedVariety, setSelectedVariety] = useState<string>('ALL');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filterOptions = [
    'ALL',
    'Sakata 2282',
    'Sakata HY-1191',
    'Sakata 2433',
    '1298',
    '0728',
  ];

  const filteredFarmers =
    selectedVariety === 'ALL'
      ? FARMERS_DATA
      : FARMERS_DATA.filter(
          (farmer) =>
            farmer.seedVariety.toLowerCase().trim() === selectedVariety.toLowerCase().trim()
        );

  const openLightbox = (farmer: FarmerCropRecord) => {
    setActiveLightboxItem({
      id: farmer.id,
      title: `${farmer.farmerName} • ${farmer.seedVariety} (${farmer.acres})`,
      category: 'FARMERS',
      image: farmer.cropImage,
      description: `${farmer.location} — ${farmer.cropStatus}. ${farmer.highlightNote}`,
    });
  };

  const galleryItemsForLightbox: GalleryItem[] = filteredFarmers.map((f) => ({
    id: f.id,
    title: `${f.farmerName} • ${f.seedVariety} (${f.acres})`,
    category: 'FARMERS',
    image: f.cropImage,
    description: `${f.location} — ${f.cropStatus}. ${f.highlightNote}`,
  }));

  const handleNextLightbox = () => {
    if (!activeLightboxItem) return;
    const currentIndex = galleryItemsForLightbox.findIndex(
      (item) => item.id === activeLightboxItem.id
    );
    const nextIndex = (currentIndex + 1) % galleryItemsForLightbox.length;
    setActiveLightboxItem(galleryItemsForLightbox[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!activeLightboxItem) return;
    const currentIndex = galleryItemsForLightbox.findIndex(
      (item) => item.id === activeLightboxItem.id
    );
    const prevIndex =
      (currentIndex - 1 + galleryItemsForLightbox.length) % galleryItemsForLightbox.length;
    setActiveLightboxItem(galleryItemsForLightbox[prevIndex]);
  };

  const getVarietyBadgeColor = (variety: string) => {
    switch (variety) {
      case 'Sakata 2282':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Sakata HY-1191':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Sakata 2433':
        return 'bg-amber-100 text-amber-900 border-amber-200';
      case '1298':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case '0728':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
  };

  const handleBookVariety = (farmer: FarmerCropRecord) => {
    if (onSelectVariety) {
      onSelectVariety(farmer.seedVariety);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getWhatsAppFarmerLink = (farmer: FarmerCropRecord) => {
    const text = encodeURIComponent(
      `Hello Rythu Mithra Nursery,\nI saw the crop results of farmer ${farmer.farmerName} (${farmer.acres}, ${farmer.seedVariety}) from ${farmer.location}.\nI want to enquire about seedlings for ${farmer.seedVariety} for my field.`
    );
    return `https://wa.me/91${BUSINESS_INFO.phone}?text=${text}`;
  };

  return (
    <section id="our-farmers" className="py-20 lg:py-28 bg-[#fbfcf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-emerald-700" />
            Farmer Field Evidence & Experience
          </div>
          <h2
            id="our-farmers-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-4"
          >
            Our Farmers & Chilli Crops
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            Real photographic documentation from 10 progressive farmers across Andhra Pradesh & Telangana who cultivated chilli crops using seedlings raised by Rythu Mithra Nursery.
          </p>
        </div>

        {/* Variety Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              id={`farmer-filter-${opt.toLowerCase().replace(/\s+/g, '-')}`}
              type="button"
              onClick={() => setSelectedVariety(opt)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedVariety === opt
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-950/20'
                  : 'bg-white text-stone-600 hover:text-emerald-800 hover:bg-emerald-50 border border-stone-200'
              }`}
            >
              {opt === 'ALL' ? 'All 10 Farmers' : opt}
            </button>
          ))}
        </div>

        {/* 10 Farmers Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFarmers.map((farmer, idx) => (
            <div
              key={farmer.id}
              id={`farmer-card-${farmer.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Crop Image Container with Click-to-Enlarge */}
                <div
                  onClick={() => openLightbox(farmer)}
                  className="relative aspect-4/3 w-full bg-stone-900 cursor-pointer overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={farmer.cropImage}
                    alt={`${farmer.farmerName}'s chilli crop`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Seed Variety & Acreage Badges Overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border shadow-sm ${getVarietyBadgeColor(
                        farmer.seedVariety
                      )}`}
                    >
                      {farmer.seedVariety}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black shadow-md">
                      <Tractor className="w-3 h-3" />
                      {farmer.acres}
                    </span>
                  </div>

                  {/* Hover prompt to zoom */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-stone-900 text-xs font-bold shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                      View Crop Photo
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-semibold flex items-center justify-between">
                    <span className="bg-black/60 px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                      Farmer #{idx + 1}
                    </span>
                    <span className="bg-emerald-900/80 px-2.5 py-0.5 rounded-md backdrop-blur-xs text-emerald-200">
                      {farmer.cropStatus}
                    </span>
                  </div>
                </div>

                {/* Farmer Details Content */}
                <div className="p-5 sm:p-6">
                  {/* Farmer Name & Telugu Name */}
                  <div className="mb-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-xl font-bold font-display text-[#0e381f] group-hover:text-emerald-700 transition-colors">
                        {farmer.farmerName}
                      </h3>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        {farmer.acres}
                      </span>
                    </div>
                    {farmer.teluguName && (
                      <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                        {farmer.teluguName}
                      </p>
                    )}
                  </div>

                  {/* Location & Mandal */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-600 mb-3.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{farmer.location}</span>
                  </div>

                  {/* Seed Variety Pill & Performance Highlight */}
                  <div className="bg-[#f5f7f2] rounded-xl p-3.5 border border-stone-200/80 mb-4">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-stone-500 uppercase tracking-wider text-[11px]">
                        Type of Seed:
                      </span>
                      <span className="font-bold text-emerald-900">
                        {farmer.seedVariety}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-stone-500 uppercase tracking-wider text-[11px]">
                        Cultivated Area:
                      </span>
                      <span className="font-bold text-stone-900">
                        {farmer.acres}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-200">
                      {farmer.highlightNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Farmer Card */}
              <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => handleBookVariety(farmer)}
                    className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sprout className="w-3.5 h-3.5" />
                    <span>Enquire Variety</span>
                  </button>

                  <a
                    href={getWhatsAppFarmerLink(farmer)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Call Banner across all farmer plots */}
        <div className="mt-14 bg-gradient-to-r from-[#0e381f] via-emerald-900 to-[#0e381f] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-700/80">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 block mb-1">
              Join 100+ Successful Chilli Farmers
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Want the same high yield in your chilli crop?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-xl">
              Book your chilli seedling trays with Khakmuri Venkata Reddy. Quality seedlings with sturdy root systems ready for on-time field transplantation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              id="farmers-call-action-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call 9949247738</span>
            </a>

            <a
              id="farmers-whatsapp-action-btn"
              href={`https://wa.me/91${BUSINESS_INFO.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Farmer Crop Photos */}
      <LightboxModal
        item={activeLightboxItem}
        items={galleryItemsForLightbox}
        onClose={() => setActiveLightboxItem(null)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />
    </section>
  );
};
