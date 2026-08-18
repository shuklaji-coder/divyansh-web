import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { BarChart2, TrendingUp, DollarSign, Users, Target, Zap } from 'lucide-react';

export const AnalyticsDashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'7D' | '30D' | '90D'>('30D');

  const chartData = [
    { day: 'Day 1', spend: 1200, leads: 8, roas: 1.8 },
    { day: 'Day 5', spend: 2800, leads: 24, roas: 2.2 },
    { day: 'Day 10', spend: 5400, leads: 48, roas: 2.9 },
    { day: 'Day 15', spend: 12000, leads: 95, roas: 3.4 },
    { day: 'Day 20', spend: 24000, leads: 180, roas: 3.8 },
    { day: 'Day 25', spend: 36000, leads: 260, roas: 4.1 },
    { day: 'Day 30', spend: 48500, leads: 327, roas: 4.2 },
  ];

  const campaignRows = [
    { name: 'Meta Ads - High Intent Prospecting', status: 'Active', spend: '₹22,400', leads: '162', cpl: '₹138', roas: '4.6x' },
    { name: 'Google Ads - Search Intent Funnel', status: 'Active', spend: '₹16,100', leads: '98', cpl: '₹164', roas: '4.1x' },
    { name: 'Meta Advantage+ Dynamic Retargeting', status: 'Active', spend: '₹10,000', leads: '67', cpl: '₹149', roas: '3.8x' },
  ];

  return (
    <section id="analytics" className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>REAL-TIME ANALYTICS ECOSYSTEM</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading uppercase">
            STOP GUESSING. <br />
            <span className="text-emerald-400 text-glow-emerald">START MEASURING.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light">
            We build live data architecture to monitor every rupee, lead, and conversion path in real time.
          </p>
        </div>

        {/* Realistic Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative"
        >
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <h3 className="text-lg font-bold text-white font-heading">LIVE CAMPAIGN PERFORMANCE</h3>
                <p className="text-xs font-mono text-slate-400">Omnichannel Ads & Conversion Hub</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Timeframe Selector */}
              <div className="flex items-center bg-slate-900/80 p-1 rounded-lg border border-white/10 text-xs font-mono">
                {(['7D', '30D', '90D'] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      timeframe === tf ? 'bg-emerald-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="glass-card p-4 sm:p-5 rounded-2xl">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>AD SPEND</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">₹48,500</div>
              <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span>+38% Spend Efficiency</span>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-5 rounded-2xl">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>LEADS</span>
                <Users className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">327</div>
              <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span>+42% Qualified Leads</span>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-5 rounded-2xl">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>AVG CPL</span>
                <Target className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">₹148</div>
              <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span>-27% Lower CPL</span>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-5 rounded-2xl">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>ROAS</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading text-glow-emerald">4.2x</div>
              <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span>+64% Net Revenue</span>
              </div>
            </div>
          </div>

          {/* Recharts Area Curve Chart */}
          <div className="h-64 sm:h-80 w-full my-6 p-4 rounded-2xl bg-slate-900/40 border border-white/5">
            <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
              <span>GROWTH CURVE (SPEND VS REVENUE RETURN)</span>
              <span className="text-emerald-400">● Ad Revenue</span>
            </div>

            <ResponsiveContainer width="100%" height="90%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="day" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#10b981',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Area type="monotone" dataKey="spend" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorSpend)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Live Campaign Performance — Mobile Cards & Desktop Table */}
          <div className="mt-6">
            {/* Mobile: Stack cards */}
            <div className="md:hidden space-y-3">
              {campaignRows.map((row, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 font-mono text-xs space-y-2">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[11px] leading-snug">{row.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">● {row.status}</span>
                    <span className="text-slate-400">{row.spend}</span>
                    <span className="text-slate-400">{row.leads} leads</span>
                    <span className="text-slate-400">CPL {row.cpl}</span>
                    <span className="text-emerald-400 font-bold">ROAS {row.roas}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop: Full table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="text-slate-400 border-b border-white/10 pb-2">
                    <th className="pb-3 font-semibold">CAMPAIGN NAME</th>
                    <th className="pb-3 font-semibold">STATUS</th>
                    <th className="pb-3 font-semibold">SPEND</th>
                    <th className="pb-3 font-semibold">LEADS</th>
                    <th className="pb-3 font-semibold">CPL</th>
                    <th className="pb-3 font-semibold">ROAS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {campaignRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 font-semibold text-white flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{row.name}</span>
                      </td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                          ● {row.status}
                        </span>
                      </td>
                      <td className="py-3">{row.spend}</td>
                      <td className="py-3">{row.leads}</td>
                      <td className="py-3">{row.cpl}</td>
                      <td className="py-3 text-emerald-400 font-bold">{row.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
