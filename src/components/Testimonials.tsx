import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Michael T.',
    car: 'Porsche 911 GT3',
    text: 'The attention to detail is unmatched. They wrapped my GT3 in stealth PPF and it looks factory. The edges are perfectly tucked.',
  },
  {
    name: 'Sarah L.',
    car: 'Tesla Model S Plaid',
    text: 'Got the Enthusiast package. The ceramic coating makes washing the car incredibly easy, and the gloss is deeper than when I bought it.',
  },
  {
    name: 'David R.',
    car: 'BMW M5 CS',
    text: 'True professionals. They found and corrected factory paint defects before applying the film. My car is now bulletproof for the track.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-8 mt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            Client <span className="text-amber-500">Experiences.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-zinc-300 mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <div className="font-bold text-white">{review.name}</div>
                <div className="text-sm text-amber-500">{review.car}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
