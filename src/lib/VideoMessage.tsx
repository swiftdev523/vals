"use client";

import { useRef, useState } from "react";
import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import FloatingNextButton from "../components/FloatingNextButton";
import { motion } from "framer-motion";

const VideoMessage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PageLayout>
      <ContentCard maxWidth="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-6 sm:mb-8 leading-tight px-2">
          My Valentine Message to you Babe 💕
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-sans text-base sm:text-lg md:text-xl text-pink-700 mb-8 px-4 max-w-2xl mx-auto">
          I made this special video message just for you. Click play to watch!
          💝
        </motion.p>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative w-full max-w-md mx-auto my-8 sm:my-12">
          <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-purple-100">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Decorative hearts around video */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 text-4xl sm:text-5xl opacity-80 pointer-events-none">
              💖
            </motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 text-4xl sm:text-5xl opacity-80 pointer-events-none">
              💕
            </motion.div>
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl opacity-80 pointer-events-none">
              ❤️
            </motion.div>
          </div>
        </motion.div>

        {/* Sweet Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 p-6 sm:p-8 rounded-2xl shadow-lg my-8 max-w-2xl mx-auto">
          <motion.p
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-handwriting text-xl sm:text-2xl md:text-3xl text-pink-700 font-semibold mb-3">
            You mean the world to me! 🌍💕
          </motion.p>
          <p className="font-sans text-base sm:text-lg text-pink-600">
            Thank you for being my Valentine. I love you more than words can
            express! 💝
          </p>
        </motion.div>
      </ContentCard>
      <FloatingNextButton
        nextPage="/welcome"
        label="| Start Over || Start Over |"
      />
    </PageLayout>
  );
};

export default VideoMessage;
