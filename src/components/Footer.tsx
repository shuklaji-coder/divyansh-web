import React from 'react';
import { ArrowUp, ShieldCheck, MessageSquare, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#040608] text-slate-400 text-xs border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-bold flex items-center justify-center">
                D
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                DIVYANSH <span className="text-emerald-400">PERFORMANCE MARKETING</span>
              </span>
            </div>

            <p className="text-slate-400 font-light max-w-sm leading-relaxed">
              Ultra-premium performance advertising, custom web architecture, and mobile app growth systems engineered for revenue scale.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919580849709"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-emerald-400 hover:border-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">NAVIGATE</div>
            <div><a href="#hero" className="hover:text-emerald-400 transition-colors">01. Home</a></div>
            <div><a href="#services" className="hover:text-emerald-400 transition-colors">02. Services</a></div>
            <div><a href="#analytics" className="hover:text-emerald-400 transition-colors">03. Analytics Dashboard</a></div>
            <div><a href="#results" className="hover:text-emerald-400 transition-colors">04. Case Studies</a></div>
            <div><a href="#founder" className="hover:text-emerald-400 transition-colors">05. Founder Story</a></div>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4 space-y-3 font-mono">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">SERVICES</div>
            <div className="text-slate-300">● Meta Ads (FB & Instagram)</div>
            <div className="text-slate-300">● Google Ads (Search, PMax, YouTube)</div>
            <div className="text-emerald-400 font-bold">● Website Development (Next / Vite)</div>
            <div className="text-emerald-400 font-bold">● Mobile App Development (iOS / Android)</div>
            <div className="text-slate-300">● CAPI Server-Side Tracking</div>
          </div>

        </div>

        {/* Bottom Rights & Scroll to Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} DIVYANSH PERFORMANCE MARKETING. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">SAMPLE DATA & PLACEHOLDERS CLEARLY MARKED</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black transition-colors flex items-center gap-1"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
