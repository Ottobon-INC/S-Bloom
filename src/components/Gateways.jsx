import React from 'react';

export default function Gateways({ onOpenGateway }) {
  const gateways = [
    {
      id: 'creators',
      num: '01',
      className: 'card-creators',
      iconClass: 'icon-purple',
      iconEmoji: '🎨',
      title: 'Creators & Artists',
      description: 'Build your identity, showcase your work, and grow your audience.',
      features: [
        '5-Pillar Creator Accelerator',
        '3-Second Viral Hook Architecture',
        'Camera Presence & Voice Coaching',
        'High-Retention Post-Production Desk'
      ],
      ctaText: 'Explore for Creators',
      accentColor: '#8C52FF'
    },
    {
      id: 'businesses',
      num: '02',
      className: 'card-businesses',
      iconClass: 'icon-green',
      iconEmoji: '💼',
      title: 'Businesses',
      description: 'Build your brand, reach the right audience, and turn visibility into growth.',
      features: [
        'Healthcare & Medical Practices',
        'Legal, CA & Advisory Thought Leadership',
        'The 2-Hour Monthly Batching Shoot',
        'High-Intent Inbound Consultation Leads'
      ],
      ctaText: 'Explore for Businesses',
      accentColor: '#073327'
    },
    {
      id: 'institutions',
      num: '03',
      className: 'card-institutions',
      iconClass: 'icon-blue',
      iconEmoji: '🏛️',
      title: 'Institutions',
      description: 'Strengthen your digital presence, connect with your community, and expand your reach.',
      features: [
        'Multi-Staff & Faculty Brand Uniformity',
        'Institutional Reputation & GBP Dominance',
        'High-Converting Admissions Portals',
        'Specialized Education & Health Portals'
      ],
      ctaText: 'Explore for Institutions',
      accentColor: '#1E5AA0',
      externalLinks: [
        { label: '🎓 Education Portal', url: 'https://marketing.ottobon.in', host: 'marketing.ottobon.in ↗' },
        { label: '🏥 Healthcare Portal', url: 'https://marketing.medctech.com', host: 'marketing.medctech.com ↗' }
      ]
    }
  ];

  return (
    <section className="gateways-wrapper" id="gateways">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-eyebrow">
          ONE PLATFORM. THREE PATHS.
        </span>

        <h2 className="font-serif section-title">
          Three distinct gateways.<br />One unified growth platform.
        </h2>

        <p className="section-desc">
          One message does not fit all. Choose your dedicated gateway below to unlock tailored strategy, production, and distribution.
        </p>

        <div className="gateways-grid-main">
          {gateways.map((card) => (
            <div key={card.id} className={`gateway-big-card ${card.className}`}>
              {/* Top Number & Icon */}
              <div className="gateway-top-meta">
                <span className="gateway-num">{card.num}</span>
                <div className={`gateway-icon-box ${card.iconClass}`}>
                  <span>{card.iconEmoji}</span>
                </div>
              </div>

              {/* Title & Short Description */}
              <h3 className="gateway-card-title">{card.title}</h3>
              <p className="gateway-card-desc">{card.description}</p>

              {/* Feature List */}
              <ul className="gateway-features-list">
                {card.features.map((feature, fIdx) => (
                  <li key={fIdx} className="gateway-feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="gateway-card-actions">
                <button 
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => onOpenGateway(card.id)}
                >
                  {card.ctaText} &rarr;
                </button>

                {card.externalLinks && (
                  <div className="portal-links-sub">
                    {card.externalLinks.map((ext, eIdx) => (
                      <a 
                        key={eIdx} 
                        href={ext.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="portal-link-btn"
                      >
                        <span>{ext.label}</span>
                        <span style={{ color: 'var(--text-light)', fontSize: '0.72rem' }}>{ext.host}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
