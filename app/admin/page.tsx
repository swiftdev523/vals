"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PageLayout from "../../src/components/PageLayout";
import ContentCard from "../../src/components/ContentCard";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, use a secure API endpoint
    if (password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid password!");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <PageLayout>
      <ContentCard>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-6">
          🔐
        </motion.div>
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Admin Login</h1>
        <p className="text-lg text-pink-800 mb-8">
          Enter admin password to access dashboard
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <input
            type="password"
            className="w-full px-6 py-4 text-lg border-4 border-pink-400 rounded-2xl mb-6 
                     focus:outline-none focus:border-pink-600 focus:ring-4 focus:ring-pink-200 
                     transition-all duration-300"
            placeholder="Admin password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 font-bold mb-4">
              {error}
            </motion.p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white 
                     px-8 py-4 rounded-2xl text-xl font-bold shadow-lg 
                     hover:shadow-xl hover:scale-105 transition-all duration-300">
            Login
          </button>
        </form>
      </ContentCard>
    </PageLayout>
  );
}
