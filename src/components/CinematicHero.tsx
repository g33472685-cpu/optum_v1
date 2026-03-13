import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    tl.to(bgRef.current, { scale: 1.1, ease: 'none' }, 0);
    tl.to(bgRef.current, { scale: 1.15, ease: 'none' }, 0.9);

    // Headline animation
    tl.to('.headline', { y: -50, ease: 'power2.out' }, 0.3);

    // Wheel animation
    tl.to(wheelRef.current, { rotate: 360, ease: 'none' }, 0.5);

    // Content animations
    tl.fromTo('.description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'power2.out' }, 0.5);
    tl.to(contentRef.current, { opacity: 0, ease: 'power2.in' }, 0.9);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Layer */}
        <div ref={bgRef} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Car"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        </div>

        {/* Wheel Element */}
        <div ref={wheelRef} className="absolute z-10 w-48 h-48 md:w-64 md:h-64 bottom-[15%] left-[15%] md:left-[20%]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wheel_icon.svg/1024px-Wheel_icon.svg.png"
            alt="Wheel"
            className="w-full h-full object-contain opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hero Content */}
        <div ref={contentRef} className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="headline font-display text-7xl md:text-9xl font-bold tracking-tighter mb-6">
            PERFORMANCE
          </h1>
          <p className="description text-xl md:text-2xl text-zinc-300 max-w-xl mb-10">
            Engineered for those who demand perfection in every turn.
          </p>
          <button className="description px-10 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black font-bold tracking-widest uppercase transition-all duration-300">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
