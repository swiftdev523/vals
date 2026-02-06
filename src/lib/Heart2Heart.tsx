"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import LoveLetter from "../components/LoveLetter";
import FloatingNextButton from "../components/FloatingNextButton";

const Heart2Heart = () => {
  const router = useRouter();

  return (
    <PageLayout>
      <ContentCard maxWidth="max-w-4xl">
        <motion.h1
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="font-script text-5xl md:text-6xl font-bold text-pink-600 mb-8">
          Heart 2 Heart 💕
        </motion.h1>

        <LoveLetter>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-700 mb-4 sm:mb-6">
            To the love of my life,
          </p>

          <p className="text-base sm:text-lg md:text-xl text-pink-900 mb-3 sm:mb-4 leading-relaxed">
            You make my life so meaningful, and I am so lucky to have you as my
            valentine this year. I love you wholeheartedly, and I can't wait to
            continue loving you for the rest of my life.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-pink-900 mb-3 sm:mb-4 leading-relaxed">
            I know I tell you this every day, but you are literally the most
            beautiful girl I know. Your smile lights up my world, and your laugh
            is my favorite sound.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-bold text-pink-700 mb-3 sm:mb-4 leading-relaxed">
            Every moment with you is precious. You are my today and all of my
            tomorrows.
          </p>

          <div className="text-right mt-6 sm:mt-8">
            <p className="text-base sm:text-lg md:text-xl text-pink-800">
              Forever yours,
            </p>
            <motion.p
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600 mt-2">
              ❤️ Your Love ❤️
            </motion.p>
          </div>
        </LoveLetter>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-7xl my-8">
          💝
        </motion.div>

        <p className="text-xl italic text-pink-600 my-6">
          "You are my sun, my moon, and all my stars." ⭐
        </p>
      </ContentCard>
      <FloatingNextButton nextPage="/flowers" />
    </PageLayout>
  );
};

export default Heart2Heart;
