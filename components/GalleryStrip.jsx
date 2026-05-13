'use client';

import { motion } from 'motion/react';

const IMAGES = [
  { src: '/images/bar.jpeg', alt: 'Calenders Bar' },
  { src: '/images/lounge.jpeg', alt: 'Calenders Lounge' },
  { src: '/images/entrance.jpeg', alt: 'Calenders Entrance' },
];

export default function GalleryStrip() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <p className="text-brand-green font-semibold tracking-widest uppercase text-xs mb-8">
          Gallery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {IMAGES.map(({ src, alt }, index) => (
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
