import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Zap, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenAudit: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 md:py-36 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Emerald Ambient Light */}
      <div className="absolute inset-0 bg-radial-emerald opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 sm:p-14 rounded-3xl border border-emerald-500/40 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Accent Image of Divyansh */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 opacity-10 pointer-events-none rounded-full overflow-hidden filter grayscale blur-sm">
            <img src="/divyansh.png" alt="Divyansh Ambient" className="w-full h-full object-cover" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4 animate-pulse" />
            <span>LET'S SCALE YOUR REVENUE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading uppercase max-w-3xl mx-auto leading-tight">
            READY TO MAKE YOUR ADS & DIGITAL PRODUCTS <br />
            <span className="text-emerald-400 text-glow-emerald">WORK HARDER?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Get a comprehensive, zero-obligation ad account & website audit directly from Divyansh. Discover hidden budget leaks and unlock scalable growth.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              data-magnetic
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 text-black font-bold text-base flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-emerald-400 transition-all hover:scale-105"
            >
              <span>GET FREE AD AUDIT</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/919580849709?text=Hi%20Divyansh%2C%20I%20want%20to%20discuss%20performance%20marketing%20and%20web%2Fapp%20development"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-white/15 hover:border-emerald-500/40 text-white font-semibold text-base flex items-center justify-center gap-2 backdrop-blur-md transition-all hover:bg-slate-800"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>TALK TO DIVYANSH</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Free Diagnostic</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct Founder Call</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
