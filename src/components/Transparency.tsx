import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const roadsideItems = [
  'Manual blade cutting on car body',
  'Dust contamination under film',
  'Short edge-wrapping (prone to peel)',
  'PVC/TPH cheap materials',
  'No dust-free climate control'
];

const studioItems = [
  'DAP Computer Precision Plotter',
  'Medical-grade air filtration system',
  'Deep-tuck edge wrapping for invisibility',
  'Strictly Premium TPU Film Only',
  'Multi-point quality inspection'
];

export default function Transparency() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Transparency
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Where Most Installers Fail.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Roadside Shop */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-zinc-800 rounded-2xl p-8"
          >
            <h3 className="text-red-500 text-xl font-bold flex items-center gap-3 mb-8">
              <XCircle className="w-6 h-6" /> THE ROADSIDE SHOP
            </h3>
            <ul className="space-y-6">
              {roadsideItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Studio */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-zinc-800 rounded-2xl p-8"
          >
            <h3 className="text-amber-500 text-xl font-bold flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-6 h-6" /> OUR STUDIO (SINGASANDRA)
            </h3>
            <ul className="space-y-6">
              {studioItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-100">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
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
