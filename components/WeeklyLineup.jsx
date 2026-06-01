'use client';

import { motion } from 'motion/react';
import { ArrowRight, Music2 } from 'lucide-react';
import Link from 'next/link';
import { WEEKLY_LINEUP } from '@/lib/data';

const WEEKLY_LINEUP_FLYER = '/images/weekly-lineup.jpg';

export default function WeeklyLineup({ variant = 'detailed' }) {
  const isPreview = variant === 'preview';

  if (isPreview) {
    return (
      <section id="weekly-lineup" className="bg-brand-cream py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="eyebrow mb-2">
                Weekly Lineup
              </p>
              <h2 className="section-title text-brand-brown">See What&apos;s On This Week</h2>
              <p className="mt-5 max-w-xl text-slate-600 leading-relaxed">
                Calenders has an official rhythm for every night, from jazz and blues to karaoke,
                comedy, live band sessions, and Sunday specials.
              </p>
              <Link
                href="/events"
                className="button-text mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-white transition-colors hover:bg-brand-green-dark"
              >
                View Event Details <ArrowRight size={16} />
              </Link>
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[2rem] border border-brand-brown/10 bg-white shadow-2xl shadow-brand-brown/10"
            >
              <img
                src={WEEKLY_LINEUP_FLYER}
                alt="Official CalendersGH weekly lineup flyer for live entertainment in Takoradi"
                className="h-auto w-full"
              />
            </motion.figure>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="weekly-lineup" className="bg-brand-cream py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow mb-2">
              Weekly Lineup
            </p>
            <h2 className="section-title text-brand-brown">Every Night Has a Vibe</h2>
          </div>
          <p className="max-w-xl text-slate-600 leading-relaxed">
            The official Calenders weekly lineup brings music, comedy, karaoke, food specials,
            and live band sessions together across the whole week.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WEEKLY_LINEUP.map((item, index) => (
            <motion.article
              key={item.day}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg border px-3 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:rounded-2xl md:p-6 ${item.colorClass}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] md:text-xs md:tracking-[0.18em]">
                  {item.day}
                </span>
                <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full md:h-8 md:w-8 ${item.iconClass}`}>
                  <Music2 size={14} className="md:h-4 md:w-4" />
                </span>
              </div>
              <h3 className="card-title mt-1.5 text-base md:mt-5 md:text-xl">{item.title}</h3>
              <p className="mt-0.5 text-xs font-semibold opacity-90 md:mt-1 md:text-sm">{item.mood}</p>
              <p className="mt-1.5 text-xs leading-snug opacity-80 md:mt-3 md:text-sm md:leading-relaxed">{item.highlight}</p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
