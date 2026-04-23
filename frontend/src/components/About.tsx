import SectionWrapper from './SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 order-2 md:order-1 relative">
          <div className="glass p-6 rounded-[2rem] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="aspect-[4/5] bg-primary/10 rounded-2xl overflow-hidden relative">
              {/* Optional: secondary image for about section can go here. For now a gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-pastel-blue/40 mix-blend-overlay"></div>
              <img 
                src="/assets/therapist.png" 
                alt="Ishita Thapliyal" 
                className="w-full h-full object-cover object-center filter grayscale-[20%] sepia-[10%] opacity-90"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Dedicated to Your Emotional Well-Being</h2>
          <div className="space-y-4 text-pastel-text/80 dark:text-dark-text/80 text-lg">
            <p>
              Hi, I'm Ishita Thapliyal. For over 8 years, I've had the privilege of guiding individuals and couples through their most challenging emotional landscapes.
            </p>
            <p>
              My approach is rooted in empathy, evidence-based practices, and a deep understanding that no two journeys are alike. I believe therapy should be a safe, non-judgmental space where you feel genuinely heard and understood.
            </p>
            <p>
              Whether you are looking to mend relationships, manage anxiety, or ignite personal growth, we can navigate this path together.
            </p>
          </div>
          <div className="mt-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_placeholder.svg" alt="Signature" className="h-12 opacity-50 dark:invert" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
