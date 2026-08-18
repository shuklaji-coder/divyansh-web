import React from 'react';
import { motion } from 'framer-motion';
import { Target, Database, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export const FounderStory: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'STRATEGY',
      icon: Target,
      desc: 'We map out your customer persona, market hook, and offer architecture before placing a single ad rupee.',
    },
    {
      num: '02',
      title: 'DATA',
      icon: Database,
      desc: 'We base decisions on server-side conversions, net margin economics, and attribution truth—never vanity metrics.',
    },
    {
      num: '03',
      title: 'CREATIVE',
      icon: Sparkles,
      desc: 'We produce, test, and iterate high-CTR videos, hooks, and landing page copy to outperform ad fatigue.',
    },
    {
      num: '04',
      title: 'OPTIMIZATION',
      icon: TrendingUp,
      desc: 'Continuous campaign tuning, audience pruning, and web page speed optimizations to scale ROAS predictably.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Divyansh Photo Accent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl bg-slate-900">
              <img
                src="/divyansh.png"
                alt="Divyansh - Performance Marketer"
                className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080B] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel text-white">
                <div className="font-heading font-extrabold text-lg text-white">DIVYANSH</div>
                <div className="text-xs font-mono text-emerald-400">Founder & Performance Growth Lead</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story Copy & 4 Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FOUNDER PHILOSOPHY</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
                BEHIND THE <span className="text-emerald-400 text-glow-emerald">CAMPAIGNS.</span>
              </h2>
            </div>

            <blockquote className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed border-l-4 border-emerald-500 pl-5 italic bg-white/5 py-3 rounded-r-2xl">
              "Great advertising isn't about spending more money. It's about understanding the customer, finding the right message and continuously improving what the data tells you."
            </blockquote>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((prin) => {
                const Icon = prin.icon;
                return (
                  <div key={prin.num} className="glass-card p-5 rounded-2xl border-white/10 hover:border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between text-emerald-400 font-mono text-xs font-bold">
                      <span>{prin.num}</span>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white font-heading">{prin.title}</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{prin.desc}</p>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
