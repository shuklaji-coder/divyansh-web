import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, UserX, Flame, EyeOff, AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const headlineWords = "Your Ads Shouldn't Feel Like Gambling.".split(" ");

  const problems = [
    {
      id: '01',
      icon: TrendingDown,
      title: 'HIGH CPL',
      badge: 'Spike in Lead Cost',
      desc: 'Spending more every week while getting fewer leads. Ad platforms bleed your budget without delivering qualified prospects.',
      metric: '↑ 42% CPL Waste',
    },
    {
      id: '02',
      icon: UserX,
      title: 'LOW-QUALITY LEADS',
      badge: 'Unqualified Traffic',
      desc: 'Leads arrive in your inbox, but your sales team cannot close them. High form fills, zero actual buyers or clients.',
      metric: '80% Junk Inquiries',
    },
    {
      id: '03',
      icon: Flame,
      title: 'CREATIVE FATIGUE',
      badge: 'Ad Fatigue Decay',
      desc: 'The same ad creative gets recycled until audience burn-out hits, causing CTR to crash and ROAS to drop off a cliff.',
      metric: '↓ 65% CTR Drop',
    },
    {
      id: '04',
      icon: EyeOff,
      title: 'POOR TRACKING',
      badge: 'Blind Ad Spend',
      desc: 'Money spent on Meta and Google with no clear conversion attribution, broken iOS14 tracking, or pixel errors.',
      metric: '0% True Attribution',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono uppercase tracking-widest">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>THE MONEY PIT</span>
          </div>

          {/* Word-by-Word Reveal Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="inline-block mr-3"
              >
                {word === "Gambling." ? (
                  <span className="text-red-400 underline decoration-red-500/50 decoration-wavy">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-400 font-light"
          >
            Running ads is easy. Making them consistently profitable is the hard part.
          </motion.p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={prob.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-red-500/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-slate-700 group-hover:text-red-500/40 transition-colors">
                    {prob.id}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-1 mb-3 rounded-md bg-red-500/10 text-red-400 font-mono text-[11px]">
                  {prob.badge}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3 group-hover:text-red-400 transition-colors">
                  {prob.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {prob.desc}
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">DIAGNOSTIC</span>
                  <span className="text-red-400 font-bold">{prob.metric}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
