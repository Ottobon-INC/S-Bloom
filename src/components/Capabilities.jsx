import React from 'react';

export default function Capabilities() {
  const capabilities = [
    {
      svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
      title: 'Content & Reels',
      desc: 'Hook scripting, camera coaching, 4K color grading, and fast-paced high-retention video editing.'
    },
    {
      svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
      title: 'Search & Discovery',
      desc: 'Google Business Profile dominance and local search ranking acceleration for organic discovery.'
    },
    {
      svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title: 'Websites & Portals',
      desc: 'Modern high-conversion landing pages, intake funnels, and institutional reputation portals.'
    },
    {
      svg: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>,
      title: 'Omnichannel Distribution',
      desc: 'Seamless repurposing of hero footage across Instagram, YouTube Shorts, and LinkedIn.'
    }
  ];

  return (
    <section className="funnel-capabilities-section" id="capabilities">
      <div className="container">
        <div className="capabilities-header-container">
          <span className="section-eyebrow">
            Capabilities
          </span>

          <h2 className="font-serif section-title">
            Everything you need to grow digitally.
          </h2>

          <p className="section-desc">
            From first-scroll attention to qualified inquiries and enrollment, here is how our full-funnel capability stack operates.
          </p>
        </div>

        <div className="capabilities-row-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="cap-box-premium">
              <div className="cap-content">
                <div className="cap-icon-wrapper">
                  <div className="cap-icon-halo"></div>
                  <div className="cap-icon-inner">{cap.svg}</div>
                </div>
                <h3 className="cap-title-premium">{cap.title}</h3>
                <p className="cap-desc-premium">{cap.desc}</p>
                <div className="cap-hover-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
