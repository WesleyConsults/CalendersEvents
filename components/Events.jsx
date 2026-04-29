'use client';

import { motion } from 'motion/react';
import { Calendar, Mic2, Music, Film, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { UPCOMING_EVENTS } from '@/lib/data';

const EVENT_CONFIG = {
  Karaoke: {
    icon: Mic2,
    color: 'bg-amber-500',
    bg: 'from-amber-50 to-orange-50',
    badge: 'bg-amber-100 text-amber-700',
  },
  'Live Band': {
    icon: Music,
    color: 'bg-brand-green',
    bg: 'from-green-50 to-emerald-50',
    badge: 'bg-green-100 text-green-700',
  },
  Movie: {
    icon: Film,
    color: 'bg-purple-500',
    bg: 'from-purple-50 to-violet-50',
    badge: 'bg-purple-100 text-purple-700',
  },
};

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Join the Celebration" subtitle="Upcoming Events" centered />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {UPCOMING_EVENTS.map((event, index) => {
            const config = EVENT_CONFIG[event.type] ?? EVENT_CONFIG.Karaoke;
            const Icon = config.icon;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`group relative bg-gradient-to-br ${config.bg} rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                {/* Card top accent */}
                <div className={`h-1.5 w-full ${config.color}`} />

                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon + badge row */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${config.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon size={22} />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${config.badge}`}>
                      {event.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-brown mb-2 leading-snug">
                    {event.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4 font-medium">
                    <Calendar size={14} className="shrink-0 text-brand-green" />
                    {event.date}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <button className="mt-6 w-full bg-white hover:bg-brand-brown hover:text-white border border-slate-200 text-brand-brown py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 group-hover:border-brand-brown">
                    Reserve a Spot <ArrowRight size={15} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-slate-500 text-sm">
          Want a private event?{' '}
          <a href="#contact" className="text-brand-green font-semibold underline underline-offset-4 hover:text-brand-green-dark transition-colors">
            Talk to our event coordinator →
          </a>
        </p>
      </div>
    </section>
  );
}
