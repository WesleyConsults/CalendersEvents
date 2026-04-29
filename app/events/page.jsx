import Events from '@/components/Events';

export const metadata = {
  title: "Upcoming Events | Calenders Events Bar & Lounge",
  description: "Check out our weekly events including Reggae Thursdays, Karaoke Saturdays, and Sunday Live Band sessions.",
};

export default function EventsPage() {
  return (
    <main className="pt-20">
      <Events />
    </main>
  );
}
