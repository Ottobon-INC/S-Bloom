import React from 'react';

export default function EcosystemVisual({ onOpenGateway }) {
  return (
    <div className="ecosystem-visual-container">
      <div className="ecosystem-canvas">
        {/* Central S Bloom Core Pulse */}
        <div className="hub-center-badge">
          <img 
            src="/sbloom-logo.jpeg" 
            alt="sBloom Hub" 
            className="hub-mini-logo" 
          />
          <span className="dot-live"></span>
          <span>sBloom &bull; CREATORS STUDIO &bull; RECORD • EDIT • GROW</span>
        </div>

        {/* 3 Interconnected Square Boxes */}
        <div className="ecosystem-triad-grid">
          
          {/* Creator Square Box */}
          <div 
            className="eco-card eco-creator"
            onClick={() => onOpenGateway('creators')}
            style={{ cursor: 'pointer' }}
          >
            <div>
              <div className="eco-card-header">
                <span className="eco-tag tag-purple">Individual Talent</span>
                <span className="eco-header-icon">✨</span>
              </div>
              <h4 className="eco-title">Creators &amp; Artists</h4>
              <p className="eco-desc">
                Camera presence coaching, viral hook scripting &amp; full-service post-production.
              </p>
            </div>

            <div className="eco-bottom-row">
              <div className="eco-status-pill">
                <span style={{ color: 'var(--gold-vibrant)', fontWeight: 'bold' }}>●</span>
                <span>0 to 10k Accelerator</span>
              </div>
              <span className="eco-arrow-prompt">Explore &rarr;</span>
            </div>
          </div>

          {/* Business Square Box */}
          <div 
            className="eco-card eco-business"
            onClick={() => onOpenGateway('businesses')}
            style={{ cursor: 'pointer' }}
          >
            <div>
              <div className="eco-card-header">
                <span className="eco-tag tag-green">Independent Practices</span>
                <span className="eco-header-icon">📈</span>
              </div>
              <h4 className="eco-title">Business Professionals</h4>
              <p className="eco-desc">
                Doctors, lawyers, and consultants converting expertise into high-intent inbound inquiries.
              </p>
            </div>

            <div className="eco-bottom-row">
              <div className="eco-status-pill">
                <span style={{ color: '#38C793', fontWeight: 'bold' }}>●</span>
                <span>2-Hour Batching</span>
              </div>
              <span className="eco-arrow-prompt">Explore &rarr;</span>
            </div>
          </div>

          {/* Institution Square Box */}
          <div 
            className="eco-card eco-institution"
            onClick={() => onOpenGateway('institutions')}
            style={{ cursor: 'pointer' }}
          >
            <div>
              <div className="eco-card-header">
                <span className="eco-tag tag-blue">Enterprise &amp; Groups</span>
                <span className="eco-header-icon">🏛️</span>
              </div>
              <h4 className="eco-title">Institutions</h4>
              <p className="eco-desc">
                Unified digital footprint across search, video, and admissions for schools and health systems.
              </p>
            </div>

            <div className="eco-bottom-row">
              <div className="eco-status-pill">
                <span style={{ color: '#3B97FA', fontWeight: 'bold' }}>●</span>
                <span>Ottobon Sync</span>
              </div>
              <span className="eco-arrow-prompt">Explore &rarr;</span>
            </div>
          </div>

        </div>

        {/* Ambient Connectivity Wave Bar */}
        <div style={{
          marginTop: '28px',
          paddingTop: '20px',
          borderTop: '1px solid var(--gold-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: 'var(--text-light)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold-vibrant)' }}></span>
            <span>All 3 Gateways Unified Under One Content &amp; Distribution Architecture</span>
          </div>
          <span style={{ fontWeight: '700', color: 'var(--gold-vibrant)' }}>
            Ottobon Professional Services Standard &rarr;
          </span>
        </div>

      </div>
    </div>
  );
}
