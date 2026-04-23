import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Testimonials />
      <CTASection />
      <Contact />
    </motion.div>
  );
}
