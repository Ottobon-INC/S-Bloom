import React from 'react';
import EcosystemVisual from './EcosystemVisual.jsx';

export default function EcosystemSection({ onOpenGateway }) {
  return (
    <section className="ecosystem-page-section" id="ecosystem-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-eyebrow">
          The sBloom Ecosystem
        </span>

        <h2 className="font-serif section-title">
          Three paths. One connected engine.
        </h2>

        <p className="section-desc" style={{ marginBottom: '44px' }}>
          Explore how creators, businesses, and institutions leverage the sBloom growth infrastructure to scale their digital footprint.
        </p>

        {/* The Full Premium Ecosystem Dashboard Visual */}
        <EcosystemVisual onOpenGateway={onOpenGateway} />
      </div>
    </section>
  );
}
