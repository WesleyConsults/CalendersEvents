'use client';

import { motion } from 'motion/react';
import { HOME_GALLERY_IMAGES } from '@/lib/homeGalleryImages';

export default function GalleryStrip() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <p className="eyebrow mb-8">
          Gallery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HOME_GALLERY_IMAGES.map(({ src, alt }, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
