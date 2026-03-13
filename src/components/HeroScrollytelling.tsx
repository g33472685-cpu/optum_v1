import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const stages = [
  {
    label: "01 PERFORMANCE",
    headline: "Protect What Drives You",
    description: "Paint damage from road debris, scratches, and weather can reduce the beauty of your vehicle.",
  },
  {
    label: "02 CRAFT",
    headline: "Invisible Protection",
    description: "Advanced Paint Protection Film creates a durable shield against scratches and debris.",
  },
  {
    label: "03 INNOVATION",
    headline: "Self-Healing Technology",
    description: "Minor scratches vanish with heat, keeping your vehicle flawless.",
  },
  {
    label: "04 CONFIDENCE",
    headline: "Drive With Confidence",
    description: "Premium protection engineered for luxury vehicles.",
  },
];

const backgroundImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583121274602-3e2820c66888?q=80&w=2070&auto=format&fit=crop",
  null,
];

export default function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stage1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const stage2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [0, 1, 0]);
  const stage3Opacity = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 0]);
  const stage4Opacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]);

  const ppfOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const scratchFilter = useTransform(scrollYProgress, [0.5, 0.7], [100, 0]); // Blur/contrast filter
  const overlayOpacity = 1.0; // Fixed opacity
  
  // Cinematic motion
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const panX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  // Increased rotation range to better simulate wheel movement
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 20]); 

  return (
    <section ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-zinc-950">
        {/* Layer 1: Backgrounds */}
        {backgroundImages.map((src, i) => {
          const opacity = useTransform(scrollYProgress, [i * 0.25, i * 0.25 + 0.1, i * 0.25 + 0.15, i * 0.25 + 0.25], [0, 1, 1, 0]);
          if (!src) return <motion.div key={i} className="absolute inset-0 w-full h-full bg-zinc-950" style={{ opacity }} />;
          return (
            <motion.img
              key={i}
              src={src}
              alt={`Background ${i}`}
              style={{ scale, x: panX, opacity }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          );
        })}
        
        {/* Layer 2: Main Object (Car Front) */}
        <motion.img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
          alt="Car front"
          style={{ 
            scale, 
            x: panX,
            rotate: rotation,
            filter: useTransform(scratchFilter, (v) => `contrast(${v}%)`) 
          }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Dark Overlay for better text visibility */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 w-full h-full bg-black" 
        />

        {/* Layer 3: Animated PPF Layer */}
        <motion.div
          style={{ opacity: ppfOpacity }}
          className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-[2px]"
        />

        {/* Main Layout Container */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center z-50">
          {/* Progress Indicator Column */}
          <div className="hidden md:flex w-1/2 flex-col gap-6 pl-24">
            {stages.map((stage, i) => {
              const opacity = useTransform(scrollYProgress, [i * 0.25, i * 0.25 + 0.1, i * 0.25 + 0.2], [0.3, 1, 0.3]);
              return (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-white group-hover:bg-amber-500 transition-colors"
                    style={{ opacity }}
                  />
                  <motion.span 
                    className="text-white text-2xl font-mono tracking-widest uppercase group-hover:text-amber-500 transition-colors"
                    style={{ opacity }}
                  >
                    {stage.label}
                  </motion.span>
                </div>
              );
            })}
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 relative h-full flex items-center justify-center md:justify-start p-6 md:p-12">
            {[stage1Opacity, stage2Opacity, stage3Opacity, stage4Opacity].map((opacity, i) => (
              <motion.div key={i} style={{ opacity }} className="absolute inset-0 flex flex-col items-center md:items-start justify-center p-6 md:p-12">
                <h1 className="font-display text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 text-center md:text-left">
                  {stages[i].headline}
                </h1>
                <p className="text-zinc-300 text-lg md:text-2xl max-w-2xl text-center md:text-left">
                  {stages[i].description}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Bottom Content */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-50">
            <div className="text-white">
              <p className="text-sm">Houston’s trusted choice for premium auto care.</p>
              <p className="text-lg font-bold"><span className="text-amber-500">55,042</span> vehicles protected and counting.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
              <div className="flex flex-col">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-white text-xs font-medium">4.9 Stars, 400+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
