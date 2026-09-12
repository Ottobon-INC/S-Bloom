import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

import TrustBar from './components/TrustBar.jsx';
import CoreMessage from './components/CoreMessage.jsx';
import Gateways from './components/Gateways.jsx';
import Capabilities from './components/Capabilities.jsx';
import ProductionEngine from './components/ProductionEngine.jsx';
import Accelerator from './components/Accelerator.jsx';
import Testimonials from './components/Testimonials.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import GlobalTransition from './components/GlobalTransition.jsx';

const gatewayData = {
  creators: {
    tag: 'Individual Talent',
    tagClass: 'tag-purple',
    title: 'Creators & Artists Gateway',
    description: 'Transform your passion, personal identity, and performance talent into an authoritative digital presence with a rapidly compounding audience.',
    hook: 'Stop struggling alone. Master the camera, scale your audience, and let us handle your post-production as you grow.',
    pillars: [
      {
        title: 'Pillar 1: 3-Second Viral Hook Architecture',
        desc: 'Learn the psychology of thumb-stopping visual and sonic openings that maintain high completion rates on Reels, TikTok, and YouTube Shorts.'
      },
      {
        title: 'Pillar 2: Camera Charisma & Unshakable Confidence',
        desc: 'Overcome lens awkwardness. Master eye-line pacing, natural conversational delivery, and authentic stage presence.'
      },
      {
        title: 'Pillar 3: Cinematic Setup & Lighting Geometry',
        desc: 'Master professional 3-point lighting setups and camera framing angles using accessible gear or pro studio rentals.'
      },
      {
        title: 'Pillar 4: Fast-Paced High-Retention Post-Production',
        desc: 'Pattern interrupts, punch-ins, sound design, and custom typography that keep viewers glued to your screen.'
      },
      {
        title: 'Pillar 5: Algorithmic Virality & Cross-Platform Syndication',
        desc: 'Automated distribution workflows to seamlessly publish across Instagram, YouTube, and LinkedIn.'
      }
    ]
  },
  businesses: {
    tag: 'Independent Practices',
    tagClass: 'tag-green',
    title: 'Business Professionals Gateway',
    description: 'Designed specifically for Doctors, Surgeons, Lawyers, Chartered Accountants, Independent Educators, and Consultants looking to establish domain authority without spending hours editing.',
    hook: 'Turn your specialized knowledge into patient and client inquiries without spending hours filming or editing.',
    pillars: [
      {
        title: 'The 2-Hour Monthly Batching Shoot',
        desc: 'Record for just 120 minutes once a month following medically and legally researched prompts. S Bloom editors deliver 24-30 polished reels.'
      },
      {
        title: 'Google Business Profile (GBP) Dominance',
        desc: 'Local search engine dominance and patient/client review workflows that drive #1 regional search rankings.'
      },
      {
        title: 'Ethical Authority & Reputation',
        desc: 'Thought leadership that respects clinical and legal ethics. No clickbait; pure professional prestige that builds lasting trust.'
      },
      {
        title: 'Inbound Consultation Funneling',
        desc: 'Direct integration with WhatsApp business, appointment booking links, and consultation intake forms.'
      }
    ]
  },
  institutions: {
    tag: 'Enterprise & Groups',
    tagClass: 'tag-blue',
    title: 'Institutions & Campuses Gateway',
    description: 'For Hospitals, Colleges, Schools, Training Institutes, and Healthcare Groups seeking brand uniformity, search dominance, and admissions growth.',
    hook: 'Institutional branding that commands respect. Unified digital footprint across search, media, and web.',
    pillars: [
      {
        title: 'Multi-Staff & Faculty Brand Uniformity',
        desc: 'Standardized digital footprint across all department heads, professors, and doctors to project institutional excellence.'
      },
      {
        title: 'Reputation Architecture & Multi-Campus SEO',
        desc: 'Systematic Google Maps and local search optimization across all regional branches and campus centers.'
      },
      {
        title: 'Admissions & Inpatient Intake Portals',
        desc: 'Modern web experiences that showcase campus infrastructure, clinical outcomes, student achievements, and faculty credentials.'
      }
    ],
    externalLinks: [
      {
        label: '🎓 Education Marketing Vertical (Schools & Colleges)',
        url: 'https://marketing.ottobon.in'
      },
      {
        label: '🏥 Healthcare Marketing Vertical (Hospitals & Health Systems)',
        url: 'https://marketing.medctech.com'
      }
    ]
  }
};

