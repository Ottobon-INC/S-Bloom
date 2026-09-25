import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Target } from 'lucide-react';


export const AboutPage: React.FC = () => {
  const values = [
    {
      num: '01',
      title: 'We Know Your Field',
      desc: 'We only work with Healthcare, Education, and Consulting. This means we truly understand what your specific audience needs.',
      icon: ShieldCheck,
      bg: 'var(--bg-lavender)'
    },
    {
      num: '02',
      title: 'Making Complex Simple',
      desc: 'We take your big ideas and turn them into clear, simple stories that anyone can easily understand.',
      icon: Sparkles,
      bg: 'var(--bg-peach)'
    },
    {
      num: '03',
      title: 'We Handle Everything',
      desc: 'You don’t need to lift a finger. We write, shoot, edit, and post the final videos for you.',
      icon: Target,
      bg: 'var(--accent-pale-blue)'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section / Mission */}
      <section id="mission" className="section bg-hero-gradient organic-blob-wrapper" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 0 100px', textAlign: 'center' }}>
        <div className="organic-shape-glow glow-peach" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.6 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="hero-headline" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 1.1, marginBottom: '24px', color: 'var(--color-indigo)' }}>
              We help you <span className="editorial-italic" style={{ color: 'var(--color-coral)' }}>share your story</span> with the world.
            </h1>
            
            <p className="hero-description" style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Doctors, educators, and advisors have vital knowledge but often lack the time or tools to share it. We provide the production team to bridge that gap and amplify your voice.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Core Values / The Editorial Standard (Dark Section) */}
      <section id="standard" className="section" style={{ backgroundColor: 'var(--color-indigo)', color: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-centered">
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF' }}>How We Create Real Growth</h2>
            <p style={{ marginTop: '8px', color: 'rgba(255,255,255,0.7)' }}>
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
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-card)',
                    padding: '36px 30px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--bg-peach)' }}>{v.num}</span>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px', color: '#FFFFFF' }}>
                    {v.title}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, fontSize: '0.96rem' }}>
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
              <h2 style={{ fontSize: '2.4rem', marginBottom: '24px', lineHeight: 1.2 }}>
                For People Who Need Work Done.<br/>
                For People Who Know How to Do It.
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div style={{ background: 'rgba(255,255,255,0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--color-indigo)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px', color: 'var(--color-indigo)' }}>For Clients</h4>
                  <p style={{ color: 'var(--color-indigo)', opacity: 0.85, fontSize: '0.95rem', lineHeight: 1.5 }}>
                    From websites and SEO to Google, content, videos, editing and ads — get the right digital work done in one place.
                  </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.6)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--color-coral)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px', color: 'var(--color-indigo)' }}>For Creative Partners</h4>
                  <p style={{ color: 'var(--color-indigo)', opacity: 0.85, fontSize: '0.95rem', lineHeight: 1.5 }}>
                    Turn your skills into real projects — with clear briefs, defined work and opportunities that match what you do best.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Link to="/" className="btn btn-indigo">
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
                src="/collab_indian.jpg"
                alt="Client and creative partner collaborating"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
