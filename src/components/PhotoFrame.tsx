import { motion } from "framer-motion";

interface PhotoFrameProps {
  src?: string;
  alt?: string;
  placeholder?: boolean;
}

const PhotoFrame = ({
  src,
  alt = "Couple Photo",
  placeholder = true,
}: PhotoFrameProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative my-8 mx-auto max-w-md">
      {placeholder ? (
        <div className="w-full h-96 border-[15px] border-pink-500 rounded-2xl bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-3 border-4 border-dashed border-pink-400 rounded-xl flex flex-col items-center justify-center bg-white/70 p-6 text-center">
            <div className="text-6xl mb-4">👫</div>
            <p className="text-pink-800 font-bold mb-2">
              📸 Add your couple photo here!
            </p>
            <p className="text-pink-600 text-sm">
              Replace this placeholder with your picture
            </p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-96 border-[15px] border-pink-500 rounded-2xl object-cover shadow-2xl"
        />
      )}

      {/* Decorative hearts */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute -top-5 -left-5 text-5xl">
        ❤️
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-5 -right-5 text-5xl">
        💖
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute -top-3 -right-5 text-4xl">
        💕
      </motion.div>
    </motion.div>
  );
};

export default PhotoFrame;
