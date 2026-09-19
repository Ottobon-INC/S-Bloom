import React from 'react';

export default function Offerings({ onOpenAccelerator }) {
  const cards = [
    {
      id: 'gbp-seo',
      num: '01',
      title: 'Website, GBP & SEO',
      category: 'Digital Presence & Growth',
      pitch: 'Improve local discovery, search visibility, and website performance.',
      accentRgb: '56, 199, 147', // Emerald Green
      badgeColor: '#38C793',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      deliverables: [
        'Google Business Profile optimization',
        'Local and technical SEO',
        'Website builds and revamps',
        'Local citations, schema, review workflows, and performance optimization'
      ],
      tags: ['Modern Business Website', 'Google Maps Ranking', 'Higher Search Visibility', 'Verified Local Listings'],
      image: '/offerings-website-seo.jpg',
      imageAlt: 'Website, GBP & SEO Dashboard Interface',
      ctaText: 'Get Started with Website, GBP & SEO'
    },
    {
      id: 'blogs-content',
      num: '02',
      title: 'Blogs & Content Creation',
      category: 'Social Media & Content Growth',
      pitch: 'Build a consistent content presence across relevant platforms.',
      accentRgb: '157, 107, 255', // Amethyst Purple
      badgeColor: '#9D6BFF',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      deliverables: [
        'Social media management',
        'Reels, Shorts, and short-form video',
        'Thought-leadership blogs',
        'Content planning and publishing'
      ],
      flow: {
        title: 'CONTENT FLYWHEEL',
        steps: [
          'Define Strategy',
          'Create Content',
          'Publish Consistently',
          'Engage & Build',
          'Generate Leads',
          'Analyze & Optimize'
        ],
        tagline: 'Define Strategy → Create Content → Publish Consistently → Engage & Build → Generate Leads → Analyze & Optimize'
      },
      tags: ['Instagram', 'YouTube Shorts', 'LinkedIn', 'Editorial Blogs'],
      image: '/offerings-content-creation.jpg',
      imageAlt: 'Blogs & Social Media Content Creation Studio',
      ctaText: 'Explore Content Creation'
    },
    {
      id: 'meta-ads',
      num: '03',
      title: 'Meta Ads & Paid Promotion',
      category: 'Performance Marketing',
      pitch: 'Reach relevant audiences through paid campaigns and creative production.',
      accentRgb: '59, 151, 250', // Electric Blue
      badgeColor: '#3B97FA',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
        </svg>
      ),
      deliverables: [
        'Facebook and Instagram advertising',
        'Google Ads: Search and Performance Max',
        'Influencer partnerships',
        'AI-assisted creative and multilingual video production',
        'Retargeting and campaign landing pages'
      ],
      tags: ['Social Media Ads', 'Google Search Ads', 'Influencer Partnerships', 'Creative Video Ads'],
      image: '/offerings-meta-ads.jpg',
      imageAlt: 'Meta Ads & Paid Lead Generation Dashboard',
      ctaText: 'Launch Paid Promotion'
    }
  ];

  return (
    <section className="offerings-stack-section" id="offerings">
      <div className="offerings-ambient-glow"></div>

      <div className="container">
        {/* Section Header */}
        <div className="offerings-stack-header">
          <div className="stack-pill-eyebrow">
            <span className="stack-pulse-dot"></span>
            OUR OFFERINGS
          </div>

          <h2 className="font-serif stack-main-title">
            Our Core Offerings.<br />
            <span className="gold-text-gradient">Engineered for Digital Growth.</span>
          </h2>

          <p className="stack-subtitle">
            Three connected service pillars to help businesses build visibility, create meaningful content, and reach their audience.
          </p>

          <div className="stack-scroll-hint">
            <span>Scroll to explore cards</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
        </div>

        {/* Stacking Card Deck (Cards move and stack one by one on scroll) */}
        <div className="offerings-card-deck">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className="stack-card-item"
              style={{
                '--card-accent': card.accentRgb,
                '--card-index': idx,
                top: `calc(80px + ${idx * 38}px)`,
                zIndex: idx + 1
              }}
            >
              <div className="stack-card-border-glow"></div>

              <div className="stack-card-inner">
                {/* Left Content Column */}
                <div className="stack-card-left">
                  {/* Top Row: Squircle Icon Badge + Category Chip */}
                  <div className="stack-top-meta">
                    <div className="stack-squircle-icon">
                      {card.icon}
                    </div>
                    <span className="stack-category-chip">
                      {card.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="stack-card-title">
                    <span className="stack-title-prefix">{card.num} &mdash; </span>
                    {card.title}
                  </h3>

                  {/* Pitch Quote Banner */}
                  <div className="stack-pitch-banner">
                    <p className="stack-pitch-text">&ldquo;{card.pitch}&rdquo;</p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="stack-deliverables-wrap">
                    <div className="stack-deliverables-heading">KEY DELIVERABLES</div>
                    <ul className="stack-deliverables-list">
                      {card.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="stack-deliverable-item">
                          <span className="stack-check-bullet">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="stack-deliverable-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Flow below Key Deliverables (Card 02 only) */}
                  {card.flow && (
                    <div className="card-inline-flow">
                      <div className="flow-inline-header">
                        <div className="flow-header-left">
                          <span className="flow-pulse-dot"></span>
                          <span className="flow-label-text">{card.flow.title}</span>
                        </div>
                        <span className="flow-cycle-tag">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                          </svg>
                          The cycle never stops
                        </span>
                      </div>

                      {/* 2 Rows of 3 Steps */}
                      <div className="flow-rows-container">
                        <div className="flow-inline-strip">
                          {card.flow.steps.slice(0, 3).map((step, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <div className="flow-inline-pill">
                                <span className="flow-inline-num">0{sIdx + 1}</span>
                                <span className="flow-inline-name">{step}</span>
                              </div>
                              {sIdx < 2 && (
                                <span className="flow-inline-arrow">&rarr;</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        <div className="flow-inline-strip">
                          {card.flow.steps.slice(3, 6).map((step, sIdx) => (
                            <React.Fragment key={sIdx + 3}>
                              <div className="flow-inline-pill">
                                <span className="flow-inline-num">0{sIdx + 4}</span>
                                <span className="flow-inline-name">{step}</span>
                              </div>
                              {sIdx < 2 && (
                                <span className="flow-inline-arrow">&rarr;</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      <div className="flow-inline-tagline">
                        {card.flow.tagline}
                      </div>
                    </div>
                  )}

                  {/* CTA Action Button */}
                  <div className="stack-cta-action">
                    <button
                      className="stack-cta-btn"
                      onClick={() => onOpenAccelerator && onOpenAccelerator()}
                    >
                      <span>{card.ctaText}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Visual Stage Column */}
                <div className="stack-card-right">
                  <div className="stack-visual-panel">
                    {/* Atmospheric Ambient Glow Background (No dots) */}
                    <div className="stack-ambient-stage-bg"></div>

                    {/* Panel Header with Prominent Number & Kicker */}
                    <div className="stack-panel-header">
                      <div className="stack-panel-meta">
                        <span className="stack-panel-dot"></span>
                        <span className="stack-panel-kicker">FEATURE PREVIEW</span>
                      </div>
                      <div className="stack-watermark-num">{card.num}</div>
                    </div>

                    {/* Matched Visual Preview Image (Full Aligned) */}
                    {card.image && (
                      <div className="stack-card-preview-wrap">
                        <img
                          src={card.image}
                          alt={card.imageAlt || card.title}
                          className="stack-card-preview-img"
                          loading="lazy"
                        />
                        <div className="stack-card-preview-overlay"></div>
                      </div>
                    )}

                    {/* Highlight Tags (Consistent across Card 01, 02, and 03) */}
                    <div className="stack-side-tags">
                      <div className="stack-side-tags-label">CORE FOCUS AREAS</div>
                      <div className="stack-tags-cloud">
                        {card.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="stack-feature-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
