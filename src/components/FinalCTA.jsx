import React from 'react';

export default function FinalCTA({ onOpenAccelerator }) {
  return (
    <section className="final-cta-section" id="contact">
      <div className="container">
        <div className="final-cta-card-premium group">
          <div className="cta-aurora-bg"></div>
          
          <div className="final-cta-inner">
            <span className="final-cta-eyebrow">
              THE DIGITAL GROWTH PLATFORM
            </span>

            <h2 className="final-cta-heading">
              Whoever you are,<br /><em>S Bloom helps you bloom.</em>
            </h2>

            <p className="final-cta-subtext">
              Start building your presence, growing your reach, and turning your potential into progress.
            </p>

            <div className="final-cta-buttons">
              <button 
                className="btn-cta-gold"
                onClick={onOpenAccelerator}
              >
                <span>Start Blooming</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button 
                className="btn-cta-dark"
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
