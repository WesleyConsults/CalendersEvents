'use client';

import { useState } from 'react';
import { Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';

const EVENT_TYPES = [
  'Dining Reservation',
  'Wedding Celebration',
  'Birthday Party',
  'Corporate Event',
  'Other',
];

const INITIAL_FORM = {
  name: '',
  date: '',
  guests: '',
  eventType: 'Dining Reservation',
};

export default function BookingForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a brief processing delay for UX
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(INITIAL_FORM);
    }, 800);
    // Auto-reset the success state after 6 seconds
    setTimeout(() => setSubmitted(false), 7000);
  };

  return (
    <section id="booking" className="py-24 bg-brand-green relative overflow-hidden">
      {/* Decorative background watermark */}
      <div className="absolute top-0 right-0 p-16 opacity-[0.07] pointer-events-none select-none">
        <Calendar size={420} strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="text-brand-cream/60 font-semibold tracking-widest uppercase text-xs block mb-2">
            Make a Reservation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Ready to Book Your Event?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* ── Form Column ── */}
          <div className="md:w-[55%] p-8 md:p-12">
            <h3 className="text-2xl font-bold text-brand-brown mb-1">Book Your Experience</h3>
            <p className="text-slate-500 text-sm mb-8">
              Fill out the form and we&apos;ll confirm your booking within 24 hours.
            </p>

            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center py-14 gap-4 text-center">
                <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <CheckCircle2 size={48} className="text-brand-green" />
                </div>
                <h4 className="text-2xl font-bold text-brand-brown">Booking request sent!</h4>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                  We&apos;ll reach out shortly to confirm the details. Can&apos;t wait to host you at
                  Calenders Events!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-brand-green font-semibold underline underline-offset-4 hover:text-brand-green-dark transition-colors"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Kwame Mensah"
                    className="w-full bg-brand-cream/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition"
                  />
                </div>

                {/* Date + Guests */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
                    >
                      Date
                    </label>
                    <input
                      id="date"
                      required
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-brand-cream/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
                    >
                      Guests
                    </label>
                    <input
                      id="guests"
                      required
                      type="number"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      min="1"
                      max="500"
                      placeholder="e.g. 4"
                      className="w-full bg-brand-cream/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition"
                    />
                  </div>
                </div>

                {/* Event type */}
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-xs font-bold uppercase tracking-wider text-brand-green mb-1.5"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className="w-full bg-brand-cream/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green/30 transition"
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-green text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-green/25 hover:bg-brand-green-dark disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── WhatsApp Column ── */}
          <div className="md:w-[45%] p-8 md:p-12 bg-brand-cream flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-slate-100">
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-green/20">
              <MessageCircle size={36} />
            </div>
            <h3 className="text-xl font-bold text-brand-brown mb-3">Prefer WhatsApp?</h3>
            <p className="text-slate-500 text-sm mb-8 max-w-[220px] leading-relaxed">
              Message us directly for a quick response and instant confirmation.
            </p>
            <a
              href="https://wa.me/233502584606"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-7 py-3.5 rounded-xl font-bold flex items-center gap-2.5 transition-all shadow-lg shadow-green-500/20 text-sm"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </a>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-brand-brown/10 w-full grid grid-cols-2 divide-x divide-brand-brown/10">
              <div className="text-center pr-4">
                <span className="block text-2xl font-bold text-brand-green">5.0 ★</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 block">
                  Google Rating
                </span>
              </div>
              <div className="text-center pl-4">
                <span className="block text-2xl font-bold text-brand-green">1.2k+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 block">
                  Events Hosted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
