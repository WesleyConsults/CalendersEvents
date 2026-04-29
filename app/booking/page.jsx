import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: "Book an Event | Calenders Events Bar & Lounge",
  description: "Ready to host your event? Fill out our booking form or contact us via WhatsApp for instant confirmation.",
};

export default function BookingPage() {
  return (
    <main className="pt-20">
      <BookingForm />
    </main>
  );
}
