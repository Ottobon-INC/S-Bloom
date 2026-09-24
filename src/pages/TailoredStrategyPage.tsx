import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

import { TAILORED_STRATEGIES, INDUSTRIES_DATA } from '../data/contentData';

interface TailoredStrategyPageProps {
  onOpenConsultation: (
    industry?: 'healthcare' | 'education' | 'consulting',
    entity?: 'expert' | 'institution'
  ) => void;
}

export const TailoredStrategyPage: React.FC<TailoredStrategyPageProps> = ({
  onOpenConsultation
}) => {
  const { industry, entity } = useParams<{ industry: string; entity: string }>();

  const key = `${industry}-${entity}`;
  const strategy = TAILORED_STRATEGIES[key];
  const industryInfo = industry ? INDUSTRIES_DATA[industry] : null;

  if (!strategy || !industryInfo) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="tailored-strategy-page">
      <section className="strategy-hero-editorial">
        <div className="container">


          <div className="strategy-hero-grid">
            {/* Left Column: Eyebrow, Title, Copy, Checklist, CTA */}
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-coral)' }}>
                {strategy.badge}
              </span>

              <h1 className="strategy-headline">{strategy.headline}</h1>

              <p className="hero-description" style={{ maxWidth: '560px' }}>
                {strategy.description}
              </p>

              {/* 6-Point Capability Checklist */}
              <div className="strategy-checklist">
                {strategy.checklist.map((item) => (
                  <div key={item} className="strategy-checklist-item">
                    <div className="strategy-check-icon">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button: Let's Tailor Your Strategy */}
              <div style={{ marginTop: '36px' }}>
                <button
                  onClick={() => onOpenConsultation(strategy.industryId, strategy.entityType)}
                  className="btn btn-dark"
                  id="strategy-cta-button"
                  style={{ padding: '16px 36px', fontSize: '1.05rem' }}
                >
                  <span>Let's Tailor Your Strategy</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Card without the message badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <img
                src={strategy.imageUrl}
                alt={strategy.headline}
                style={{ objectFit: 'cover', width: '100%', height: 'auto', maxHeight: '600px', borderRadius: '16px', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
