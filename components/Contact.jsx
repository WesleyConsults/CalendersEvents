import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: 'Our Location',
    value: 'Plot 12, Bamboo Street, East Legon, Accra, Ghana',
  },
  { icon: Phone, label: 'Phone Number', value: '+233 (0) 555 123 456' },
  { icon: Mail, label: 'Email Address', value: 'hello@calendersevents.com' },
];

const SOCIAL_ICONS = [Instagram, Facebook, Twitter];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact details */}
          <div>
            <SectionHeading title="Let's Connect" subtitle="Find Us" />
            <div className="space-y-8">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white text-brand-green flex items-center justify-center shadow-sm shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown text-lg">{label}</h4>
                    <p className="text-slate-600">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              {SOCIAL_ICONS.map((Icon, i) => (
                <button
                  key={i}
                  className="w-12 h-12 rounded-full bg-brand-brown text-brand-cream flex items-center justify-center hover:bg-brand-green transition-all hover:-translate-y-1"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Embedded map */}
          <div className="h-[400px] md:h-full min-h-[400px] rounded-[2.5rem] overflow-hidden relative border-4 border-white shadow-xl">
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center flex-col gap-4">
              <MapPin size={48} className="text-brand-green" />
              <span className="font-bold text-brand-brown">Interactive Map Loading...</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.3323281144!2d-0.18732644999999998!3d5.666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9ca7e868c227%3A0xe9be94519961633a!2sEast%20Legon%2C%20Accra!5e0!3m2!1sen!2sgh!4v1714560000000!5m2!1sen!2sgh"
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
  );
}
