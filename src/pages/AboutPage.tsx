import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Target } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const AboutPage: React.FC = () => {
  const values = [
    {
      num: '01',
      title: 'Industry Precision',
      desc: 'We do not dilute our craft across twenty generic markets. We focus exclusively on Healthcare, Education, and Consulting—where authority and nuance matter most.',
      icon: ShieldCheck,
      bg: 'var(--bg-lavender)'
    },
    {
      num: '02',
      title: 'Editorial Storytelling',
      desc: 'Our communication turns dense clinical protocols, complex academic curricula, and proprietary advisory frameworks into magnetic, digestible narratives.',
      icon: Sparkles,
      bg: 'var(--bg-peach)'
    },
    {
      num: '03',
      title: 'Full Production Engine',
      desc: 'Strategy is meaningless without elite execution. We handle scripts, on-camera coaching, video production, graphic finishing, and distribution end-to-end.',
      icon: Target,
      bg: 'var(--accent-pale-blue)'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section / Mission */}
      <section id="mission" className="section bg-hero-gradient organic-blob-wrapper" style={{ padding: '60px 0 70px' }}>
        <div className="organic-shape-glow glow-peach" style={{ width: '400px', height: '400px', top: '-10%', right: '8%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs to="/" label="Back to Home" />

          <div style={{ maxWidth: '780px', margin: '20px auto 0', textAlign: 'center' }}>
            <span className="eyebrow">OUR STORY & VISION</span>
            <h1 className="hero-headline" style={{ fontSize: 'clamp(2.6rem, 4.8vw, 3.8rem)' }}>
              Different journeys. <br />
              <span className="editorial-italic" style={{ color: 'var(--color-coral)' }}>A shared purpose.</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto', fontSize: '1.15rem' }}>
              sBLOOM was founded on a simple observation: the world's most vital thinkers—doctors, educators, and strategic advisors—often lack the time or production infrastructure to tell their story at scale. We bridge that gap.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Core Values / The Editorial Standard (Lavender Section) */}
      <section id="standard" className="section bg-lavender-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="eyebrow">GUIDING PRINCIPLES</span>
            <h2 style={{ fontSize: '2.4rem' }}>How We Create Real Growth</h2>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
              Built from the ground up to respect high-trust, regulated industries.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.num}
                  style={{
                    background: 'var(--bg-white)',
                    borderRadius: 'var(--radius-card)',
                    padding: '36px 30px',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-coral)' }}>{v.num}</span>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-indigo)' }}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px', color: 'var(--color-indigo)' }}>
                    {v.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.96rem' }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Two Journeys Model / Infrastructure (Warm Peach Section) */}
      <section id="infrastructure" className="section bg-peach-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">TWO SIDES OF THE SAME PURPOSE</span>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
                Clients Get Strategy. <br />
                Talent Gets Freedom.
              </h2>
              <p style={{ lineHeight: 1.65, marginBottom: '24px' }}>
                Traditional agencies burden clients with bloated retainers and creative talent with client management headaches. sBLOOM separates strategy from technical execution:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, color: 'var(--color-indigo)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-coral)' }} />
                  Clients work with high-level industry directors for growth & messaging
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, color: 'var(--color-indigo)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-coral)' }} />
                  Creative partners claim pre-scoped gigs with prompt pay & zero pitching
                </li>
              </ul>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Link to="/industries" className="btn btn-indigo">
                  <span>Explore Industries</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/creative-workspace" className="btn btn-indigo">
                  <span>Partner Workspace</span>
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-subtle)', height: '400px' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                alt="sBLOOM team collaboration"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
