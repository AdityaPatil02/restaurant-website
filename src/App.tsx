import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Menu />
        <Gallery />
        <About />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
