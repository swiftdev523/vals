"use client";

import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import FloatingNextButton from "../components/FloatingNextButton";
import { motion } from "framer-motion";

const Forever = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Romantic couple photos from Unsplash
  const couplePhotos = [
    {
      id: 1,

      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === couplePhotos.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [couplePhotos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? couplePhotos.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === couplePhotos.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <PageLayout>
      <ContentCard maxWidth="max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-pink-600 mb-8 sm:mb-10 md:mb-12 leading-tight px-2">
          You + Me Forever 💞
        </motion.h1>

        {/* Stacked Carousel */}
        <div className="relative w-full max-w-4xl mx-auto mb-12 sm:mb-16 px-8 sm:px-12">
          {/* Main Carousel Container with Stack Effect */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            {/* Stack of cards - showing glimpses of other images */}
            {couplePhotos.map((photo, index) => {
              const offset = index - currentIndex;
              const absOffset = Math.abs(offset);

              // Only render cards that are close to current index
              if (absOffset > 2) return null;

              return (
                <motion.div
                  key={photo.id}
                  initial={false}
                  animate={{
                    x: offset * 30, // Horizontal offset for stack effect
                    scale: 1 - absOffset * 0.1, // Scale down cards that are further away
                    zIndex: couplePhotos.length - absOffset,
                    opacity: absOffset === 0 ? 1 : 0.5,
                    rotateY: offset * 8, // Slight 3D rotation
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    scale: { duration: 0.4 },
                  }}
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}>
                  <div className="relative w-full h-full bg-gradient-to-br from-pink-200 via-pink-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    {/* Image */}
                    <img
                      src={photo.url}
                      alt="Our precious moment together"
                      className="w-full h-full object-cover"
                    />

                    {/* Only show decorations on the active card */}
                    {offset === 0 && (
                      <>
                        {/* Decorative floating heart */}
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-3xl sm:text-5xl drop-shadow-lg z-10">
                          ❤️
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous slide">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next slide">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6">
            {couplePhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-pink-600 w-10 sm:w-12 h-3 sm:h-4"
                    : "bg-pink-300 w-3 sm:w-4 h-3 sm:h-4 hover:bg-pink-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Love List - Modern Card Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 py-10 px-2 rounded-3xl my-12 shadow-2xl border-4 border-pink-200">
          <h2 className="text-4xl font-bold text-pink-700 mb-8 text-center">
            What I Love About You 💕
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              { emoji: "✨", text: "Your sparkling eyes" },
              { emoji: "😊", text: "Your beautiful smile" },
              { emoji: "😄", text: "Your contagious laugh" },
              { emoji: "💝", text: "Your kind heart" },
              { emoji: "🌟", text: "Your amazing personality" },
              { emoji: "💯", text: "Absolutely everything!" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-300 
                         hover:border-pink-500 transition-all cursor-default flex">
                <span className="text-4xl mr-4">{item.emoji}</span>
                <span className="text-xl font-semibold text-pink-900">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* XOXO with animation */}
        <motion.p
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold text-pink-600 my-10">
          XOXO
        </motion.p>
      </ContentCard>
      <FloatingNextButton nextPage="/heart2heart" />
    </PageLayout>
  );
};

export default Forever;
