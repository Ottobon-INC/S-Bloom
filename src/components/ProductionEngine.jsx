import React from 'react';

export default function ProductionEngine({ onOpenGateway }) {
  const benefits = [
    { title: 'Dedicated execution', desc: 'You focus purely on delivery; our studio takes care of every cut, sound layer, and caption.' },
    { title: 'Faster turnaround', desc: 'One 2-hour recording session turned into an entire month of master video assets in days.' },
    { title: 'Consistent quality', desc: 'Backed by Ottobon Professional Services engineering and editorial quality control.' },
    { title: 'Strategic support', desc: 'Continuous guidance on algorithm trends, hook structures, and search dominance.' }
  ];

  const steps = [
    {
      num: '01',
      title: 'Brief & Strategy',
      desc: 'Identify patient/audience questions and draft high-retention hook architecture.'
    },
    {
      num: '02',
      title: 'Create & Produce',
      desc: 'Guided 2-hour shoot with pro teleprompter, framing, and studio lighting.'
    },
    {
      num: '03',
      title: 'Publish & Optimize',
      desc: 'Post-production cuts, motion design, and scheduled dispatch across platforms.'
    },
    {
      num: '04',
      title: 'Measure & Improve',
      desc: 'Continuous performance tracking, inbound lead analytics, and SEO review.'
    }
  ];

  return (
    <section className="production-engine-section" id="engine">
      <div className="container">
        <div className="split-engine-layout">
          
          {/* Left Column: Headline & Benefits */}
          <div className="engine-left-col">
            <span className="section-eyebrow">
              The Production Standard
            </span>

            <h2 className="font-serif section-title" style={{ textAlign: 'left' }}>
              Your production engine.<br />Your fallback partner.
            </h2>

            <p className="engine-lead-text">
              Growing digitally shouldn't require burning out on video editing software or managing dozens of unreliable freelancers. S Bloom handles the heavy operational execution so you bloom effortlessly.
            </p>

            <ul className="engine-benefits-list">
              {benefits.map((b, idx) => (
                <li key={idx} className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-text">
                    <strong>{b.title}</strong>
                    <span>{b.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <button 
              className="btn btn-primary"
              onClick={() => onOpenGateway('businesses')}
            >
              Explore Production Workflows &rarr;
            </button>
          </div>

          {/* Right Column: Process UI */}
          <div className="process-ui-card">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              paddingBottom: '14px',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: '700', color: 'var(--text-light)' }}>
                  Execution Roadmap
                </div>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>
                  The 4-Step S Bloom Engine
                </strong>
              </div>
              <span style={{
                background: 'var(--color-forest)',
                color: '#FFFFFF',
                fontSize: '0.74rem',
                fontWeight: '700',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)'
              }}>
                Ottobon Standard
              </span>
            </div>

            <div className="process-steps-list">
              {steps.map((step) => (
                <div key={step.num} className="process-step-item">
                  <div className="step-num">{step.num}</div>
                  <div className="step-info">
                    <h5>{step.title}</h5>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
