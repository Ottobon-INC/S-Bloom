import React from 'react';
import { motion } from 'framer-motion';

export default function CreatorInfrastructure({ onOpenAccelerator }) {
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  const pillars = [
    {
      num: '01',
      tag: '01 • RECORDING STUDIO',
      code: 'STUDIO 01',
      title: 'The Studio Space',
      subtitle: 'Pro Cameras, Lighting & Sound',
      summary: 'Walk in, sit down, and start talking. Our quiet studio has professional cameras, flattering lighting, and crystal-clear microphones ready for you.',
      checklistLabel: "WHAT'S READY FOR YOU:",
      features: ['4K Cameras & Studio Lights', 'Crystal-Clear Microphones', 'Easy-to-Read Teleprompter'],
      status: 'READY FOR RECORDING',
      image: '/infra-studio.jpg',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
          <line x1="9.69" y1="8" x2="21.17" y2="8" />
          <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
          <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
          <line x1="14.31" y1="16" x2="2.83" y2="16" />
          <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
        </svg>
      )
    },
    {
      num: '02',
      tag: '02 • GUIDANCE & SUPPORT',
      code: 'GUIDE 02',
      title: 'Friendly Direction',
      subtitle: 'Never Freeze or Run Out of Words',
      summary: 'Never worry about what to say. A friendly director sits with you, gives you easy questions, and helps you speak naturally on camera.',
      checklistLabel: 'WHAT WE HELP YOU WITH:',
      features: ['Catchy Video Openings', 'Easy Speaking Prompts', 'Natural Camera Confidence'],
      status: 'LIVE IN-PERSON HELP',
      image: '/infra-direction.jpg',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="5" x2="12" y2="7" />
          <line x1="12" y1="17" x2="12" y2="19" />
          <line x1="5" y1="12" x2="7" y2="12" />
          <line x1="17" y1="12" x2="19" y2="12" />
        </svg>
      )
    },
    {
      num: '03',
      tag: '03 • VIDEO EDITING',
      code: 'DESK 03',
      title: 'Complete Video Editing',
      subtitle: 'Finished Videos Ready to Post',
      summary: 'We handle all the editing. We cut out mistakes, add music, and create engaging subtitles so your video is ready to share with the world.',
      checklistLabel: 'WHAT YOU GET:',
      features: ['Clean Cuts (No Mistakes)', 'Captions & Background Music', 'Made for You (No Templates)'],
      status: '100% HAND-CRAFTED EDITING',
      image: '/infra-editing.jpg',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 12h3M6 8v8M10 5v14M14 9v6M18 3v18M21 12h-3" />
        </svg>
      )
    }
  ];

  return (
    <section className="cr-infrastructure-section" id="infrastructure">
      <div className="creators-container">

        {/* Open Editorial Section Masthead */}
        <div className="cr-atelier-masthead">
          <div className="cr-atelier-eyebrow">
            <div className="cr-infra-seal-badge">
              <span className="cr-infra-seal-dot"></span>
              <strong>THE sBLOOM STUDIO SYSTEM</strong>
            </div>
            <div className="cr-atelier-scope-cluster">
              <span className="cr-infra-scope-tag">EVERYTHING DONE FOR YOU</span>
              <span className="cr-atelier-sec-badge">SECTION 04</span>
            </div>
          </div>

          <div className="cr-atelier-title-block">
            <h2 className="cr-atelier-heading">
              <span className="cr-heading-main">Production In<span className="cr-char-f">f</span>rastructure.</span>
              <span className="cr-heading-sub">
                <em>Not Just an Editing Service.</em>
              </span>
            </h2>
            <p className="cr-atelier-narrative">
              You don't need a camera crew or expensive equipment. We provide the studio, the director, and the editing team—so you can just show up and share your passion.
            </p>
          </div>
        </div>

        {/* 3 Luxury Atelier Production Cards with Hover-Reveal Text */}
        <div className="cr-atelier-cards-grid">
          {pillars.map((item, idx) => (
            <motion.article 
              key={item.num}
              className={`cr-atelier-card cr-card-interactive cr-card-type-${item.num} ${hoveredIdx === idx ? 'card-hovered' : ''} ${hoveredIdx !== null && hoveredIdx !== idx ? 'card-dimmed' : ''}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }}
            >
              {/* Full Card Visual Photo Layer */}
              <div className="cr-card-photo-layer">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="cr-card-bg-img" 
                  loading="lazy" 
                />
                <div className="cr-card-photo-gradient"></div>
                
                {/* Top Telemetry Badges */}
                <div className="cr-atelier-badge-float">
                  <span className="cr-atelier-code-tag">{item.code}</span>
                  <span className="cr-atelier-num-mark">{item.num}</span>
                </div>

                {/* Resting State Preview Label (Before Hover) */}
                <div className="cr-card-resting-preview">
                  <span className="cr-resting-tag">{item.tag}</span>
                  <h3 className="cr-resting-title">{item.title}</h3>
                  <div className="cr-resting-hint">
                    <span>Hover to view details</span>
                    <span className="cr-resting-plus">＋</span>
                  </div>
                </div>
              </div>

              {/* Hover-Reveal Text Drawer: ONLY shows when cursor hovers */}
              <div className="cr-card-hover-drawer">
                <div className="cr-card-hover-inner">
                  {/* Top Header: Tag & Kinetic Icon */}
                  <div className="cr-drawer-top-row">
                    <span className="cr-atelier-discipline">{item.tag}</span>
                    <div className={`cr-atelier-icon-circle cr-icon-${item.num}`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="cr-atelier-card-title">{item.title}</h3>
                  <h4 className="cr-atelier-card-sub">{item.subtitle}</h4>

                  {/* Plain English Description */}
                  <p className="cr-atelier-card-desc">{item.summary}</p>

                  {/* Checklist Strip */}
                  <div className="cr-atelier-specs-strip">
                    <span className="cr-specs-tag-label">{item.checklistLabel}</span>
                    <div className="cr-specs-pill-group">
                      {item.features.map((feat, fIdx) => (
                        <span key={fIdx} className="cr-spec-capsule">
                          <span className="cr-spec-capsule-check">✓</span>
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Footer */}
                  <div className="cr-atelier-card-footer">
                    <span className="cr-atelier-status-pulse"></span>
                    <span className="cr-atelier-status-label">{item.status}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Prestigious Studio Guarantee Plaque */}
        <div className="cr-atelier-guarantee-bar">
          <div className="cr-guarantee-info-col">
            <div className="cr-guarantee-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="cr-guarantee-copy">
              <strong>THE sBLOOM QUALITY PROMISE</strong>
              <p>Every single video is edited and reviewed by hand before delivery so you always look your best.</p>
            </div>
          </div>

          <div className="cr-guarantee-actions-col">
            <div className="cr-guarantee-chips-row">
              <span className="cr-dark-chip">
                <span className="cr-chip-emerald-check">✓</span> No Cheap Templates
              </span>
              <span className="cr-dark-chip">
                <span className="cr-chip-emerald-check">✓</span> Studio-Quality Picture
              </span>
              <span className="cr-dark-chip">
                <span className="cr-chip-emerald-check">✓</span> Engaging to Watch
              </span>
            </div>

            {onOpenAccelerator && (
              <button 
                type="button" 
                className="cr-atelier-cta-btn"
                onClick={onOpenAccelerator}
              >
                <span>Apply for Studio Access</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
