import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PartnerApplyPage: React.FC = () => {
  const [role, setRole] = useState('Video Editors');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [software, setSoftware] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="partner-apply-page section">
      <div className="container" style={{ maxWidth: '680px' }}>
        <Breadcrumbs to="/creative-workspace" label="Back to Creative Workspace" />

        {isSubmitted ? (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 40px',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-coral-light)',
                color: 'var(--accent-coral)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Application Submitted</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
              Thank you, <strong>{fullName}</strong>. Our creative producers will review your portfolio for the <strong>{role}</strong> roster and reach out within 48 hours for test brief assignment.
            </p>
            <Link to="/creative-workspace" className="btn btn-indigo">
              <span>Return to Workspace Hub</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 40px',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              <span className="eyebrow" style={{ color: 'var(--accent-coral)' }}>PARTNER ONBOARDING</span>
              <h1 className="hero-headline" style={{ fontSize: '2.4rem' }}>
                Apply to Creative Workspace
              </h1>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                Join sBLOOM's curated execution network. Claim industry gigs in Healthcare, Education and Consulting with guaranteed pay and zero client chasing.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-form-group">
                <label className="modal-label">Primary Craft / Role</label>
                <select
                  className="modal-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Video Editors">Video Editor (Short-Form & Explainers)</option>
                  <option value="Videographers">Videographer (Director of Photography)</option>
                  <option value="Designers">Designer (Brand & Motion Graphics)</option>
                  <option value="Content Writers">Content Writer (Medical / B2B Thought Leadership)</option>
                  <option value="Creative Executors">Creative Executor (Sound, Color, Finishing)</option>
                </select>
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="modal-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex@creative.com"
                  className="modal-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Portfolio / Showreel URL</label>
                <input
                  type="url"
                  required
                  placeholder="https://behance.net/..., https://vimeo.com/..., or Google Drive"
                  className="modal-input"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Primary Tools / Software</label>
                <input
                  type="text"
                  placeholder="e.g., Premiere Pro, DaVinci Resolve, After Effects, Figma"
                  className="modal-input"
                  value={software}
                  onChange={(e) => setSoftware(e.target.value)}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Weekly Availability / Notes</label>
                <textarea
                  rows={3}
                  placeholder="e.g., Available 15-20 hrs/week, experience with healthcare explainers..."
                  className="modal-textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-indigo"
                id="partner-submit-button"
                style={{ width: '100%', marginTop: '16px', padding: '16px' }}
              >
                <span>Submit Partner Application</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
