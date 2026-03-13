import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, PenTool, Key, Plus, Minus } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Vehicle Protection Analysis',
    description: 'We thoroughly inspect your vehicle\'s paint condition and discuss your driving habits to recommend the perfect protection package.',
  },
  {
    icon: PenTool,
    title: 'Precision Installation',
    description: 'Our certified technicians perform meticulous prep work followed by flawless installation in our climate-controlled studio.',
  },
  {
    icon: Key,
    title: 'Drive With Confidence',
    description: 'Pick up your perfectly protected vehicle. We provide comprehensive aftercare instructions to maintain the finish.',
  },
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="process" className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-medium text-zinc-100 mb-6"
          >
            The <span className="text-amber-500 italic">Process.</span>
          </motion.h2>
          <p className="text-zinc-400 font-light">
            A meticulous journey from inspection to perfection.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 rounded-3xl border border-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-800 text-zinc-400'}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-zinc-100">{step.title}</h3>
                </div>
                <div className={`p-2 rounded-full border transition-colors duration-300 ${openIndex === index ? 'border-amber-500/50 text-amber-500' : 'border-zinc-700 text-zinc-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8"
                  >
                    <p className="text-zinc-400 leading-relaxed font-light pl-[88px]">
                      {step.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
