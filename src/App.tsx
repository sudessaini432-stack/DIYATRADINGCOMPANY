import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import WhyUs from '@/components/WhyUs';
import Products from '@/components/Products';
import Customization from '@/components/Customization';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-50 text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhyUs />
        <Products />
        <Customization />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
