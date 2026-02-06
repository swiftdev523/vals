"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PageLayout from "../components/PageLayout";

const ValentineQuestion = () => {
  const router = useRouter();
  const [noCount, setNoCount] = useState(0);
  const [yesSize, setYesSize] = useState(1);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    setYesSize((prev) => prev + 0.3);
  };

  const handleYesClick = () => {
    // Celebrate animation before navigation
    setTimeout(() => {
      router.push("/welcome");
    }, 1000);
  };

  const getNoButtonPosition = () => {
    const positions = [
      { top: "20%", left: "30%" },
      { top: "70%", left: "70%" },
      { top: "30%", left: "75%" },
      { top: "80%", left: "25%" },
      { top: "25%", left: "20%" },
      { top: "75%", left: "80%" },
      { top: "85%", left: "50%" },
    ];
    return positions[Math.min(noCount - 1, positions.length - 1)];
  };

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl mx-auto px-4 sm:px-6">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 sm:p-10 md:p-14 shadow-2xl border-4 border-pink-200/50 text-center relative overflow-hidden">
          {/* Decorative corner hearts */}
          <div className="absolute top-4 left-4 text-3xl opacity-20">💕</div>
          <div className="absolute top-4 right-4 text-3xl opacity-20">💕</div>
          <div className="absolute bottom-4 left-4 text-3xl opacity-20">💕</div>
          <div className="absolute bottom-4 right-4 text-3xl opacity-20">
            💕
          </div>

          {/* Heart Animation */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-7xl sm:text-8xl md:text-9xl mb-6">
            💝
          </motion.div>

          {/* Question */}
          <motion.h1
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-script text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600 mb-6 leading-tight">
            Will You Be My Valentine?
          </motion.h1>

          <p className="font-sans text-lg sm:text-xl md:text-2xl text-pink-700 mb-12 max-w-lg mx-auto leading-relaxed">
            {noCount === 0 && "I have something special to show you... 💕"}
            {noCount === 1 && "Are you sure? Please say yes! 🥺"}
            {noCount === 2 && "Come on, just click yes! 💖"}
            {noCount === 3 &&
              "The yes button is getting bigger for a reason! 💗"}
            {noCount >= 4 && "I know you want to say yes! 💝"}
          </p>

          {/* Buttons Container */}
          <div className="relative min-h-[10rem] sm:min-h-[11rem] md:min-h-[12rem] mb-8 flex items-center justify-center">
            {noCount === 0 ? (
              /* Initial State - Buttons side by side */
              <div className="flex gap-4 sm:gap-6 items-center justify-center">
                {/* Yes Button */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYesClick}
                  className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 text-white font-bold 
                           rounded-full shadow-2xl hover:shadow-pink-400/60 transition-all duration-300
                           border-4 border-white whitespace-nowrap flex items-center gap-2
                           px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl">
                  <span>Yes!</span>
                  <span className="text-xl">✨</span>
                </motion.button>

                {/* No Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNoClick}
                  className="bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold 
                           px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                           border-2 border-white/80 text-base sm:text-lg whitespace-nowrap">
                  No 😢
                </motion.button>
              </div>
            ) : (
              /* Animated State - After first No click */
              <>
                {/* Yes Button - Growing and centered */}
                <motion.button
                  whileHover={{ scale: yesSize + 0.08 }}
                  whileTap={{ scale: yesSize - 0.05 }}
                  animate={{ scale: yesSize }}
                  onClick={handleYesClick}
                  className="absolute bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 text-white font-bold 
                           rounded-full shadow-2xl hover:shadow-pink-400/60 transition-all duration-300
                           border-4 border-white z-10 whitespace-nowrap flex items-center gap-2"
                  style={{
                    padding: `${yesSize * 0.85}rem ${yesSize * 2.2}rem`,
                    fontSize: `${yesSize * 1.1}rem`,
                  }}>
                  <span>Yes!</span>
                  <span className="text-xl">✨</span>
                </motion.button>

                {/* No Button - Moving around */}
                {noCount < 7 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      ...getNoButtonPosition(),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    onClick={handleNoClick}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2
                             bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold 
                             px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                             border-2 border-white/80 text-sm sm:text-base whitespace-nowrap">
                    No 😢
                  </motion.button>
                )}
              </>
            )}
          </div>

          {noCount >= 7 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-sans text-pink-600 text-lg sm:text-xl font-semibold mt-4">
              The "No" button ran away! Guess you have to say yes now! 😉
            </motion.p>
          )}
        </div>

        {/* Floating decorative hearts */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-8 sm:-top-12 -left-4 sm:-left-8 text-4xl sm:text-5xl md:text-6xl opacity-80">
          ❤️
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute -top-8 sm:-top-10 -right-4 sm:-right-8 text-3xl sm:text-4xl md:text-5xl opacity-80">
          💕
        </motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute -bottom-8 sm:-bottom-10 left-6 sm:left-10 text-3xl sm:text-4xl md:text-5xl opacity-80">
          💖
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default ValentineQuestion;
