import React, { useEffect } from 'react';
import '../../creators.css';
import CreatorsNavbar from './CreatorsNavbar.jsx';
import CreatorsHero from './CreatorsHero.jsx';
import CreatorAccelerator from './CreatorAccelerator.jsx';
import CreatorDifference from './CreatorDifference.jsx';
import CreatorInfrastructure from './CreatorInfrastructure.jsx';
import CreatorsCTA from './CreatorsCTA.jsx';
import CreatorsFooter from './CreatorsFooter.jsx';

export default function CreatorsPage({ onNavigateHome, onOpenAccelerator }) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "sBloom Creators Studio &mdash; For Artists, Performers & Creators";
    window.scrollTo(0, 0);

    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="creators-page-root">
      {/* Editorial Navigation */}
      <CreatorsNavbar 
        onNavigateHome={onNavigateHome} 
        onOpenAccelerator={onOpenAccelerator} 
      />

      <main className="cr-page-main">
        {/* SECTION 01 — HERO */}
        <CreatorsHero 
          onOpenAccelerator={onOpenAccelerator} 
        />

        {/* SECTION 02 — CREATOR ACCELERATOR */}
        <CreatorAccelerator onOpenAccelerator={onOpenAccelerator} />

        {/* SECTION 03 — THE OPERATING MODEL */}
        <CreatorDifference />

        {/* SECTION 04 — PRODUCTION INFRASTRUCTURE */}
        <CreatorInfrastructure onOpenAccelerator={onOpenAccelerator} />

        {/* SECTION 05 — FINAL CTA */}
        <CreatorsCTA 
          onOpenAccelerator={onOpenAccelerator} 
        />
      </main>

      {/* Editorial Studio Footer */}
      <CreatorsFooter 
        onNavigateHome={onNavigateHome} 
      />
    </div>
  );
}
