'use client';

import { CalendarHeart, Martini, Music2, Trees } from 'lucide-react';
import { motion } from 'motion/react';

const OFFERS = [
  {
    title: 'Events & Celebrations',
    description: 'Weddings, birthdays, parties, corporate gatherings, and private bookings.',
    icon: CalendarHeart,
  },
  {
    title: 'Restaurant & Bar',
    description: 'Good food, drinks, relaxed seating, and group hangouts.',
    icon: Martini,
  },
  {
    title: 'Live Entertainment',
    description: 'Reggae nights, karaoke, live band, and weekend experiences.',
    icon: Music2,
  },
  {
    title: 'Garden Atmosphere',
    description: 'Open-air setting, warm ambience, and a casual, family-friendly environment.',
    icon: Trees,
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
          {OFFERS.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
                <Icon size={22} />
              </div>
              <h3 className="card-title text-xl text-brand-brown">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
