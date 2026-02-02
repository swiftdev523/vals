import type { ReactNode } from "react";
import FloatingHearts from "./FloatingHearts";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: ReactNode;
  showKissMark?: boolean;
}

const PageLayout = ({ children, showKissMark = false }: PageLayoutProps) => {
  return (
    <div className="page-container">
      <FloatingHearts />
      {showKissMark && (
        <motion.div
          animate={{ rotate: [15, 20, 15] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-5 right-8 text-6xl opacity-80 z-10">
          💋
        </motion.div>
      )}
      {children}
    </div>
  );
};

export default PageLayout;
