"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const InteractiveHeart = () => {
  const [hearts, setHearts] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const createHeart = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart = { id: Date.now(), x, y };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 2000);
  };

  return (
    <div
      onClick={createHeart}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ pointerEvents: "none" }}>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ scale: 0, x: heart.x, y: heart.y, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 0],
            y: heart.y - 100,
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 2 }}
          className="absolute text-4xl pointer-events-none"
          style={{ left: 0, top: 0 }}>
          💖
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveHeart;
