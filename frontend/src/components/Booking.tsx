import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CreditCard, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import PricingCard from './PricingCard';
import BookingForm from './BookingForm';

const sessionOptions = [
  {
    title: '30 min session',
    copy: 'A focused check-in for immediate support and gentle guidance.',
  },
  {
    title: '60 min session',
    copy: 'A deeper, restorative space for exploration, processing, and growth.',
  },
];

const modeOptions = [
  {
    title: 'Video Call',
    copy: 'A warm, face-to-face experience from wherever you feel safe.',
  },
  {
    title: 'Audio Call',
    copy: 'A calm, private session with minimal visual distraction.',
  },
];

const pricingPlans = [
  {
    title: 'Single Session',
    price: '$120',
    benefits: ['Personalized support', 'Flexible scheduling', 'Calming guidance'],
    badge: '',
  },
  {
    title: '5 Session Package',
    price: '$550',
    benefits: ['10% savings', 'Weekly continuity', 'Progress tracking'],
    badge: 'Most Popular',
  },
  {
    title: '10 Session Package',
    price: '$1,000',
    benefits: ['Best value', 'Deep healing focus', 'Priority scheduling'],
    badge: '',
  },
];

export default function Booking() {
  const [selectedPackage, setSelectedPackage] = useState('5 Session Package');
  const [selectedSession, setSelectedSession] = useState('60 min session');
  const [selectedMode, setSelectedMode] = useState('Video Call');

  return (
    <div className="relative overflow-hidden min-h-screen pb-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-16 right-0 w-80 h-80 rounded-full bg-pastel-lavender/70 blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-16 left-1/2 w-96 h-96 rounded-full bg-white/80 blur-3xl dark:bg-primary/10 animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        <SectionWrapper id="booking-hero" className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4"
            >
              <Sparkles size={18} /> Soft, calming booking flow
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Book Your Session
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-pastel-text/80 dark:text-dark-text/80 max-w-3xl mx-auto"
            >
              Choose a caring, simple pathway to emotional safety and meaningful change. Your well-being is held gently by a therapist who listens with warmth and clarity.
            </motion.p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="session-details">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-[2rem] border border-white/60 p-8"
            >
              <div className="mb-6">
                <span className="text-primary uppercase tracking-[0.35em] text-xs font-semibold">Session Details</span>
                <h2 className="text-3xl font-bold mt-4">Duration Options</h2>
                <p className="mt-3 text-pastel-text/80 dark:text-dark-text/80">Pick the pace that feels most supportive for your first session.</p>
              </div>
              <div className="grid gap-4">
                {sessionOptions.map((session) => (
                  <div key={session.title} className="rounded-3xl border border-black/10 dark:border-white/10 p-5 bg-white/80 dark:bg-black/20 shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">{session.title}</h3>
                    <p className="text-pastel-text/80 dark:text-dark-text/80">{session.copy}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass rounded-[2rem] border border-white/60 p-8"
            >
              <div className="mb-6">
                <span className="text-primary uppercase tracking-[0.35em] text-xs font-semibold">Mood & Mode</span>
                <h2 className="text-3xl font-bold mt-4">Mode of Support</h2>
                <p className="mt-3 text-pastel-text/80 dark:text-dark-text/80">Select the environment that helps you feel safest and most present.</p>
              </div>
              <div className="grid gap-4">
                {modeOptions.map((mode) => (
                  <div key={mode.title} className="rounded-3xl border border-black/10 dark:border-white/10 p-5 bg-white/80 dark:bg-black/20 shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">{mode.title}</h3>
                    <p className="text-pastel-text/80 dark:text-dark-text/80">{mode.copy}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="packages">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-primary uppercase text-sm tracking-[0.35em] font-semibold">Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Flexible plans for every step.</h2>
            <p className="mt-3 text-pastel-text/80 dark:text-dark-text/80">Choose a plan that supports consistency and progress with gentle, trustworthy care.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                benefits={plan.benefits}
                badge={plan.badge}
                selected={selectedPackage === plan.title}
                onSelect={() => setSelectedPackage(plan.title)}
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="booking-form">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-[2rem] border border-white/60 p-8"
            >
              <span className="text-primary uppercase tracking-[0.35em] text-xs font-semibold">Booking Form</span>
              <h2 className="text-3xl font-bold mt-4">Ready to schedule?</h2>
              <p className="mt-3 text-pastel-text/80 dark:text-dark-text/80">Share a few details and we’ll prepare a calm, confidential session tailored to you.</p>
              <div className="mt-8 space-y-4 text-sm text-pastel-text/80 dark:text-dark-text/80">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-primary" />
                  <span>Sessions are private, secure, and centered around your comfort.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard size={18} className="text-primary" />
                  <span>All booking requests are handled with confidentiality and warmth.</span>
                </div>
              </div>
            </motion.div>
            <BookingForm
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
              selectedSession={selectedSession}
              setSelectedSession={setSelectedSession}
              selectedMode={selectedMode}
              setSelectedMode={setSelectedMode}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper id="payment">
          <div className="glass rounded-[2rem] border border-white/60 p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-primary uppercase tracking-[0.35em] text-xs font-semibold">Payment</span>
                <h2 className="text-3xl font-bold mt-4">Trusted payment preview</h2>
                <p className="mt-3 text-pastel-text/80 dark:text-dark-text/80 max-w-2xl">
                  Choose the payment method that feels right for you. This is a preview interface for comfortable checkout flow.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white/80 dark:bg-black/20 p-6 border border-black/10 dark:border-white/10 shadow-sm w-full max-w-md">
                <div className="grid gap-4">
                  {['UPI', 'Card', 'Net Banking'].map((method) => (
                    <div key={method} className="rounded-3xl border border-black/10 dark:border-white/10 p-4 bg-white dark:bg-dark-bg/80 text-sm font-medium">
                      {method}
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full rounded-3xl bg-primary text-white py-4 font-semibold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all">
                  Proceed to Payment
                </button>
                <p className="mt-4 text-center text-pastel-text/80 dark:text-dark-text/80 text-sm">
                  Secure & Confidential
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
