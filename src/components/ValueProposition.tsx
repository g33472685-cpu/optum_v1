import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { Briefcase, MessageSquare, SprayCan, Leaf, Car, ShieldCheck, MapPin } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: Briefcase, title: "In-House Training", description: "Technicians trained through our proprietary apprenticeship program." },
  { icon: MessageSquare, title: "Transparent Advice", description: "Clear, tailored advice with transparent pricing." },
  { icon: SprayCan, title: "Premium Products", description: "Only the best brands in the industry." },
  { icon: Leaf, title: "Climate-Controlled Shop", description: "Flawless application in a clean environment." },
  { icon: Car, title: "Complimentary Loaners", description: "Easy access to complimentary loaner cars." },
  { icon: ShieldCheck, title: "Solid Guarantee", description: "Backed by a guarantee that means something." }
];

const FeatureCard: React.FC<{ feature: Feature, index: number }> = ({ feature, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 150, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    
    const centerX = width / 2;
    const centerY = height / 2;
    rotateX.set((clientY - top - centerY) / 20);
    rotateY.set((clientX - left - centerX) / -20);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(245, 158, 11, 0.15), transparent 80%)`,
        }}
      />
      <feature.icon className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function ValueProposition() {
  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="inline-block">Where Craft Meets</span>{' '}
            <motion.span 
              initial={{ color: "#fff" }}
              whileInView={{ color: "#F59E0B" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative inline-block"
            >
              Precision
              <motion.div 
                className="absolute inset-0 bg-amber-500/20 blur-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-xl max-w-2xl mx-auto"
          >
            Every masterpiece begins in the right environment. Our flagship studio is the heart of our operations.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-zinc-900/50 px-6 py-3 rounded-full border border-white/10">
            <MapPin className="w-5 h-5 text-amber-500 animate-bounce" />
            <span className="font-medium text-zinc-300">9th Main Hongasandra, Bengaluru</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
