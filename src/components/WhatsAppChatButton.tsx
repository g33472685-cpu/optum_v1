import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppChatButton() {
  return (
    <motion.a
      href="https://wa.me/YOUR_PHONE_NUMBER"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/50 hover:bg-amber-400 transition-colors"
    >
      <MessageCircle className="w-7 h-7 text-zinc-950" />
    </motion.a>
  );
}
