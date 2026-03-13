import { useState } from 'react';
import { motion } from 'motion/react';

const packages = [
  {
    id: 'partial',
    name: 'PARTIAL FRONT END',
    duration: '1 Day',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Bumper protection',
      '24 inches of protection on the front hood',
      'Fender protection',
      'Mirror protection'
    ]
  },
  {
    id: 'full',
    name: 'FULL FRONT END',
    duration: '2 Days',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Full bumper protection',
      'Full hood protection',
      'Full fender protection',
      'Mirror protection',
      'Headlight protection'
    ]
  },
  {
    id: 'track',
    name: 'TRACK PACKAGE',
    duration: '3 Days',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c66888?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Full front end',
      'Rocker panels',
      'A-pillars',
      'Roof strip',
      'Rear luggage area'
    ]
  },
  {
    id: 'full-car',
    name: 'FULL CAR',
    duration: '4 Days',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Complete vehicle coverage',
      'Maximum protection',
      'Seamless finish'
    ]
  }
];

export default function PackageBrowser() {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  return (
    <section className="bg-zinc-950 py-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-zinc-500 uppercase tracking-widest text-sm mb-2">Custom Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">BROWSE OUR PACKAGES</h2>
          <p className="text-zinc-400 text-sm">Please allow for flexibility depending on vehicle make & model</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`px-4 py-2 border text-sm transition-all ${
                selectedPackage.id === pkg.id
                  ? 'bg-white text-black border-white'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600'
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="border border-zinc-800 p-6 bg-zinc-900/50">
            <h3 className="text-xl font-bold mb-2">{selectedPackage.name}</h3>
            <p className="text-zinc-500 mb-4 text-sm">{selectedPackage.duration}</p>
            <ul className="space-y-2 mb-6">
              {selectedPackage.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                  <span className="w-1 h-1 bg-zinc-500 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-[#0a252e] text-white font-bold text-sm hover:bg-[#123d4a] transition-colors">
              REQUEST QUOTE
            </button>
          </div>

          <div className="relative">
            <img 
              src={selectedPackage.image} 
              alt={selectedPackage.name}
              className="w-full h-auto rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
