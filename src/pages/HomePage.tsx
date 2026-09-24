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
  X,
  HeartPulse,
  GraduationCap
} from 'lucide-react';
import { SERVICE_PILLARS, INDUSTRIES_DATA } from '../data/contentData';
import { GenerateButton } from '../components/common/GenerateButton';
import { ScrollReveal } from '../components/ScrollReveal';

interface HomePageProps {
  onOpenConsultation: (
    industry?: 'healthcare' | 'education' | 'consulting',
    entity?: 'expert' | 'institution'
  ) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const industries = Object.values(INDUSTRIES_DATA);
  const [isReelOpen, setIsReelOpen] = useState(false);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="home-page">
      {/* 01: REDESIGNED HERO SECTION (Screen 01 Reference) */}
      <section className="hero-editorial bg-hero-gradient organic-blob-wrapper" id="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center' }}>
        {/* Soft Organic Atmospheric Glows */}
        <div className="organic-shape-glow glow-peach" style={{ width: '460px', height: '460px', top: '-8%', right: '5%' }} />
        <div className="organic-shape-glow glow-lavender" style={{ width: '420px', height: '420px', bottom: '2%', left: '4%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Centered Editorial Copy */}
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '40px 0' }}>
            <ScrollReveal delay={0}>
              <div className="hero-left-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                <h1 className="hero-headline editorial-title" style={{ textAlign: 'center' }}>
                  Whatever you're looking for,<br />
                  there's a way to make it bloom.
                </h1>

                <p className="hero-description" style={{ textAlign: 'center', margin: '0 auto 40px auto' }}>
                  From SEO and Google Business Profiles to websites, blogs, social media, shooting, editing and ads — built around what you need.
                </p>

                <div className="hero-actions-group" style={{ justifyContent: 'center' }}>
                  <GenerateButton
                    onClick={() => onOpenConsultation()}
                    palette="indigo"
                    id="hero-primary-cta"
                    style={{ padding: '13px 28px', fontSize: '0.98rem' }}
                    text="Let's Create Impact"
                    icon={<ArrowRight size={17} />}
                  />

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
            </ScrollReveal>
          </div>

          {/* DUAL GATEWAY CARDS: Redesigned Wide Cards matching User's Reference */}
          <div className="gateway-cards-redesign-row">
            {/* Gateway 1: Client Journey */}
            <ScrollReveal delay={250}>
              <Link
                to="/"
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
                    Build your presence, share expertise, or showcase your team.
                  </p>
                </div>
              </div>
                <div className="btn-circle btn-circle-white gateway-action-btn">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </ScrollReveal>

            {/* Gateway 2: Partner Workspace */}
            <ScrollReveal delay={400}>
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
                    Access curated client briefs and collaborate as a creative partner.
                  </p>
                </div>
              </div>
                <div className="btn-circle btn-circle-outline gateway-action-btn">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </ScrollReveal>
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

      {/* HOW WE HELP YOU GROW: PRESENCE · STORYTELLING · AMPLIFY */}
      <section className="bcp-section" id="services">
        <div className="container">
          <ScrollReveal delay={0}>
            <div className="section-header-centered">
              <span className="eyebrow">HOW WE HELP YOU GROW</span>
              <h2 className="heading-serif" style={{ fontSize: '2.4rem', marginTop: '6px' }}>
                Everything you need to scale your brand.
              </h2>
            </div>
          </ScrollReveal>

          <div className="bcp-grid">
            {SERVICE_PILLARS.map((pillar, index) => {
              const iconClass =
                pillar.title === 'PRESENCE'
                  ? 'bcp-icon-build'
                  : pillar.title === 'STORYTELLING'
                  ? 'bcp-icon-create'
                  : 'bcp-icon-promote';

              const cardThemeClass =
                pillar.title === 'PRESENCE'
                  ? 'bcp-card-build'
                  : pillar.title === 'STORYTELLING'
                  ? 'bcp-card-create'
                  : 'bcp-card-promote';

              return (
                <ScrollReveal key={pillar.title} delay={index * 150}>
                  <div
                    className={`bcp-card card-spotlight ${cardThemeClass}`}
                    onMouseMove={handleCardMouseMove}
                  >
                    <div className="bcp-card-header">
                    <span className="bcp-num">{pillar.num}</span>
                    <div className={`bcp-icon-circle ${iconClass}`}>
                      {pillar.title === 'PRESENCE' && <Sparkles size={24} />}
                      {pillar.title === 'STORYTELLING' && <Camera size={24} />}
                      {pillar.title === 'AMPLIFY' && <TrendingUp size={24} />}
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
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE FOCUS ON (Screen 01 Bottom) */}
      <section className="industries-strip-section" id="industries" style={{ padding: '100px 0', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ width: '100%' }}>
          <ScrollReveal delay={0}>
            <div className="industries-strip-header">
              <div>
                <h2 style={{ fontSize: '2.4rem', lineHeight: '1.2', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  Every industry has a story.<br/>
                  <span style={{ color: 'var(--color-coral)' }}>We help you tell yours, the right way.</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '600px' }}>
                  Select your industry below to see tailored solutions for your brand.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="industry-selection-grid">
            {industries.map((ind, index) => {
              const Icon = ind.id === 'healthcare' ? HeartPulse : ind.id === 'education' ? GraduationCap : Briefcase;
              const iconBg = ind.id === 'healthcare' ? 'var(--accent-pale-blue)' : ind.id === 'education' ? 'var(--bg-lavender)' : 'var(--bg-peach)';
              const iconColor = ind.id === 'healthcare' ? 'var(--color-indigo)' : ind.id === 'education' ? 'var(--color-indigo)' : 'var(--color-coral)';

              return (
                <ScrollReveal key={ind.id} delay={index * 150}>
                  <Link
                    to={`/industries/${ind.id}`}
                    className="industry-tall-card"
                    id={`card-industry-${ind.id}`}
                  >
                    <div className="industry-tall-img-wrap">
                      <img
                        src={ind.imageUrl}
                        alt={ind.title}
                        className="industry-tall-img"
                      />
                    </div>

                    <div className="industry-tall-content">
                      <div
                        className="industry-tall-icon-badge"
                        style={{ backgroundColor: iconBg, color: iconColor }}
                      >
                        <Icon size={24} />
                      </div>

                      <h3 className="industry-tall-title">{ind.title}</h3>
                      <p className="industry-tall-subtitle">{ind.tagline}</p>

                      <div className="btn-circle btn-circle-indigo">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>


        </div>
      </section>

      {/* 07: USER FLOW OVERVIEW (Screen 07) */}
      <section className="user-flow-section" id="flow" style={{ padding: '100px 0 120px' }}>
        <div className="container">
          <ScrollReveal delay={0}>
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
          </ScrollReveal>

          <div className="flow-tracks-wrap">
            {/* Flow 1: Client Journey */}
            <ScrollReveal delay={150}>
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
                <Link to="/" className="flow-step-node" style={{ cursor: 'pointer' }}>
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
            </ScrollReveal>

            {/* Flow 2: Partner Journey */}
            <ScrollReveal delay={300}>
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
            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
};
