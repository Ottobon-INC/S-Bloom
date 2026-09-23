import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Camera,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SERVICE_PILLARS, INDUSTRIES_DATA } from '../data/contentData';

interface ServicesPageProps {
  onOpenConsultation: (
    industry?: 'healthcare' | 'education' | 'consulting',
    entity?: 'expert' | 'institution'
  ) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const industries = Object.values(INDUSTRIES_DATA);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="section bg-hero-gradient organic-blob-wrapper" style={{ padding: '60px 0 70px' }}>
        <div className="organic-shape-glow glow-peach" style={{ width: '420px', height: '420px', top: '-10%', right: '8%' }} />
        <div className="organic-shape-glow glow-lavender" style={{ width: '360px', height: '360px', bottom: '0', left: '5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs to="/" label="Back to Home" />

          <div style={{ maxWidth: '820px', margin: '20px auto 0', textAlign: 'center' }}>
            <span className="eyebrow">INTEGRATED SERVICE FRAMEWORK</span>
            <h1 className="hero-headline" style={{ fontSize: 'clamp(2.6rem, 4.8vw, 4rem)' }}>
              BUILD &nbsp;&middot;&nbsp; CREATE &nbsp;&middot;&nbsp; PROMOTE
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 28px', fontSize: '1.15rem' }}>
              An integrated growth architecture designed specifically to elevate regulated, high-trust professionals and institutions in Healthcare, Education, and Consulting.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button onClick={() => onOpenConsultation()} className="btn btn-indigo" id="services-cta-talk">
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </button>
              <Link to="/industries" className="btn btn-indigo">
                <span>Explore Industries</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Detailed Pillars (Lavender Section) */}
      <section className="section bg-lavender-section" id="pillars-detail">
        <div className="container">
          <div className="section-header-centered">
            <span className="eyebrow">END-TO-END CAPABILITIES</span>
            <h2 style={{ fontSize: '2.4rem' }}>The Three Pillars of sBLOOM</h2>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
              Every deliverable is handled by dedicated domain producers and creative technicians.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {SERVICE_PILLARS.map((pillar) => {
              const iconCircleBg =
                pillar.title === 'BUILD'
                  ? 'var(--bg-lavender)'
                  : pillar.title === 'CREATE'
                  ? 'var(--bg-peach)'
                  : 'var(--accent-pale-blue)';

              const iconColor =
                pillar.title === 'BUILD'
                  ? 'var(--color-indigo)'
                  : pillar.title === 'CREATE'
                  ? 'var(--color-coral)'
                  : 'var(--color-indigo)';

              const strategicValue =
                pillar.title === 'BUILD'
                  ? 'We establish unbreakable digital discoverability and institutional credibility so patients, students, and clients find verified, authoritative information directly from you.'
                  : pillar.title === 'CREATE'
                  ? 'We turn dense clinical breakthroughs, academic syllabi, or proprietary consulting frameworks into clear, engaging visual media and articles that build enduring authority.'
                  : 'We deploy precision targeting and strategic distribution so your message reaches executive decision-makers, prospective patients, and ambitious learners at the exact moment of decision.';

              return (
                <div
                  key={pillar.title}
                  id={pillar.title.toLowerCase()}
                  style={{
                    background: 'var(--bg-white)',
                    borderRadius: 'var(--radius-card)',
                    padding: '44px 40px',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 0.9fr',
                    gap: '40px',
                    alignItems: 'center'
                  }}
                >
                  {/* Left: Number, Title, Description, Strategic Value */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-coral)', letterSpacing: '0.08em' }}>
                        PHASE {pillar.num}
                      </span>
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: iconCircleBg,
                          color: iconColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {pillar.title === 'BUILD' && <Sparkles size={22} />}
                        {pillar.title === 'CREATE' && <Camera size={22} />}
                        {pillar.title === 'PROMOTE' && <TrendingUp size={22} />}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-indigo)', marginBottom: '10px' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
                      {pillar.subtitle}
                    </p>

                    <div
                      style={{
                        background: 'var(--bg-main)',
                        padding: '16px 20px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.94rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                      }}
                    >
                      <strong style={{ color: 'var(--color-indigo)' }}>Strategic Outcome: </strong>
                      {strategicValue}
                    </div>
                  </div>

                  {/* Right: Core Deliverables List */}
                  <div
                    style={{
                      background: 'var(--bg-main)',
                      borderRadius: 'var(--radius-card)',
                      padding: '32px 28px',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-indigo)', marginBottom: '18px' }}>
                      Core Deliverables Included
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {pillar.deliverables.map((d) => (
                        <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-indigo)' }}>
                          <CheckCircle2 size={18} color="var(--color-coral)" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Application (Peach Section) */}
      <section className="section bg-peach-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="eyebrow">TAILORED FOR YOUR WORLD</span>
            <h2 style={{ fontSize: '2.4rem' }}>How We Apply Services by Industry</h2>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
              No generic templates. Every workflow adapts to regulatory requirements and domain expectations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {industries.map((ind) => (
              <div
                key={ind.id}
                style={{
                  background: 'var(--bg-white)',
                  borderRadius: 'var(--radius-card)',
                  padding: '36px 30px',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span className="pill-badge" style={{ marginBottom: '14px' }}>{ind.title}</span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--color-indigo)', marginBottom: '10px' }}>
                    {ind.tagline}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    {ind.landingDescription}
                  </p>
                </div>

                <Link
                  to={`/industries/${ind.id}`}
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Explore {ind.title} Pathway</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="section bg-ivory-section" style={{ textAlign: 'center', padding: '90px 0' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <span className="eyebrow">READY TO GROW?</span>
          <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', marginBottom: '16px' }}>
            Let's Blueprint Your Strategy
          </h2>
          <p style={{ fontSize: '1.12rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Share your practice or institution goals with our directors and receive an actionable growth outline.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button onClick={() => onOpenConsultation()} className="btn btn-indigo btn-lg" style={{ padding: '14px 32px' }}>
              <span>Start a Conversation</span>
              <ArrowRight size={16} />
            </button>
            <Link to="/industries" className="btn btn-indigo btn-lg" style={{ padding: '14px 32px' }}>
              <span>Choose Your Industry</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
