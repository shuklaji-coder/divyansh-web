import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What makes Divyansh Performance Marketing different from standard digital agencies?',
      a: 'We treat advertising as an integrated data & software engineering discipline. We build high-converting custom web apps, native mobile apps, server-side CAPI tracking, and systematic creative testing matrices—ensuring every rupee spent delivers measurable profit.',
    },
    {
      q: 'Do you offer Website Development and Mobile App Development?',
      a: 'Yes! We engineer custom high-speed web platforms (Next.js, Vite, React) and cross-platform mobile applications (iOS & Android) with built-in event analytics designed specifically for seamless ad traffic conversion.',
    },
    {
      q: 'How does the free ad account audit work?',
      a: 'You submit your website and ad details. Divyansh conducts a diagnostic review of your campaign architecture, audience targeting, CPL trends, and pixel setup, delivering a video breakdown of key improvement areas.',
    },
    {
      q: 'What ad platforms do you specialize in?',
      a: 'We specialize in Meta Ads (Facebook & Instagram), Google Ads (Search, Performance Max, YouTube), conversion funnel optimization, WhatsApp automated lead flows, and retargeting matrices.',
    },
    {
      q: 'What minimum ad budget is required to work together?',
      a: 'We typically work with businesses spending ₹50,000/month and above in paid advertising, or brands looking to launch scalable digital product platforms.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARENT CLARITY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-heading uppercase">
            FREQUENTLY ASKED <span className="text-emerald-400 text-glow-emerald">QUESTIONS.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-900 text-emerald-400 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
