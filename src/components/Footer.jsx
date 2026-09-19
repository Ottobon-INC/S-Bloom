import React from 'react';

export default function Footer({ onOpenGateway }) {
  return (
    <footer className="sbloom-footer" id="contact">
      <div className="container">
        <div className="footer-main-grid">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#" className="brand-mark">
              <img 
                src="/sbloom-logo.jpeg" 
                alt="sBloom Creators Studio Logo" 
                className="brand-logo-img footer-logo-img" 
              />
              <div className="brand-text-block">
                <span className="brand-name">sBloom</span>
                <span className="brand-subname">CREATORS STUDIO</span>
              </div>
            </a>

            <p className="footer-brand-statement">
              RECORD &bull; EDIT &bull; GROW &mdash; Helping creators, businesses, and institutions bloom in the digital age.
            </p>

            <div className="footer-parent-badge">
              <span>Parent Entity:</span>
              <strong>Ottobon Professional Services</strong>
            </div>
          </div>

          {/* Platform Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Platform</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#gateways" onClick={(e) => { e.preventDefault(); onOpenGateway('creators'); }}>
                  Creators
                </a>
              </li>
              <li>
                <a href="#gateways" onClick={(e) => { e.preventDefault(); onOpenGateway('businesses'); }}>
                  Businesses
                </a>
              </li>
              <li>
                <a href="#gateways" onClick={(e) => { e.preventDefault(); onOpenGateway('institutions'); }}>
                  Institutions
                </a>
              </li>
              <li>
                <a href="#gateways" onClick={(e) => { e.preventDefault(); onOpenGateway('consultants'); }}>
                  Consultants
                </a>
              </li>
              <li><a href="#accelerator">Accelerator</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><a href="#capabilities">Content &amp; Reels</a></li>
              <li><a href="#capabilities">Digital Presence</a></li>
              <li><a href="#capabilities">Local SEO &amp; GBP</a></li>
              <li><a href="#capabilities">Websites &amp; Portals</a></li>
              <li><a href="#capabilities">Social Media Sync</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Ottobon</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#testimonials">Case Studies</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links-list">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Editorial Standards</a></li>
            </ul>
          </div>

        </div>

        {/* Giant Sculptural Wordmark (Wispr Flow / Linear style) */}
        <div className="footer-giant-wordmark">
          <div className="giant-brand-text">
            sBloom
          </div>
          <div className="footer-copyright">
            © 2026 sBloom. An Ottobon Professional Services Venture. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
