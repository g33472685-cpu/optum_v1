import { motion } from 'motion/react';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    description: 'An invisible, self-healing shield that protects your vehicle from rock chips, scratches, and road debris while maintaining a flawless finish.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Self-healing protection', 'Scratch resistance', 'Long-term paint protection']
  },
  {
    id: 'ceramic',
    title: 'Ceramic Coating',
    description: 'Advanced nano-ceramic technology that bonds with your paint to create a durable, high-gloss layer of protection against the elements.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Hydrophobic protection', 'Gloss enhancement', 'Dirt resistance']
  },
  {
    id: 'graphene',
    title: 'Graphene Coating',
    description: 'The latest evolution in automotive protection, offering unparalleled heat dissipation, durability, and resistance to water spotting.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Advanced heat resistance', 'Long durability', 'Anti-static properties']
  },
  {
    id: 'detailing',
    title: 'Car Detailing',
    description: 'Comprehensive rejuvenation of your vehicle, inside and out, restoring it to a pristine, showroom-quality condition.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Interior detailing', 'Exterior detailing', 'Paint restoration']
  },
  {
    id: 'wrapping',
    title: 'Car Wrapping',
    description: 'Transform the look of your vehicle completely with premium vinyl wraps, offering endless color choices and finishes.',
    image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Color change wraps', 'Vinyl protection', 'Custom styling']
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Arrow */}
        <Link to="/" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 mb-12 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Premium Car <span className="text-amber-500">Protection Services.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl"
          >
            Discover our comprehensive range of high-end vehicle protection and detailing services designed to preserve your investment and elevate your driving experience.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {detailedServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 relative group">
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/0 transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">{service.description}</p>
                <ul className="space-y-4 pt-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-amber-500" />
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 glass-card p-12 md:p-20 rounded-3xl border border-zinc-800/50 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-amber-500/5"></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Book Your Vehicle <span className="text-amber-500">Protection Today</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
              Ready to give your vehicle the ultimate protection? Contact us to schedule your service or request a custom quote.
            </p>
            <Link 
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-bold text-lg rounded-full hover:bg-amber-400 transition-colors group"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
