import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Clock } from 'lucide-react';

export default function WhyChoose() {
  const points = [
    {
      icon: <Clock size={24} />,
      title: '8+ Years Experience',
      desc: 'Proven track record of positive transformations.',
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Personalized Sessions',
      desc: 'Tailored roadmaps that uniquely fit your life context.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Safe & Confidential space',
      desc: '100% privacy and a judgment-free environment.',
    }
  ];

  return (
    <SectionWrapper id="why-choose">
      <div className="glass p-10 md:p-16 rounded-[3rem] text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Choose Ishita?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {points.map((pt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white dark:bg-dark-card shadow-lg flex items-center justify-center text-primary mb-6 animate-float" style={{ animationDelay: `${idx}s` }}>
                {pt.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{pt.title}</h4>
              <p className="text-pastel-text/70 dark:text-dark-text/70">{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
