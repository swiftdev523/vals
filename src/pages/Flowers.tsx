import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import AnimatedButton from "../components/AnimatedButton";
import RoseBouquet from "../components/RoseBouquet";
import LoveMessageCard from "../components/LoveMessageCard";
import { motion } from "framer-motion";

const Flowers = () => {
  const navigate = useNavigate();

  const loveMessages = [
    "💕 I always love you no matter what",
    "💖 You will forever be my only option",
    "💝 I can't imagine a life without you in it",
    "💗 You are the best part of my life",
  ];

  return (
    <PageLayout>
      <ContentCard maxWidth="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-8">
          Flowers For You 🌹
        </h1>

        <RoseBouquet count={7} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {loveMessages.map((message, index) => (
            <LoveMessageCard
              key={index}
              message={message}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.p
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl font-bold text-pink-600 my-8">
          Happy Valentine's Day, My Love! 💕
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/welcome")}>
            ← Back to Home
          </AnimatedButton>

          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/forever")}>
            See Our Photo 📸
          </AnimatedButton>
        </div>
      </ContentCard>
    </PageLayout>
  );
};

export default Flowers;
