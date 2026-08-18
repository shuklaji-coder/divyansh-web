import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, Sliders, TrendingUp } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'AUDIT',
      icon: Search,
      desc: 'Deep diagnostic of your existing ad accounts, pixel health, website load speeds, and audience funnels.',
    },
    {
      num: '02',
      title: 'STRATEGY',
      icon: Compass,
      desc: 'Architect target audience segments, ad copy angles, creative scripts, landing page wireframes, and budget allocations.',
    },
    {
      num: '03',
      title: 'LAUNCH',
      icon: Rocket,
      desc: 'Deploy structured Meta & Google campaigns, server-side tracking, and web assets with real-time logging.',
    },
    {
      num: '04',
      title: 'OPTIMIZE',
      icon: Sliders,
      desc: 'Prune unprofitable ad sets, double down on high-CTR creatives, and optimize web conversion paths.',
    },
    {
      num: '05',
      title: 'SCALE',
      icon: TrendingUp,
      desc: 'Aggressively expand spend into high-performing campaigns while retaining strict target CPL & ROAS margins.',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <span>EXECUTABLE METHODOLOGY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading uppercase">
            HOW WE <span className="text-emerald-400 text-glow-emerald">WORK.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light">
            A 5-phase growth framework engineered to eliminate wasted spend and maximize return.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border-white/10 hover:border-emerald-500/40 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-mono text-emerald-400">{step.num}</span>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500">
                  PHASE {idx + 1} ENFORCED
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
