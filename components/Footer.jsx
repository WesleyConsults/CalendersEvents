import { Clock, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Upcoming Events', href: '/events' },
  { name: 'Restaurant', href: '/restaurant' },
  { name: 'Bookings', href: '/contact#book-event' },
];
const INSTAGRAM_URL = 'https://www.instagram.com/calendersevents?igsh=ZGJxNXY4djkyZDdm';
const FACEBOOK_URL = 'https://www.facebook.com/CalendersEvents?mibextid=wwXIfr&mibextid=wwXIfr';
const TIKTOK_URL = 'https://www.tiktok.com/@calendersevents';
const LINKEDIN_URL = 'https://www.linkedin.com/in/calenders-events-785594317?utm_source=share_via&utm_content=profile&utm_medium=member_android';

function TikTokIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: 'WhatsApp', href: 'https://wa.me/233243788907', icon: MessageCircle },
  { name: 'Facebook', href: FACEBOOK_URL, icon: Facebook },
  { name: 'Instagram', href: INSTAGRAM_URL, icon: Instagram },
  { name: 'TikTok', href: TIKTOK_URL, icon: TikTokIcon },
  { name: 'LinkedIn', href: LINKEDIN_URL, icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-brand-brown-light py-10 md:py-20 text-brand-cream">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:gap-12 mb-8 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-6">
              <Image
                src="/calenders-wordmark.png"
                alt="Calenders Events Logo"
                width={176}
                height={44}
                className="h-9 w-auto object-contain md:h-11"
              />
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
            <div className="mt-6">
              <h5 className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-brand-cream/50">
                Follow Us
              </h5>
              <div className="mt-3 flex gap-3">
                {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/10 bg-brand-cream/10 text-brand-cream transition-colors hover:border-brand-green hover:bg-brand-green"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
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

        </div>

        {/* Bottom bar */}
        <div className="pt-5 md:pt-8 border-t border-brand-cream/10 text-center text-xs md:text-sm text-brand-cream/50">
          <p>&copy; 2026 Calenders Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
