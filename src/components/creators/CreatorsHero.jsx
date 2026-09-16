import React from 'react';
import { motion } from 'framer-motion';

export default function CreatorsHero({ onOpenAccelerator }) {
  return (
    <section className="cr-hero-section" id="hero">
      <div className="creators-container">
        
        {/* Top Eyebrow Studio Bar */}
        <div className="cr-hero-top-bar">
          <div className="cr-hero-eyebrow">
            FOR CREATORS &amp; ARTISTS
          </div>
          <div className="cr-hero-eyebrow-tag">
            <span>RECORD &bull; EDIT &bull; GROW &bull; STUDIO INFRASTRUCTURE</span>
          </div>
        </div>

        {/* Main Hero Grid: Editorial Typography + Director's Soundstage Frame */}
        <div className="cr-hero-grid">
          
          {/* Left Column: Typography, Copy & Action Architecture */}
          <div className="cr-hero-copy-col">
            <h1 className="cr-hero-headline">
              <span className="cr-headline-line">Your Talent.</span>
              <span className="cr-headline-line">Your Voice.</span>
              <span className="cr-headline-line cr-headline-stage">
                <em>Your Stage.</em>
              </span>
            </h1>

            <p className="cr-hero-lead">
              Turn your talent and creative identity into a digital presence people remember.
            </p>

            <p className="cr-hero-support">
              sBLOOM helps you turn your ideas into content, build your presence, reach your audience, and grow with the right creative tools and digital support.
            </p>

            {/* Content Pillars Highlights Chips — 2x2 Balanced Editorial Grid */}
            <div className="cr-hero-feature-chips">
              <div className="cr-feature-chip">
                <span className="cr-chip-icon-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                  </svg>
                </span>
                <span className="cr-chip-text">Ideas into Content</span>
              </div>

              <div className="cr-feature-chip">
                <span className="cr-chip-icon-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </span>
                <span className="cr-chip-text">Camera Presence &amp; Voice</span>
              </div>

              <div className="cr-feature-chip">
                <span className="cr-chip-icon-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 7l-7 5 7 5V7z" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </span>
                <span className="cr-chip-text">Soundstage Production</span>
              </div>

              <div className="cr-feature-chip">
                <span className="cr-chip-icon-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </span>
                <span className="cr-chip-text">Audience &amp; Digital Growth</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="cr-hero-actions">
              <button 
                type="button"
                className="cr-btn-primary"
                onClick={onOpenAccelerator}
                style={{ padding: '15px 34px', fontSize: '0.96rem' }}
              >
                <span>Start Your Creator Journey</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Cinema Soundstage Viewfinder Frame (Matching "Voice & Stage" Content) */}
          <div className="cr-hero-visual-col">
            <div className="cr-cinema-frame">
              
              {/* Top Viewfinder Telemetry */}
              <div className="cr-viewfinder-top">
                <div className="cr-rec-indicator">
                  <span className="cr-rec-dot"></span>
                  <span className="cr-rec-text">REC &bull; 4K DCI</span>
                </div>
                <div className="cr-viewfinder-timecode">
                  00:14:28:12
                </div>
                <div className="cr-fps-tag">
                  24 FPS
                </div>
              </div>

              {/* Viewfinder Corner Brackets */}
              <div className="cr-bracket cr-bracket-tl"></div>
              <div className="cr-bracket cr-bracket-tr"></div>
              <div className="cr-bracket cr-bracket-bl"></div>
              <div className="cr-bracket cr-bracket-br"></div>

              {/* Indian Creator Image: Voice, Mic & Soundstage */}
              <img 
                src="/creator-hero.jpg" 
                alt="Indian Artist Speaking into Studio Microphone on Soundstage - Your Talent, Your Voice, Your Stage" 
                className="cr-cinema-img"
              />

              {/* Bottom Viewfinder Info Strip */}
              <div className="cr-viewfinder-bottom">
                <div className="cr-vf-meta-left">
                  <span className="cr-vf-label">AUDIO IN:</span>
                  <span className="cr-vf-val">48kHz &bull; Studio Vocal Master</span>
                </div>
                <div className="cr-vf-meta-right">
                  <span className="cr-vf-badge">SOUNDSTAGE 01</span>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
