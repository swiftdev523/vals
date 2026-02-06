"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-full shadow-2xl 
                   hover:shadow-pink-400/50 transition-all duration-300 flex items-center gap-3">
        <span className="text-2xl">{isPlaying ? "⏸️" : "🎵"}</span>
        <span className="text-sm font-bold pr-2">
          {isPlaying ? "Pause Music" : "Play Music"}
        </span>
      </motion.button>

      {/* Placeholder audio - users can add their own romantic music */}
      <audio ref={audioRef} loop>
        {/* Add your music file path here */}
        {/* <source src="/path-to-your-music.mp3" type="audio/mpeg" /> */}
      </audio>

      {isPlaying && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full opacity-50"
        />
      )}
    </motion.div>
  );
};

export default MusicPlayer;
