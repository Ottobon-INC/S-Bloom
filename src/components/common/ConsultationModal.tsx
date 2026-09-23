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
      <div className="modal-dialog consultation-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '24px 10px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-coral-light)',
              color: 'var(--accent-coral)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--color-indigo)' }}>
              Request Received
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5, fontSize: '0.92rem' }}>
              Thank you, <strong>{fullName}</strong>. Our {industry} strategy team will review your profile and connect within 24 business hours.
            </p>
            <button onClick={onClose} className="btn btn-indigo" style={{ width: '100%' }}>
              <span>Done</span>
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header-compact">
              <span className="eyebrow" style={{ fontSize: '0.75rem', marginBottom: '2px' }}>
                TAILORED STRATEGY
              </span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: 'var(--color-indigo)', margin: '2px 0 4px' }}>
                Let's Build Your Growth Plan
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                Share your details and our team will craft a tailored content & growth blueprint.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form-compact">
              <div className="modal-grid-2">
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

              <div className="modal-grid-2">
                <div>
                  <label className="modal-label">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Dr. Marcus Vance"
                    className="modal-input"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div>
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
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Practice / Organization</label>
                <input
                  type="text"
                  placeholder="e.g., Vanguard Health Clinic"
                  className="modal-input"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>

              <div className="modal-form-group">
                <label className="modal-label">Key Growth Objective</label>
                <textarea
                  rows={2}
                  placeholder="What would you like to achieve (e.g., patient trust, video series, new clients)?"
                  className="modal-textarea"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  style={{ minHeight: '52px', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-indigo" style={{ width: '100%', padding: '11px 20px', marginTop: '4px' }}>
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
