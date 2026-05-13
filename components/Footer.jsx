import { Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Upcoming Events', href: '/events' },
  { name: 'Restaurant', href: '/restaurant' },
  { name: 'Bookings', href: '/booking' },
];
const EVENT_LINKS = ['Weddings', 'Birthdays', 'Corporate', 'Live Gigs', 'Film Night'];

export default function Footer() {
  return (
    <footer className="bg-brand-brown-light py-10 md:py-20 text-brand-cream">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-12 mb-8 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-6">
              <Image
                src="/logo.png"
                alt="Calenders Events Logo"
                width={40}
                height={40}
                className="h-8 w-8 object-contain md:h-10 md:w-10"
              />
              <span className="text-xl md:text-2xl font-display font-bold">CALENDERS</span>
            </Link>
            <p className="text-sm md:text-base text-brand-cream/70 leading-6 md:leading-relaxed mb-5 md:mb-8">
              The premier destination in Takoradi for events, dining, and vibrant nightlife. We bring
              people together in our unique garden atmosphere.
            </p>
            <div className="flex flex-col gap-1.5 md:gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.08em] text-brand-cream/40">
              <div className="flex items-center gap-2">
                <Clock size={12} /> Mon-Thu: 11AM – 1AM
              </div>
              <div className="ml-5">Fri-Sat: 11AM – 2AM</div>
              <div className="ml-5">Sun: 11AM – 11PM</div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-sans font-bold text-base md:text-lg mb-3 md:mb-6">Quick Links</h5>
            <ul className="space-y-2.5 md:space-y-4 text-sm md:text-base text-brand-cream/70">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-green transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event types */}
          <div>
            <h5 className="font-sans font-bold text-base md:text-lg mb-3 md:mb-6">Events</h5>
            <ul className="space-y-2.5 md:space-y-4 text-sm md:text-base text-brand-cream/70">
              {EVENT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-green transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 md:pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center text-xs md:text-sm text-brand-cream/50">
          <p>&copy; 2026 Calenders Events. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5 md:gap-8">
            <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
