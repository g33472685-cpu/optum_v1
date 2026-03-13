import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true,
      }
    });

    // Background animation
    tl.to(bgRef.current, { scale: 1.2, ease: 'none' }, 0);

    // Scroll Indicator animation
    tl.to(progressRef.current, { height: '100%', ease: 'none' }, 0);

    // Content animations
    tl.to('.headline', { y: -100, opacity: 0.5, ease: 'power2.out' }, 0);
    tl.fromTo('.secondary-text', { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: 'power2.out' }, 0.5);
    tl.to(contentRef.current, { opacity: 0, ease: 'power2.in' }, 0.8);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Visual */}
        <div ref={bgRef} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e11c2712b70?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
          {/* Fixed Logo Overlay */}
          <div className="absolute top-8 left-8 z-20">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2311/2311524.png" 
              alt="Logo" 
              className="w-8 h-8 object-contain invert"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-10 z-20 flex flex-col items-center gap-2">
          <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[2px] h-24 bg-zinc-700 relative">
            <div ref={progressRef} className="absolute top-0 left-0 w-full bg-amber-500 h-0" />
          </div>
        </div>

        {/* Hero Content */}
        <div ref={contentRef} className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="headline font-display text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            ELEVATE YOUR DRIVE
          </h1>
          <p className="secondary-text text-lg md:text-xl text-zinc-300 max-w-2xl mb-10">
            Experience the pinnacle of automotive luxury with our curated collection of world-class vehicles.
          </p>
          <button className="secondary-text px-10 py-4 rounded-full bg-amber-500 text-zinc-950 font-bold tracking-widest uppercase hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}
