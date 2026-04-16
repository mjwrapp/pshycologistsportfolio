import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Testimonials', to: 'testimonials' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link to="home" smooth className="cursor-pointer text-2xl font-heading font-bold text-primary-dark dark:text-primary-light">
          Ishita Thapliyal<span className="text-primary text-3xl">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              smooth
              spy
              activeClass="text-primary font-semibold"
              className="cursor-pointer text-pastel-text/80 hover:text-primary dark:text-dark-text/80 dark:hover:text-primary-light transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-primary-dark" />}
          </button>
          <Link 
            to="booking" 
            smooth
            className="cursor-pointer bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 text-sm font-medium"
          >
            Book Session
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2">
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-primary-dark" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20 dark:border-white/5 mt-4"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg py-2 border-b border-black/5 dark:border-white/5 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="booking"
                smooth
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-center bg-primary text-white py-3 rounded-xl font-medium"
              >
                Book Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
