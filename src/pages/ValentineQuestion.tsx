import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const ValentineQuestion = () => {
  const navigate = useNavigate();
  const [noCount, setNoCount] = useState(0);
  const [yesSize, setYesSize] = useState(1);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    setYesSize((prev) => prev + 0.3);
  };

  const handleYesClick = () => {
    // Celebrate animation before navigation
    setTimeout(() => {
      navigate("/welcome");
    }, 1000);
  };

  const getNoButtonPosition = () => {
    const positions = [
      { top: "60%", left: "30%" },
      { top: "40%", left: "70%" },
      { top: "70%", left: "60%" },
      { top: "30%", left: "20%" },
      { top: "80%", left: "80%" },
      { top: "20%", left: "80%" },
      { top: "85%", left: "15%" },
    ];
    return positions[Math.min(noCount, positions.length - 1)];
  };

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-3xl mx-auto">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-white/80 text-center">
          {/* Heart Animation */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-9xl mb-8">
            💝
          </motion.div>

          {/* Question */}
          <motion.h1
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl md:text-6xl font-bold text-pink-600 mb-6 leading-tight">
            Will You Be My Valentine?
          </motion.h1>

          <p className="text-2xl text-pink-800 mb-12">
            {noCount === 0 && "I have something special to show you... 💕"}
            {noCount === 1 && "Are you sure? Please say yes! 🥺"}
            {noCount === 2 && "Come on, just click yes! 💖"}
            {noCount === 3 &&
              "The yes button is getting bigger for a reason! 💗"}
            {noCount >= 4 && "I know you want to say yes! 💝"}
          </p>

          {/* Buttons Container */}
          <div className="relative h-40 mb-8">
            {/* Yes Button */}
            <motion.button
              whileHover={{ scale: yesSize + 0.05 }}
              whileTap={{ scale: yesSize - 0.05 }}
              animate={{ scale: yesSize }}
              onClick={handleYesClick}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold 
                       rounded-full shadow-2xl hover:shadow-pink-400/50 transition-all duration-300
                       border-4 border-white z-10"
              style={{
                padding: `${yesSize * 1}rem ${yesSize * 2.5}rem`,
                fontSize: `${yesSize * 1.2}rem`,
              }}>
              Yes! 💖
            </motion.button>

            {/* No Button */}
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
                         bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold 
                         px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                         border-2 border-white text-lg"
                style={{
                  top: noCount === 0 ? "50%" : getNoButtonPosition().top,
                  left: noCount === 0 ? "20%" : getNoButtonPosition().left,
                }}>
                No 😢
              </motion.button>
            )}
          </div>

          {noCount >= 7 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-pink-600 text-xl font-bold mt-4">
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
          className="absolute -top-12 -left-8 text-6xl opacity-80">
          ❤️
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute -top-10 -right-8 text-5xl opacity-80">
          💕
        </motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute -bottom-8 left-12 text-6xl opacity-80">
          💖
        </motion.div>
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, -12, 0],
          }}
          transition={{ duration: 2.8, repeat: Infinity }}
          className="absolute -bottom-10 -right-6 text-5xl opacity-80">
          💝
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default ValentineQuestion;
