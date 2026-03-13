import { motion } from 'motion/react';

const stats = [
  { value: '50k+', label: 'Vehicles Protected' },
  { value: '100%', label: 'Certified Technicians' },
  { value: 'Climate', label: 'Controlled Studio' },
  { value: 'Premium', label: 'Brands Only' },
];

export default function Trust() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-zinc-400 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
