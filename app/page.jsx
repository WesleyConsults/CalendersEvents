import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import MenuPreview from '@/components/MenuPreview';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen selection:bg-brand-green/20 selection:text-brand-green-dark">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <MenuPreview />
      <Gallery />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
}
