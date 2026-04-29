'use client';

import { motion } from 'motion/react';
import { ChevronRight, Flame } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { MENU_HIGHLIGHTS } from '@/lib/data';

export default function MenuPreview() {
  return (
    <section id="restaurant" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <SectionHeading title="A Taste of Authentic Perfection" subtitle="The Menu" />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-brand-green text-white px-7 py-3 rounded-full font-semibold text-sm shadow-lg shadow-brand-green/20 hover:bg-brand-green-dark transition-colors mb-12"
          >
            View Full Menu <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MENU_HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 group transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Price pill */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-brand-green font-bold text-sm px-3 py-1 rounded-full shadow-sm">
                  {item.price}
                </div>
                {/* Popular badge on first item */}
                {index === 0 && (
                  <div className="absolute top-3 left-3 bg-brand-brown text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Flame size={11} /> Popular
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-brand-brown text-lg leading-tight">{item.name}</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Ghanaian cuisine</p>
                </div>
                <button className="w-9 h-9 rounded-full bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <button className="w-full bg-brand-green text-white py-4 rounded-xl font-semibold text-sm">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
