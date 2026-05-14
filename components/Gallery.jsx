'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Instagram, X } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { GALLERY_IMAGES } from '@/lib/data';

/**
 * Determines grid span classes for the masonry-style layout.
 * index 0: tall left card (row-span-2)
 * index 5: wide bottom card (col-span-2, landscape)
 * rest: normal square cells
 */
function getGridClass(index) {
  if (index === 0) return 'md:col-span-2 md:row-span-2';
  if (index === 3) return 'md:row-span-2';
  if (index === 5) return 'md:col-span-2';
  return '';
}

function getAspectClass(index) {
  if (index === 0) return 'aspect-[4/3] md:aspect-auto';
  if (index === 3) return 'aspect-[3/4] md:aspect-auto';
  if (index === 5) return 'aspect-video';
  return index % 2 === 0 ? 'aspect-square' : 'aspect-[4/5]';
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedImage = selectedIndex === null ? null : GALLERY_IMAGES[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Moments We've Shared" subtitle="Our Gallery" centered />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[180px] lg:auto-rows-[220px] gap-3 md:gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${getGridClass(index)} ${getAspectClass(index)}`}
              aria-label={`Preview gallery photo ${index + 1}`}
            >
              <img
                src={src}
                alt={`Gallery photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-green/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Instagram className="text-white" size={24} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-green-dark transition-colors text-sm underline underline-offset-4"
          >
            <Instagram size={16} /> Follow us on Instagram for more
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            <motion.div
              className="relative max-h-[88vh] w-full max-w-5xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close gallery preview"
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-4 right-0 z-10 flex h-11 w-11 -translate-y-full items-center justify-center rounded-full bg-white text-brand-brown shadow-lg transition-colors hover:bg-brand-green hover:text-white md:-right-4"
              >
                <X size={22} />
              </button>
              <img
                src={selectedImage}
                alt={`Gallery photo ${selectedIndex + 1}`}
                className="mx-auto max-h-[88vh] max-w-full rounded-2xl object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
