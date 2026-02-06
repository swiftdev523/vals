"use client";

import { motion } from "framer-motion";

interface AnimatedHeartProps {
  size?: string;
  className?: string;
}

const AnimatedHeart = ({
  size = "text-8xl",
  className = "",
}: AnimatedHeartProps) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`${size} ${className}`}>
      ❤️
    </motion.div>
  );
};

export default AnimatedHeart;
