import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Camera,
  TrendingUp,
  CheckCircle2,
  HeartPulse,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SERVICE_PILLARS, INDUSTRIES_DATA } from '../data/contentData';
import { GenerateButton } from '../components/common/GenerateButton';

interface ServicesPageProps {
  onOpenConsultation: (
    industry?: 'healthcare' | 'education' | 'consulting',
    entity?: 'expert' | 'institution'
  ) => void;
}

interface IndustryServiceApplication {
  id: 'healthcare' | 'education' | 'consulting';
  title: string;
  audience: string;
  simpleDescription: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  deliverables: {
    stage: 'Build' | 'Create' | 'Promote';
    item: string;
  }[];
}

const INDUSTRY_APPLICATIONS: IndustryServiceApplication[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    audience: 'Doctors, Clinics & Hospitals',
    simpleDescription: 'We help doctors build patient trust and grow clinic appointments.',
    icon: <HeartPulse size={24} />,
    iconBg: 'var(--bg-peach)',
    iconColor: 'var(--color-coral)',
    deliverables: [
      { stage: 'Build', item: 'Clinic Website & Google Profile' },
      { stage: 'Create', item: 'Patient Education Videos' },
      { stage: 'Promote', item: 'Meta Ads & Google Ads' }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    audience: 'Schools, Universities & Educators',
    simpleDescription: 'We help schools attract students and showcase academic programs.',
    icon: <GraduationCap size={24} />,
    iconBg: 'var(--bg-lavender)',
    iconColor: 'var(--color-indigo)',
    deliverables: [
      { stage: 'Build', item: 'Admissions & Course Pages' },
      { stage: 'Create', item: 'Student Story Videos & Media' },
      { stage: 'Promote', item: 'Meta Ads & Influencer Collabs' }
    ]
  },
  {
    id: 'consulting',
    title: 'Consulting',
    audience: 'Advisors, Coaches & Advisory Firms',
    simpleDescription: 'We help consultants win enterprise clients and build market authority.',
    icon: <Briefcase size={24} />,
    iconBg: '#FFF3E0',
    iconColor: '#C2410C',
    deliverables: [
      { stage: 'Build', item: 'Executive Authority Website' },
      { stage: 'Create', item: 'Video Podcasts & Case Studies' },
      { stage: 'Promote', item: 'Google Ads & Meta Ads' }
    ]
  }
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const industries = Object.values(INDUSTRIES_DATA);
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="section bg-hero-gradient organic-blob-wrapper" style={{ padding: '60px 0 70px' }}>
        <div className="organic-shape-glow glow-peach" style={{ width: '420px', height: '420px', top: '-10%', right: '8%' }} />
        <div className="organic-shape-glow glow-lavender" style={{ width: '360px', height: '360px', bottom: '0', left: '5%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>


          <div style={{ maxWidth: '900px', margin: '20px auto 0', textAlign: 'center' }}>
            <span className="eyebrow">INTEGRATED SERVICE FRAMEWORK</span>
            
            <h1 className="services-hero-title">
              <span>BUILD</span>
              <span className="services-hero-dot">&middot;</span>
              <span>CREATE</span>
              <span className="services-hero-dot">&middot;</span>
              <span>PROMOTE</span>
            </h1>

            <p className="hero-description" style={{ margin: '0 auto 28px', fontSize: '1.08rem', maxWidth: '640px', lineHeight: 1.6 }}>
              A structured, three-stage growth engine designed for experts and institutions in Healthcare, Education, and Consulting.
            </p>
            {/* 3-Step Connected Framework Cards */}
            <div className="framework-hero-row" style={{ marginBottom: '32px' }}>
              <a href="#build" className="framework-hero-card">
                <div className="framework-hero-card-top">
                  <span className="framework-hero-num">STAGE 01</span>
                  <div className="framework-hero-icon" style={{ backgroundColor: 'var(--bg-lavender)', color: 'var(--color-indigo)' }}>
                    <Sparkles size={20} />
                  </div>
                </div>
                <h4 className="framework-hero-card-title">BUILD</h4>
                <p className="framework-hero-card-sub">Web, SEO & Digital Foundation</p>
              </a>

              <div className="framework-hero-arrow" aria-hidden="true">
                <ArrowRight size={20} />
              </div>

              <a href="#create" className="framework-hero-card">
                <div className="framework-hero-card-top">
                  <span className="framework-hero-num">STAGE 02</span>
                  <div className="framework-hero-icon" style={{ backgroundColor: 'var(--bg-peach)', color: 'var(--color-coral)' }}>
                    <Camera size={20} />
                  </div>
                </div>
                <h4 className="framework-hero-card-title">CREATE</h4>
                <p className="framework-hero-card-sub">Studio Media, Video & Editorial</p>
              </a>

              <div className="framework-hero-arrow" aria-hidden="true">
                <ArrowRight size={20} />
              </div>

              <a href="#promote" className="framework-hero-card">
                <div className="framework-hero-card-top">
                  <span className="framework-hero-num">STAGE 03</span>
                  <div className="framework-hero-icon" style={{ backgroundColor: 'var(--accent-pale-blue)', color: 'var(--color-indigo)' }}>
                    <TrendingUp size={20} />
                  </div>
                </div>
                <h4 className="framework-hero-card-title">PROMOTE</h4>
                <p className="framework-hero-card-sub">Meta Ads, Google Ads & Collabs</p>
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <GenerateButton
                onClick={() => onOpenConsultation()}
                palette="indigo"
                id="services-cta-talk"
                text="Start a Conversation"
                icon={<ArrowRight size={16} />}
              />
              <GenerateButton
                onClick={() => navigate('/industries')}
                palette="peach"
                text="Explore Industries"
                showIcon={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Detailed Pillars (Lavender Section) */}
      <section className="section bg-lavender-section" id="pillars-detail">
        <div className="container">
          <div className="section-header-centered">
            <span className="eyebrow">OUR CORE CAPABILITIES</span>
            <h2 style={{ fontSize: '2.4rem' }}>The Three Pillars of sBLOOM</h2>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
              From initial digital foundation to studio production and targeted audience growth.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
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

              const strategicOutcome =
                pillar.title === 'BUILD'
                  ? 'Establishes verified search visibility and credibility so clients find authoritative information directly from you.'
                  : pillar.title === 'CREATE'
                  ? 'Turns complex ideas into high-quality studio media, video, and articles that build enduring authority.'
                  : 'Drives qualified leads and appointments through targeted Meta Ads, Google Ads, and influencer collaborations.';

              return (
                <div
                  key={pillar.title}
                  id={pillar.title.toLowerCase()}
                  className="pillar-clean-card"
                >
                  {/* Left: Phase, Title, Summary, Outcome */}
                  <div className="pillar-clean-info">
                    <div className="pillar-clean-badge-row">
                      <div
                        className="pillar-clean-icon"
                        style={{ background: iconCircleBg, color: iconColor }}
                      >
                        {pillar.title === 'BUILD' && <Sparkles size={20} />}
                        {pillar.title === 'CREATE' && <Camera size={20} />}
                        {pillar.title === 'PROMOTE' && <TrendingUp size={20} />}
                      </div>
                      <span className="pillar-clean-phase">PHASE {pillar.num}</span>
                    </div>

                    <h3 className="pillar-clean-title">{pillar.title}</h3>
                    <p className="pillar-clean-desc">{pillar.subtitle}</p>

                    <div className="pillar-clean-outcome">
                      <span><strong>Key Outcome:</strong> {strategicOutcome}</span>
                    </div>
                  </div>

                  {/* Right: Deliverables List */}
                  <div className="pillar-clean-deliverables">
                    <span className="pillar-clean-deliv-title">What's Included</span>
                    <div className="pillar-clean-grid">
                      {pillar.deliverables.map((d) => (
                        <div key={d} className="pillar-clean-item">
                          <CheckCircle2 size={18} color="var(--color-coral)" style={{ flexShrink: 0 }} />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
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
            <h2 style={{ fontSize: '2.4rem' }}>How We Apply Services by Industry</h2>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
              How Build, Create, and Promote adapt directly to your field — clear, proven, and compliant.
            </p>
          </div>

          <div className="industry-apply-grid">
            {INDUSTRY_APPLICATIONS.map((item) => (
              <div key={item.id} className="industry-apply-card">
                <div>
                  <div className="industry-apply-top">
                    <div
                      className="industry-apply-icon"
                      style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                    >
                      {item.icon}
                    </div>
                    <div className="industry-apply-meta">
                      <h3 className="industry-apply-title">{item.title}</h3>
                      <span className="industry-apply-audience">{item.audience}</span>
                    </div>
                  </div>

                  <p className="industry-apply-desc">{item.simpleDescription}</p>

                  <ul className="industry-apply-step-list">
                    {item.deliverables.map((d) => (
                      <li key={d.stage} className="industry-apply-step-item">
                        <CheckCircle2 size={17} color="var(--color-coral)" style={{ flexShrink: 0 }} />
                        <span><strong>{d.stage}:</strong> {d.item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/industries/${item.id}`}
                  className="btn btn-outline industry-apply-btn"
                >
                  <span>Explore {item.title} Pathway</span>
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
            <GenerateButton
              onClick={() => onOpenConsultation()}
              palette="indigo"
              style={{ padding: '14px 32px' }}
              text="Start a Conversation"
              icon={<ArrowRight size={16} />}
            />
            <GenerateButton
              onClick={() => navigate('/industries')}
              palette="peach"
              style={{ padding: '14px 32px' }}
              text="Choose Your Industry"
              showIcon={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
