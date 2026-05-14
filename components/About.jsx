'use client';

import { motion } from 'motion/react';
import { Leaf, Wine, Music } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FEATURES = [
  { icon: Leaf, label: 'Lush Gardens', desc: 'Open-air setting for relaxed dining, social gatherings, and outdoor celebrations.' },
  { icon: Wine, label: 'Lounge Bar', desc: 'Cocktails, good music, football viewing, and a relaxed nightlife atmosphere.' },
  { icon: Music, label: 'Live Entertainment', desc: 'Weekly music, karaoke, live band sessions, and special event nights.' },
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl translate-y-8"
              >
                <img
                  src="/images/seatingdaytime.jpeg"
                  alt="Calenders daytime garden seating"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/entrance.jpeg"
                  alt="Calenders venue entrance"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl" />
          </div>

          {/* Text content */}
          <div>
            <SectionHeading title="Welcome to Calenders" />
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Calenders Events Bar &amp; Lounge is one of Takoradi&apos;s warmest destinations for dining, drinks, entertainment, and private celebrations. Established in 2019, Calenders was created to help individuals, families, groups, and businesses plan memorable social events within the Sekondi-Takoradi metropolis.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              From open-air garden gatherings, Calenders offers flexible spaces for weddings, birthdays, corporate events, receptions, live shows, and private parties.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              What makes Calenders different is the way everything comes together in one place. Guests can enjoy our lush garden setting, relax at the lounge bar, watch live football, enjoy cocktails and good music, or share great food with friends and family.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              For weddings and special occasions, our in-house bridal suite adds extra convenience and comfort, making it easier for clients to prepare, host, and celebrate without moving between multiple locations.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At Calenders, we believe every visit should feel relaxed, lively, and memorable — whether you are coming for lunch, a night out, a live band session, or one of life&apos;s biggest celebrations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-green/5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown text-sm">{item.label}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
