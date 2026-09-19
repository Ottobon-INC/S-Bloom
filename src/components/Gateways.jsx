import React from 'react';

export default function Gateways({ onOpenGateway }) {
  const gateways = [
    {
      id: 'creators',
      num: '01',
      className: 'card-creators',
      svgIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
      title: 'Creators & Influencers',
      description: 'Build your identity, showcase your work, and grow your audience.',
      features: [
        '5-Pillar Creator Accelerator',
        '3-Second Viral Hook Architecture',
        'Camera Presence & Voice Coaching',
        'High-Retention Post-Production Desk'
      ],
      ctaText: 'Explore for Creators',
      accentColor: '247, 245, 240'
    },
    {
      id: 'businesses',
      num: '02',
      className: 'card-businesses',
      svgIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
      title: 'Business Professionals',
      description: 'Build your brand, reach the right audience, and turn visibility into growth.',
      features: [
        'Healthcare & Medical Practices',
        'Legal, CA & Advisory Thought Leadership',
        'The 2-Hour Monthly Batching Shoot',
        'High-Intent Inbound Consultation Leads'
      ],
      ctaText: 'Explore for Businesses',
      accentColor: '56, 199, 147'
    },
    {
      id: 'institutions',
      num: '03',
      className: 'card-institutions',
      svgIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="4" height="10" rx="1"/><rect x="10" y="10" width="4" height="10" rx="1"/><rect x="16" y="10" width="4" height="10" rx="1"/><path d="M2 22h20"/><path d="M12 2L2 8h20L12 2z"/></svg>,
      title: 'Institutions',
      description: 'Strengthen your digital presence, connect with your community, and expand your reach.',
      features: [
        'Multi-Staff & Faculty Brand Uniformity',
        'Institutional Reputation & GBP Dominance',
        'High-Converting Admissions Portals',
        'Specialized Education & Health Portals'
      ],
      ctaText: 'Explore for Institutions',
      accentColor: '59, 151, 250'
    },
    {
      id: 'consultants',
      num: '04',
      className: 'card-consultants',
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      title: 'Consultants',
      description: 'Position your expertise, establish executive thought leadership, and attract premium clients.',
      features: [
        'Executive Authority & Advisory Positioning',
        'LinkedIn & Video Thought Leadership',
        'High-Ticket Inbound Client Acquisition',
        'Strategic Framework & Keynote Content'
      ],
      ctaText: 'Explore for Consultants',
      accentColor: '212, 175, 55'
    }
  ];

  return (
    <section className="gateways-wrapper" id="gateways">
      <div className="container">
        <div className="gateways-header-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-eyebrow">
            ONE PLATFORM. FOUR PATHS.
          </span>

          <h2 className="font-serif section-title">
            Four distinct gateways.<br />One unified growth platform.
          </h2>

          <p className="section-desc">
            One message does not fit all. Choose your dedicated gateway below to unlock tailored strategy, production, and distribution.
          </p>
        </div>

        <div className="gateways-grid-main">
          {gateways.map((card) => (
            <div 
              key={card.id} 
              className={`gateway-card-premium ${card.className}`}
              style={{ '--accent-rgb': card.accentColor, cursor: 'pointer' }}
              onClick={() => onOpenGateway(card.id)}
            >
              <div className="gateway-card-flip-inner">
                {/* FRONT FACE */}
                <div className="gateway-card-front">
                  <div className="gateway-card-glow"></div>
                  <div className="gateway-card-inner">
                    <div className="gateway-num-bg">{card.num}</div>
                    
                    <div className="gateway-top-meta">
                      <div className="gateway-icon-box-premium">
                        <div className="icon-halo"></div>
                        <div className="icon-inner">{card.svgIcon}</div>
                      </div>
                    </div>

                    <h3 className="gateway-card-title">{card.title}</h3>
                    <p className="gateway-card-desc">{card.description}</p>

                    <div className="gateway-flip-prompt">
                      <span>Click or hover to explore</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="gateway-card-back">
                  <div className="gateway-card-glow"></div>
                  <div className="gateway-card-inner">
                    <div className="gateway-num-bg">{card.num}</div>
                    
                    <h3 className="gateway-card-title gateway-card-title-back">{card.title}</h3>
                    
                    <ul className="gateway-features-list" style={{ flexGrow: 1, borderTop: 'none', paddingTop: 0 }}>
                      {card.features.map((feature, fIdx) => (
                        <li key={fIdx} className="gateway-feature-item">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="gateway-card-actions">
                      <button 
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenGateway(card.id);
                        }}
                      >
                        {card.ctaText} &rarr;
                      </button>
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
