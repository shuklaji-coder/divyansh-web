import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Send } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.688-1.807A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="#fff"/>
    <path d="M22.003 18.897c-.304-.152-1.8-.888-2.08-.989-.279-.1-.482-.152-.684.152-.203.304-.783.989-.96 1.192-.177.203-.354.228-.658.076-.304-.152-1.284-.473-2.445-1.508-.903-.806-1.513-1.802-1.69-2.106-.177-.304-.019-.468.133-.619.136-.136.304-.354.456-.531.152-.177.203-.304.304-.507.1-.203.05-.38-.025-.532-.076-.152-.684-1.648-.937-2.256-.247-.593-.498-.513-.684-.522l-.583-.01c-.203 0-.532.076-.81.38-.279.304-1.063 1.04-1.063 2.536 0 1.496 1.088 2.94 1.24 3.143.152.203 2.141 3.269 5.188 4.58.725.313 1.29.5 1.73.64.727.231 1.388.199 1.912.121.583-.087 1.8-.736 2.054-1.447.253-.711.253-1.32.177-1.447-.075-.127-.278-.203-.582-.354z" fill="#25D366"/>
  </svg>
);


const WHATSAPP_NUMBER = '919305619653';
const WHATSAPP_MESSAGES = [
  'Hi Divyansh! I want to discuss performance marketing for my business.',
  'Hi Divyansh! I need a custom website built for my brand.',
  'Hi Divyansh! I want to develop a mobile app for my business.',
  'Hi Divyansh! I want to get a free ad audit done.',
];

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');

  const openChat = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  const handleSend = () => {
    const msg = inputMsg.trim() || 'Hi Divyansh! I want to talk about growing my business.';
    openChat(msg);
    setInputMsg('');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-3">

        {/* Chat Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="w-[300px] sm:w-[320px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              style={{ background: 'linear-gradient(135deg, #0d1117 60%, #0a1f14)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-[#128C7E]">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 bg-emerald-900 flex items-center justify-center shrink-0">
                    <img
                      src="/divyansh.png"
                      alt="Divyansh"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Divyansh</div>
                    <div className="text-emerald-100 text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block animate-pulse" />
                      Online · Usually replies instantly
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Bubble */}
              <div className="p-4 space-y-3">
                <div className="bg-[#1e2a1e] rounded-2xl rounded-tl-sm p-3 max-w-[90%] shadow-md">
                  <p className="text-slate-200 text-xs leading-relaxed">
                    👋 Hey! I'm <strong>Divyansh</strong>. Ready to scale your business with Meta Ads, Google Ads, custom Websites, or Mobile Apps?
                  </p>
                  <p className="text-slate-400 text-[10px] mt-1 text-right">10:30 AM ✓✓</p>
                </div>

                {/* Quick Reply Chips */}
                <div className="space-y-2 pt-1">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">QUICK MESSAGES:</p>
                  {WHATSAPP_MESSAGES.map((msg, i) => (
                    <button
                      key={i}
                      onClick={() => openChat(msg)}
                      className="w-full text-left text-[11px] px-3 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 group"
                    >
                      <span>{msg.replace(`Hi Divyansh! `, '')}</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>

                {/* Custom message input */}
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/5">
                  <input
                    type="text"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message..."
                    className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-emerald-500/50"
                  />
                  <button
                    onClick={handleSend}
                    className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:shadow-[0_4px_40px_rgba(37,211,102,0.8)] transition-shadow"
          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          aria-label="Open WhatsApp Chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <WhatsAppIcon />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification dot */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#06080B] flex items-center justify-center text-[8px] text-white font-bold animate-bounce">
              1
            </span>
          )}
        </motion.button>

      </div>
    </>
  );
};
