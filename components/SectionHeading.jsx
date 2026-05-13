'use client';

import { motion } from 'motion/react';

/**
 * Reusable section heading used by About, Events, MenuPreview, Gallery, Contact.
 * Extracted to avoid duplication across all section components.
 */
export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-2"
      >
        {subtitle || 'Discover More'}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="section-title text-brand-brown"
      >
        {title}
      </motion.h2>
    </div>
  );
}
