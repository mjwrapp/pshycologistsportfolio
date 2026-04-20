import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="cta-section">
      <div className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-700"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/20 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pastel-blue/30 blur-[80px] rounded-full"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Ready to Begin?</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Take the First Step Towards Healing</h2>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/booking')}
            className="cursor-pointer bg-primary text-white px-10 py-5 rounded-full text-xl font-medium shadow-[0_10px_30px_rgba(154,130,185,0.4)] hover:shadow-[0_15px_40px_rgba(154,130,185,0.6)] transition-all flex items-center justify-center gap-3 mx-auto mt-4"
          >
            <span>Book Appointment Now</span>
            <span className="text-2xl leading-none">&rarr;</span>
          </motion.button>
        </div>
      </div>
    </SectionWrapper>
  );
}
