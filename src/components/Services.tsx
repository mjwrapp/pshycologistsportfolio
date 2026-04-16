import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { HeartHandshake, BrainCircuit, Activity, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <HeartHandshake size={32} />,
    title: 'Relationship Counseling',
    desc: 'Navigate conflicts, improve communication, and rebuild trust in your romantic, familial, or professional relationships.',
  },
  {
    icon: <BrainCircuit size={32} />,
    title: 'Emotional Well-being',
    desc: 'Process complex emotions safely. Learn to regulate feelings of sadness, grief, or overwhelming emotional fatigue.',
  },
  {
    icon: <Activity size={32} />,
    title: 'Stress & Anxiety Support',
    desc: 'Develop practical coping mechanisms to handle modern day stress, panic attacks, and chronic anxiety efficiently.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Personal Growth Coaching',
    desc: 'Discover your authentic self. Break self-sabotaging patterns and build a life aligned with your true values.',
  }
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-white/30 dark:bg-black/10">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">My Services</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Can Support You</h2>
        <p className="max-w-2xl mx-auto text-lg text-pastel-text/80 dark:text-dark-text/80">
          I provide an array of targeted therapeutic services designed to bring clarity and peace into your life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary-dark dark:text-primary-light mb-6 transition-transform group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-pastel-text/70 dark:text-dark-text/70 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
