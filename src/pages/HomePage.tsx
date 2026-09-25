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
      <section className="hero-editorial bg-hero-gradient organic-blob-wrapper" id="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Soft Organic Atmospheric Glows */}
        <div className="organic-shape-glow glow-peach" style={{ width: '460px', height: '460px', top: '-8%', right: '5%' }} />
        <div className="organic-shape-glow glow-lavender" style={{ width: '420px', height: '420px', bottom: '2%', left: '4%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Centered Editorial Copy */}
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '40px 0' }}>
            <ScrollReveal delay={0}>
              <div className="hero-left-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <span className="eyebrow" style={{ marginBottom: '16px', display: 'inline-block' }}>INDUSTRY-SPECIFIC MARKETING & GROWTH PARTNER</span>
                <h1 className="hero-headline editorial-title" style={{ textAlign: 'center' }}>
                  At every step of your growth,<br />
                  we're here to help you BLOOM.
                </h1>

                <p className="hero-description" style={{ textAlign: 'center', margin: '0 auto 40px auto' }}>
                  From building your digital presence to creating content and promoting it to the right audience — we bring every step together around your business.
                </p>

                <div className="hero-actions-group" style={{ justifyContent: 'center' }}>
                  <GenerateButton
                    onClick={() => onOpenConsultation()}
                    palette="indigo"
                    id="hero-primary-cta"
                    style={{ padding: '13px 28px', fontSize: '0.98rem' }}
                    text="Let's Talk"
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
                    <span>See Our Work</span>
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
              <span className="eyebrow">HOW WE HELP YOU BLOOM</span>
              <h2 className="heading-serif" style={{ fontSize: '2.4rem', marginTop: '6px' }}>
                Everything your business needs to BLOOM.
              </h2>
            </div>
          </ScrollReveal>

          <div className="bcp-grid">
            {SERVICE_PILLARS.map((pillar, index) => {
              const iconClass =
                pillar.num === '01'
                  ? 'bcp-icon-build'
                  : pillar.num === '02'
                  ? 'bcp-icon-create'
                  : 'bcp-icon-promote';

              const cardThemeClass =
                pillar.num === '01'
                  ? 'bcp-card-build'
                  : pillar.num === '02'
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
                      {pillar.num === '01' && <Sparkles size={24} />}
                      {pillar.num === '02' && <Camera size={24} />}
                      {pillar.num === '03' && <TrendingUp size={24} />}
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
      <section className="industries-strip-section" id="industries" style={{ padding: '100px 0', display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 80px)' }}>
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


    </div>
  );
};
