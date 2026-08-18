import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Smartphone, Globe, Cpu, ArrowUpRight, Users, Sparkles, Terminal } from 'lucide-react';

const techBadges = [
  { label: 'React Native', color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' },
  { label: 'Flutter', color: 'text-blue-400 border-blue-500/40 bg-blue-500/10' },
  { label: 'Next.js', color: 'text-white border-white/20 bg-white/5' },
  { label: 'Node.js', color: 'text-green-400 border-green-500/40 bg-green-500/10' },
  { label: 'TypeScript', color: 'text-sky-400 border-sky-500/40 bg-sky-500/10' },
  { label: 'Vite', color: 'text-purple-400 border-purple-500/40 bg-purple-500/10' },
  { label: 'Firebase', color: 'text-amber-400 border-amber-500/40 bg-amber-500/10' },
  { label: 'REST / GraphQL', color: 'text-slate-300 border-white/20 bg-white/5' },
];

const expertise = [
  { icon: Smartphone, label: 'iOS & Android App Architecture', sub: 'React Native · Flutter · Native SDKs' },
  { icon: Globe, label: 'High-Speed Web Platform Engineering', sub: 'Next.js · Vite · React 18 · Tailwind CSS' },
  { icon: Cpu, label: 'Backend Systems & API Engineering', sub: 'Node.js · Firebase · REST · GraphQL' },
  { icon: Terminal, label: 'Performance & Analytics Integration', sub: 'CAPI · GA4 · GTM Server-Side' },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-36 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Ambient Emerald Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>ENGINEERING TEAM</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading uppercase">
            MEET OUR <br />
            <span className="text-emerald-400 text-glow-emerald">DEVELOPMENT TEAM.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light max-w-2xl mx-auto">
            Behind every high-converting website and scalable mobile app is an engineering team that understands performance at every layer — from pixel to server.
          </p>
        </div>

        {/* Team Member Card — Rohan Shukla */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-3xl border border-emerald-500/40 overflow-hidden shadow-2xl max-w-5xl w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* LEFT — Photo Column */}
              <div className="lg:col-span-5 relative overflow-hidden h-72 sm:h-96 lg:min-h-[600px] flex items-end">
                {/* Gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a0e] via-[#060a0e]/30 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0c1118]/40 z-10" />

                {/* Emerald side glow */}
                <div className="absolute top-0 left-0 w-32 h-full bg-emerald-500/10 blur-[80px] pointer-events-none z-0" />

                <img
                  src="/rohan.png"
                  alt="Rohan Shukla — Software Engineer"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />

                {/* Bottom Name Overlay */}
                <div className="relative z-20 p-8 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono uppercase tracking-widest">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    <span>SOFTWARE ENGINEER</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading drop-shadow-xl">
                    ROHAN SHUKLA
                  </h3>
                  <p className="text-xs font-mono text-slate-300 font-light">
                    Full-Stack & Mobile Development
                  </p>
                </div>
              </div>

              {/* RIGHT — Details Column */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between gap-8">

                {/* Bio */}
                <div className="space-y-4">
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
                    Rohan Shukla is the engineering backbone of Divyansh Performance Marketing's development team. He architects high-performance web applications and native mobile products from the ground up — turning complex business requirements into blazing-fast, pixel-perfect digital experiences.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    With deep expertise across the entire product stack — from React Native iOS/Android apps to Next.js server-rendered platforms — Rohan ensures every digital product is not just visually premium, but also engineered for conversion, speed, and scale.
                  </p>
                </div>

                {/* Expertise Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-slate-900/80 border border-white/8 hover:border-emerald-500/40 transition-all group"
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                            <Icon className="w-4 h-4 text-emerald-400" />
                          </div>
                          <span className="text-xs font-bold text-white font-heading">{item.label}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono pl-10">{item.sub}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider">
                    CORE TECHNOLOGY STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techBadges.map((badge, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-semibold ${badge.color}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LinkedIn CTA */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href="https://www.linkedin.com/in/rohan-shukla-0b8889321"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-400 transition-all group font-mono text-sm text-white font-bold"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle Bottom Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-600 text-xs font-mono mt-12"
        >
          MORE ENGINEERS JOINING THE TEAM SOON · <span className="text-emerald-600">HIRING GREAT MINDS</span>
        </motion.p>

      </div>
    </section>
  );
};
