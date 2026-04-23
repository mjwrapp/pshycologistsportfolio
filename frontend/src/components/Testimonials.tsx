import SectionWrapper from './SectionWrapper';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Therapy with Ishita changed my life. I learned how to communicate my needs effectively, and my relationship with my partner has never been stronger.",
    author: "S. K.",
    role: "Couples Therapy Client"
  },
  {
    text: "She provides an incredibly safe space. I came in struggling with severe anxiety, and her coping strategies have given me my life back.",
    author: "Anonymous",
    role: "Individual Therapy Client"
  },
  {
    text: "Her approach is gentle yet profound. In just 6 months, we resolved deep family issues I thought would haunt me forever. Truly grateful.",
    author: "M. R.",
    role: "Family Therapy Client"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionWrapper id="testimonials" className="bg-primary/5 dark:bg-primary/10">
      <div className="max-w-4xl mx-auto text-center relative pt-8 pb-12">
        <Quote size={64} className="mx-auto text-primary/20 mb-8" />
        
        <div className="h-48 md:h-40 flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full px-4"
            >
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-6">
                "{testimonials[current].text}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{testimonials[current].author}</h4>
                <p className="text-sm opacity-60">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-primary' : 'w-2 bg-primary/30'}`} />
            ))}
          </div>
          <button onClick={next} className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
