import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Simulator from '@/components/Simulator';
import Education from '@/components/Education';
import Engagement from '@/components/Engagement';
import Partners from '@/components/Partners';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-teal-500/30">
      <Navbar />
      <Hero />
      <Simulator />
      <Education />
      <Engagement />
      <Partners />
      <AboutUs />
      <Footer />
    </main>
  );
}
