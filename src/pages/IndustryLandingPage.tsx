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
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { INDUSTRIES_DATA } from '../data/contentData';

export const IndustryLandingPage: React.FC = () => {
  const { industry } = useParams<{ industry: string }>();

  if (!industry || !INDUSTRIES_DATA[industry]) {
    return <Navigate to="/industries" replace />;
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
      <section className="industry-landing-hero">
        <div className="container">
          <Breadcrumbs to="/industries" label="Back to Industries" />

          <div className="industry-landing-grid">
            <div>
              <span className="eyebrow">WELCOME TO</span>
              <h1 className="industry-landing-title">{data.landingHeadline}</h1>
              <p className="hero-description">{data.landingDescription}</p>

              {/* 4 Feature / Proof Pill Badges (Screen 03) */}
              <div className="industry-proof-badges-row">
                {data.proofBadges.map((badge) => (
                  <div key={badge.label} className="industry-proof-pill">
                    {getProofIcon(badge.iconName)}
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="industry-landing-visual">
              <img
                src={data.landingImageUrl}
                alt={`Welcome to ${data.title}`}
                className="industry-landing-img"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '28px',
                  right: '28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '2px'
                }}
              >
                <span className="script-text" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
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
              className="entity-choice-card"
              id="choice-expert"
            >
              <div className="entity-icon-circle entity-icon-expert">
                <User size={36} />
              </div>
              <h3 className="entity-choice-title">I'm an Expert</h3>
              <p className="entity-choice-desc">
                Build your professional presence, establish definitive authority, and share your specialized expertise with the world.
              </p>
              <div className="btn-circle btn-circle-indigo">
                <ArrowRight size={20} />
              </div>
            </Link>

            {/* Card 2: We're an Institution */}
            <Link
              to={`/industries/${industry}/institution`}
              className="entity-choice-card"
              id="choice-institution"
            >
              <div className="entity-icon-circle entity-icon-institution">
                <Building2 size={36} />
              </div>
              <h3 className="entity-choice-title">We're an Institution</h3>
              <p className="entity-choice-desc">
                Showcase your facilities, scale multi-department capabilities, strengthen team credentials, and drive organizational acquisition.
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
