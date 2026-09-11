import React from 'react';

export default function CoreMessage({ onOpenAccelerator }) {
  const cards = [
    {
      stat: '2 hrs',
      title: 'Average Content Turnaround',
      desc: 'One 120-minute guided recording session produces 24 to 30 high-retention video assets for an entire month.'
    },
    {
      stat: '5x',
      title: 'More Visibility Opportunities',
      desc: 'Hook-first script structure combined with Google Business Profile and YouTube search ranking dominance.'
    },
    {
      stat: '100%',
      title: 'Brand Consistency',
      desc: 'Unified, authoritative presence across video, search, and portals engineered to Ottobon quality standards.'
    }
  ];

  return (
    <section className="core-message-section" id="about">
      <div className="container">
        <div className="core-header">
          <span className="section-eyebrow">
            The sBloom Advantage
          </span>
          <h2 className="font-serif core-headline">
            Stop trying to grow alone.
          </h2>
          <p className="core-subheadline">
            Scale with a dedicated creative and digital growth engine.
          </p>
        </div>

        <div className="core-cards-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="core-metric-card">
              <div className="core-card-stat">{card.stat}</div>
              <h3 className="core-card-title">{card.title}</h3>
              <p className="core-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
