import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group z-50">
          <Shield className="w-6 h-6 text-amber-500" />
          <span className="font-display font-bold text-lg tracking-wider uppercase">
            Optum<span className="text-amber-500">Care</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 text-white"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center gap-8"
          >
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-display font-bold text-zinc-300 hover:text-amber-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
