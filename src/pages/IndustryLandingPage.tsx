import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  User,
  Building2,
  Heart,
  FileText,
  Users,
  TrendingUp,
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
  Target,
  ShieldCheck
} from 'lucide-react';

import { INDUSTRIES_DATA } from '../data/contentData';

export const IndustryLandingPage: React.FC = () => {
  const { industry } = useParams<{ industry: string }>();

  if (!industry || !INDUSTRIES_DATA[industry]) {
    return <Navigate to="/" replace />;
  }

  const data = INDUSTRIES_DATA[industry];

  const getProofIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart size={18} color="var(--color-coral)" />;
      case 'FileText':
        return <FileText size={18} color="var(--color-coral)" />;
      case 'Users':
        return <Users size={18} color="var(--color-coral)" />;
      case 'TrendingUp':
        return <TrendingUp size={18} color="var(--color-coral)" />;
      case 'GraduationCap':
        return <GraduationCap size={18} color="var(--color-coral)" />;
      case 'BookOpen':
        return <BookOpen size={18} color="var(--color-coral)" />;
      case 'Award':
        return <Award size={18} color="var(--color-coral)" />;
      case 'Briefcase':
        return <Briefcase size={18} color="var(--color-coral)" />;
      case 'Target':
        return <Target size={18} color="var(--color-coral)" />;
      case 'ShieldCheck':
        return <ShieldCheck size={18} color="var(--color-coral)" />;
      default:
        return <TrendingUp size={18} color="var(--color-coral)" />;
    }
  };

  return (
    <div className="industry-landing-page">
      {/* SCREEN 03: INDUSTRY LANDING */}
      <section className="industry-landing-hero" style={{ padding: '100px 0 120px', backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="industry-landing-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.2fr', gap: '64px', alignItems: 'center' }}>
            
            {/* Left Content Column */}
            <div style={{ paddingRight: '20px' }}>
              <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px', color: 'var(--text-secondary)' }}>WELCOME TO</span>
              <h1 className="industry-landing-title" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--color-indigo)' }}>
                {data.landingHeadline}
              </h1>
              <p className="hero-description" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '40px' }}>
                {data.landingDescription}
              </p>

              {/* 4 Feature / Proof Pill Badges (Screen 03) */}
              <div className="industry-proof-badges-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {data.proofBadges.map((badge) => (
                  <div key={badge.label} className="industry-proof-pill">
                    {getProofIcon(badge.iconName)}
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="industry-landing-visual" style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src={data.landingImageUrl}
                alt={`Welcome to ${data.title}`}
                className="industry-landing-img"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }}
              />
              {/* Premium Floating Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '32px',
                  right: '32px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  padding: '14px 24px',
                  borderRadius: 'var(--radius-pill)',
                  boxShadow: '0 8px 32px rgba(35, 28, 80, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.4)'
                }}
              >
                <span className="script-text" style={{ fontSize: '1.35rem', color: 'var(--color-indigo)' }}>
                  {industry === 'healthcare'
                    ? 'People · Care · Expertise · Growth'
                    : industry === 'education'
                    ? 'Minds · Pedagogy · Reach · Impact'
                    : 'Insight · Authority · Advisory · Scale'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 04: EXPERT / INSTITUTION SELECTION */}
      <section className="entity-selection-section" id="choose-entity">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '40px' }}>
            <span className="eyebrow">WHO ARE YOU?</span>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
              Choose the option that best describes you so we can tailor the right strategy.
            </p>
          </div>

          <div className="entity-cards-grid">
            {/* Card 1: I'm an Expert */}
            <Link
              to={`/industries/${industry}/expert`}
              className="entity-choice-card entity-card-expert card-spotlight"
              id="choice-expert"
            >
              <div className="entity-icon-circle entity-icon-expert">
                <User size={36} />
              </div>
              <h3 className="entity-choice-title">I'm an Expert</h3>
              <p className="entity-choice-desc">
                Build your presence, establish authority, and share your expertise.
              </p>
              <div className="btn-circle btn-circle-indigo">
                <ArrowRight size={20} />
              </div>
            </Link>

            {/* Card 2: We're an Institution */}
            <Link
              to={`/industries/${industry}/institution`}
              className="entity-choice-card entity-card-institution card-spotlight"
              id="choice-institution"
            >
              <div className="entity-icon-circle entity-icon-institution">
                <Building2 size={36} />
              </div>
              <h3 className="entity-choice-title">We're an Institution</h3>
              <p className="entity-choice-desc">
                Showcase your facilities, highlight your team, and grow your organization.
              </p>
              <div className="btn-circle btn-circle-indigo">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
