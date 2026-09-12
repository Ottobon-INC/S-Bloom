import React from 'react';

export default function FinalCTA({ onOpenAccelerator }) {
  return (
    <section className="final-cta-section" id="contact">
      <div className="container">
        <div className="final-cta-card-premium group">
          <div className="cta-aurora-bg"></div>
          
          <div className="final-cta-inner">
            <span className="section-eyebrow" style={{ marginBottom: '18px' }}>
              The Digital Growth Platform
            </span>

            <h2 className="font-serif final-cta-heading">
              Whoever you are,<br /><em>S Bloom helps you bloom.</em>
            </h2>

            <p className="final-cta-subtext">
              Start building your presence, growing your reach, and turning your potential into progress.
            </p>

            <div className="final-cta-buttons">
              <button 
                className="btn btn-primary cta-btn-glow"
                style={{ padding: '16px 36px', fontSize: '1.05rem' }}
                onClick={onOpenAccelerator}
              >
                <div className="btn-shine"></div>
                <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Start Blooming
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              <button 
                className="btn btn-secondary cta-btn-outline"
                style={{ padding: '16px 36px', fontSize: '1.05rem' }}
                onClick={() => {
                  const el = document.getElementById('gateways');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore Our Services</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
