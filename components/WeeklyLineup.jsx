'use client';

import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { WEEKLY_LINEUP } from '@/lib/data';

export default function WeeklyLineup() {
  return (
    <section id="weekly-lineup" className="bg-brand-cream py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow mb-2">
              Weekly Lineup
            </p>
            <h2 className="section-title text-brand-brown">Your Week at Calenders</h2>
          </div>
          <p className="max-w-xl text-slate-600 leading-relaxed">
            A simple rhythm guests can remember: live music during the week, karaoke on Saturday,
            and a warm Sunday close with food and band sessions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {WEEKLY_LINEUP.map((item, index) => (
            <motion.article
              key={item.day}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow">
                  {item.day}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-cream px-3 py-1 text-sm font-semibold text-brand-brown">
                  <Clock size={14} /> {item.time}
                </span>
              </div>
              <h3 className="card-title mt-8 text-2xl text-brand-brown">{item.title}</h3>
              <p className="mt-2 font-semibold text-slate-700">{item.mood}</p>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.highlight}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
