import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface BrandBucketModalProps {
  brand: string;
  images: { id: number; title: string; image: string }[];
  onClose: () => void;
}

export default function BrandBucketModal({ brand, images, onClose }: BrandBucketModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-zinc-900 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">{brand} Collection</h2>
            <button onClick={onClose} className="text-zinc-400 hover:text-white">
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div key={img.id} className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={img.image} alt={img.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
