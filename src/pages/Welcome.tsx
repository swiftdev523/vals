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
      <ContentCard>
        <motion.h1
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl md:text-6xl font-bold text-pink-600 mb-8 leading-tight">
          Happy Valentine's Day,
          <br />
          My Love 💕
        </motion.h1>

        <AnimatedHeart className="my-8" />

        <p className="text-2xl text-pink-900 leading-relaxed mb-6">
          Every moment with you is a treasure.
          <br />
          You make my heart smile every single day.
        </p>

        <p className="text-xl text-pink-700 mt-6 mb-8">
          I have prepared something special for you...
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/forever")}>
            See Our Love Story 💑
          </AnimatedButton>

          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/heart2heart")}>
            Read My Letter 💌
          </AnimatedButton>

          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/flowers")}>
            Virtual Flowers 🌹
          </AnimatedButton>
        </div>
      </ContentCard>
    </PageLayout>
  );
};

export default Welcome;
