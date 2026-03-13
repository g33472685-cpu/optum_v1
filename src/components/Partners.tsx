import { motion } from 'motion/react';

const partners = [
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

export default function Partners() {
  return (
    <section className="bg-zinc-950 relative overflow-hidden border-t border-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
          Our Partners
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-wider uppercase">
          Certified Installers
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Optum Car Care is proud to be a certified installer in automotive paint protection film and 
          window tinting along with vinyl wrapping and other services! By using some of the best 
          products in the industry, we guarantee and standby our products and craftsmanship.
        </p>
      </div>

      {/* Marquee Carousel - Full Width */}
      <div className="relative flex overflow-hidden w-full py-10 border-y border-zinc-900 bg-zinc-900/20">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={`text-white flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-default ${partner.style}`}
            >
              {partner.prefix && partner.name === 'N2ITIVE' ? (
                <div className="flex flex-col items-center">
                  <span className="text-2xl italic font-black mb-1">{partner.prefix}</span>
                  <span className="text-sm">{partner.name}</span>
                </div>
              ) : (
                <>
                  {partner.prefix && <span className="text-3xl">{partner.prefix}</span>}
                  <span>{partner.name}</span>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
