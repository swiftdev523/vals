import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import AnimatedButton from "../components/AnimatedButton";
import AnimatedHeart from "../components/AnimatedHeart";

const Welcome = () => {
  const navigate = useNavigate();

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
          className="mb-8">
          <div className="text-8xl mb-4">🎉</div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-pink-600 mb-6 leading-tight">
          You Said Yes! 💕
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}>
          <AnimatedHeart className="my-8" size="text-9xl" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-3xl text-pink-900 leading-relaxed mb-6 font-semibold">
          You've Made Me the Happiest! 🥰
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xl text-pink-700 mt-6 mb-10 max-w-2xl mx-auto">
          Every moment with you is a treasure. You make my heart smile every
          single day. I have prepared something special for you...
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-2xl shadow-lg border-2 border-pink-300 cursor-pointer"
            onClick={() => navigate("/forever")}>
            <div className="text-5xl mb-3">💑</div>
            <h3 className="text-xl font-bold text-pink-700 mb-2">
              Our Love Story
            </h3>
            <p className="text-pink-600 text-sm">
              View our precious moments together
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-pink-100 to-red-100 p-6 rounded-2xl shadow-lg border-2 border-pink-300 cursor-pointer"
            onClick={() => navigate("/heart2heart")}>
            <div className="text-5xl mb-3">💌</div>
            <h3 className="text-xl font-bold text-pink-700 mb-2">
              Love Letter
            </h3>
            <p className="text-pink-600 text-sm">Read my heartfelt message</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-2xl shadow-lg border-2 border-pink-300 cursor-pointer"
            onClick={() => navigate("/flowers")}>
            <div className="text-5xl mb-3">🌹</div>
            <h3 className="text-xl font-bold text-pink-700 mb-2">
              Virtual Flowers
            </h3>
            <p className="text-pink-600 text-sm">A beautiful bouquet for you</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap gap-4 justify-center mt-10">
          <AnimatedButton
            variant="primary"
            onClick={() => navigate("/forever")}>
            Start Exploring 💖
          </AnimatedButton>
        </motion.div>
      </ContentCard>
    </PageLayout>
  );
};

export default Welcome;
