import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Hero } from './components/Hero';
import { FounderReveal } from './components/FounderReveal';
import { ProblemSection } from './components/ProblemSection';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { ServicesSection } from './components/ServicesSection';
import { CreativeTesting } from './components/CreativeTesting';
import { FunnelSection } from './components/FunnelSection';
import { ResultsSection } from './components/ResultsSection';
import { ClientReviews } from './components/ClientReviews';
import { FounderStory } from './components/FounderStory';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { StatementSection } from './components/StatementSection';
import { FinalCTA } from './components/FinalCTA';
import { AuditModal } from './components/AuditModal';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080B] text-slate-100 relative">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Preloader */}
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* Sticky Navigation */}
          <Navbar onOpenAudit={() => setAuditModalOpen(true)} />

          {/* Floating WhatsApp Chat Widget */}
          <WhatsAppWidget />

          {/* Story Scene 01: Hero Intro */}
          <Hero onOpenAudit={() => setAuditModalOpen(true)} />

          {/* Story Scene 02: Founder Divyansh Reveal */}
          <FounderReveal onOpenAudit={() => setAuditModalOpen(true)} />

          {/* Story Scene 03: The Problem */}
          <ProblemSection />

          {/* Story Scene 04: Data Takes Over - Analytics Dashboard */}
          <AnalyticsDashboard />

          {/* Story Scene 05: Services Interactive System */}
          <ServicesSection />

          {/* Story Scene 06: Creative Testing Simulation */}
          <CreativeTesting />

          {/* Story Scene 07: Conversion Funnel */}
          <FunnelSection />

          {/* Story Scene 08: Results / Data Case Studies */}
          <ResultsSection />

          {/* Story Scene 09: Real Client Video Reviews & Testimonials */}
          <ClientReviews />

          {/* Story Scene 10: Founder Story */}
          <FounderStory />

          {/* Story Scene 11: Process Timeline */}
          <ProcessSection />

          {/* Story Scene 12: Meet Our Development Team */}
          <TeamSection />

          {/* Story Scene 13: Big Statement Section */}
          <StatementSection />

          {/* Story Scene 13: Final CTA */}
          <FinalCTA onOpenAudit={() => setAuditModalOpen(true)} />

          {/* FAQs */}
          <FAQSection />

          {/* Footer */}
          <Footer />

          {/* Audit Request Modal */}
          <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
        </>
      )}
    </div>
  );
}
