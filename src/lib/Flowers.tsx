"use client";

import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import FloatingNextButton from "../components/FloatingNextButton";
import LoveMessageCard from "../components/LoveMessageCard";
import { motion } from "framer-motion";
import Image from "next/image";

const Flowers = () => {
  const loveMessages = [
    "💕 I always love you no matter what",
    "💖 You will forever be my only option",
    "💝 I can't imagine a life without you in it",
    "💗 You are the best part of my life",
    "🌹 You make every day feel like Valentine's Day",
    "💓 My heart belongs to you, now and always",
  ];

  return (
    <PageLayout>
      <ContentCard maxWidth="max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-script text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600 mb-6 sm:mb-8">
          Flowers For You 🌹
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-sans text-base sm:text-lg md:text-xl text-pink-700 mb-8 px-4">
          A bouquet of roses, each one representing a reason I love you
        </motion.p>

        {/* Beautiful Rose Bouquet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative w-full max-w-md mx-auto my-8 sm:my-12">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/bouquet.png"
              alt="Beautiful red roses bouquet"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-10">
            {loveMessages.map((message, index) => (
              <LoveMessageCard
                key={index}
                message={message}
                delay={0.8 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 p-6 sm:p-8 rounded-2xl shadow-lg my-8">
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600">
            Happy Valentine's Day, My Love! 💕
          </motion.p>
          <p className="text-base sm:text-lg text-pink-700 mt-3 sm:mt-4">
            You are my everything 💝
          </p>
        </motion.div>
      </ContentCard>
      <FloatingNextButton
        nextPage="/video"
        label="| Click Me || Click Me || Click Me |"
      />
    </PageLayout>
  );
};

export default Flowers;
