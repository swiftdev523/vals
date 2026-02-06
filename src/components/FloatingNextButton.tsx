"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface FloatingNextButtonProps {
  nextPage: string;
  label?: string;
}

const FloatingNextButton = ({
  nextPage,
  label = "| Click Me || Click Me || Click Me |",
}: FloatingNextButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(nextPage);
  };

  const text = label || "Click Me";
  const chars = text.split("");

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 1, opacity: 1 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#000000",
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[9999] bg-gradient-to-r from-pink-600 to-rose-600
                 text-white font-bold w-28 h-28 sm:w-32 sm:h-32 rounded-full 
                 shadow-2xl border-4 border-white
                 transition-all duration-300 cursor-pointer overflow-hidden
                 flex items-center justify-center"
      style={{
        background: "#ff1464",
        position: "fixed",
      }}
      aria-label={`Navigate to ${nextPage}`}>
      {/* Rotating Text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          animation: "textRotation 8s linear infinite",
        }}>
        {chars.map((char, index) => {
          const angle = (360 / chars.length) * index;
          const radius = 42; // Distance from center - reduced for more compact text
          return (
            <span
              key={index}
              className="absolute font-bold text-[10px] sm:text-xs tracking-tight"
              style={{
                transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                transformOrigin: "center",
              }}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Center Circle with Arrow */}
      <motion.div
        className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full 
                   flex items-center justify-center overflow-hidden"
        style={{ color: "#ff1464" }}>
        <motion.svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 sm:w-5 sm:h-5 absolute"
          whileHover={{
            x: 150,
            y: -150,
            transition: { duration: 0.3 },
          }}>
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </motion.svg>
        <motion.svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 sm:w-5 sm:h-5 absolute"
          initial={{ x: -150, y: 150 }}
          whileHover={{
            x: 0,
            y: 0,
            transition: { duration: 0.3, delay: 0.1 },
          }}>
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </motion.svg>
      </motion.div>

      <style jsx>{`
        @keyframes textRotation {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.button>
  );
};

export default FloatingNextButton;
