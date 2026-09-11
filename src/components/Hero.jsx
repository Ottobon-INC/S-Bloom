import React from 'react';

export default function Hero({ onOpenGateway, onOpenAccelerator }) {
  return (
    <section className="hero-clean-fold" id="hero">
      <div className="container hero-content-center">
        {/* Eyebrow */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-symbol">✦</span>
          <span>CREATORS STUDIO &bull; RECORD &bull; EDIT &bull; GROW</span>
          <span className="hero-eyebrow-symbol">✦</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif hero-heading">
          Bloom Your <span className="gold-gradient-text">Digital Presence.</span>
        </h1>

        {/* Supporting Text */}
        <p className="hero-lead-quote">
          “Whoever you are, sBloom helps you bloom.”
        </p>
        
        <p className="hero-subtext">
          Whether you're an ambitious creator, independent professional, or growing institution, sBloom gives you the high-retention video production, organic reach, and strategic execution to grow with confidence.
        </p>

        {/* Highlights Pills */}
        <div className="hero-pills-row">
          <div className="hero-feature-chip">
            <span className="chip-icon">🎬</span>
            <span>2-Hour Monthly Shoot</span>
          </div>
          <div className="hero-feature-chip">
            <span className="chip-icon">⚡</span>
            <span>Complete Post-Production</span>
          </div>
          <div className="hero-feature-chip">
            <span className="chip-icon">📈</span>
            <span>Search &amp; Social Dominance</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="hero-cta-group">
          <button 
            className="btn btn-primary"
            style={{ padding: '13px 30px', fontSize: '0.96rem' }}
            onClick={onOpenAccelerator}
          >
            <span>Start Blooming</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          
          <a 
            href="#ecosystem-section"
            className="btn btn-secondary"
            style={{ padding: '13px 28px', fontSize: '0.96rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
          >
            <span>Explore the Platform</span>
          </a>
        </div>

        {/* Scroll Down Guide */}
        <div className="hero-scroll-indicator">
          <a href="#ecosystem-section" className="scroll-down-link">
            <span>Explore the Ecosystem</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
