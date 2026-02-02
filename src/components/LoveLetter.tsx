import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface LoveLetterProps {
  children: ReactNode;
}

const LoveLetter = ({ children }: LoveLetterProps) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl shadow-lg my-6 text-left relative border-l-8 border-pink-500">
      <div className="absolute top-3 right-3 text-4xl">💕</div>
      <div className="prose prose-pink max-w-none">{children}</div>
    </motion.div>
  );
};

export default LoveLetter;
