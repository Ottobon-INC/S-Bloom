import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ConsultationModal } from './components/common/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustrySelectionPage } from './pages/IndustrySelectionPage';
import { IndustryLandingPage } from './pages/IndustryLandingPage';
import { EntitySelectionPage } from './pages/EntitySelectionPage';
import { TailoredStrategyPage } from './pages/TailoredStrategyPage';
import { PartnerWorkspacePage } from './pages/PartnerWorkspacePage';
import { PartnerApplyPage } from './pages/PartnerApplyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationIndustry, setConsultationIndustry] = useState<'healthcare' | 'education' | 'consulting'>('healthcare');
  const [consultationEntity, setConsultationEntity] = useState<'expert' | 'institution'>('expert');

  const handleOpenConsultation = (
    industry?: 'healthcare' | 'education' | 'consulting',
    entity?: 'expert' | 'institution'
  ) => {
    if (industry) setConsultationIndustry(industry);
    if (entity) setConsultationEntity(entity);
    setIsConsultationOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Screen 01 & 07: Home Gateway */}
            <Route
              path="/"
              element={<HomePage onOpenConsultation={handleOpenConsultation} />}
            />

            {/* Services Dedicated Route */}
            <Route
              path="/services"
              element={<ServicesPage onOpenConsultation={handleOpenConsultation} />}
            />

            {/* Screen 02: Industry Selection */}
            <Route path="/industries" element={<IndustrySelectionPage />} />

            {/* Screen 03 & 04: Industry Landing (Healthcare / Education / Consulting) */}
            <Route path="/industries/:industry" element={<IndustryLandingPage />} />

            {/* Screen 04 Standalone: Direct Entity Selection */}
            <Route path="/industries/:industry/select" element={<EntitySelectionPage />} />

            {/* Screen 05: Tailored Strategy (Industry x Entity) */}
            <Route
              path="/industries/:industry/:entity"
              element={<TailoredStrategyPage onOpenConsultation={handleOpenConsultation} />}
            />

            {/* Screen 06: Creative Workspace (Partner / Gig Page) */}
            <Route path="/creative-workspace" element={<PartnerWorkspacePage />} />
            <Route path="/partner-workspace" element={<PartnerWorkspacePage />} />

            {/* Partner Application */}
            <Route path="/creative-workspace/apply" element={<PartnerApplyPage />} />
            <Route path="/partner-workspace/apply" element={<PartnerApplyPage />} />

            {/* About Page */}
            <Route path="/about" element={<AboutPage />} />

            {/* Contact Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer onOpenConsultation={() => handleOpenConsultation()} />

        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          initialIndustry={consultationIndustry}
          initialEntity={consultationEntity}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
