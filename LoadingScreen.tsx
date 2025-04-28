// LoadingScreen.tsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingScreen.css";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      // Prevenir scroll mientras carga
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="logo-container"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
          >
            {/* Tu logo SVG aquí */}
            <svg
              className="logo"
              viewBox="0 0 100 100"
              width="120"
              height="120"
            >
              {/* Reemplaza esto con tu SVG real */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#6366F1"
                strokeWidth="8"
              />
              <path
                d="M25,50 L75,50 M50,25 L50,75"
                stroke="#6366F1"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
          <motion.div
            className="loading-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Cargando experiencia...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
