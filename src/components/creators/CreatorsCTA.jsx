import React from 'react';

export default function CreatorsCTA({ onOpenAccelerator }) {
  return (
    <section className="cr-final-cta-section" id="join">
      <div className="creators-container">
        
        {/* ARCHITECTURAL SECTION DIVIDER LINE */}
        <div className="cr-section-divider-line-clean">
          <div className="cr-divider-hairline"></div>
          <div className="cr-divider-emblem" aria-hidden="true">◆</div>
          <div className="cr-divider-hairline"></div>
        </div>

        {/* 2-COLUMN EDITORIAL ATELIER SHOWCASE */}
        <div className="cr-cta-editorial-grid">
          
          {/* Left Column: Copy, Value Pillars & Primary Admission CTA */}
          <div className="cr-cta-content-col">
            
            {/* Live Status Eyebrow Pill */}
            <div className="cr-cta-studio-pill">
              <span className="cr-cta-live-beacon">
                <span className="cr-beacon-pulse"></span>
                <span className="cr-beacon-dot"></span>
              </span>
              <span className="cr-pill-title">LIMITED STUDIO COHORT</span>
            </div>

            {/* Sculptural Editorial Headline */}
            <h2 className="cr-cta-headline">
              Your Creativity Deserves<br />
              <em className="cr-cta-em-text">an Audience.</em>
            </h2>

            {/* Supporting Narrative Copy */}
            <p className="cr-cta-supporting">
              For creators, artists and performers ready to build their digital presence.
            </p>

            {/* Studio Guarantee Feature Checklist */}
            <div className="cr-cta-checklist">
              <div className="cr-cta-check-item">
                <span className="cr-cta-check-icon">✓</span>
                <span className="cr-cta-check-text">Zero Generic Templates &mdash; 100% Bespoke</span>
              </div>
              <div className="cr-cta-check-item">
                <span className="cr-cta-check-icon">✓</span>
                <span className="cr-cta-check-text">You Retain 100% of IP &amp; Content Rights</span>
              </div>
              <div className="cr-cta-check-item">
                <span className="cr-cta-check-icon">✓</span>
                <span className="cr-cta-check-text">Dedicated Production Desk &amp; Editing Pipeline</span>
              </div>
            </div>

            {/* Master Action Button */}
            <div className="cr-cta-actions">
              <button 
                type="button"
                className="cr-cta-master-button"
                onClick={onOpenAccelerator}
                aria-label="Apply to join sBLOOM Creators Studio"
              >
                <div className="cr-cta-btn-shimmer"></div>
                <span className="cr-cta-btn-content">
                  <span className="cr-cta-btn-label">Join sBLOOM</span>
                  <svg className="cr-cta-btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              <div className="cr-cta-sub-guarantee">
                Direct Studio Evaluation &bull; Response Within 48 Hours
              </div>
            </div>

            {/* Studio Identity Signature */}
            <div className="cr-studio-sublabel-box">
              <div className="cr-studio-name-big">
                sBLOOM CRE@TORS STUDIO
              </div>
              <div className="cr-studio-tagline">
                “The infrastructure behind your content.”
              </div>
            </div>

          </div>

          {/* Right Column: Cinema Soundstage Photography Frame */}
          <div className="cr-cta-visual-col">
            <div className="cr-cta-cinema-frame">
              {/* Corner Viewfinder Brackets */}
              <div className="cr-bracket cr-bracket-tl"></div>
              <div className="cr-bracket cr-bracket-tr"></div>
              <div className="cr-bracket cr-bracket-bl"></div>
              <div className="cr-bracket cr-bracket-br"></div>

              {/* Viewfinder Telemetry Bar */}
              <div className="cr-cta-vf-top">
                <div className="cr-cta-rec">
                  <span className="cr-cta-rec-dot"></span>
                  <span>REC &bull; 4K DCI</span>
                </div>
                <div className="cr-cta-timecode">STAGE 05 // ADMISSION</div>
                <div className="cr-cta-fps">24 FPS</div>
              </div>

              {/* Artist Portrait */}
              <img 
                src="/creator-artist.jpg" 
                alt="Artist in studio soundstage - Your Creativity Deserves an Audience"
                className="cr-cta-img"
              />

              {/* Viewfinder Bottom Badge */}
              <div className="cr-cta-vf-bottom">
                <div className="cr-cta-vf-badge-left">
                  <span className="cr-cta-vf-status">ACTIVE INTAKE</span>
                  <span className="cr-cta-vf-cohort">SPRING / AUTUMN 2025</span>
                </div>
                <div className="cr-cta-vf-badge-right">
                  <span>OTTOBON VERIFIED</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
