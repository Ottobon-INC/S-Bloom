import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  User,
  Users,
  Sparkles,
  Camera,
  TrendingUp,
  Home,
  Layers,
  CheckCircle2,
  FileText,
  Briefcase,
  Send,
  Play,
  X
} from 'lucide-react';
import { SERVICE_PILLARS, INDUSTRIES_DATA } from '../data/contentData';

interface HomePageProps {
  onOpenConsultation: (
    industry?: 'healthcare' | 'education' | 'consulting',
    entity?: 'expert' | 'institution'
  ) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const industries = Object.values(INDUSTRIES_DATA);
  const [isReelOpen, setIsReelOpen] = useState(false);

  return (
    <div className="home-page">
      {/* 01: REDESIGNED HERO SECTION (Screen 01 Reference) */}
      <section className="hero-editorial bg-hero-gradient organic-blob-wrapper" id="hero">
        {/* Soft Organic Atmospheric Glows */}
        <div className="organic-shape-glow glow-peach" style={{ width: '460px', height: '460px', top: '-8%', right: '5%' }} />
        <div className="organic-shape-glow glow-lavender" style={{ width: '420px', height: '420px', bottom: '2%', left: '4%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Top 2-Column Split: Editorial Copy & Arched Studio Composition */}
          <div className="hero-editorial-grid">
            {/* Left Column: Eyebrow, Main Headline, Supporting Copy, Action Button */}
            <div className="hero-left-content">
              <span className="eyebrow" style={{ color: 'var(--color-coral)' }}>
                FROM EXPERTISE TO IMPACT
              </span>

              <h1 className="hero-headline editorial-title">
                Ideas that create<br />
                real growth.
              </h1>

              <p className="hero-description">
                We help experts and institutions in Healthcare, Education and Consulting build digital presence, create meaningful content and reach the right audience.
              </p>

              <div className="hero-actions-group">
                <button
                  onClick={() => onOpenConsultation()}
                  className="btn btn-indigo"
                  id="hero-primary-cta"
                  style={{ padding: '13px 28px', fontSize: '0.98rem' }}
                >
                  <span>Let's Create Impact</span>
                  <ArrowRight size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsReelOpen(true)}
                  className="btn btn-outline studio-reel-btn"
                  id="hero-watch-reel-btn"
                >
                  <span className="reel-play-icon">
                    <Play size={14} fill="var(--color-coral)" color="var(--color-coral)" />
                  </span>
                  <span>Watch Studio Reel</span>
                </button>
              </div>
            </div>

            {/* Right Column: Architectural Studio Arch Visual */}
            <div className="hero-studio-arch-wrapper">
              <div className="hero-studio-arch-card">
                <img
                  src="/studio-arch.jpg"
                  alt="sBLOOM Production Studio - microphone, audio monitors, and modern ambient lighting"
                  className="hero-studio-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/infra-studio.jpg';
                  }}
                />

                {/* Subtle Arch Gradient Scrim */}
                <div className="hero-studio-scrim" />

                {/* Top Badge: Watch Studio Reel */}
                <button
                  type="button"
                  onClick={() => setIsReelOpen(true)}
                  className="studio-badge-top"
                  aria-label="Play Studio Reel Video"
                >
                  <span className="studio-badge-play">
                    <Play size={13} fill="currentColor" />
                  </span>
                  <span>Watch Studio Reel</span>
                </button>

                {/* Bottom Left Badge: III. RECORD • EDIT • GROW */}
                <div className="studio-badge-bottom">
                  <span className="studio-badge-dot" />
                  <span>III. RECORD &bull; EDIT &bull; GROW</span>
                </div>

                {/* Bottom Right Handwritten Editorial Tag */}
                <div className="studio-sticker-script">
                  <span>Ideas</span>
                  <span>Growth</span>
                  <span>Impact</span>
                </div>
              </div>

              {/* Decorative Backdrop Glow Shape */}
              <div className="studio-backdrop-shape" aria-hidden="true" />
            </div>
          </div>

          {/* DUAL GATEWAY CARDS: Redesigned Wide Cards matching User's Reference */}
          <div className="gateway-cards-redesign-row">
            {/* Gateway 1: Client Journey */}
            <Link
              to="/industries"
              className="gateway-redesign-card gateway-card-expert"
              id="gateway-client-card"
            >
              <div className="gateway-card-main">
                <div className="gateway-icon-badge">
                  <User size={22} color="#FFFFFF" />
                </div>
                <div className="gateway-content-wrap">
                  <h3 className="gateway-card-heading">
                    I'm an Expert / Institution looking to grow
                  </h3>
                  <p className="gateway-card-subtext">
                    Build your professional presence, share expertise, or showcase your facilities and team.
                  </p>
                </div>
              </div>
              <div className="btn-circle btn-circle-white gateway-action-btn">
                <ArrowRight size={18} />
              </div>
            </Link>

