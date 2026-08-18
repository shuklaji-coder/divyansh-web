import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Play, CheckCircle, RefreshCw } from 'lucide-react';

export const CreativeTesting: React.FC = () => {
  const [isRunningTest, setIsRunningTest] = useState(false);
  const [winnerScale, setWinnerScale] = useState(false);

  const startTest = () => {
    setIsRunningTest(true);
    setWinnerScale(false);
    setTimeout(() => {
      setIsRunningTest(false);
      setWinnerScale(true);
    }, 2000);
  };

  const creatives = [
    {
      id: 'A',
      title: 'Creative A: Static Founder Image',
      angle: 'Direct Offer & Authority Hook',
      ctr: winnerScale ? '1.8%' : '1.4%',
      cpc: winnerScale ? '₹24' : '₹32',
      cpl: winnerScale ? '₹210' : '₹260',
      status: winnerScale ? 'PAUSED' : 'TESTING',
      isWinner: false,
    },
    {
      id: 'B',
      title: 'Creative B: Pain-Point UGC Video',
      angle: 'Problem Statement & Frustration Hook',
      ctr: winnerScale ? '2.4%' : '2.1%',
      cpc: winnerScale ? '₹18' : '₹22',
      cpl: winnerScale ? '₹175' : '₹190',
      status: winnerScale ? 'SCALE MODERATE' : 'TESTING',
      isWinner: false,
    },
    {
      id: 'C',
      title: 'Creative C: High-Energy Motion Visual',
      angle: 'Data Proof & SaaS Dashboard Hook',
      ctr: winnerScale ? '4.8%' : '3.2%',
      cpc: winnerScale ? '₹9' : '₹14',
      cpl: winnerScale ? '₹118' : '₹145',
      status: winnerScale ? 'WINNER → SCALE' : 'LEADING',
      isWinner: true,
    },
    {
      id: 'D',
      title: 'Creative D: Carousel Case Study',
      angle: 'Social Proof & Multi-Result Slides',
      ctr: winnerScale ? '2.1%' : '1.9%',
      cpc: winnerScale ? '₹21' : '₹25',
      cpl: winnerScale ? '₹195' : '₹210',
      status: winnerScale ? 'PAUSED' : 'TESTING',
      isWinner: false,
    },
  ];

  return (
    <section id="creative-testing" className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREATIVE SCIENTIFIC METHOD</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading uppercase">
            WE DON'T GUESS. <br />
            <span className="text-emerald-400 text-glow-emerald">WE TEST.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light">
            We systematically compete multiple ad angles, hooks, and formats until high-ROAS winners emerge.
          </p>

          <div className="pt-4">
            <button
              onClick={startTest}
              disabled={isRunningTest}
              className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-400 disabled:opacity-50 transition-all"
            >
              {isRunningTest ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>SIMULATING CREATIVE AUCTION...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-black" />
                  <span>SIMULATE CREATIVE TEST RUN</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4 Creative Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creatives.map((creative) => {
            const isWinner = winnerScale && creative.isWinner;
            return (
              <motion.div
                key={creative.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border transition-all duration-500 ${
                  isWinner
                    ? 'bg-emerald-950/40 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.3)] scale-[1.02]'
                    : 'glass-card border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                      isWinner ? 'bg-emerald-400 text-black' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {creative.id}
                    </span>
                    <span className="text-sm font-bold text-white font-heading">{creative.title}</span>
                  </div>

                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isWinner
                      ? 'bg-emerald-400 text-black font-extrabold flex items-center gap-1 shadow-lg'
                      : creative.status === 'PAUSED'
                      ? 'bg-slate-800 text-slate-500'
                      : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {isWinner && <Trophy className="w-3 h-3 text-black" />}
                    {creative.status}
                  </span>
                </div>

                <div className="text-xs text-slate-400 mb-6 font-light">
                  <strong>Hook Angle:</strong> {creative.angle}
                </div>

                {/* Metrics Breakdown */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 font-mono text-xs">
                  <div>
                    <div className="text-slate-500 text-[10px]">CTR</div>
                    <div className={`font-bold text-base ${isWinner ? 'text-emerald-400' : 'text-slate-200'}`}>
                      {creative.ctr}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">AVG CPC</div>
                    <div className={`font-bold text-base ${isWinner ? 'text-emerald-400' : 'text-slate-200'}`}>
                      {creative.cpc}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">CPL</div>
                    <div className={`font-bold text-base ${isWinner ? 'text-emerald-400 font-extrabold' : 'text-slate-200'}`}>
                      {creative.cpl}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