export default function App() {
  const [modalState, setModalState] = useState({ isOpen: false, type: null, data: null });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const executeWithTransition = (action) => {
    setIsTransitioning(true);
    setTimeout(() => {
      action();
      setIsTransitioning(false);
    }, 1200); // Wait for transition animation
  };

  const openGatewayModal = (key) => {
    executeWithTransition(() => {
      const data = gatewayData[key];
      if (data) {
        setModalState({ isOpen: true, type: 'gateway', data });
      }
    });
  };

  const openAcceleratorModal = () => {
    executeWithTransition(() => {
      setModalState({ isOpen: true, type: 'accelerator', data: null });
    });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, data: null });
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Find closest anchor or button
      const target = e.target.closest('a, button');
      if (!target) return;

      // Ignore elements with "no-transition" class or close buttons inside modals
      if (target.classList.contains('no-transition') || target.closest('.modal-content') && target.tagName === 'BUTTON') return;

      // If it's a native anchor link to an ID, intercept it for smooth scroll
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        executeWithTransition(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
      }
      
      // Some buttons explicitly do inline scrollIntoView, we could intercept them if needed.
      // But wrapping openGatewayModal and openAcceleratorModal handles most interactive buttons!
      // For buttons that don't trigger the modal but scroll, let's also intercept them if they aren't meant to toggle mobile menu.
      if (target.tagName === 'BUTTON' && !target.classList.contains('mobile-menu-toggle')) {
         // This is a little tricky since the button's onClick will run immediately. 
         // But the transition overlay will cover the screen instantly, hiding the immediate jump.
         // Wait, if it jumps immediately, the transition happens at the destination.
         // A better way is to pass `executeWithTransition` down to components, but since we are handling modals above, those are already delayed.
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="sbloom-app-root">
      <GlobalTransition isTransitioning={isTransitioning} />
      
      {/* 1. Navbar */}
      <Navbar 
        onOpenGateway={openGatewayModal} 
        onOpenAccelerator={openAcceleratorModal} 
      />

      <main>
        {/* 1. Hero Section - Clean & Focused */}
        <Hero 
          onOpenGateway={openGatewayModal} 
          onOpenAccelerator={openAcceleratorModal} 
        />

        <hr style={{ border: 'none', borderTop: '1px solid var(--gold-border, rgba(255, 255, 255, 0.1))', margin: '0', opacity: 0.8 }} />

        {/* 2. Three Gateways (Creators, Businesses, Institutions) */}
        <Gateways 
          onOpenGateway={openGatewayModal} 
        />

        <hr style={{ border: 'none', borderTop: '1px solid var(--gold-border, rgba(255, 255, 255, 0.1))', margin: '40px 0', opacity: 0.8 }} />

        {/* 4. Trust / Social Proof Bar */}
        <TrustBar />

        {/* 5. Core Message (Dark Green Section) */}
        <CoreMessage 
          onOpenAccelerator={openAcceleratorModal} 
        />

        {/* 6. Full-Funnel Digital Presence Capabilities */}
        <Capabilities />

        {/* 7. Production Engine Split-Screen */}
        <ProductionEngine 
          onOpenGateway={openGatewayModal} 
        />

        {/* 8. S Bloom Accelerator */}
        <Accelerator 
          onOpenAccelerator={openAcceleratorModal} 
        />

        {/* 9. Testimonials / Trust */}
        <Testimonials />

        {/* 10. Final CTA */}
        <FinalCTA 
          onOpenAccelerator={openAcceleratorModal} 
        />
      </main>

      {/* 11. Footer */}
      <Footer 
        onOpenGateway={openGatewayModal} 
      />

      {/* Interactive Modal System */}
      <Modal 
        isOpen={modalState.isOpen}
        type={modalState.type}
        data={modalState.data}
        onClose={closeModal}
        onOpenAccelerator={openAcceleratorModal}
      />
    </div>
  );
}
