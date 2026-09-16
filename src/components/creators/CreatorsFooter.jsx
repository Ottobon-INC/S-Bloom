import React from 'react';

export default function CreatorsFooter({ onNavigateHome }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="cr-footer">
      <div className="creators-container">
        <div className="cr-footer-top">
          {/* Brand & Studio Mission */}
          <div className="cr-footer-brand-col">
            <div className="cr-brand-cluster">
              <img 
                src="/sbloom-logo.jpeg" 
                alt="sBloom Creators Studio" 
                className="cr-brand-logo" 
              />
              <div className="cr-brand-titles">
                <span className="cr-brand-name">sBloom</span>
                <span className="cr-brand-sub">CRE@TORS STUDIO</span>
              </div>
            </div>
            <p className="cr-footer-tagline">
              “You Create. We Handle the Production.” &mdash; Infrastructure, high-retention video production, and audience architecture for artists and emerging talent.
            </p>
            <div className="cr-footer-venture-pill">
              <span>An Ottobon Professional Services Venture</span>
            </div>
          </div>

          {/* Quick Studio Navigation Links */}
          <div className="cr-footer-nav-col">
            <span className="cr-footer-col-heading">Studio Navigation</span>
            <ul className="cr-footer-links-grid">
              <li>
                <button type="button" className="cr-footer-link" onClick={() => scrollToSection('hero')}>
                  Overview
                </button>
              </li>
              <li>
                <button type="button" className="cr-footer-link" onClick={() => scrollToSection('accelerator')}>
                  Services
                </button>
              </li>
              <li>
                <button type="button" className="cr-footer-link" onClick={() => scrollToSection('difference')}>
                  The Operating Model
                </button>
              </li>
              <li>
                <button type="button" className="cr-footer-link" onClick={() => scrollToSection('infrastructure')}>
                  Infrastructure
                </button>
              </li>
            </ul>
          </div>

          {/* sBloom Ecosystem Pathways */}
          <div className="cr-footer-nav-col">
            <span className="cr-footer-col-heading">Ecosystem Pathways</span>
            <ul className="cr-footer-links-grid">
              <li>
                <button type="button" className="cr-footer-link cr-footer-link-highlight" onClick={onNavigateHome}>
                  &larr; Back to Main Platform
                </button>
              </li>
              <li>
                <span className="cr-footer-link" style={{ cursor: 'default', opacity: 0.8 }}>
                  For Independent Practices
                </span>
              </li>
              <li>
                <span className="cr-footer-link" style={{ cursor: 'default', opacity: 0.8 }}>
                  For Campuses &amp; Institutions
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="cr-footer-bottom">
          <div className="cr-footer-copy">
            &copy; {new Date().getFullYear()} <strong>sBloom Creators Studio</strong>. All rights reserved.
          </div>
          <div className="cr-footer-badge">
            Studio Infrastructure &bull; Cinematic Video Production
          </div>
        </div>
      </div>
    </footer>
  );
}
