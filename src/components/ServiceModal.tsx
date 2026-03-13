import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Zap, Sun, CheckCircle } from 'lucide-react';
import PackageBrowser from './PackageBrowser';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  image: string;
}

export default function ServiceModal({ isOpen, onClose, title, subtitle, image }: ModalProps) {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl h-full md:h-auto max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-0">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={image}
                alt={title}
                className="w-full h-64 md:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8 md:p-12 space-y-16">
                {/* Header */}
                <div>
                  <p className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2">
                    {subtitle}
                  </p>
                  <h2 className="text-4xl md:text-6xl font-sans font-light text-white mb-6 uppercase tracking-tight">
                    {title}
                  </h2>
                </div>

                {/* Package Browser */}
                <section>
                  <PackageBrowser />
                </section>

                {/* What It Is */}
                <div>
                  <h3 className="text-3xl font-display text-white mb-6">What is Paint Protection Film?</h3>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <p className="text-zinc-400 leading-relaxed text-lg">
                      Paint Protection Film (PPF) is a transparent urethane layer applied to a vehicle’s painted surfaces.
                      It protects the paint from rock chips, scratches, road debris, and environmental damage while remaining virtually invisible.
                    </p>
                    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
                      <div className="h-24 bg-zinc-800 rounded-lg mb-2 flex items-center justify-center border-b-4 border-amber-500">
                        <span className="text-zinc-500 text-sm">Film Layer</span>
                      </div>
                      <div className="h-12 bg-zinc-700 rounded-lg flex items-center justify-center">
                        <span className="text-zinc-400 text-sm">Car Paint</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How It Works */}
                <div>
                  <h3 className="text-3xl font-display text-white mb-8">How It Works</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg mb-8">
                    A flexible urethane film absorbs impact from small debris. The surface layer contains self-healing polymers. 
                    Heat from the sun or warm water allows scratches to disappear. The film acts as a sacrificial protective barrier.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: ShieldCheck, title: "Impact Protection" },
                      { icon: Zap, title: "Self Healing Surface" },
                      { icon: Sun, title: "UV Protection" }
                    ].map((item, i) => (
                      <div key={i} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
                        <item.icon className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                        <h4 className="text-white font-medium">{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div>
                  <h3 className="text-3xl font-display text-white mb-8">Benefits of Paint Protection Film</h3>
                  <div className="space-y-6">
                    {[
                      { title: "Self-Healing Technology", desc: "Light scratches and swirl marks vanish with heat exposure from the sun or engine." },
                      { title: "Impact & Scratch Resistance", desc: "Defends against rock chips, road debris, bug acids, and minor abrasions." },
                      { title: "Long-Term Paint Protection", desc: "Prevents UV oxidation and chemical etching, preserving showroom quality for years." }
                    ].map((benefit, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4"
                      >
                        <CheckCircle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{benefit.title}</h4>
                          <p className="text-zinc-400">{benefit.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Why It Is Different */}
                <div>
                  <h3 className="text-3xl font-display text-white mb-8">Why PPF Is Better Than Other Protection</h3>
                  <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 overflow-hidden">
                    <svg viewBox="0 0 800 400" className="w-full h-auto">
                      {/* Circles */}
                      <circle cx="250" cy="200" r="150" fill="none" stroke="#fff" strokeWidth="2" />
                      <circle cx="450" cy="200" r="150" fill="none" stroke="#06b6d4" strokeWidth="2" />
                      
                      {/* Labels */}
                      <text x="150" y="50" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">CERAMIC COATING</text>
                      <text x="550" y="50" fill="#06b6d4" fontSize="16" fontWeight="bold" textAnchor="middle">PAINT PROTECTION FILM</text>
                      
                      {/* Left Circle Only */}
                      <text x="150" y="120" fill="white" fontSize="12" textAnchor="middle">Creates hydrophobic surface</text>
                      <text x="150" y="160" fill="white" fontSize="12" textAnchor="middle">Keeps contaminants off paint</text>
                      <text x="150" y="200" fill="white" fontSize="12" textAnchor="middle">Improves ease of car cleaning</text>
                      <text x="150" y="240" fill="white" fontSize="12" textAnchor="middle">Glossy finish</text>
                      <text x="150" y="280" fill="white" fontSize="12" textAnchor="middle">No more waxing</text>
                      
                      {/* Right Circle Only */}
                      <text x="550" y="120" fill="#06b6d4" fontSize="12" textAnchor="middle">Protects against rock chips</text>
                      <text x="550" y="160" fill="#06b6d4" fontSize="12" textAnchor="middle">Prevents hard water spots</text>
                      <text x="550" y="200" fill="#06b6d4" fontSize="12" textAnchor="middle">Absorbs micro scratches</text>
                      <text x="550" y="240" fill="#06b6d4" fontSize="12" textAnchor="middle">Prevents swirl marks</text>
                      <text x="550" y="280" fill="#06b6d4" fontSize="12" textAnchor="middle">Self-healing technology</text>
                      
                      {/* Intersection */}
                      <text x="350" y="140" fill="white" fontSize="12" textAnchor="middle">Prevents chemical etching</text>
                      <text x="350" y="170" fill="white" fontSize="12" textAnchor="middle">Chemical resistance</text>
                      <text x="350" y="200" fill="white" fontSize="12" textAnchor="middle">Car looks newer for longer</text>
                      <text x="350" y="230" fill="white" fontSize="12" textAnchor="middle">Prevents oxidation</text>
                      <text x="350" y="260" fill="white" fontSize="12" textAnchor="middle">Invisible finish</text>
                    </svg>
                  </div>
                </div>

                {/* Visual Demonstration */}
                <div>
                  <h3 className="text-3xl font-display text-white mb-8">Visual Demonstration</h3>
                  <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-zinc-800">
                    <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" alt="Protected" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <img 
                      src="https://images.unsplash.com/photo-1597403864054-6eb13ffe16e6?q=80&w=2070&auto=format&fit=crop" 
                      alt="Unprotected" 
                      className="absolute inset-0 w-full h-full object-cover" 
                      style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                      referrerPolicy="no-referrer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                    />
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/50 pointer-events-none" style={{ left: `${sliderValue}%` }}>
                      <div className="absolute top-1/2 -left-3 -mt-3 w-6 h-6 bg-white rounded-full shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8 border-t border-zinc-800">
                  <h3 className="text-3xl font-display text-white mb-8">Protect Your Vehicle Today</h3>
                  <button 
                    onClick={() => { onClose(); /* Add scroll logic here */ }}
                    className="bg-amber-500 text-zinc-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-colors"
                  >
                    GET A QUOTE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
