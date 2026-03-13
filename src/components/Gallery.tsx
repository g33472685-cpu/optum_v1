import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandBucketModal from './BrandBucketModal';

const projects = [
  { id: 1, title: "BMW M4", brand: "BMW", image: 'https://picsum.photos/seed/bmw1/800/600' },
  { id: 2, title: "BMW M5", brand: "BMW", image: 'https://picsum.photos/seed/bmw2/800/600' },
  { id: 3, title: "Mercedes AMG", brand: "Mercedes", image: 'https://picsum.photos/seed/mercedes1/800/600' },
  { id: 4, title: "Mercedes G-Wagon", brand: "Mercedes", image: 'https://picsum.photos/seed/mercedes2/800/600' },
  { id: 5, title: "Audi RS6", brand: "Audi", image: 'https://picsum.photos/seed/audi1/800/600' },
  { id: 6, title: "Audi R8", brand: "Audi", image: 'https://picsum.photos/seed/audi2/800/600' },
  { id: 7, title: "Porsche 911", brand: "Porsche", image: 'https://picsum.photos/seed/porsche1/800/600' },
  { id: 8, title: "Porsche Taycan", brand: "Porsche", image: 'https://picsum.photos/seed/porsche2/800/600' },
  { id: 9, title: "Lamborghini Huracan", brand: "Lamborghini", image: 'https://picsum.photos/seed/lambo1/800/600' },
  { id: 10, title: "Lamborghini Aventador", brand: "Lamborghini", image: 'https://picsum.photos/seed/lambo2/800/600' },
  { id: 11, title: "Toyota Supra", brand: "Toyota", image: 'https://picsum.photos/seed/toyota1/800/600' },
  { id: 12, title: "Toyota GR86", brand: "Toyota", image: 'https://picsum.photos/seed/toyota2/800/600' },
  { id: 13, title: "Tesla Model S", brand: "Tesla", image: 'https://picsum.photos/seed/tesla1/800/600' },
  { id: 14, title: "Tesla Model 3", brand: "Tesla", image: 'https://picsum.photos/seed/tesla2/800/600' },
  { id: 15, title: "Rivian R1T", brand: "Rivian", image: 'https://picsum.photos/seed/rivian1/800/600' },
  { id: 16, title: "Rivian R1S", brand: "Rivian", image: 'https://picsum.photos/seed/rivian2/800/600' },
];

const brandLogos: Record<string, string> = {
  "All": "https://cdn-icons-png.flaticon.com/512/2311/2311524.png",
  "BMW": "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  "Mercedes": "https://cdn-icons-png.flaticon.com/512/5968/5968351.png",
  "Audi": "https://cdn-icons-png.flaticon.com/512/5968/5968352.png",
  "Porsche": "https://cdn-icons-png.flaticon.com/512/5968/5968353.png",
  "Lamborghini": "https://cdn-icons-png.flaticon.com/512/5968/5968354.png",
  "Toyota": "https://cdn-icons-png.flaticon.com/512/5968/5968355.png",
  "Tesla": "https://cdn-icons-png.flaticon.com/512/5968/5968356.png",
  "Rivian": "https://cdn-icons-png.flaticon.com/512/5968/5968357.png",
};

const brands = [
  { name: "All" },
  { name: "BMW" },
  { name: "Mercedes" },
  { name: "Audi" },
  { name: "Porsche" },
  { name: "Lamborghini" },
  { name: "Toyota" },
  { name: "Tesla" },
  { name: "Rivian" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);
  const [bucketBrand, setBucketBrand] = useState<string | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.brand === filter);

  const openFullscreen = (id: number) => setFullscreenImage(id);
  const closeFullscreen = () => setFullscreenImage(null);
  const openBucket = (brand: string) => setBucketBrand(brand);
  const closeBucket = () => setBucketBrand(null);

  const navigate = (direction: number) => {
    if (fullscreenImage === null) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === fullscreenImage);
    const nextIndex = (currentIndex + direction + filteredProjects.length) % filteredProjects.length;
    setFullscreenImage(filteredProjects[nextIndex].id);
  };

  return (
    <section id="gallery" className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Craftsmanship Section */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Craftsmanship in Every Detail
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Select a brand to explore our work.
          </p>
        </div>

        {/* Brand Selection */}
        <div className="flex overflow-x-auto pb-8 gap-4 mb-16 scrollbar-hide">
          {brands.filter(b => b.name !== "All").map(brand => (
            <button
              key={brand.name}
              onClick={() => setFilter(brand.name)}
              className={`group flex-shrink-0 w-32 h-20 rounded-xl overflow-hidden border transition-all duration-300 ${
                filter === brand.name 
                  ? 'border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
                  : 'border-zinc-800 hover:border-zinc-600 hover:scale-105'
              }`}
            >
              <img 
                src={projects.find(p => p.brand === brand.name)?.image}
                alt={brand.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <img src={brandLogos[brand.name]} alt={brand.name} className="w-6 h-6 object-contain invert" />
                <span className="text-white text-xs font-bold tracking-wider">{brand.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-4 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="group relative flex flex-col mb-8 break-inside-avoid"
              >
                <div 
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => openFullscreen(project.id)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {fullscreenImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
          >
            <button onClick={closeFullscreen} className="absolute top-8 right-8 text-white z-50 p-2 hover:bg-zinc-800 rounded-full">
              <X className="w-8 h-8" />
            </button>
            <Link to="/" className="absolute top-8 left-8 bg-zinc-900/80 text-amber-500 z-50 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-display text-base font-medium">Back to Home</span>
            </Link>
            <button onClick={() => navigate(-1)} className="absolute left-8 text-white z-50 p-2 hover:bg-zinc-800 rounded-full">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button onClick={() => navigate(1)} className="absolute right-8 text-white z-50 p-2 hover:bg-zinc-800 rounded-full">
              <ChevronRight className="w-10 h-10" />
            </button>
            <img 
              src={filteredProjects.find(p => p.id === fullscreenImage)?.image} 
              alt="Fullscreen" 
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
            <button 
              onClick={closeFullscreen}
              className="absolute bottom-8 text-white bg-zinc-900/80 px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Gallery
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand Bucket Modal */}
      {bucketBrand && (
        <BrandBucketModal
          brand={bucketBrand}
          images={projects.filter(p => p.brand === bucketBrand)}
          onClose={closeBucket}
        />
      )}
    </section>
  );
}
