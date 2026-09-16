import React, { useState, useEffect } from 'react';

export default function CreatorsNavbar({ onNavigateHome, onOpenAccelerator }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // Offset for fixed navbar height
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`cr-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="creators-container cr-navbar-inner">
        {/* Left: Brand Identity Mark */}
        <a 
          href="#hero" 
          className="cr-brand-cluster"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
        >
          <img 
            src="/sbloom-logo.jpeg" 
            alt="sBloom Creators Studio" 
            className="cr-brand-logo" 
          />
          <div className="cr-brand-titles">
            <span className="cr-brand-name">sBloom</span>
            <span className="cr-brand-sub">CRE@TORS STUDIO</span>
          </div>
        </a>

        {/* Center: Desktop Navigation Section Links */}
        <ul className="cr-nav-links">
          <li>
            <button 
              type="button"
              className="cr-nav-link" 
              onClick={() => scrollToSection('hero')}
            >
              Overview
            </button>
          </li>
          <li>
            <button 
              type="button"
              className="cr-nav-link" 
              onClick={() => scrollToSection('accelerator')}
            >
              Services
            </button>
          </li>
          <li>
            <button 
              type="button"
              className="cr-nav-link" 
              onClick={() => scrollToSection('difference')}
            >
              The Model
            </button>
          </li>
          <li>
            <button 
              type="button"
              className="cr-nav-link" 
              onClick={() => scrollToSection('infrastructure')}
            >
              Infrastructure
            </button>
          </li>
        </ul>

        {/* Right: Actions Group */}
        <div className="cr-nav-actions">
          <button 
            type="button"
            className="cr-nav-back"
            onClick={onNavigateHome}
            aria-label="Back to sBloom Platform"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>sBloom Platform</span>
          </button>

          <button 
            type="button"
            className="cr-btn-primary"
            onClick={onOpenAccelerator}
          >
            <span>Join Studio</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          type="button"
          className="cr-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="cr-mobile-dropdown">
          <button type="button" className="cr-mobile-link" onClick={() => scrollToSection('hero')}>Overview</button>
          <button type="button" className="cr-mobile-link" onClick={() => scrollToSection('accelerator')}>Services</button>
          <button type="button" className="cr-mobile-link" onClick={() => scrollToSection('difference')}>The Model</button>
          <button type="button" className="cr-mobile-link" onClick={() => scrollToSection('infrastructure')}>Infrastructure</button>
          <div className="cr-mobile-actions">
            <button type="button" className="cr-nav-back" style={{ width: '100%', justifyContent: 'center' }} onClick={onNavigateHome}>
              &larr; Back to sBloom Platform
            </button>
            <button type="button" className="cr-btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setMobileMenuOpen(false); onOpenAccelerator(); }}>
              Join Studio &rarr;
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
