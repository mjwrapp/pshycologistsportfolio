import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBlobs from './components/FloatingBlobs';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode based on user preference or time
  useEffect(() => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative overflow-hidden min-h-screen">
      <FloatingBlobs />
      <div className="relative z-10 font-sans selection:bg-primary-light/50 selection:text-pastel-text dark:selection:bg-primary-dark/80 dark:selection:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChoose />
          <Testimonials />
          <Booking />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
