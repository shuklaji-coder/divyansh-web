import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Star, ShieldCheck, Quote, MessageCircle, ZoomIn, X, CheckCheck } from 'lucide-react';

export const ClientReviews: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const additionalReviews = [
    {
      name: 'Vikram Malhotra',
      role: 'Founder & CEO, D2C Apparel',
      spend: '₹4.2L Spent',
      result: '4.8x ROAS',
      text: 'Working with Divyansh completely transformed our acquisition cost. Before Divyansh, our CPL was climbing past ₹350. Within 30 days of his Meta Ads restructuring and sub-second landing page build, CPL dropped to ₹140.',
      stars: 5,
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Growth Director, EdTech Platform',
      spend: '350+ Leads/mo',
      result: '82% Lead Quality',
      text: 'Divyansh does not just run ads—he built our complete lead qualification web app and WhatsApp automation. The leads coming in now are 10x higher quality than any agency we used before.',
      stars: 5,
    },
    {
      name: 'Rohan Mehta',
      role: 'Co-Founder, Mobile Fitness App',
      spend: '15k+ Installs',
      result: '₹16 Cost/Install',
      text: 'His Google Ads PMax strategy and app onboarding UX redesign scaled our active user base from 2,000 to over 15,000 in under 3 months. Exceptional technical and marketing mind.',
      stars: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#06080B] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>VERIFIED CLIENT PROOF</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading uppercase">
            REAL CLIENT REVIEWS & <br />
            <span className="text-emerald-400 text-glow-emerald">VERIFIED PROOF.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light">
            Hear directly from clients and see authentic WhatsApp performance conversations with Divyansh.
          </p>
        </div>

        {/* 3-Column Grid: Video + Chat Proof + Payment Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Left: Real Video Testimonial Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 glass-panel p-4 sm:p-6 rounded-3xl border border-emerald-500/40 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase">
                  VIDEO TESTIMONIAL
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Client
                </span>
              </div>

              {/* Player Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
                <video
                  ref={videoRef}
                  src="/client-review.mp4"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  playsInline
                />

                {/* Play Overlay Button when paused */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all hover:bg-black/40"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.8)] hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Custom Video Control Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-white/10 hover:bg-emerald-500 hover:text-black text-white transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400">PLAYING TESTIMONIAL</span>

                  <button
                    onClick={toggleFullScreen}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Rating Bar */}
            <div className="mt-4 flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
              <div>
                <div className="font-heading font-bold text-white text-sm">Client Video Review</div>
                <div className="text-[11px] font-mono text-emerald-400">Meta & Google Ads Campaign Scale</div>
              </div>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Middle: WhatsApp Chat Proof Screenshot Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 glass-panel p-4 rounded-3xl border border-emerald-500/40 flex flex-col justify-between shadow-2xl relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase flex items-center gap-1.5">
                  <CheckCheck className="w-4 h-4 text-emerald-400" />
                  WHATSAPP CHAT PROOF
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Rahul (E-Commerce Client)</span>
              </div>

              {/* Chat Screenshot Frame */}
              <div
                onClick={() => setShowChatModal(true)}
                className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer aspect-[3/4] bg-slate-950 shadow-xl"
                data-cursor="VIEW"
              >
                <img
                  src="/client-chat-proof.png"
                  alt="WhatsApp Client Feedback Chat with Divyansh"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white font-mono text-xs">
                  <div className="p-3 rounded-full bg-emerald-500 text-black shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span>CLICK TO EXPAND CHAT</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">"Ab samajh aa raha hai performance marketing actually kya hota hai..."</span>
              <button
                onClick={() => setShowChatModal(true)}
                className="text-emerald-400 font-bold hover:underline shrink-0 ml-2"
              >
                Expand
              </button>
            </div>
          </motion.div>

          {/* Right: Payment Proof Screenshot Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 glass-panel p-4 rounded-3xl border border-emerald-500/40 flex flex-col justify-between shadow-2xl relative"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  PAYMENT PROOF
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Apex Telecom</span>
              </div>

              {/* Payment Screenshot Frame */}
              <div
                onClick={() => setShowPaymentModal(true)}
                className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer aspect-[3/4] bg-slate-950 shadow-xl"
                data-cursor="VIEW"
              >
                <img
                  src="/payment-proof.png"
                  alt="Apex Telecom ₹5,000 Payment to Divyansh"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white font-mono text-xs">
                  <div className="p-3 rounded-full bg-emerald-500 text-black shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span>CLICK TO EXPAND</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-bold">₹5,000 Paytm · Verified</span>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="text-slate-400 hover:text-emerald-400 hover:underline shrink-0 ml-2 transition-colors"
              >
                Expand
              </button>
            </div>
          </motion.div>

        </div>

        {/* 3 Additional Client Written Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalReviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border-white/10 hover:border-emerald-500/40 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-emerald-500/40" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-white text-sm">{rev.name}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{rev.role}</div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-xs font-bold text-emerald-400">{rev.result}</div>
                  <div className="text-[10px] text-slate-500">{rev.spend}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox: WhatsApp Chat */}
      <AnimatePresence>
        {showChatModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setShowChatModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-sm w-full max-h-[90vh] bg-slate-950 rounded-3xl border border-emerald-500/40 overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-4 bg-slate-900 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <CheckCheck className="w-4 h-4 text-emerald-400" />
                  <span>Chat Proof: Rahul (E-Commerce)</span>
                </div>
                <button onClick={() => setShowChatModal(false)} className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-[80vh]">
                <img src="/client-chat-proof.png" alt="WhatsApp Chat Proof" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox: Payment Proof */}
      <AnimatePresence>
        {showPaymentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setShowPaymentModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-sm w-full max-h-[90vh] bg-slate-950 rounded-3xl border border-emerald-500/40 overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-4 bg-slate-900 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Payment Proof: Apex Telecom · ₹5,000</span>
                </div>
                <button onClick={() => setShowPaymentModal(false)} className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-[80vh]">
                <img src="/payment-proof.png" alt="Payment Proof" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
