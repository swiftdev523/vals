"use client";

import { motion } from "framer-motion";

interface RoseBouquetProps {
  count?: number;
}

const RoseBouquet = ({ count = 7 }: RoseBouquetProps) => {
  const roses = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="relative mx-auto my-6 sm:my-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-pink-300 to-pink-100 rounded-full 
                   flex flex-wrap items-center justify-center p-4 sm:p-6 border-[8px] sm:border-[12px] border-pink-500 shadow-2xl mx-auto"
        style={{ borderRadius: "50% 50% 45% 45%" }}>
        {roses.map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              delay: index * 0.15,
              duration: 0.7,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.4, rotate: 20 }}
            className="text-3xl sm:text-4xl md:text-5xl m-1 sm:m-2 cursor-pointer">
            🌹
          </motion.div>
        ))}

        {/* Bow decoration */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-6 sm:-bottom-8 text-5xl sm:text-6xl md:text-7xl">
          🎀
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RoseBouquet;
