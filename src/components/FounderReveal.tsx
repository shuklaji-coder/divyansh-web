import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Award, Zap, Database, ArrowUpRight } from 'lucide-react';

interface FounderRevealProps {
  onOpenAudit: () => void;
}

export const FounderReveal: React.FC<FounderRevealProps> = ({ onOpenAudit }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="founder"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 bg-[#06080B] overflow-hidden border-t border-white/5"
    >
      {/* Background Spotlight following cursor */}
      <div
        className="absolute w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x * 120}px, ${mousePos.y * 120}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Founder Copy & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>THE FOUNDER STORY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-heading">
              Meet <span className="text-emerald-400 text-glow-emerald">Divyansh.</span>
            </h2>

            <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-mono text-emerald-300">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Founder</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Performance Marketer</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Growth Strategist</span>
            </div>

            <blockquote className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed border-l-2 border-emerald-500 pl-4 py-1 italic bg-white/5 rounded-r-xl">
              "Helping ambitious businesses turn paid advertising, web architecture & app ecosystems into measurable growth."
            </blockquote>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Divyansh built this agency around one immutable truth: <strong className="text-slate-200">advertising is not art—it's structured engineering</strong>. Every rupee spent on Meta, Google, or application infrastructure must have a direct line to qualified revenue.
            </p>

            {/* Key Accomplishments / Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">₹50M+</div>
                <div className="text-xs text-slate-400">Ad Spend Managed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">4.2x</div>
                <div className="text-xs text-slate-400">Average ROAS</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">100%</div>
                <div className="text-xs text-slate-400">Data-Backed</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                data-magnetic
                className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm flex items-center gap-2 hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <span>Schedule Founder Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Divyansh Real Photo Reveal with Parallax & Spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative flex items-center justify-center"
            data-cursor="VIEW"
          >
            {/* Outer Frame with Glowing Ring */}
            <div
              className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl transition-transform duration-300 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
              }}
            >
              {/* Backlight Glow Behind Photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-transparent to-teal-500/20 z-0 pointer-events-none" />

              {/* REAL DIVYANSH PHOTOGRAPH */}
              <img
                src="/divyansh.png"
                alt="Divyansh - Founder & Performance Marketer"
                className="w-full h-full object-cover object-top relative z-10 transform scale-105 hover:scale-100 transition-transform duration-700 filter contrast-105 brightness-105"
              />

              {/* Subtle Dark Gradient Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080B] via-transparent to-transparent opacity-80 z-20 pointer-events-none" />

              {/* Floating Glass Label 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-6 right-6 z-30 glass-panel-emerald px-4 py-2 rounded-xl text-xs font-mono text-emerald-400 flex items-center gap-2 shadow-xl"
              >
                <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>PERFORMANCE MARKETING</span>
              </motion.div>

              {/* Floating Glass Label 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-8 left-6 right-6 z-30 glass-panel px-5 py-3 rounded-2xl flex items-center justify-between text-xs font-mono text-white shadow-2xl border border-white/15"
              >
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-slate-200">DATA → STRATEGY → GROWTH</span>
                </div>
                <span className="text-emerald-400 font-bold">100% ROI</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
