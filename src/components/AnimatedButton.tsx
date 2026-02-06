"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
}

const AnimatedButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: AnimatedButtonProps) => {
  const baseClasses =
    "px-8 py-4 text-lg font-bold rounded-full cursor-pointer transition-all duration-300 shadow-lg";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:shadow-2xl hover:from-pink-600 hover:to-pink-700",
    secondary:
      "bg-gradient-to-r from-pink-300 to-pink-400 text-pink-900 hover:shadow-xl m-2",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
