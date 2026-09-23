import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndustry?: 'healthcare' | 'education' | 'consulting';
  initialEntity?: 'expert' | 'institution';
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialIndustry = 'healthcare',
  initialEntity = 'expert'
}) => {
  const [industry, setIndustry] = useState(initialIndustry);
  const [entity, setEntity] = useState(initialEntity);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [goals, setGoals] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIndustry(initialIndustry);
      setEntity(initialEntity);
      setIsSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndustry, initialEntity]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={22} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-coral-light)',
              color: 'var(--accent-coral)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>Tailored Strategy Request Received</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.6 }}>
              Thank you, <strong>{fullName}</strong>. Our {industry} strategy team will review your practice profile and prepare an initial growth architecture within 24 business hours.
            </p>
            <button onClick={onClose} className="btn btn-indigo" style={{ width: '100%' }}>
              <span>Done</span>
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <span className="eyebrow">TAILORED STRATEGY INITIATION</span>
              <h3 style={{ fontSize: '1.9rem', fontWeight: 500, marginBottom: '8px' }}>
                Let's Build Your Growth Plan
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Share your background and our industry directors will blueprint a bespoke content and growth strategy.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label className="modal-label">Your Industry</label>
                  <select
                    className="modal-select"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value as any)}
                  >
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="modal-label">Entity Type</label>
                  <select
                    className="modal-select"
                    value={entity}
                    onChange={(e) => setEntity(e.target.value as any)}
                  >
                    <option value="expert">I'm an Expert</option>
                    <option value="institution">We're an Institution</option>
                  </select>
                </div>
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Dr. Marcus Vance / Elena Rostova"
                  className="modal-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  className="modal-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Practice / Organization Name</label>
                <input
                  type="text"
                  placeholder="e.g., Vanguard Health Clinic / Apex Advisory"
                  className="modal-input"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Key Growth Objective</label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you would like to achieve (e.g., patient education video series, physician authority, recruitment)..."
                  className="modal-textarea"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-indigo" style={{ width: '100%', marginTop: '10px' }}>
                <span>Submit Strategy Request</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
