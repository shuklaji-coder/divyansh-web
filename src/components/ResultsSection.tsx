import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ArrowUpRight, CheckCircle2, Award } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const caseStudies = [
    {
      id: '01',
      tag: 'E-COMMERCE BRAND',
      title: 'Scaling D2C Fashion Revenue 4.8x via Meta Ads & Sub-Second Web Store',
      objective: 'Increase online purchases while scaling daily ad spend without margin degradation.',
      spend: '₹2,40,000',
      revenue: '₹11,52,000',
      roas: '4.8x',
      strategies: [
        'Meta Prospecting with UGC Angles',
        'Vite/Next.js Ultra-Fast Storefront',
        'Dynamic Product Retargeting',
        'CAPI Server-Side Integration',
      ],
      results: ['↑ 380% Revenue Growth', '↓ 28% Cost Per Acquisition', '↑ 4.8x Scaled ROAS'],
    },
    {
      id: '02',
      tag: 'HIGH-TICKET SERVICE',
      title: 'Generating 450+ High-Intent B2B Leads via Google Search & Quiz Funnel',
      objective: 'Eliminate low-quality spam leads and scale qualified business owner inquiries.',
      spend: '₹1,80,000',
      revenue: '450 Leads',
      roas: '₹148 CPL',
      strategies: [
        'Google High-Intent Search Bidding',
        'Multi-Step Quiz Qualification Funnel',
        'WhatsApp Lead Instant Alerting',
        'Creative Copy & Landing A/B Testing',
      ],
      results: ['450+ Qualified Verified Leads', '↓ 34% Reduction in CPL', '82% Sales Conversion Rate'],
    },
    {
      id: '03',
      tag: 'TECH & MOBILE APP',
      title: 'Scaling 12,000+ App Installs & In-App Subscriptions on Meta & Google PMax',
      objective: 'Drive cost-effective mobile app installs and first-week paid subscriptions.',
      spend: '₹2,16,000',
      revenue: '12,400 Installs',
      roas: '₹18 CPI',
      strategies: [
        'App Event Tracking Integration',
        'Google Performance Max for Apps',
        'Short-Form Video Ad Campaign',
        'In-App Onboarding Optimization',
      ],
      results: ['12,400+ Active App Installs', '₹18 Average Cost Per Install', '↑ 44% In-App Subscription Rate'],
    },
  ];

  return (
    <section id="results" className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Glow Backdrop */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>CASE STUDY METRICS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading uppercase">
            DON'T TAKE OUR WORD FOR IT. <br />
            <span className="text-emerald-400 text-glow-emerald">LOOK AT THE DATA.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light">
            Real campaign architecture, real growth data, and verifiable return on ad spend.
          </p>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border-white/10 hover:border-emerald-500/40 relative overflow-hidden group"
              data-cursor="EXPLORE"
            >
              {/* Header Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold tracking-widest uppercase">
                    {cs.tag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-mono font-bold uppercase">
                    CASE STUDY PLACEHOLDER
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-emerald-400 transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-400 mb-6 font-light">
                  {cs.objective}
                </p>

                {/* Metrics Box */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/80 border border-white/5 mb-6 font-mono text-center">
                  <div>
                    <div className="text-[10px] text-slate-500">SPEND</div>
                    <div className="text-xs font-bold text-slate-200">{cs.spend}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">RETURN</div>
                    <div className="text-xs font-bold text-white">{cs.revenue}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">SCALE</div>
                    <div className="text-xs font-bold text-emerald-400">{cs.roas}</div>
                  </div>
                </div>

                {/* Strategy List */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Strategy Deployed:</div>
                  {cs.strategies.map((strat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{strat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Breakdown */}
              <div className="pt-4 border-t border-white/10 space-y-1.5 font-mono text-xs text-emerald-400 font-bold">
                {cs.results.map((res, i) => (
                  <div key={i}>{res}</div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
