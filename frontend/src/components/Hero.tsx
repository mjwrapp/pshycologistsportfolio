import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 w-full">
        
        <motion.div 
          className="flex-1 text-center lg:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary-dark dark:text-primary-light mb-6 border border-primary/20"
          >
            Safe. Confidential. Supportive.
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Find Balance in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Relationships</span> & Within Yourself
          </h1>
          <p className="text-lg md:text-xl text-pastel-text/80 dark:text-dark-text/80 mb-10 max-w-2xl mx-auto lg:mx-0">
            A compassionate space to explore your emotions, heal relationship dynamics, and rediscover your authentic self with professional guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link 
              to="/booking"
              className="cursor-pointer bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/30 w-full sm:w-auto text-center"
            >
              Book Appointment Now
            </Link>
            <Link 
              to="/#services"
              className="cursor-pointer px-8 py-4 rounded-full text-lg font-medium glass glass-hover w-full sm:w-auto text-center"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 relative w-full max-w-lg lg:ml-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative rounded-t-full rounded-b-3xl overflow-hidden glass p-4 animate-float shadow-xl">
            <img 
              src="/assets/therapist.png" 
              alt="Ishita Thapliyal - Therapist" 
              className="w-full h-auto max-h-[600px] object-cover rounded-t-[calc(9999px-1rem)] rounded-b-2xl object-top filter contrast-125 saturate-110"
            />
            <div className="absolute bottom-10 -left-6 md:-left-12 glass px-6 py-4 rounded-2xl flex items-center gap-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-primary/20 dark:bg-primary/30 text-primary-dark dark:text-primary-light w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                8+
              </div>
              <div>
                <p className="font-bold text-sm">Years of</p>
                <p className="text-xs opacity-80">Experience</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
