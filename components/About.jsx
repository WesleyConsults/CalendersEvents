'use client';

import { motion } from 'motion/react';
import { Utensils, Music, Mic2, Film, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FEATURES = [
  { icon: Utensils, label: 'Fine Dining', desc: 'Crafted Ghanaian flavors' },
  { icon: Music, label: 'Live Band', desc: 'Soul-stirring rhythms' },
  { icon: Mic2, label: 'Karaoke', desc: 'Your stage awaits' },
  { icon: Film, label: 'Outdoor Movies', desc: 'Cinema under the sky' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream relative overflow-hidden">
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
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=400"
                  alt="Calenders dining experience"
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
                  src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=400"
                  alt="Calenders events atmosphere"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl" />
          </div>

          {/* Text content */}
          <div>
            <SectionHeading title="Experience the Vibrant Spirit of Ghana" subtitle="Welcome to Calenders" />
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At Calenders Events, we&apos;ve created a sanctuary where community, culture, and cuisine
              converge. Nestled in the heart of the city, our space transitions seamlessly from a
              sun-drenched family restaurant to a lively nightlife hub.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {FEATURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-brand-green/5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown">{item.label}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="text-brand-green font-bold flex items-center gap-2 group">
              Discover our story{' '}
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
