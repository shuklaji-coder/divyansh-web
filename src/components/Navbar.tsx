import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Creative Testing', href: '#creative-testing' },
    { name: 'Results', href: '#results' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Process', href: '#process' },
    { name: 'Founder', href: '#founder' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#06080B]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold text-lg shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:scale-105 transition-transform">
              <span>D</span>
              <div className="absolute inset-0 rounded-xl bg-emerald-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                DIVYANSH
              </span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase -mt-0.5">
                PERFORMANCE MARKETING
              </span>
            </div>
          </a>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAudit}
              data-magnetic
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs tracking-wide flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:bg-emerald-400 transition-all duration-300 transform active:scale-95"
            >
              <span>Get Free Ad Audit</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenAudit}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-emerald-500 text-black font-bold text-xs"
            >
              Free Audit
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-white hover:text-emerald-400 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-Over Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 pt-24 px-6 bg-[#06080B]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-lg font-heading font-semibold text-slate-200 hover:text-emerald-400 transition-colors border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-500 opacity-60" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full py-4 rounded-xl bg-emerald-500 text-black font-bold text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.5)]"
              >
                <span>Get Free Ad Audit</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Commitment • 100% Data Backed</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
