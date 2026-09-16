import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CreatorAccelerator({ onOpenAccelerator }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    {
      num: '01',
      phase: 'STAGE 01',
      name: 'Content Strategy',
      premise: 'Ideas, direction & planning.',
      desc: 'We help you discover your unique creative voice, brainstorm high-impact video ideas, and map out a consistent, stress-free publishing plan.',
      tags: ['Idea Brainstorming', 'Creative Direction', 'Stress-Free Planning'],
      image: '/service-strategy.jpg'
    },
    {
      num: '02',
      phase: 'STAGE 02',
      name: 'Content Production',
      premise: 'Studio, filming & photography.',
      desc: 'Walk straight onto our soundstage with 4K cinema cameras, flattering studio lights, and crystal-clear microphones. You just show up and talk.',
      tags: ['Acoustic Soundstage', '4K Cinema Filming', 'Pro Photography'],
      image: '/service-production.jpg'
    },
    {
      num: '03',
      phase: 'STAGE 03',
      name: 'Editing & Post-Production',
      premise: 'Editing, captions, sound & motion.',
      desc: 'We transform your raw recording into high-retention videos with clean cuts, animated captions, custom soundscapes, and color grading.',
      tags: ['Clean Cuts & Pacing', 'Animated Captions', 'Sound & Motion'],
      image: '/service-editing.jpg'
    },
    {
      num: '04',
      phase: 'STAGE 04',
      name: 'Content Distribution',
      premise: 'Repurposing & publishing across platforms.',
      desc: 'A single recording session turns into dozens of short clips formatted and scheduled across Instagram Reels, YouTube Shorts, and LinkedIn.',
      tags: ['Cross-Platform Repurposing', 'Reels, Shorts & YouTube', 'Scheduled Publishing'],
      image: '/service-distribution.jpg'
    },
    {
      num: '05',
      phase: 'STAGE 05',
      name: 'Creator Growth',
      premise: 'Workshops, development & opportunities.',
      desc: 'Level up your creative skills with hands-on workshops, 1-on-1 development, brand collaboration opportunities, and audience growth strategies.',
      tags: ['Creator Workshops', 'Skill Development', 'Brand Opportunities'],
      image: '/service-growth.jpg'
    }
  ];

  // Automatically sync active service with exact scroll position in real-time
  useEffect(() => {
    let ticking = false;

    const updateActiveStage = () => {
      const focusY = window.innerHeight * 0.42;
      let selectedIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < services.length; i++) {
        const el = document.getElementById(`service-stage-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focusY && rect.bottom >= focusY) {
            selectedIdx = i;
            minDistance = 0;
            break;
          }
          const elCenter = (rect.top + rect.bottom) / 2;
          const distance = Math.abs(elCenter - focusY);

          if (distance < minDistance) {
            minDistance = distance;
            selectedIdx = i;
          }
        }
      }

      setActiveIdx(selectedIdx);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveStage);
        ticking = true;
      }
    };

    updateActiveStage();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleSelectService = (idx) => {
    setActiveIdx(idx);
    const targetEl = document.getElementById(`service-stage-${idx}`);
    if (targetEl) {
      const navOffset = 96;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="cr-accelerator-section" id="accelerator">
      <div className="creators-container">
        
        <div className="cr-accelerator-layout">
          
          {/* Left Column: Sticky Services Dossier */}
          <aside className="cr-dossier-col">
            <div className="cr-dossier-sticky">
              
              <div className="cr-dossier-masthead">
                <div className="cr-dossier-tag-row">
                  <span className="cr-section-eyebrow">WHAT WE DO</span>
                  <span className="cr-dossier-live-indicator">
                    <span className="cr-live-dot"></span>
                    ACTIVE COHORT
                  </span>
                </div>
                
                <h2 className="cr-dossier-title">
                  <span className="cr-dossier-line">Services <span className="cr-char-f">f</span>or Creators</span>
                  <span className="cr-dossier-line cr-dossier-line-accent">
                    <em>and Artists.</em>
                  </span>
                </h2>
                
                <p className="cr-dossier-description">
                  Everything you need to turn raw creative talent into a polished, high-performing digital presence&mdash;handled by our in-house team.
                </p>
              </div>

              {/* One-Line Version Ribbon */}
              <div className="cr-oneline-ribbon-card">
                <div className="cr-oneline-ribbon-badge">ONE-LINE SUMMARY</div>
                <div className="cr-oneline-chain">
                  <span className="cr-chain-item">Strategy</span>
                  <span className="cr-chain-dot">•</span>
                  <span className="cr-chain-item">Production</span>
                  <span className="cr-chain-dot">•</span>
                  <span className="cr-chain-item">Editing</span>
                  <span className="cr-chain-dot">•</span>
                  <span className="cr-chain-item">Distribution</span>
                  <span className="cr-chain-dot">•</span>
                  <span className="cr-chain-item">Growth</span>
                </div>
              </div>

              {/* Interactive Services Tracklist */}
              <div className="cr-dossier-tracklist">
                <div className="cr-tracklist-topbar">
                  <span className="cr-tracklist-heading">THE 5 SERVICES</span>
                  <span className="cr-tracklist-status-pill">STAGE 0{activeIdx + 1} OF 05</span>
                </div>
                <div className="cr-tracklist-items">
                  {services.map((s, idx) => (
                    <button
                      key={s.num}
                      type="button"
                      className={`cr-tracklist-btn ${activeIdx === idx ? 'active' : ''}`}
                      onClick={() => handleSelectService(idx)}
                    >
                      <span className="cr-tracklist-btn-num">{s.num}</span>
                      <div className="cr-tracklist-btn-info">
                        <strong className="cr-tracklist-btn-name">{s.name}</strong>
                        <span className="cr-tracklist-btn-label">{s.premise}</span>
                      </div>
                      <span className="cr-tracklist-btn-arrow">&rarr;</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Right Column: 5 Visual Service Cards */}
          <div className="cr-stages-col">
            <div className="cr-stages-timeline">
              {services.map((service, idx) => (
                <motion.div
                  key={service.num}
                  id={`service-stage-${idx}`}
                  className={`cr-stage-card ${activeIdx === idx ? 'stage-focused' : ''}`}
                  onClick={() => handleSelectService(idx)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: 0.06 * idx, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Spine Timeline Node Anchor */}
                  <div className="cr-stage-spine-anchor">
                    <div className="cr-stage-node">
                      <span>{service.num}</span>
                    </div>
                    {idx < services.length - 1 && <div className="cr-stage-spine-connector"></div>}
                  </div>

                  {/* Stage Card Surface */}
                  <div className="cr-stage-panel">
                    
                    {/* Top Identity Header */}
                    <div className="cr-stage-header">
                      <div className="cr-stage-phase-group">
                        <span className="cr-stage-phase-pill">{service.phase}</span>
                        <span className="cr-stage-discipline-label">{service.premise}</span>
                      </div>
                      <span className="cr-stage-index">0{idx + 1} / 05</span>
                    </div>

                    {/* Service Name & Premise */}
                    <div className="cr-stage-title-wrap">
                      <h3 className="cr-stage-name">{service.name}</h3>
                      <h4 className="cr-stage-premise">{service.premise}</h4>
                    </div>

                    {/* Visual Image Header */}
                    <div className="cr-service-img-wrap">
                      <img 
                        src={service.image} 
                        alt={`${service.name} - ${service.premise}`}
                        className="cr-service-card-img"
                        loading="lazy"
                      />
                      <div className="cr-service-img-overlay"></div>
                      <div className="cr-service-img-badge">
                        <span>{service.phase}</span>
                        <span className="cr-badge-divider">•</span>
                        <span>{service.name}</span>
                      </div>
                    </div>

                    {/* Explanatory Narrative */}
                    <p className="cr-stage-desc">
                      {service.desc}
                    </p>

                    {/* Deliverables Tags Row */}
                    <div className="cr-stage-footer">
                      <div className="cr-stage-tags">
                        {service.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="cr-stage-tag">{tag}</span>
                        ))}
                      </div>
                      <div className="cr-stage-indicator">
                        <span className="cr-stage-arrow">&rarr;</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
