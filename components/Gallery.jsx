'use client';

import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { GALLERY_IMAGES } from '@/lib/data';

/**
 * Determines grid span classes for the masonry-style layout.
 * index 0: tall left card (row-span-2)
 * index 5: wide bottom card (col-span-2, landscape)
 * rest: normal square cells
 */
function getGridClass(index) {
  if (index === 0) return 'md:row-span-2';
  if (index === 5) return 'md:col-span-2';
  return '';
}

function getAspectClass(index) {
  if (index === 5) return 'aspect-video';
  return 'aspect-square';
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Moments We've Shared" subtitle="Our Gallery" centered />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${getGridClass(index)} ${getAspectClass(index)}`}
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
            </motion.div>
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
    </section>
  );
}
