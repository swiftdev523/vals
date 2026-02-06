"use client";

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
      className="bg-gradient-to-br from-amber-50 to-yellow-50 w-full px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 rounded-xl shadow-lg my-6 text-left relative border-l-4 sm:border-l-8 border-pink-500">
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-3xl sm:text-4xl">
        💕
      </div>
      <div className="prose prose-pink max-w-none w-full">{children}</div>
    </motion.div>
  );
};

export default LoveLetter;
