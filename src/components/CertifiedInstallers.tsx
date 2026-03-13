import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const brands = [
  { name: 'XPEL', style: 'font-black italic tracking-tighter text-3xl' },
  { name: 'KPMF', style: 'font-serif font-bold border-2 border-white px-2 py-1 text-xl tracking-widest' },
  { name: 'INOZETEK', style: 'font-light tracking-widest text-xl flex items-center gap-2', prefix: '⨀' },
  { name: 'SunTek', style: 'font-bold italic text-2xl tracking-tight' },
  { name: 'RUPES', style: 'font-black italic text-3xl tracking-tighter' },
  { name: 'N2ITIVE', style: 'font-bold italic text-xl tracking-widest flex flex-col items-center leading-none', prefix: 'N' },
  { name: 'AVERY', style: 'font-black text-2xl tracking-widest flex items-center gap-2', prefix: '◬' },
  { name: "Meguiar's", style: 'font-serif italic font-bold text-2xl tracking-tight' },
  { name: '3M', style: 'font-black text-4xl tracking-tighter' },
  { name: 'STEK USA', style: 'font-bold text-xl tracking-widest flex items-center gap-2', prefix: '⛨' },
];

export default function CertifiedInstallers() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with Lamborghini

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-zinc-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-wider uppercase">
          Certified Installers
        </h2>
      </div>

      <div className="relative flex items-center justify-center gap-8 h-[400px]">
        {brands.map((brand, index) => {
          const isActive = index === activeIndex;
          const offset = index - activeIndex;
          
          return (
            <motion.div
              key={brand.name}
              initial={false}
              animate={{
                x: offset * 250,
                scale: isActive ? 1.2 : 0.8,
                opacity: isActive ? 1 : 0.5,
                zIndex: isActive ? 10 : 1,
              }}
              className="absolute"
            >
              <div className={`rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 flex items-center justify-center shadow-2xl ${isActive ? 'w-64 h-64' : 'w-48 h-48'}`}>
                <div className={`text-white flex items-center justify-center ${brand.style}`}>
                  {brand.prefix && brand.name === 'N2ITIVE' ? (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl italic font-black mb-1">{brand.prefix}</span>
                      <span className="text-sm">{brand.name}</span>
                    </div>
                  ) : (
                    <>
                      {brand.prefix && <span className="text-3xl">{brand.prefix}</span>}
                      <span>{brand.name}</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
