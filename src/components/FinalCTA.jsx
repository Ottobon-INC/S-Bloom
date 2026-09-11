import React from 'react';

export default function FinalCTA({ onOpenAccelerator }) {
  return (
    <section className="final-cta-section" id="contact">
      <div className="container">
        <div className="final-cta-card">
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
              className="btn btn-primary"
              style={{ padding: '14px 32px' }}
              onClick={onOpenAccelerator}
            >
              <span>Start Blooming</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button 
              className="btn btn-secondary"
              style={{ padding: '14px 32px' }}
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
    </section>
  );
}
