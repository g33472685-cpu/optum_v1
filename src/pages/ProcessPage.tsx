import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Car, Search, Camera, SprayCan, Droplets, Sparkles, Disc3, Filter, 
  Layers, Wrench, Circle, Shield, Brush, Eye, CheckCircle, Key,
  ArrowLeft, MapPin, Users, BookOpen
} from 'lucide-react';
import Transparency from '../components/Transparency';
import Guarantee from '../components/Guarantee';

const steps = [
  { id: 1, title: "Vehicle Arrival", desc: "Secure check-in process.", icon: Car },
  { id: 2, title: "Initial Inspection", desc: "Thorough condition assessment.", icon: Search },
  { id: 3, title: "Documentation", desc: "Detailed photos & notes.", icon: Camera },
  { id: 4, title: "Pre-Wash Prep", desc: "Removing loose debris.", icon: SprayCan },
  { id: 5, title: "Foam Wash", desc: "Gentle foam application.", icon: Droplets },
  { id: 6, title: "Hand Wash", desc: "Safe, contact-based cleaning.", icon: Sparkles },
  { id: 7, title: "Wheel Cleaning", desc: "Deep wheel & tire care.", icon: Disc3 },
  { id: 8, title: "Decontamination", desc: "Removing iron fallout.", icon: Filter },
  { id: 9, title: "Clay Bar", desc: "Removing surface contaminants.", icon: Layers },
  { id: 10, title: "Paint Correction", desc: "Removing swirl marks.", icon: Wrench },
  { id: 11, title: "Polishing", desc: "Restoring paint clarity.", icon: Circle },
  { id: 12, title: "Ceramic Coating", desc: "Long-term paint protection.", icon: Shield },
  { id: 13, title: "Interior Cleaning", desc: "Deep interior rejuvenation.", icon: Brush },
  { id: 14, title: "Glass Treatment", desc: "Clear visibility enhancement.", icon: Eye },
  { id: 15, title: "Final Inspection", desc: "Quality assurance check.", icon: CheckCircle },
  { id: 16, title: "Delivery", desc: "Vehicle handover to client.", icon: Key },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>

        {/* Section 1: Header */}
        <section className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-6">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">About Us</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
              The best automotive spa experience at Optum Studio
            </h1>
          </div>
          <div className="space-y-8">
            <p className="text-zinc-400 text-lg leading-relaxed">
              At Optum Studio, we believe your vehicle is more than just a machine—it's a statement. Our mission is to provide unparalleled automotive care, combining precision, passion, and premium products to restore and protect your investment.
            </p>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-bold mb-2 flex items-center gap-2"><MapPin className="text-blue-500" /> Location</h3>
              <p className="text-zinc-400 text-sm">743 Auto Detail Way<br />Edina, MN 55435</p>
            </div>
          </div>
        </section>

        {/* Section: Note from Founder */}
        <section className="mb-32 grid md:grid-cols-2 gap-12 items-center bg-zinc-900/30 rounded-3xl overflow-hidden border border-white/5">
          <div className="h-full min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1603201668387-562629633121?q=80&w=2070&auto=format&fit=crop" 
              alt="Founder working" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-12 space-y-6">
            <h2 className="font-display text-4xl font-bold">A NOTE FROM THE FOUNDER</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>Welcome to Optum Studio. I'm Mylan Sleets, the founder of this establishment, and I want to personally thank you for considering our services. When I started Optum Studio, my vision was clear: to create a car detailing service that stands apart in quality, attention to detail, and customer satisfaction.</p>
              <p>As a car enthusiast myself, I understand the value of a well-maintained vehicle. Each car that arrives at our facility is treated with the utmost care and respect it deserves. We're not just working on cars; we're caring for a part of someone's life.</p>
            </div>
            <div>
              <p className="font-bold text-lg">MYLAN SLEETS</p>
              <p className="text-blue-500 text-sm tracking-widest uppercase">FOUNDER OF OPTUM STUDIO</p>
            </div>
          </div>
        </section>

        {/* Section 2: Timeline */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-6">Vehicle Journey</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-4">Our Proven Detailing Workflow</p>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              Every vehicle that enters our studio undergoes a meticulous, multi-stage transformation. We combine advanced technology with artisanal techniques to ensure your car receives the ultimate care, from initial inspection to final delivery.
            </p>
          </div>
          <div className="relative">
            {/* Animated Path */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 hidden md:block -translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex items-center justify-center ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                  >
                    <div className={`flex items-center gap-6 w-full md:w-1/2 ${i % 2 === 0 ? 'md:flex-row-reverse md:pr-12' : 'md:pl-12'}`}>
                      <motion.div 
                        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                        className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-500 shrink-0 z-10 backdrop-blur-md"
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 w-full">
                        <span className="text-blue-500 font-bold text-sm">STEP {String(step.id).padStart(2, '0')}</span>
                        <h3 className="text-xl font-bold mt-1 mb-2">{step.title}</h3>
                        <p className="text-zinc-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        <Transparency />
        <Guarantee />
      </div>
    </div>
  );
}
