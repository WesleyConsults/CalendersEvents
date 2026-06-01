import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import SectionHeading from '@/components/SectionHeading';

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: 'Our Location',
    value: 'Revert Lane, Harbour Area (Near Vienna Beach), Takoradi, Ghana',
  },
  { icon: Phone, label: 'Phone Number', value: '+233 24 378 8907' },
  { icon: Mail, label: 'Email Address', value: 'calenderseventsgh@gmail.com' },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://www.instagram.com/calendersevents?igsh=ZGJxNXY4djkyZDdm', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/CalendersEvents?mibextid=wwXIfr&mibextid=wwXIfr', label: 'Facebook' },
  { icon: Twitter, href: null, label: 'Twitter' },
];

export default function Contact() {
  return (
    <>
      <BookingForm sectionId="book-event" />
      <section id="contact" className="py-12 md:py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Contact details */}
            <div>
              <SectionHeading title="Let's Connect" subtitle="Find Us" />
              <div className="space-y-8">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="shrink-0 pt-0.5 text-brand-green">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-brown text-lg">{label}</h4>
                      <p className="text-slate-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                {SOCIAL_LINKS.filter(({ href }) => href).map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 rounded-full bg-brand-brown text-brand-cream flex items-center justify-center hover:bg-brand-green transition-all hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Embedded map */}
            <div className="h-[400px] md:h-full min-h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative border-4 border-white shadow-xl">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center flex-col gap-4">
                <MapPin size={48} className="text-brand-green" />
                <span className="font-bold text-brand-brown">Interactive Map Loading...</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3975.355494126099!2d-1.7516819999999997!3d4.8799899999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTInNDguMCJOIDE°NDUnMDYuMSJX!5e0!3m2!1sen!2sgh!4v1777470819105!5m2!1sen!2sgh"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Calenders Events location map"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
