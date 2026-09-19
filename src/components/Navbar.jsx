import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenGateway, onOpenAccelerator }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mobileGatewaysOpen, setMobileGatewaysOpen] = useState(false);

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
          <span className="brand-by-badge">by Ottobon Prof Svc</span>
        </div>

        {/* Navigation & Actions Right Group */}
        <div className="navbar-right">
          <ul className="nav-menu">
            <li>
              <a href="#hero" className="nav-item-link">Home</a>
            </li>

            {/* Consolidated Gateways Dropdown */}
            <li className="nav-dropdown-wrapper">
              <a 
                href="#gateways" 
                className="nav-item-link nav-dropdown-trigger"
                aria-haspopup="true"
              >
                <span>Gateways</span>
                <svg className="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>

              <div className="nav-dropdown-menu">
                <div className="nav-dropdown-inner">
                  <div className="nav-dropdown-header">
                    <span className="dropdown-label-kicker">FOUR AUDIENCE GATEWAYS</span>
                  </div>

                  <div className="nav-dropdown-list">
                    <a 
                      href="#gateways" 
                      className="nav-dropdown-item item-creators"
                      onClick={(e) => { e.preventDefault(); onOpenGateway('creators'); }}
                    >
                      <div className="nav-dropdown-icon-wrap">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <div className="nav-dropdown-text">
                        <div className="nav-dropdown-title">For Creators</div>
                        <div className="nav-dropdown-desc">Creators, Influencers & Personal Brands</div>
                      </div>
                      <svg className="nav-dropdown-item-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>

                    <a 
                      href="#gateways" 
                      className="nav-dropdown-item item-businesses"
                      onClick={(e) => { e.preventDefault(); onOpenGateway('businesses'); }}
                    >
                      <div className="nav-dropdown-icon-wrap">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                      </div>
                      <div className="nav-dropdown-text">
                        <div className="nav-dropdown-title">For Business Professionals</div>
                        <div className="nav-dropdown-desc">Healthcare, Legal & Enterprise Inbound</div>
                      </div>
                      <svg className="nav-dropdown-item-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>

                    <a 
                      href="https://marketing.ottobon.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="nav-dropdown-item item-institutions"
                    >
                      <div className="nav-dropdown-icon-wrap">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="10" width="4" height="10" rx="1"/>
                          <rect x="10" y="10" width="4" height="10" rx="1"/>
                          <rect x="16" y="10" width="4" height="10" rx="1"/>
                          <path d="M2 22h20"/>
                          <path d="M12 2L2 8h20L12 2z"/>
                        </svg>
                      </div>
                      <div className="nav-dropdown-text">
                        <div className="nav-dropdown-title">
                          For Institutions
                          <span className="external-portal-badge">External ↗</span>
                        </div>
                        <div className="nav-dropdown-desc">Multi-Faculty & Institutional Portals</div>
                      </div>
                      <svg className="nav-dropdown-item-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>

                    <a 
                      href="#gateways" 
                      className="nav-dropdown-item item-consultants"
                      onClick={(e) => { e.preventDefault(); onOpenGateway('consultants'); }}
                    >
                      <div className="nav-dropdown-icon-wrap">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                        </svg>
                      </div>
                      <div className="nav-dropdown-text">
                        <div className="nav-dropdown-title">For Consultants</div>
                        <div className="nav-dropdown-desc">Executive Advisory & Thought Leadership</div>
                      </div>
                      <svg className="nav-dropdown-item-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#offerings" className="nav-item-link">Our Offerings</a>
            </li>
            <li>
              <a href="#capabilities" className="nav-item-link">Capabilities</a>
            </li>
            <li>
              <a href="#engine" className="nav-item-link">How It Works</a>
            </li>
          </ul>

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
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
          
          {/* Mobile Gateways Group */}
          <div className="mobile-gateways-group">
            <button 
              className={`mobile-gateways-toggle ${mobileGatewaysOpen ? 'open' : ''}`}
              onClick={() => setMobileGatewaysOpen(!mobileGatewaysOpen)}
            >
              <span>Gateways</span>
              <svg className="mobile-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {mobileGatewaysOpen && (
              <div className="mobile-gateways-sublist">
                <a href="#gateways" onClick={() => { setMobileMenuOpen(false); onOpenGateway('creators'); }}>
                  <span>For Creators</span>
                  <small>Creators & Influencers</small>
                </a>
                <a href="#gateways" onClick={() => { setMobileMenuOpen(false); onOpenGateway('businesses'); }}>
                  <span>For Business Professionals</span>
                  <small>Commercial & Practices</small>
                </a>
                <a href="https://marketing.ottobon.in/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <span>For Institutions ↗</span>
                  <small>Enterprise & Global Portals</small>
                </a>
                <a href="#gateways" onClick={() => { setMobileMenuOpen(false); onOpenGateway('consultants'); }}>
                  <span>For Consultants</span>
                  <small>Advisory & Thought Leadership</small>
                </a>
              </div>
            )}
          </div>

          <a href="#offerings" onClick={() => setMobileMenuOpen(false)}>Our Offerings</a>
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Capabilities</a>
          <a href="#engine" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
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
