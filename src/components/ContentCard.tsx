"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  maxWidth?: string;
  className?: string;
  animate?: boolean;
}

const ContentCard = ({
  children,
  maxWidth = "max-w-2xl",
  className = "",
  animate = true,
}: ContentCardProps) => {
  const card = (
    <div
      className={`bg-white/95 backdrop-blur-lg rounded-3xl px-2 py-8 shadow-2xl 
                  ${maxWidth} w-full text-center relative z-20 
                  border-4 border-white/80 ${className}`}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="w-full flex justify-center px-4">
        {card}
      </motion.div>
    );
  }

  return <div className="w-full flex justify-center px-4">{card}</div>;
};

export default ContentCard;
