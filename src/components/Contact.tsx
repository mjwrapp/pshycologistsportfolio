import SectionWrapper from './SectionWrapper';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-pastel-text/80 dark:text-dark-text/80">Have questions before booking? Feel free to reach out.</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        <div className="glass p-6 rounded-2xl flex-1 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center text-primary-dark dark:text-primary-light mb-4">
            <Phone size={24} />
          </div>
          <h4 className="font-bold mb-2">Call Me</h4>
          <p className="text-sm opacity-80">+91 98765 43210</p>
        </div>

        <div className="glass p-6 rounded-2xl flex-1 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center text-primary-dark dark:text-primary-light mb-4">
            <Mail size={24} />
          </div>
          <h4 className="font-bold mb-2">Email Me</h4>
          <p className="text-sm opacity-80">hello@ishitathapliyal.com</p>
        </div>

        <div className="glass p-6 rounded-2xl flex-1 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center text-primary-dark dark:text-primary-light mb-4">
            <MapPin size={24} />
          </div>
          <h4 className="font-bold mb-2">Location</h4>
          <p className="text-sm opacity-80">Remote / Online Worldwide</p>
          <div className="flex gap-4 mt-4 text-primary text-sm font-bold">
            <a href="#" className="hover:text-primary-dark transition-colors">Instagram ↗</a>
            <a href="#" className="hover:text-primary-dark transition-colors">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
