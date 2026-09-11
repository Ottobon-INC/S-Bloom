import React, { useState } from 'react';

export default function Modal({ isOpen, type, data, onClose, onOpenAccelerator }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', category: 'creator', handle: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-trigger" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {type === 'gateway' && data && (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span className={`eco-tag ${data.tagClass}`}>
                {data.tag}
              </span>
              <h2 className="font-serif" style={{ fontSize: '1.8rem', marginTop: '10px', color: 'var(--text-main)' }}>
                {data.title}
              </h2>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                {data.description}
              </p>
            </div>

            <div style={{
              background: 'rgba(181, 150, 74, 0.08)',
              borderLeft: '4px solid var(--gold-vibrant)',
              padding: '12px 16px',
              borderRadius: '0 8px 8px 0',
              fontStyle: 'italic',
              color: 'var(--text-gold)',
              fontSize: '0.88rem',
              marginBottom: '20px'
            }}>
              “{data.hook}”
            </div>

            <h4 style={{
              fontSize: '0.82rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: '700',
              color: 'var(--text-gold)',
              marginBottom: '14px'
            }}>
              Core Capabilities &amp; Roadmap
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {(data.pillars || data.benefits || []).map((b, idx) => (
                <div key={idx} style={{
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px'
                }}>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>
                    {b.title}
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {b.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* External Links if present */}
            {data.externalLinks && (
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  Specialized Portals &amp; Systems:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {data.externalLinks.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="portal-link-btn"
                      style={{ padding: '12px 16px', fontSize: '0.9rem' }}
                    >
                      <span>{link.label}</span>
                      <span style={{ color: 'var(--gold-vibrant)', fontWeight: '700' }}>Visit Portal ↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <button 
              className="btn btn-primary btn-full"
              style={{ width: '100%', padding: '14px' }}
              onClick={() => {
                onClose();
                onOpenAccelerator();
              }}
            >
              Start Blooming on this Path &rarr;
            </button>
          </div>
        )}

        {type === 'accelerator' && (
          <div>
            {!formSubmitted ? (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <span className="section-eyebrow">Cohort Application</span>
                  <h2 className="font-serif" style={{ fontSize: '1.8rem', marginTop: '10px', color: 'var(--text-main)' }}>
                    Apply for the Accelerator
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Batch 1 is limited to 25 creators, practices, and institutions.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Work Email</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      placeholder="name@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Gateway Focus</label>
                    <select 
                      className="form-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="creator">Creator &amp; Artist</option>
                      <option value="business">Business Professional (Healthcare/Edu/Legal)</option>
                      <option value="institution">Institution (School/Hospital/Campus)</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Social Profile or Current Website</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="@handle or https://..."
                      value={formData.handle}
                      onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px', marginTop: '8px' }}
                  >
                    Submit Application for Review &rarr;
                  </button>
                  <div style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--text-light)', marginTop: '12px' }}>
                    🔒 Reviewed personally by Ottobon creative directors within 24 hours.
                  </div>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--accent-sage)',
                  color: 'var(--accent-sage-text)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  margin: '0 auto 18px'
                }}>
                  ✓
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                  Application Received, {formData.name || 'Friend'}!
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
                  Thank you for applying to the <strong>S Bloom Accelerator</strong>. Our creative director is reviewing your profile and will contact <strong>{formData.email}</strong> with next steps.
                </p>
                <button className="btn btn-primary" onClick={onClose}>
                  Back to S Bloom
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
