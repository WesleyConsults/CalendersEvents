'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const OFFERS = [
  {
    title: 'Events & Celebrations',
    image: '/images/offers/events-and-celebrations-card.png',
  },
  {
    title: 'Restaurant & Bar',
    image: '/images/offers/restaurant-and-bar-card.png',
  },
  {
    title: 'Live Entertainment',
    image: '/images/offers/live-entertainment-card.png',
  },
  {
    title: 'Garden Atmosphere',
    image: '/images/offers/garden-atmosphere-card.png',
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-brand-cream py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-2">What We Offer</p>
          <h2 className="section-title text-brand-brown">One place for food, music, and memorable events</h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Calenders brings together private celebrations, dining, drinks, and live entertainment in a relaxed garden setting.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERS.map(({ title, image }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[1.5rem] border border-[#E7D6C4] bg-[#FFF4E6] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-brown-light">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
