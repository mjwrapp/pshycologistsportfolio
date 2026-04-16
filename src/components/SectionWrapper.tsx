import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function SectionWrapper({ children, id, className = "" }: { children: ReactNode, id: string, className?: string }) {
  return (
    <motion.section
      id={id}
      className={`py-24 relative z-10 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}
