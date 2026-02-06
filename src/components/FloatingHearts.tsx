"use client";

import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      left: string;
      delay: number;
      duration: number;
      emoji: string;
    }>
  >([]);

  useEffect(() => {
    const heartEmojis = ["❤️", "💕", "💖", "💗", "💝", "💘", "💓", "💞"];
    const generatedHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 5,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-4xl animate-float pointer-events-none z-0"
          style={{
            left: heart.left,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}>
          {heart.emoji}
        </div>
      ))}
    </>
  );
};

export default FloatingHearts;
