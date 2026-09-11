import React from 'react';

export default function TrustBar() {
  const metrics = [
    { number: '150+', label: 'Creators Supported' },
    { number: '40+', label: 'Businesses Growing' },
    { number: '18+', label: 'Institutions Connected' },
    { number: '1,200+', label: 'Digital Projects Launched' }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-subhead">
          Built for people and organizations ready to grow.
        </div>

        <div className="trust-metrics-grid">
          {metrics.map((item, idx) => (
            <div key={idx} className="trust-metric-item">
              <div className="trust-number">{item.number}</div>
              <div className="trust-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
