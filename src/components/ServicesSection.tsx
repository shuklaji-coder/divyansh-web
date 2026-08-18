import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Search,
  Code,
  Smartphone,
  Target,
  Activity,
  Sparkles,
  Repeat,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Terminal,
  SmartphoneNfc,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  num: string;
  name: string;
  icon: any;
  tagline: string;
  description: string;
  features: string[];
  techStack?: string[];
  stats?: { label: string; val: string }[];
  mockType: 'meta' | 'google' | 'web' | 'app' | 'lead' | 'tracking' | 'creative' | 'retargeting';
}

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('web');

  const services: ServiceItem[] = [
    {
      id: 'web',
      num: '01',
      name: 'WEBSITE DEVELOPMENT',
      icon: Code,
      tagline: 'Sub-Second High-Converting Web Platforms',
      description:
        'We engineer hyper-fast, custom Web Apps, E-Commerce platforms, and High-Ticket Landing Pages built using modern tech stacks (Vite, React, Next.js, Tailwind CSS, TypeScript). Engineered specifically to turn paid Meta/Google traffic into instant revenue without drop-offs.',
      features: [
        'Sub-500ms Instant Page Load Speeds',
        'Custom React & Next.js Scalable Architecture',
        'Conversion-Optimized UX & Glassmorphic UI',
        'Built-in Server-Side CAPI & GA4 Event Tracking',
        'Mobile-First Responsive Design & SEO Optimized',
        'Zero-Latency Lead Qualification Forms & Payment Gateways',
      ],
      techStack: ['React 18', 'Next.js 14', 'Vite', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Stripe/Razorpay API'],
      stats: [
        { label: 'Page Speed Score', val: '99/100' },
        { label: 'Conversion Lift', val: '+45%' },
        { label: 'Avg Load Time', val: '380ms' },
      ],
      mockType: 'web',
    },
    {
      id: 'app',
      num: '02',
      name: 'APP DEVELOPMENT',
      icon: Smartphone,
      tagline: 'Native iOS & Android Mobile Products Built for Scale',
      description:
        'High-performance cross-platform Mobile Applications engineered with React Native and Flutter. Designed for high user retention, smooth 60fps UI, native push notification engines, automated referral loops, and frictionless checkout flows.',
      features: [
        'Cross-Platform iOS & Android Native Codebase',
        'Ultra-Smooth 60fps Glassmorphic Mobile UX',
        'Automated Retention Push Notification Engine',
        'In-App Analytics & Conversion Funnel Tagging',
        'Offline Sync & Secure Encrypted API Architecture',
        'App Store Optimization (ASO) & Launch Setup',
      ],
      techStack: ['React Native', 'Flutter', 'iOS / Swift', 'Android / Kotlin', 'Firebase CAPI', 'GraphQL / REST'],
      stats: [
        { label: 'UI Frame Rate', val: '60 FPS' },
        { label: 'App Store Rating', val: '4.9 ★' },
        { label: 'User Retention', val: '74%' },
      ],
      mockType: 'app',
    },
    {
      id: 'meta',
      num: '03',
      name: 'META ADS',
      icon: Layers,
      tagline: 'High-Intent Scale on Facebook & Instagram',
      description:
        'Prospecting, Advantage+ Shopping campaigns, UGC video funnels, and dynamic retargeting engineered to maximize ROAS.',
      features: [
        'Advantage+ Budget Optimization',
        'Lookalike & Custom Audiences',
        'UGC & Motion Video Ad Testing',
        'High-Converting Ad Copies & Hooks',
      ],
      mockType: 'meta',
    },
    {
      id: 'google',
      num: '04',
      name: 'GOOGLE ADS',
      icon: Search,
      tagline: 'Capture Ready-to-Buy Search Intent',
      description:
        'Performance Max, Google Search, YouTube Ads, and Display Remarketing designed to capture users at the exact moment of search intent.',
      features: [
        'High-Intent Keyword Bidding Strategy',
        'Performance Max (PMax) Campaign Scale',
        'Negative Keyword & Placement Audit',
        'YouTube In-Feed & Bumper Ads',
      ],
      mockType: 'google',
    },
    {
      id: 'lead',
      num: '05',
      name: 'LEAD GENERATION',
      icon: Target,
      tagline: 'Qualified Pipeline for High-Ticket Sales',
      description:
        'Multi-step quiz funnels, Instant Form leads, WhatsApp automation, and automated CRM lead qualification.',
      features: [
        'Multi-Step Qualification Funnels',
        'Instant WhatsApp CRM Sync & Alerts',
        'Webhook & API Lead Automation',
        'Spam & Invalid Phone Filtering',
      ],
      mockType: 'lead',
    },
    {
      id: 'tracking',
      num: '06',
      name: 'CONVERSION TRACKING',
      icon: Activity,
      tagline: 'Server-Side CAPI & 100% Attribution',
      description:
        'Meta Conversions API (CAPI), Google Tag Manager server-side containers, GA4 custom events, and iOS14 attribution bypass.',
      features: [
        'Meta Server-Side CAPI Setup',
        'GTM Server Container Configuration',
        'First-Party Data Collection & Deduplication',
        'Multi-Touch Attribution Dashboards',
      ],
      mockType: 'tracking',
    },
    {
      id: 'creative',
      num: '07',
      name: 'CREATIVE TESTING',
      icon: Sparkles,
      tagline: 'Data-Driven Creative Iteration',
      description:
        'Systematic A/B testing of hooks, angles, thumbnails, primary text, and call-to-actions to defeat ad fatigue.',
      features: [
        'Hook Rate & Hold Rate Analysis',
        'Rapid Creative Iteration Framework',
        'Modular UGC Video Production',
        'Winner Scale Automation Matrix',
      ],
      mockType: 'creative',
    },
    {
      id: 'retargeting',
      num: '08',
      name: 'RETARGETING',
      icon: Repeat,
      tagline: 'Convert Bouncers into Paying Customers',
      description:
        'Omnichannel remarketing campaigns across Meta, Google, and WhatsApp to recapture abandoned carts and cold visitors.',
      features: [
        'Dynamic Product Ads (DPA)',
        'Sequential Message Nurturing',
        'Time-Decay Audience Segments',
        'Cross-Platform Frequency Caps',
      ],
      mockType: 'retargeting',
    },
  ];

  const current = services.find((s) => s.id === activeService) || services[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>FULL-STACK GROWTH & ENGINEERING SUITE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading uppercase">
            WEBSITE, APP & <br />
            <span className="text-emerald-400 text-glow-emerald">PERFORMANCE MARKETING.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light">
            We don't just run ad campaigns. We build custom websites, native mobile applications, and server tracking infrastructure to scale your revenue.
          </p>
        </div>

        {/* Services Interactive Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {services.map((serv) => {
            const Icon = serv.icon;
            const isActive = activeService === serv.id;
            return (
              <button
                key={serv.id}
                onClick={() => setActiveService(serv.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                  isActive
                    ? 'bg-emerald-950/50 border-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] scale-[1.02]'
                    : 'glass-card border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-emerald-400' : 'text-slate-600'}`}>
                    {serv.num}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                </div>
                <div className="text-xs sm:text-sm font-bold font-heading uppercase tracking-wide">
                  {serv.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-500/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch shadow-2xl relative"
          >
            {/* Left: Service Info & Features */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                    SERVICE {current.num} • {current.name}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                  {current.tagline}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {current.description}
                </p>

                {/* Performance Stats Pill (If available) */}
                {current.stats && (
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                    {current.stats.map((st, i) => (
                      <div key={i} className="text-center font-mono">
                        <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-heading">{st.val}</div>
                        <div className="text-[10px] text-slate-400 uppercase">{st.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Feature Checklist */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    CORE DELIVERABLES & FEATURES
                  </div>
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills (If available) */}
                {current.techStack && (
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 font-bold uppercase">TECHNOLOGY STACK USED:</div>
                    <div className="flex flex-wrap gap-2">
                      {current.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="#analytics"
                  className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:underline"
                >
                  <span>Request Custom {current.name} Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Rich Interactive Visual Environment Preview */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-white/10 shadow-2xl relative overflow-hidden font-mono text-xs text-slate-300">
                {/* Header bar of mock window */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-slate-400 text-[11px] font-mono flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    {current.name} ARCHITECTURE MOCK
                  </span>
                </div>

                {/* Detailed Mock Content Based on MockType */}
                {current.mockType === 'web' && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-2">
                      <div className="flex items-center justify-between text-emerald-400 font-bold">
                        <span className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          <span>HIGH-SPEED WEB PLATFORM</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px]">LIGHTHOUSE 99/100</span>
                      </div>
                      <div className="text-slate-400 text-[11px]">Next.js 14 SSR + Vite + Tailwind CSS + CAPI Tagged</div>
                    </div>

                    {/* Web Dev Visual Layout Preview */}
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">⚡ First Contentful Paint:</span>
                        <span className="text-emerald-400 font-bold">320 ms</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">📱 Mobile Load Speed:</span>
                        <span className="text-emerald-400 font-bold">Sub-Second (410 ms)</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">🛡️ Server CAPI Event Sync:</span>
                        <span className="text-emerald-400 font-bold">100% Active</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">💳 Checkout Funnel Drop-off:</span>
                        <span className="text-emerald-400 font-bold">&lt; 3.2% (Industry Low)</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300">
                      <pre className="whitespace-pre-wrap leading-relaxed">
                        {"// Web Architecture Initialized\nconst app = createViteApp({ speed: 'sub-second', conversion: '4.2x' });"}
                      </pre>
                    </div>
                  </div>
                )}

                {current.mockType === 'app' && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-2">
                      <div className="flex items-center justify-between text-emerald-400 font-bold">
                        <span className="flex items-center gap-2">
                          <SmartphoneNfc className="w-4 h-4" />
                          <span>MOBILE APP UX (iOS & ANDROID)</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px]">60 FPS NATIVE</span>
                      </div>
                      <div className="text-slate-400 text-[11px]">React Native / Flutter + In-App Analytics & Push Alerts</div>
                    </div>

                    {/* App Dev Visual Stats Preview */}
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                        <div className="text-slate-400 text-[10px]">IOS RETENTION</div>
                        <div className="text-lg font-bold text-white">76.4%</div>
                        <div className="text-emerald-400 text-[10px]">Top 5% Industry</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                        <div className="text-slate-400 text-[10px]">ANDROID PERF</div>
                        <div className="text-lg font-bold text-white">60 FPS</div>
                        <div className="text-emerald-400 text-[10px]">Zero Stutter</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-white/10 space-y-1 text-[11px]">
                      <div className="text-emerald-400 font-bold">✓ Native Push Engine Integrated</div>
                      <div className="text-emerald-400 font-bold">✓ App Store & Play Store Ready</div>
                    </div>
                  </div>
                )}

                {current.mockType === 'meta' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex justify-between">
                      <span>Meta Campaign: Scaling Prospecting</span>
                      <span className="text-emerald-400 font-bold">ROAS 4.6x</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-white/5">Impressions: 480,000</div>
                      <div className="p-2 rounded bg-white/5">CTR: 3.42%</div>
                      <div className="p-2 rounded bg-white/5">Ad Spend: ₹22,400</div>
                      <div className="p-2 rounded bg-white/5 text-emerald-400">Leads: 162</div>
                    </div>
                  </div>
                )}

                {current.mockType === 'google' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 flex justify-between text-blue-300">
                      <span>Google Search Intent Bidding</span>
                      <span className="font-bold">Top Position 89%</span>
                    </div>
                    <div className="space-y-1 text-[11px]">
                      <div className="p-2 rounded bg-white/5 text-slate-300 font-sans">
                        <span className="text-blue-400 font-bold">Ad •</span> Best Performance Marketing Agency
                      </div>
                      <div className="p-2 rounded bg-white/5 text-slate-300 font-sans">
                        <span className="text-blue-400 font-bold">Ad •</span> High-Converting Web & App Development
                      </div>
                    </div>
                  </div>
                )}

                {current.mockType === 'lead' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex justify-between text-emerald-400">
                      <span>Instant Qualified Lead Funnel</span>
                      <span className="font-bold">WhatsApp Sync</span>
                    </div>
                    <div className="p-3 rounded bg-white/5 space-y-1 text-[11px]">
                      <div>Name: Amrit S. (Founder)</div>
                      <div>Monthly Ad Budget: ₹2,00,000+</div>
                      <div className="text-emerald-400">Status: Verified & Auto-Notified</div>
                    </div>
                  </div>
                )}

                {current.mockType === 'tracking' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex justify-between text-indigo-300">
                      <span>Server-Side CAPI Gateway</span>
                      <span className="font-bold">Match Quality 9.2/10</span>
                    </div>
                    <div className="p-3 rounded bg-white/5 space-y-1 text-[11px] font-mono">
                      <div>POST https://graph.facebook.com/v19.0/events</div>
                      <div className="text-emerald-400">HTTP 200 OK • Event: Purchase (₹4,800)</div>
                    </div>
                  </div>
                )}

                {current.mockType === 'creative' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 flex justify-between text-pink-300">
                      <span>Creative Angle Testing Matrix</span>
                      <span className="font-bold">Hook Rate 42%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                        Creative C: WINNER
                      </div>
                      <div className="p-2 rounded bg-white/5 text-slate-500">Creative A: Scaled Down</div>
                    </div>
                  </div>
                )}

                {current.mockType === 'retargeting' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex justify-between text-emerald-400">
                      <span>Cart Abandonment Nurture</span>
                      <span className="font-bold">Recovery +34%</span>
                    </div>
                    <div className="p-3 rounded bg-white/5 text-[11px] space-y-1">
                      <div>Stage 1: Meta Dynamic Carousel (0-3 Days)</div>
                      <div>Stage 2: WhatsApp VIP Offer (3-7 Days)</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
