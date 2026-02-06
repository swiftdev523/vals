"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import AnimatedButton from "../components/AnimatedButton";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // You can change this secret word to whatever you want
  const SECRET_WORD = "forever";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === SECRET_WORD) {
      onLogin();
    } else {
      setError("Wrong secret word! Try again 💔");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <PageLayout>
      <ContentCard>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6">
          💝
        </motion.div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-3 sm:mb-4 px-2">
          For My Love
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-pink-800 mb-6 sm:mb-8 px-4">
          Enter the secret word to unlock your Valentine's surprise
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-4">
          <input
            type="text"
            className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg border-3 sm:border-4 border-pink-400 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 
                     focus:outline-none focus:border-pink-600 focus:ring-4 focus:ring-pink-200 
                     transition-all duration-300"
            placeholder="Secret word..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-pink-600 font-bold mb-3 sm:mb-4 text-base sm:text-lg">
              {error}
            </motion.p>
          )}
          <AnimatedButton type="submit">Unlock My Heart 💕</AnimatedButton>
        </form>
        <p className="text-sm sm:text-base mt-4 sm:mt-6 text-pink-500 px-2">
          Hint: Think about us... 💭
        </p>
      </ContentCard>
    </PageLayout>
  );
};

export default Login;
