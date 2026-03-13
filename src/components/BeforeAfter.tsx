import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause } from 'lucide-react';

const comparisons = [
  {
    before: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    before: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1603584173870-7f23fdae1872?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BeforeAfter({ className = "" }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const next = () => setCurrentIndex((prev) => (prev + 1) % comparisons.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + comparisons.length) % comparisons.length);

  return (
    <section className={`bg-zinc-950 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-zinc-100">
            The Difference is <span className="text-amber-500 italic">Clear.</span>
          </h2>
          <div className="flex gap-2">
            <button onClick={prev} className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"><ChevronLeft /></button>
            <button onClick={next} className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"><ChevronRight /></button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-zinc-800 shadow-2xl"
            ref={containerRef}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={(e) => isDragging && handleMove(e.clientX)}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
          >
            <img src={comparisons[currentIndex].after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable="false" referrerPolicy="no-referrer" />
            
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <img src={comparisons[currentIndex].before} alt="Before" className="w-full h-full object-cover" style={{ width: containerRef.current?.offsetWidth || '100vw' }} draggable="false" referrerPolicy="no-referrer" />
            </div>

            <div className="absolute top-6 left-6 bg-zinc-900/80 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-zinc-300 border border-zinc-700">Before</div>
            <div className="absolute top-6 right-6 bg-amber-500/80 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-zinc-950 border border-amber-400">After</div>

            <div className="absolute top-0 bottom-0 w-px bg-white/20" style={{ left: `${sliderPosition}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <Pause className="w-5 h-5 text-zinc-950 fill-zinc-950" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
