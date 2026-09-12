import About from '@/components/publicPage/About';
import Contact from '@/components/publicPage/Contact';
import HeroSection from '@/components/publicPage/Hero';
import Work from '@/components/publicPage/Work';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
