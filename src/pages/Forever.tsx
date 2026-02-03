import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import ContentCard from "../components/ContentCard";
import AnimatedButton from "../components/AnimatedButton";
import { motion } from "framer-motion";

const Forever = () => {
  const navigate = useNavigate();

  // Romantic couple photos from Unsplash
  const couplePhotos = [
    {
      id: 1,
      caption: "Our First Date 💕",
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    },
    {
      id: 2,
      caption: "Adventures Together 🌍",
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    },
    {
      id: 3,
      caption: "Making Memories 📸",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    },
    {
      id: 4,
      caption: "Forever Moments 💖",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    },
  ];

  return (
    <PageLayout>
      <ContentCard maxWidth="max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-pink-600 mb-12 leading-tight">
          You + Me Forever 💞
        </motion.h1>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {couplePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
              className="relative group">
              <div className="relative w-full h-80 bg-gradient-to-br from-pink-200 via-pink-100 to-purple-100 rounded-3xl overflow-hidden border-8 border-pink-400 shadow-2xl">
                {/* Unsplash Image */}
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />

                {/* Decorative hearts */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-3 right-3 text-4xl opacity-80">
                  ❤️
                </motion.div>
              </div>

              {/* Caption */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border-2 border-pink-300">
                <p className="text-pink-700 font-semibold whitespace-nowrap">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Love List - Modern Card Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 p-10 rounded-3xl my-12 shadow-2xl border-4 border-pink-200">
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
                         hover:border-pink-500 transition-all cursor-default">
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

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/welcome")}>
            ← Back Home
          </AnimatedButton>

          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/heart2heart")}>
            Read My Letter 💌
          </AnimatedButton>

          <AnimatedButton
            variant="secondary"
            onClick={() => navigate("/flowers")}>
            See Flowers 🌹
          </AnimatedButton>
        </div>
      </ContentCard>
    </PageLayout>
  );
};

export default Forever;
