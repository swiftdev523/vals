"use client";

import { motion } from "framer-motion";

interface LoveMessageCardProps {
  message: string;
  delay?: number;
}

const LoveMessageCard = ({ message, delay = 0 }: LoveMessageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
      className="bg-gradient-to-br from-pink-100 to-pink-50 p-4 sm:p-5 md:p-6 rounded-2xl shadow-md 
                 hover:shadow-xl transition-all duration-300 border-2 border-pink-200 h-full flex items-center justify-center">
      <p className="text-pink-900 text-sm sm:text-base md:text-lg leading-relaxed text-center">
        {message}
      </p>
    </motion.div>
  );
};

export default LoveMessageCard;
