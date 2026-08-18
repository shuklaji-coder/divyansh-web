import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06080B] text-white select-none overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated Badge Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider"
        >
          <Zap className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
          <span>SYSTEM INITIALIZING</span>
        </motion.div>

        {/* Brand Name Reveal */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading"
        >
          DIVYANSH
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-1 text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase"
        >
          Performance Marketing & Engineering
        </motion.p>

        {/* Progress Bar & Percentage */}
        <div className="w-full mt-8">
          <div className="h-[3px] w-full bg-slate-800 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <div className="flex justify-between items-center mt-3 text-xs font-mono text-slate-400">
            <span>DATA • ADS • CODE</span>
            <span className="text-emerald-400 font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
