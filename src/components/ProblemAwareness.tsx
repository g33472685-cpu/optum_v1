import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProblemAwareness() {
  const images = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Left: Carousel Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden h-[600px] group"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              alt="Luxury car in studio"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
          
          {/* Navigation */}
          <div className="absolute bottom-6 right-6 flex gap-2 transition-opacity duration-300">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors text-white">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors text-white">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-10 rounded-3xl border border-zinc-800"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-zinc-100">
              You Want the Best for What Matters
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              With our unpredictable roads and intense heat, protection isn't optional—it's essential. That's why many vehicle owners want top-quality care for their cars and trucks. But finding a trusted expert to protect and maintain them can be challenging.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900/50 p-10 rounded-3xl border border-zinc-800"
          >
            <h3 className="text-2xl font-medium mb-8 text-zinc-100">
              Without the right team, the right products, and the right process, you're left dealing with:
            </h3>
            <ul className="space-y-6">
              {[
                "Inexperienced techs who wing it instead of doing it right",
                "Shoddy work that ends up costing you more",
                "Low-quality materials that fail within weeks",
                "Pushy sales tactics that make you feel pressured"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
