import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  benefits: string[];
  badge?: string;
  selected: boolean;
  onSelect: () => void;
}

export default function PricingCard({ title, price, benefits, badge, selected, onSelect }: PricingCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onSelect}
      className={`relative text-left rounded-[2rem] border p-8 shadow-xl transition-all duration-300 bg-white/90 dark:bg-dark-card/90 focus:outline-none focus:ring-4 focus:ring-primary/20 ${selected ? 'border-primary ring-2 ring-primary/20 shadow-2xl' : 'border-black/10 dark:border-white/10 hover:border-primary/40'}`}
    >
      {badge ? (
        <span className="absolute top-4 right-4 rounded-full bg-primary text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] shadow-sm">
          {badge}
        </span>
      ) : null}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-4xl font-bold mt-4 text-primary">{price}</p>
      </div>

      <ul className="space-y-4 text-pastel-text/80 dark:text-dark-text/80">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.button>
  );
}
