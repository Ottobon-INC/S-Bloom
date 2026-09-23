import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, GraduationCap, Briefcase } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { INDUSTRIES_DATA } from '../data/contentData';

export const IndustrySelectionPage: React.FC = () => {
  const industries = Object.values(INDUSTRIES_DATA);

  return (
    <div className="industry-selection-page section">
      <div className="container">
        {/* Back Link */}
        <Breadcrumbs to="/" label="Back to Home" />

        {/* Editorial Header (Screen 02) */}
        <div className="page-header-editorial">
          <span className="eyebrow">YOUR GROWTH STARTS HERE</span>
          <h1 className="hero-headline" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.6rem)' }}>
            Choose your industry.
          </h1>
          <p className="hero-description" style={{ margin: '0 auto', maxWidth: '600px' }}>
            Select your industry and we'll tailor the strategy around your world.
          </p>
        </div>

        {/* 3 Tall Industry Cards */}
        <div className="industry-selection-grid">
          {industries.map((ind) => {
            const Icon =
              ind.id === 'healthcare'
                ? HeartPulse
                : ind.id === 'education'
                ? GraduationCap
                : Briefcase;

            const iconBg =
              ind.id === 'healthcare'
                ? 'var(--accent-pale-blue)'
                : ind.id === 'education'
                ? 'var(--bg-lavender)'
                : 'var(--bg-peach)';

            const iconColor =
              ind.id === 'healthcare'
                ? 'var(--color-indigo)'
                : ind.id === 'education'
                ? 'var(--color-indigo)'
                : 'var(--color-coral)';

            return (
              <Link
                key={ind.id}
                to={`/industries/${ind.id}`}
                className="industry-tall-card"
                id={`card-industry-${ind.id}`}
              >
                <div className="industry-tall-img-wrap">
                  <img
                    src={ind.imageUrl}
                    alt={ind.title}
                    className="industry-tall-img"
                  />
                </div>

                <div className="industry-tall-content">
                  <div
                    className="industry-tall-icon-badge"
                    style={{ backgroundColor: iconBg, color: iconColor }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="industry-tall-title">{ind.title}</h3>
                  <p className="industry-tall-subtitle">{ind.tagline}</p>

                  <div className="btn-circle btn-circle-indigo">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Editorial Quote Strip matching Wireframe Screen 02 */}
        <div className="industry-editorial-quote-row">
          <div className="quote-mark-icon">&ldquo;</div>
          <div>
            <p className="quote-editorial-text">
              Every industry has a story. We help you tell yours, the right way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
