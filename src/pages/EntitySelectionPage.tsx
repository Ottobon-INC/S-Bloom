import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, User, Building2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { INDUSTRIES_DATA } from '../data/contentData';

export const EntitySelectionPage: React.FC = () => {
  const { industry } = useParams<{ industry: string }>();

  if (!industry || !INDUSTRIES_DATA[industry]) {
    return <Navigate to="/industries" replace />;
  }

  const indData = INDUSTRIES_DATA[industry];

  return (
    <div className="entity-selection-page section">
      <div className="container">
        <Breadcrumbs to={`/industries/${industry}`} label={`Back to ${indData.title}`} />

        <div className="page-header-editorial">
          <span className="eyebrow">WHO ARE YOU?</span>
          <h1 className="hero-headline" style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)' }}>
            Welcome to {indData.title}
          </h1>
          <p className="hero-description" style={{ margin: '0 auto', maxWidth: '620px' }}>
            Choose the option that best describes you so we can tailor the right strategy.
          </p>
        </div>

        <div className="entity-cards-grid">
          {/* Card 1: Expert */}
          <Link
            to={`/industries/${industry}/expert`}
            className="entity-choice-card"
            id="standalone-choice-expert"
          >
            <div className="entity-icon-circle entity-icon-expert">
              <User size={36} />
            </div>
            <h3 className="entity-choice-title">I'm an Expert</h3>
            <p className="entity-choice-desc">
              Build your professional presence and share your expertise.
            </p>
            <div className="btn-circle btn-circle-indigo">
              <ArrowRight size={20} />
            </div>
          </Link>

          {/* Card 2: Institution */}
          <Link
            to={`/industries/${industry}/institution`}
            className="entity-choice-card"
            id="standalone-choice-institution"
          >
            <div className="entity-icon-circle entity-icon-institution">
              <Building2 size={36} />
            </div>
            <h3 className="entity-choice-title">We're an Institution</h3>
            <p className="entity-choice-desc">
              Showcase your facilities, team and capabilities.
            </p>
            <div className="btn-circle btn-circle-indigo">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
