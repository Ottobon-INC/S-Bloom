import React from 'react';

export default function Accelerator({ onOpenAccelerator }) {
  const pillars = [
    { title: 'Strategy', desc: 'Niche positioning & retention hook formulas' },
    { title: 'Content', desc: 'Camera presence, lighting & high-velocity reels' },
    { title: 'Distribution', desc: 'Multi-channel deployment & algorithmic reach' },
    { title: 'Optimization', desc: 'Audience funneling & conversion mechanics' }
  ];

  return (
    <section className="accelerator-section" id="accelerator">
      <div className="container">
        <div className="accelerator-content-box">
          <span className="accelerator-eyebrow">
            The S Bloom Accelerator • Batch 1 Open
          </span>

          <h2 className="font-serif accelerator-headline">
            From Zero to 10K. <span>The Growth Program.</span>
          </h2>

          <p className="accelerator-desc">
            A selective 5-pillar cohort designed for aspiring creators and ambitious personal brands. Master camera confidence, craft scroll-stopping hooks, and build an authoritative digital footprint with direct studio directorship.
          </p>

          <div className="accelerator-pillars-row">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="acc-pillar-pill">
                <strong>{pillar.title}</strong>
                <span>{pillar.desc}</span>
              </div>
            ))}
          </div>

          <button 
            className="btn btn-lavender"
            style={{ padding: '14px 34px', fontSize: '1rem' }}
            onClick={onOpenAccelerator}
          >
            Apply for the Accelerator &rarr;
          </button>
          
          <div style={{ marginTop: '16px', fontSize: '0.8rem', color: '#94A3B8' }}>
            🔒 Strictly capped at 25 seats to ensure 1-on-1 creative review.
          </div>
        </div>
      </div>
    </section>
  );
}
