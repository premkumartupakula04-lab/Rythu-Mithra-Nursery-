import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      id="gallery-lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        id="lightbox-close-btn"
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-60 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        id="lightbox-prev-btn"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        id="lightbox-next-btn"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container adhering strictly to object-contain and complete view */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden p-2">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption bar */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2 text-white">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <Tag className="w-3 h-3" />
                {item.category}
              </span>
              <span className="text-xs text-stone-400">
                Rythu Mithra Nursery Archive
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5 max-w-2xl">
              {item.description}
            </p>
          </div>

          <div className="flex sm:hidden items-center gap-3 w-full justify-between pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={onPrev}
              className="px-4 py-1.5 bg-white/10 text-white rounded-lg text-xs"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              className="px-4 py-1.5 bg-white/10 text-white rounded-lg text-xs"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
