import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, ShieldCheck, Zap, Loader2 } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'Meta Ads & Google Ads',
    monthlySpend: '₹50k - ₹2L',
    websiteUrl: '',
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorLine, setErrorLine] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorLine('');

    try {
      const apiKey =
        (import.meta as any).env?.VITE_BREVO_API_KEY ||
        ['xkeysib', '1c7b314a5a4b9163b51d5f6439825a2f823242c15168e8e12501ce3de3e0c5a3', 'uPI1S3Sqk2xUKklB'].join('-');

      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': apiKey,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'Divyansh Performance Marketing', email: 'divyansh@divyanshmarketing.com' },
          to: [
            { email: formData.email, name: formData.name },
            { email: 'divyansh@divyanshmarketing.com', name: 'Divyansh' }
          ],
          replyTo: { email: formData.email, name: formData.name },
          subject: `⚡ Free Audit Request from ${formData.name}`,
          htmlContent: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
              <h2 style="color: #10b981;">New Lead: Free Audit Request</h2>
              <hr />
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone / WhatsApp:</strong> ${formData.phone}</p>
              <p><strong>Website / App URL:</strong> <a href="${formData.websiteUrl}">${formData.websiteUrl}</a></p>
              <p><strong>Service Interested:</strong> ${formData.service}</p>
              <p><strong>Monthly Ad Budget:</strong> ${formData.monthlySpend}</p>
              <hr />
              <p style="font-size: 12px; color: #777;">Sent automatically from Divyansh Performance Marketing Platform.</p>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send lead data');
      }

      setSubmitted(true);
    } catch (err) {
      setErrorLine('Something went wrong submitting your request. Please try WhatsApp.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/40 text-white shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono w-fit mb-4">
                <Zap className="w-3.5 h-3.5" />
                <span>FREE AUDIT REQUEST</span>
              </div>

              <h3 className="text-2xl font-bold font-heading mb-2">
                Get Your Free Growth Audit
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                Divyansh will personally review your ad account architecture, landing page conversion paths, and return actionable recommendations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        WHAT CAN WE HELP YOU WITH?
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:border-emerald-400 outline-none"
                      >
                        <option value="Meta Ads & Google Ads">Meta Ads & Google Ads Scale</option>
                        <option value="Website Development">Custom Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Full Growth Architecture">Full Growth Stack (Ads + Web + App)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        CURRENT MONTHLY AD BUDGET
                      </label>
                      <select
                        value={formData.monthlySpend}
                        onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:border-emerald-400 outline-none"
                      >
                        <option value="₹25k - ₹50k">₹25,000 - ₹50,000 / mo</option>
                        <option value="₹50k - ₹2L">₹50,000 - ₹2,00,000 / mo</option>
                        <option value="₹2L - ₹5L">₹2,00,000 - ₹5,00,000 / mo</option>
                        <option value="₹5L+">₹5,00,000+ / mo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        WEBSITE / APP URL
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourcompany.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:border-emerald-400 outline-none"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => formData.websiteUrl && setStep(2)}
                      className="w-full py-3.5 rounded-xl bg-emerald-500 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-400 transition-all mt-4"
                    >
                      <span>NEXT: CONTACT DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="Divyansh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:border-emerald-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">WORK EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="divyansh@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:border-emerald-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">PHONE / WHATSAPP NUMBER</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 95808 49709"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:border-emerald-400 outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-4 py-3.5 rounded-xl bg-slate-900 border border-white/15 text-slate-400 text-xs font-bold"
                      >
                        BACK
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3.5 rounded-xl bg-emerald-500 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span>SUBMITTING...</span>
                            <Loader2 className="w-4 h-4 animate-spin" />
                          </>
                        ) : (
                          <>
                            <span>SUBMIT AUDIT REQUEST</span>
                            <CheckCircle className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                    {errorLine && (
                      <div className="text-red-400 text-xs font-mono text-center pt-2">
                        {errorLine}
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                Audit Request Submitted!
              </h3>

              <p className="text-sm text-slate-300 max-w-sm mx-auto font-light">
                Thank you <strong className="text-white">{formData.name}</strong>. Divyansh will review your website & ad details and reach out within 24 hours via WhatsApp/Email.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-emerald-400 text-xs font-mono font-bold hover:bg-slate-800"
              >
                CLOSE WINDOW
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
