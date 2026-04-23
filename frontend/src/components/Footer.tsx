import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (to: string) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-white/30 dark:bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <RouterLink to="/" className="cursor-pointer text-xl font-heading font-bold text-primary-dark dark:text-primary-light">
            Ishita Thapliyal<span className="text-primary text-2xl">.</span>
          </RouterLink>
          <p className="text-sm opacity-60 mt-2">Compassionate therapy for a better tomorrow.</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium opacity-80">
          {isHome ? (
            <>
              <ScrollLink to="about" smooth className="cursor-pointer hover:text-primary transition-colors">About</ScrollLink>
              <ScrollLink to="services" smooth className="cursor-pointer hover:text-primary transition-colors">Services</ScrollLink>
              <ScrollLink to="contact" smooth className="cursor-pointer hover:text-primary transition-colors">Contact</ScrollLink>
            </>
          ) : (
            <>
              <button onClick={() => handleNavClick('about')} className="cursor-pointer hover:text-primary transition-colors">About</button>
              <button onClick={() => handleNavClick('services')} className="cursor-pointer hover:text-primary transition-colors">Services</button>
              <button onClick={() => handleNavClick('contact')} className="cursor-pointer hover:text-primary transition-colors">Contact</button>
            </>
          )}
        </div>
        
        <div className="text-sm opacity-50">
          &copy; {new Date().getFullYear()} Ishita Thapliyal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
