import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, TrendingUp, BarChart3, Code2, Smartphone } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const [headlineStage, setHeadlineStage] = useState<0 | 1>(0);

  useEffect(() => {
    // Transition headline after 2.5 seconds
    const timer = setTimeout(() => {
      setHeadlineStage(1);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#06080B]">
      {/* Background Cinematic Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-radial-hero pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-mono tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-8 max-w-[95vw] overflow-hidden"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="truncate">⚡ META ADS • GOOGLE ADS • WEB & APP DEV</span>
        </motion.div>

        {/* Dynamic Transforming Headline */}
        <div className="min-h-[8rem] sm:h-44 md:h-52 flex items-center justify-center relative w-full my-2">
          <AnimatePresence mode="wait">
            {headlineStage === 0 ? (
              <motion.h1
                key="stage0"
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-heading uppercase max-w-5xl leading-tight"
              >
                WE DON'T JUST <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500">RUN ADS.</span>
              </motion.h1>
            ) : (
              <motion.h1
                key="stage1"
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-heading uppercase max-w-5xl leading-tight"
              >
                WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 text-glow-emerald">GROWTH SYSTEMS.</span>
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Subtitle & Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl font-light leading-relaxed"
        >
          Data-driven Meta Ads, precision Google Ads, and custom Web & Mobile App engineering engineered to convert clicks into high-margin revenue.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenAudit}
            data-magnetic
            data-cursor="AUDIT"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-base tracking-wide flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(16,185,129,0.8)] hover:bg-emerald-400 transition-all duration-300 transform active:scale-98 group"
          >
            <span>Get Free Ad Audit</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#founder"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 text-slate-200 font-semibold text-base flex items-center justify-center gap-2 backdrop-blur-md transition-all hover:bg-slate-800"
          >
            <span>Explore Our Work</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-emerald-400" />
          </a>
        </motion.div>

        {/* Feature Badges Matrix */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl"
        >
          <div className="glass-panel p-3 rounded-xl flex items-center gap-3 text-left">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Performance</div>
              <div className="text-sm font-bold text-slate-200">Meta & Google Ads</div>
            </div>
          </div>

          <div className="glass-panel p-3 rounded-xl flex items-center gap-3 text-left">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Attribution</div>
              <div className="text-sm font-bold text-slate-200">Conversion Tracking</div>
            </div>
          </div>

          <div className="glass-panel p-3 rounded-xl flex items-center gap-3 text-left">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Web Engineering</div>
              <div className="text-sm font-bold text-slate-200">Website Dev</div>
            </div>
          </div>

          <div className="glass-panel p-3 rounded-xl flex items-center gap-3 text-left">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">App Ecosystem</div>
              <div className="text-sm font-bold text-slate-200">App Dev</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 text-center flex flex-col items-center gap-1 text-slate-500 text-xs font-mono">
        <span>SCROLL TO DISCOVER</span>
        <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
