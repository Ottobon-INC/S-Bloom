import React from 'react';

export default function Hero({ onOpenGateway, onOpenAccelerator }) {
  return (
    <section className="hero-clean-fold" id="hero">
      <div className="container hero-content-center">
        {/* Eyebrow / Brand Pill */}
        <div className="hub-center-badge hero-top-badge">
          <img
            src="/sbloom-logo.jpeg"
            alt="sBloom"
            className="hub-mini-logo"
          />
          <span className="dot-live"></span>
          <span>sBloom &bull; DIGITAL &amp; SOCIAL GROWTH &bull; FOR INDIVIDUALS, CREATORS &amp; BUSINESSES</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif hero-heading">
          Bloom Your <span className="gold-gradient-text">Social Presence.</span>
        </h1>

        {/* Supporting Text */}
        <p className="hero-lead-quote">
          “At every step, sBloom is here to help you bloom.”
        </p>

        <p className="hero-subtext">
          Digital &amp; social media services that help individuals, creators, and businesses build authority, engage audiences, and grow online.
        </p>

        {/* Highlights Pills */}
        <div className="hero-pills-row">
          <div className="hero-feature-chip">
            <span className="chip-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold-vibrant)' }}>
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </span>
            <span>Studio &amp; Remote Production</span>
          </div>
          <div className="hero-feature-chip">
            <span className="chip-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold-vibrant)' }}>
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </span>
            <span>Multi-Platform Distribution</span>
          </div>
          <div className="hero-feature-chip">
            <span className="chip-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold-vibrant)' }}>
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 9V4s3.03.55 4 2c1.08 1.62 0 5 0 5" />
              </svg>
            </span>
            <span>Audience Growth</span>
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
            href="#gateways"
            className="btn btn-secondary"
            style={{ padding: '13px 28px', fontSize: '0.96rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
          >
            <span>Explore Gateways</span>
          </a>
        </div>

        {/* Scroll Down Guide */}
        <div className="hero-scroll-indicator">
          <a href="#gateways" className="scroll-down-link">
            <span>Explore the Gateways</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
