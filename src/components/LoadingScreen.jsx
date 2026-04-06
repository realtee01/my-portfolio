import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Design", "Create", "Inspire"];
  const progressRef = useRef(0);

  useEffect(() => {
    // Counter logic (2.7 seconds)
    const startTime = Date.now();
    const duration = 2700;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      progressRef.current = newProgress;
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        // Wait 400ms after hitting 100 to trigger the exit
        setTimeout(onComplete, 400);
      }
    };

    requestAnimationFrame(updateCounter);

    // Word cycling logic (0.9s intervals)
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : prev));
    }, 900);

    return () => clearInterval(wordInterval);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col justify-between p-8 md:p-12 overflow-hidden"
    >
      {/* Element 1: Portfolio Label */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[10px] md:text-sm text-[#888888] uppercase tracking-[0.3em] font-bold"
      >
        Portfolio
      </motion.div>

      {/* Element 2: Rotating Words (Center) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[#f5f5f5]/80"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom Container: Counter + Progress Bar */}
      <div className="flex flex-col items-end gap-6">
        {/* Element 3: Counter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-[#f5f5f5] tabular-nums"
        >
          {Math.round(progress).toString().padStart(3, '0')}
        </motion.div>

        {/* Element 4: Progress Bar */}
        <div className="w-full h-[3px] bg-[#1f1f1f]/50 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full origin-left bg-gradient-to-r from-[#89AACC] to-[#4E85BF]"
            style={{ 
              width: '100%',
              scaleX: progress / 100,
              boxShadow: "0 0 12px rgba(137, 170, 204, 0.4)" 
            }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
