import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenGateway, onOpenAccelerator }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sbloom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo - Crisp & Prominent */}
        <div className="brand-group">
          <a href="#" className="brand-mark" aria-label="sBloom Home">
            <img 
              src="/sbloom-logo.jpeg" 
              alt="sBloom Creators Studio Logo" 
              className="brand-logo-img" 
            />
            <div className="brand-text-block">
              <span className="brand-name">sBloom</span>
              <span className="brand-subname">CREATORS STUDIO</span>
            </div>
          </a>
          <span className="brand-by-badge">by Ottobon</span>
        </div>

        {/* Navigation Menu */}
        <ul className="nav-menu">
          <li>
            <a 
              href="#gateways" 
              className="nav-item-link" 
              onClick={(e) => { e.preventDefault(); onOpenGateway('creators'); }}
            >
              For Creators
            </a>
          </li>
          <li>
            <a 
              href="#gateways" 
              className="nav-item-link" 
              onClick={(e) => { e.preventDefault(); onOpenGateway('businesses'); }}
            >
              For Businesses
            </a>
          </li>
          <li>
            <a 
              href="#gateways" 
              className="nav-item-link" 
              onClick={(e) => { e.preventDefault(); onOpenGateway('institutions'); }}
            >
              For Institutions
            </a>
          </li>
          <li>
            <a href="#capabilities" className="nav-item-link">Services</a>
          </li>
          <li>
            <a href="#engine" className="nav-item-link">About</a>
          </li>
          <li>
            <a href="#contact" className="nav-item-link">Contact</a>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="nav-actions">
          <a 
            href="#gateways"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
          >
            Explore Gateways
          </a>
          <button 
            className="btn btn-primary btn-sm"
            onClick={onOpenAccelerator}
          >
            Start Blooming
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-toggle"
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
        <div className="mobile-nav-dropdown">
          <a href="#gateways" onClick={() => { setMobileMenuOpen(false); onOpenGateway('creators'); }}>For Creators</a>
          <a href="#gateways" onClick={() => { setMobileMenuOpen(false); onOpenGateway('businesses'); }}>For Businesses</a>
          <a href="#gateways" onClick={() => { setMobileMenuOpen(false); onOpenGateway('institutions'); }}>For Institutions</a>
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#engine" onClick={() => setMobileMenuOpen(false)}>About Engine</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button className="btn btn-secondary btn-sm" style={{ flex: 1 }} onClick={() => { setMobileMenuOpen(false); onOpenGateway('creators'); }}>
              Explore Gateways
            </button>
            <button className="btn btn-primary btn-sm" style={{ flex: 1 }} onClick={() => { setMobileMenuOpen(false); onOpenAccelerator(); }}>
              Start Blooming
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
