import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CreatorDifference() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      num: '01',
      stepBadge: 'STEP 01',
      title: 'Create',
      role: 'The Creative Core',
      desc: 'You bring raw talent, ideas, artistic vision, and personality. We design prompt frameworks and guide delivery.',
      owner: 'The Artist',
      ownerType: 'artist',
      focus: 'Authentic Voice & Ideas',
      journeyStage: 'Creator Genesis'
    },
    {
      num: '02',
      stepBadge: 'STEP 02',
      title: 'Produce',
      role: 'Soundstage Engineering',
      desc: 'High-end studio recording, teleprompter assistance, cinematic camera framing, and professional audio capture.',
      owner: 'sBloom Studio',
      ownerType: 'studio',
      focus: '4K Cinema & Acoustics',
      journeyStage: 'Studio Capture'
    },
    {
      num: '03',
      stepBadge: 'STEP 03',
      title: 'Publish',
      role: 'Post-Desk Mastery',
      desc: 'Precision post-production, soundscapes, editorial cuts, thumbnail direction, and scheduled release management.',
      owner: 'sBloom Post-Desk',
      ownerType: 'studio',
      focus: 'Precision Pacing & Polish',
      journeyStage: 'Multi-Channel Polish'
    },
    {
      num: '04',
      stepBadge: 'STEP 04',
      title: 'Grow',
      role: 'Creators to Grow',
      desc: 'Compounding audience reach, platform algorithm alignment, inbound collaborator inquiries, and digital authority.',
      owner: 'Shared Milestone',
      ownerType: 'shared',
      focus: 'Audience & Digital Equity',
      journeyStage: 'Creators to Grow'
    }
  ];

  return (
    <section className="cr-difference-section" id="difference">
      <div className="creators-container">
        
        {/* Balanced Editorial Masthead: Split Philosophy Layout */}
        <div className="cr-operating-masthead">
          
          {/* Left Column: Heading & Core Mantra */}
          <div className="cr-operating-title-block">
            <div className="cr-operating-eyebrow-wrap">
              <span className="cr-section-eyebrow">THE OPERATING MODEL</span>
              <span className="cr-operating-tag">Division of Labour</span>
            </div>
            
            <h2 className="cr-operating-headline">
              You Create.<br />
              <em>We Handle the Rest.</em>
            </h2>

            <div className="cr-operating-mantra-pill">
              <span className="cr-mantra-dot"></span>
              <strong>LESS PRODUCTION STRESS. MORE TIME CREATING.</strong>
            </div>
          </div>

          {/* Right Column: Studio Manifesto Plaque */}
          <div className="cr-operating-manifesto-card">
            <span className="cr-manifesto-quote-mark">&ldquo;</span>
            <blockquote className="cr-manifesto-quote-text">
              You bring the talent, ideas and personality. We handle the strategy, production, editing and distribution.
            </blockquote>
            <p className="cr-manifesto-sub-text">
              Stop burning out trying to be a videographer, audio engineer, editor, and algorithm analyst all at once.
            </p>
            <div className="cr-manifesto-footer-bar">
              <div className="cr-manifesto-role-pair">
                <span className="cr-role-creator">THE ARTIST: Ideas &amp; Vision</span>
                <span className="cr-role-divider">+</span>
                <span className="cr-role-studio">SBLOOM: Production Engine</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated "Creators to Grow" Creator Journey Highlight Strip */}
        <div className="cr-creators-grow-strip">
          <div className="cr-grow-strip-left">
            <div className="cr-grow-badge-cluster">
              <span className="cr-grow-eyebrow-pill">CREATOR JOURNEY</span>
              <h3 className="cr-grow-banner-title">Creators to Grow</h3>
            </div>
            <p className="cr-grow-banner-subtitle">
              A 4-phase step-by-step operating flow engineered to scale raw creative talent into compounding reach.
            </p>
          </div>

          <div className="cr-grow-strip-flow">
            <div className="cr-grow-flow-step">
              <span className="cr-grow-flow-dot"></span>
              <span className="cr-grow-flow-text">1. Creator Vision</span>
            </div>
            <span className="cr-grow-flow-beam-arrow">&rarr;</span>
            <div className="cr-grow-flow-step">
              <span className="cr-grow-flow-dot"></span>
              <span className="cr-grow-flow-text">2. Production</span>
            </div>
            <span className="cr-grow-flow-beam-arrow">&rarr;</span>
            <div className="cr-grow-flow-step">
              <span className="cr-grow-flow-dot"></span>
              <span className="cr-grow-flow-text">3. Distribution</span>
            </div>
            <span className="cr-grow-flow-beam-arrow">&rarr;</span>
            <div className="cr-grow-flow-step cr-grow-flow-destination">
              <span className="cr-grow-flow-dot cr-dot-grow"></span>
              <strong className="cr-grow-flow-text">4. Creators to Grow</strong>
            </div>
          </div>
        </div>

        {/* 4-Station Connected Studio Soundstage Pipeline with Moving Line */}
        <div className="cr-pipeline-wrapper">
          
          {/* Top Pipeline Connection Track with Dynamic Moving Energy Line */}
          <div className="cr-pipeline-track-bar">
            <div className="cr-pipeline-line-track">
              <div className="cr-pipeline-moving-line"></div>
              <div className="cr-pipeline-glow-head"></div>
            </div>
            
            <div className="cr-pipeline-nodes">
              {steps.map((step, idx) => (
                <div 
                  key={step.num} 
                  className={`cr-pipeline-node ${activeStep === idx ? 'node-active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <span className="cr-node-num">{step.num}</span>
                  <div className="cr-node-info">
                    <span className="cr-node-name">{step.title}</span>
                    <span className="cr-node-stage">{step.journeyStage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The 4 Connected Stations */}
          <div className="cr-stations-grid">
            {steps.map((step, idx) => (
              <motion.article 
                key={step.title} 
                className={`cr-station-card cr-station-${step.ownerType} ${activeStep === idx ? 'card-focused' : ''}`}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.08 * idx, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Station Top Accent Bar */}
                <div className="cr-station-top-indicator"></div>

                {/* Station Header: Index, Step Tag & Single-Line Ownership Tag */}
                <div className="cr-station-header">
                  <div className="cr-station-idx-group">
                    <span className="cr-station-idx">{step.num}</span>
                    <span className="cr-station-step-label">{step.stepBadge}</span>
                  </div>
                  <span className={`cr-station-owner-pill cr-owner-${step.ownerType}`}>
                    Owned By: {step.owner}
                  </span>
                </div>

                {/* Station Title & Role Subtitle */}
                <div className="cr-station-identity">
                  <h3 className="cr-station-title">{step.title}</h3>
                  <span className="cr-station-role">{step.role}</span>
                </div>

                {/* Station Narrative Description */}
                <p className="cr-station-desc">
                  {step.desc}
                </p>

                {/* Station Focus Chip Footer */}
                <div className="cr-station-footer">
                  <span className="cr-station-focus-tag">
                    {step.focus}
                  </span>
                  {idx < 3 ? (
                    <span className="cr-station-flow-arrow">&rarr;</span>
                  ) : (
                    <span className="cr-station-growth-star">&#9733;</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
