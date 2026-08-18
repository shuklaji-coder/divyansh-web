import React from 'react';
import { motion } from 'framer-motion';

export const StatementSection: React.FC = () => {
  const statements = [
    { text: 'BETTER DATA.', color: 'text-white' },
    { text: 'BETTER DECISIONS.', color: 'text-slate-300' },
    { text: 'BETTER ADS.', color: 'text-emerald-400 text-glow-emerald' },
    { text: 'BETTER GROWTH.', color: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white' },
  ];

  return (
    <section className="py-24 md:py-40 bg-[#06080B] relative overflow-hidden flex flex-col items-center justify-center border-t border-b border-white/5">
      {/* Background Radial Light Burst */}
      <div className="absolute inset-0 bg-radial-hero opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
        {statements.map((stmt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            <h2 className={`text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight uppercase leading-tight ${stmt.color}`}>
              {stmt.text}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
