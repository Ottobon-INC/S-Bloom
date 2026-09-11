import React from 'react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: '🎬',
      title: 'Content & Reels',
      desc: 'Hook scripting, camera coaching, 4K color grading, and fast-paced high-retention video editing.'
    },
    {
      icon: '🔍',
      title: 'Search & Discovery',
      desc: 'Google Business Profile dominance and local search ranking acceleration for organic discovery.'
    },
    {
      icon: '💻',
      title: 'Websites & Portals',
      desc: 'Modern high-conversion landing pages, intake funnels, and institutional reputation portals.'
    },
    {
      icon: '📡',
      title: 'Omnichannel Distribution',
      desc: 'Seamless repurposing of hero footage across Instagram, YouTube Shorts, and LinkedIn.'
    }
  ];

  return (
    <section className="funnel-capabilities-section" id="capabilities">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-eyebrow">
          Capabilities
        </span>

        <h2 className="font-serif section-title">
          Everything you need to grow digitally.
        </h2>

        <p className="section-desc">
          From first-scroll attention to qualified inquiries and enrollment, here is how our full-funnel capability stack operates.
        </p>

        <div className="capabilities-row-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="cap-box">
              <div className="cap-icon-circle">{cap.icon}</div>
              <h3 className="cap-title">{cap.title}</h3>
              <p className="cap-desc">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
