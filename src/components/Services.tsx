import { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Sun, Car, Droplets, Wind } from 'lucide-react';
import ServiceModal from './ServiceModal';

const services = [
  {
    icon: Shield,
    title: 'Paint Protection Film',
    description: 'Self-healing invisible shield against rock chips, scratches, and road debris.',
    image: 'https://images.unsplash.com/photo-1594475583723-5e937d745914?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Ceramic Coating',
    description: 'Nano-ceramic technology for extreme gloss, hydrophobicity, and UV protection.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Sun,
    title: 'Window Tinting',
    description: 'Premium heat rejection and UV protection with flawless installation.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Car,
    title: 'Vinyl Wrap',
    description: 'Transform your vehicle\'s appearance with premium color change wraps.',
    image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Droplets,
    title: 'Premium Detailing',
    description: 'Meticulous interior and exterior detailing to restore showroom condition.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Wind,
    title: 'Windshield Protection',
    description: 'Impact-resistant film to prevent windshield cracks and pitting.',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025&auto=format&fit=crop',
  },
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="services" className="bg-zinc-950 relative">
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="PAINT PROTECTION FILM"
        subtitle="Invisible Protection for Your Car's Paint"
        image="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-8 md:w-2/3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            Uncompromising <span className="text-amber-500">Protection.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            We utilize the industry's most advanced materials and techniques to preserve and enhance your vehicle's finish.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 md:row-span-2 cursor-pointer' : ''
              }`}
              onClick={index === 0 ? () => setIsModalOpen(true) : undefined}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <div className="w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur border border-zinc-700 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:border-amber-400 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-zinc-300 group-hover:text-zinc-950 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">{service.title}</h3>
                <p className="text-zinc-300 text-xs leading-relaxed max-w-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
