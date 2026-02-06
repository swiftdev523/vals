"use client";

import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import AnimatedHeart from "../components/AnimatedHeart";
import FloatingNextButton from "../components/FloatingNextButton";

const Welcome = () => {
  return (
    <PageLayout showKissMark={true}>
      <ContentCard maxWidth="max-w-4xl">
        {/* Confetti Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: [null, 600],
                opacity: [0, 1, 0],
                x: [null, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute text-2xl"
              style={{ left: `${Math.random() * 100}%` }}>
              {["❤️", "💕", "💖", "💗", "💝"][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>

        {/* Success Celebration */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.8,
          }}
          className="mb-6 sm:mb-8">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-3 sm:mb-4">
            🎉
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-pink-600 mb-4 sm:mb-6 leading-tight px-2">
          You Said Yes! 💕
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}>
          <AnimatedHeart
            className="my-6 sm:my-8"
            size="text-7xl sm:text-8xl md:text-9xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="font-handwriting text-xl sm:text-2xl md:text-3xl text-pink-900 leading-relaxed mb-4 sm:mb-6 font-semibold px-2">
          You've Made Me the Happiest! 🥰
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-sans text-base sm:text-lg md:text-xl text-pink-700 mt-4 sm:mt-6 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Every moment with you is a treasure. You make my heart smile every
          single day. I have prepared something special for you...
        </motion.p>
      </ContentCard>
      <FloatingNextButton nextPage="/forever" />
    </PageLayout>
  );
};

export default Welcome;
