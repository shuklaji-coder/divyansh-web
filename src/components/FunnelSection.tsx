import React from 'react';
import { motion } from 'framer-motion';
import { Eye, MousePointerClick, Layout, UserCheck, ShieldCheck, ShoppingCart, DollarSign } from 'lucide-react';

export const FunnelSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Ad Impression', icon: Eye, metric: '100,000 Impressions', desc: 'Targeting high-intent audience profiles across Meta & Google.' },
    { num: '02', title: 'Click', icon: MousePointerClick, metric: '3,800 Clicks (3.8% CTR)', desc: 'Compelling ad hooks drive qualified prospects to land.' },
    { num: '03', title: 'Landing Page', icon: Layout, metric: 'Fast Web App Load', desc: 'Sub-1s page speed ensures minimum bounce rate.' },
    { num: '04', title: 'Lead Form', icon: UserCheck, metric: '420 Submissions (11% Conv)', desc: 'High-intent form questions filter out junk inquiries.' },
    { num: '05', title: 'Qualified Lead', icon: ShieldCheck, metric: '320 Verified Prospects', desc: 'Instant WhatsApp & CRM qualification verifies details.' },
    { num: '06', title: 'Customer Sale', icon: ShoppingCart, metric: '84 Closed Deals (26% Close)', desc: 'Sales team closes warm, ready-to-buy inquiries.' },
    { num: '07', title: 'Revenue', icon: DollarSign, metric: '₹14,20,000 Net Revenue', desc: 'Repeatable, predictable return on initial ad spend.' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <span>FULL CONVERSION ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading uppercase">
            EVERY CLICK HAS A <span className="text-emerald-400 text-glow-emerald">STORY.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light">
            We track and optimize the journey from the very first impression to final closed revenue.
          </p>
        </div>

        {/* Vertical Animated Funnel Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-6">
          {/* Vertical Connecting Glow Line */}
          <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-400 via-teal-500 to-emerald-600 z-0 opacity-40" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative z-10 flex items-start gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl glass-card border-white/10 hover:border-emerald-500/40"
              >
                {/* Step Circle Badge */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-900 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      <span className="text-xs font-mono text-emerald-400 mr-2">{step.num} •</span>
                      {step.title}
                    </h3>
                    <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold w-fit">
                      {step.metric}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
