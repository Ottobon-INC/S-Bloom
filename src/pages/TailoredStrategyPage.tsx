import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
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
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="tailored-strategy-page">
      <section className="strategy-hero-editorial">
        <div className="container">
          <Breadcrumbs
            to={`/industries/${industry}`}
            label={`Back to ${industryInfo.title}`}
          />

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

            {/* Right Column: Visual Card with Organic Script Badge */}
            <div className="strategy-visual-card">
              <img
                src={strategy.imageUrl}
                alt={strategy.headline}
                className="strategy-visual-img"
              />
              <div className="strategy-organic-tag">
                <span>{strategy.organicTag}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
