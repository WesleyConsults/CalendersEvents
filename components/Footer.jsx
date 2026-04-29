import { Clock } from 'lucide-react';
import Image from 'next/image';

const QUICK_LINKS = ['Home', 'About Us', 'Upcoming Events', 'Menu', 'Bookings'];
const EVENT_LINKS = ['Weddings', 'Birthdays', 'Corporate', 'Live Gigs', 'Film Night'];

export default function Footer() {
  return (
    <footer className="bg-brand-brown-light py-20 text-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.png"
                alt="Calenders Events Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-display font-bold tracking-tight">CALENDERS</span>
            </div>
            <p className="text-brand-cream/70 leading-relaxed mb-8">
              The premier destination in Takoradi for events, dining, and vibrant nightlife. We bring
              people together in our unique garden atmosphere.
            </p>
            <div className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-brand-cream/40">
              <div className="flex items-center gap-2">
                <Clock size={14} /> Mon-Thu: 11AM – 1AM
              </div>
              <div className="ml-5">Fri-Sat: 11AM – 2AM</div>
              <div className="ml-5">Sun: 11AM – 11PM</div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-bold text-xl mb-6">Quick Links</h5>
            <ul className="space-y-4 text-brand-cream/70">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-green transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event types */}
          <div>
            <h5 className="font-bold text-xl mb-6">Events</h5>
            <ul className="space-y-4 text-brand-cream/70">
              {EVENT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-green transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-bold text-xl mb-6">Newsletter</h5>
            <p className="text-brand-cream/70 mb-6 font-light">
              Get notified about upcoming events and special menu releases.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="email@address.com"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 ring-brand-green"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-green text-white px-4 rounded-lg font-bold text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-cream/50">
          <p>&copy; 2026 Calenders Events. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