            {/* Gateway 2: Partner Workspace */}
            <Link
              to="/creative-workspace"
              className="gateway-redesign-card gateway-card-workspace"
              id="gateway-partner-card"
            >
              <div className="gateway-card-main">
                <div className="gateway-icon-badge">
                  <Sparkles size={22} color="var(--color-indigo)" />
                </div>
                <div className="gateway-content-wrap">
                  <h3 className="gateway-card-heading">
                    Join our Creative Workspace
                  </h3>
                  <p className="gateway-card-subtext">
                    Connect with curated storyboards and client briefs as a creative partner.
                  </p>
                </div>
              </div>
              <div className="btn-circle btn-circle-outline gateway-action-btn">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL FOR "WATCH STUDIO REEL" */}
      {isReelOpen && (
        <div className="modal-overlay" onClick={() => setIsReelOpen(false)}>
          <div
            className="modal-dialog"
            style={{ maxWidth: '820px', padding: '24px', background: '#121922' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setIsReelOpen(false)}
              aria-label="Close studio reel"
              style={{ color: '#FFFFFF' }}
            >
              <X size={22} />
            </button>
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginTop: '12px' }}>
              <video
                src="/workspace-bg-video.mp4"
                controls
                autoPlay
                playsInline
                style={{ width: '100%', height: 'auto', maxHeight: '70vh', display: 'block' }}
              />
            </div>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#FFFFFF' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF' }}>sBLOOM Studio Production Reel</h4>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px' }}>
                  Behind the scenes of our video editing, audio mastering, and studio production workflows.
                </p>
              </div>
              <button onClick={() => { setIsReelOpen(false); onOpenConsultation(); }} className="btn btn-indigo btn-sm">
                <span>Book a Session</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HOW WE HELP YOU GROW: BUILD · CREATE · PROMOTE */}
      <section className="bcp-section" id="services">
        <div className="container">
          <div className="section-header-centered">
            <span className="eyebrow">HOW WE HELP YOU GROW</span>
            <h2 className="heading-serif-caps" style={{ fontSize: '2.4rem', marginTop: '6px' }}>
              BUILD &nbsp;&middot;&nbsp; CREATE &nbsp;&middot;&nbsp; PROMOTE
            </h2>
          </div>

          <div className="bcp-grid">
            {SERVICE_PILLARS.map((pillar) => {
              const iconClass =
                pillar.title === 'BUILD'
                  ? 'bcp-icon-build'
                  : pillar.title === 'CREATE'
                  ? 'bcp-icon-create'
                  : 'bcp-icon-promote';

              return (
                <div key={pillar.title} className="bcp-card">
                  <div className="bcp-card-header">
                    <span className="bcp-num">{pillar.num}</span>
                    <div className={`bcp-icon-circle ${iconClass}`}>
                      {pillar.title === 'BUILD' && <Sparkles size={24} />}
                      {pillar.title === 'CREATE' && <Camera size={24} />}
                      {pillar.title === 'PROMOTE' && <TrendingUp size={24} />}
                    </div>
                  </div>

                  <h3 className="bcp-card-title">{pillar.title}</h3>
                  <p className="bcp-card-desc">{pillar.subtitle}</p>

                  <ul className="bcp-list">
                    {pillar.deliverables.map((item) => (
                      <li key={item} className="bcp-list-item">
                        <span className="bcp-list-bullet" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE FOCUS ON (Screen 01 Bottom) */}
      <section className="industries-strip-section" id="industries">
        <div className="container">
          <div className="industries-strip-header">
            <div>
              <span className="eyebrow">TARGET SPECIALIZATION</span>
              <h2 style={{ fontSize: '2.2rem' }}>Industries We Focus On</h2>
            </div>
            <Link to="/industries" className="btn btn-outline">
              <span>View All Industries</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="industries-preview-grid">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                to={`/industries/${ind.id}`}
                className="industry-preview-card"
                id={`industry-preview-${ind.id}`}
              >
                <div className="industry-preview-img-wrap">
                  <img
                    src={ind.imageUrl}
                    alt={ind.title}
                    className="industry-preview-img"
                  />
                </div>
                <div className="industry-preview-body">
                  <span className="industry-preview-title">{ind.title}</span>
                  <div className="btn-circle btn-circle-indigo" style={{ width: '36px', height: '36px' }}>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="industry-preview-footer-row">
            <p className="script-text" style={{ fontSize: '1.5rem', color: 'var(--color-indigo)' }}>
              Different journeys. A brighter tomorrow.
            </p>
            <Link to="/industries" className="btn-circle btn-circle-indigo" aria-label="Explore industries">
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 07: USER FLOW OVERVIEW (Screen 07) */}
      <section className="user-flow-section" id="flow">
        <div className="container">
          <div className="flow-title-row">
            <div>
              <span className="eyebrow">USER FLOW OVERVIEW</span>
              <h2 className="flow-main-heading">
                Two journeys.<br />
                A bigger impact.
              </h2>
            </div>
            <div>
              <span className="script-text" style={{ fontSize: '1.75rem', color: 'var(--color-coral)' }}>
                Same purpose.<br />Different journeys.
              </span>
            </div>
          </div>

          <div className="flow-tracks-wrap">
            {/* Flow 1: Client Journey */}
            <div className="flow-track-box">
              <div className="flow-track-badge">
                <div className="flow-track-icon" style={{ backgroundColor: 'var(--bg-lavender)', color: 'var(--color-indigo)' }}>
                  <User size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Client Journey</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>(Expert / Institution)</span>
                </div>
              </div>

              <div className="flow-steps-chain">
                <div className="flow-step-node">
                  <Home size={16} color="var(--color-coral)" />
                  <span>Home</span>
                </div>
                <span className="flow-arrow-sep">&rarr;</span>
                <Link to="/industries" className="flow-step-node" style={{ cursor: 'pointer' }}>
                  <Layers size={16} color="var(--color-coral)" />
                  <span>Select Industry</span>
                </Link>
                <span className="flow-arrow-sep">&rarr;</span>
                <div className="flow-step-node">
                  <CheckCircle2 size={16} color="var(--color-coral)" />
                  <span>Choose Expert or Institution</span>
                </div>
                <span className="flow-arrow-sep">&rarr;</span>
                <div className="flow-step-node">
                  <FileText size={16} color="var(--color-coral)" />
                  <span>Tailored Strategy Page</span>
                </div>
              </div>
            </div>

            {/* Flow 2: Partner Journey */}
            <div className="flow-track-box">
              <div className="flow-track-badge">
                <div className="flow-track-icon" style={{ backgroundColor: 'var(--bg-peach)', color: 'var(--color-coral)' }}>
                  <Users size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Partner Journey</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>(Creative Workspace)</span>
                </div>
              </div>

              <div className="flow-steps-chain">
                <div className="flow-step-node">
                  <Home size={16} color="var(--color-coral)" />
                  <span>Home</span>
                </div>
                <span className="flow-arrow-sep">&rarr;</span>
                <Link to="/creative-workspace" className="flow-step-node" style={{ cursor: 'pointer' }}>
                  <Briefcase size={16} color="var(--color-coral)" />
                  <span>Join Creative Workspace</span>
                </Link>
                <span className="flow-arrow-sep">&rarr;</span>
                <div className="flow-step-node">
                  <FileText size={16} color="var(--color-coral)" />
                  <span>Gig Page</span>
                </div>
                <span className="flow-arrow-sep">&rarr;</span>
                <Link to="/creative-workspace/apply" className="flow-step-node" style={{ cursor: 'pointer' }}>
                  <Send size={16} color="var(--color-coral)" />
                  <span>Apply</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Banner with Petal Art */}
          <div className="flow-bottom-banner">
            <div>
              <h3>Let's build a more meaningful tomorrow.</h3>
              <p style={{ marginTop: '6px', color: 'var(--text-secondary)' }}>
                Whether you seek transformative practice growth or technical creative freedom, sBLOOM is your partner.
              </p>
            </div>
            <div>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M50 8C50 30 30 50 8 50C30 50 50 70 50 92C50 70 70 50 92 50C70 50 50 30 50 8Z" fill="#E74736"/>
                <path d="M68 20C68 38 56 50 44 50C56 50 68 62 68 80C68 62 80 50 92 50C80 50 68 38 68 20Z" fill="#C7B4EA" opacity="0.9"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
