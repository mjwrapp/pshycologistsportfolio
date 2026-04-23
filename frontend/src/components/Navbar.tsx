import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Testimonials', to: 'testimonials' },
  ];

  const handleNavClick = (to: string) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <RouterLink to="/" className="cursor-pointer text-2xl font-heading font-bold text-primary-dark dark:text-primary-light">
          Ishita Thapliyal student of Nitin Joshi<span className="text-primary text-3xl"></span>
        </RouterLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <RouterLink to="/" className={`cursor-pointer text-sm uppercase tracking-wider font-semibold transition-colors ${isHome ? 'text-primary' : 'text-pastel-text/80 dark:text-dark-text/80 hover:text-primary'}`}>Home</RouterLink>
          {navLinks.map((link) => (
            isHome ? (
              <ScrollLink 
                key={link.to} 
                to={link.to} 
                smooth
                spy
                activeClass="text-primary font-semibold"
                className="cursor-pointer text-pastel-text/80 hover:text-primary dark:text-dark-text/80 dark:hover:text-primary-light transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <button 
                key={link.to}
                onClick={() => handleNavClick(link.to)} 
                className="cursor-pointer text-pastel-text/80 hover:text-primary dark:text-dark-text/80 dark:hover:text-primary-light transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </button>
            )
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-primary-dark" />}
          </button>
          <RouterLink 
            to="/booking" 
            className="cursor-pointer bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 text-sm font-medium"
          >
            Book Session
          </RouterLink>
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
              <RouterLink to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg py-2 border-b border-black/5 dark:border-white/5 font-medium">Home</RouterLink>
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="text-lg py-2 text-left border-b border-black/5 dark:border-white/5 font-medium"
                >
                  {link.name}
                </button>
              ))}
              <RouterLink
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-center bg-primary text-white py-3 rounded-xl font-medium shadow-md shadow-primary/30"
              >
                Book Session
              </RouterLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
