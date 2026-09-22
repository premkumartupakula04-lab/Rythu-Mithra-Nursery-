import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/nurseryData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

type CategoryFilter = 'ALL' | 'NURSERY' | 'SEEDLINGS' | 'CHILLI CROP' | 'FARMERS' | 'FIELD VISITS';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories: CategoryFilter[] = [
    'ALL',
    'NURSERY',
    'SEEDLINGS',
    'CHILLI CROP',
    'FARMERS',
    'FIELD VISITS',
  ];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#f5f7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            Visual Documentation
          </div>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e381f] tracking-tight font-display mb-4"
          >
            Photo Gallery
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal">
            Real photographic documentation from Rythu Mithra Nursery, seedling pro-trays, and farmer fields across Andhra Pradesh & Telangana.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20'
                  : 'bg-white text-stone-600 hover:text-emerald-800 hover:bg-emerald-50 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame with respectful complete view containment */}
              <div className="relative aspect-4/3 w-full bg-stone-900 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-stone-900 text-xs font-bold shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    View Full Photo
                  </span>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0e381f] font-display group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Rythu Mithra Nursery</span>
                  <span className="text-emerald-600 font-semibold group-hover:underline">Click to enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
