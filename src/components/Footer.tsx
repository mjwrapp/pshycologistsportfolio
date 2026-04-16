import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-white/30 dark:bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link to="home" smooth className="cursor-pointer text-xl font-heading font-bold text-primary-dark dark:text-primary-light">
            Ishita Thapliyal<span className="text-primary text-2xl">.</span>
          </Link>
          <p className="text-sm opacity-60 mt-2">Compassionate therapy for a better tomorrow.</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium opacity-80">
          <Link to="about" smooth className="cursor-pointer hover:text-primary transition-colors">About</Link>
          <Link to="services" smooth className="cursor-pointer hover:text-primary transition-colors">Services</Link>
          <Link to="contact" smooth className="cursor-pointer hover:text-primary transition-colors">Contact</Link>
        </div>
        
        <div className="text-sm opacity-50">
          &copy; {new Date().getFullYear()} Ishita Thapliyal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
