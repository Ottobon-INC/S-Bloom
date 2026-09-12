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
      <div className="modal-sheet-premium" onClick={(e) => e.stopPropagation()}>
        <div className="modal-glow-bg"></div>
        
        <button className="modal-close-trigger" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-content-relative">
          {type === 'gateway' && data && (
            <div>
              <div style={{ marginBottom: '20px' }}>
                <span className={`eco-tag ${data.tagClass} premium-tag`}>
                  {data.tag}
                </span>
                <h2 className="font-serif" style={{ fontSize: '2.2rem', marginTop: '16px', color: '#FFFFFF', lineHeight: 1.2 }}>
                  {data.title}
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#B2BDC8', marginTop: '12px', lineHeight: 1.6 }}>
                  {data.description}
                </p>
              </div>

              <div className="premium-quote-box">
                “{data.hook}”
              </div>

              <h4 className="premium-list-header">
                Core Capabilities &amp; Roadmap
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {(data.pillars || data.benefits || []).map((b, idx) => (
                  <div key={idx} className="premium-feature-card">
                    <strong>{b.title}</strong>
                    <span>{b.desc}</span>
                  </div>
                ))}
              </div>

              {/* External Links if present */}
              {data.externalLinks && (
                <div style={{ marginBottom: '28px' }}>
                  <h4 className="premium-list-header">
                    Specialized Portals &amp; Systems
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {data.externalLinks.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="premium-portal-link"
                      >
                        <span>{link.label}</span>
                        <span className="visit-text">Visit Portal ↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <button 
                className="btn btn-primary cta-btn-glow"
                style={{ width: '100%', padding: '16px', fontSize: '1.05rem' }}
                onClick={() => {
                  onClose();
                  onOpenAccelerator();
                }}
              >
                <div className="btn-shine"></div>
                <span style={{ position: 'relative', zIndex: 1 }}>
                  Start Blooming on this Path &rarr;
                </span>
              </button>
            </div>
          )}

          {type === 'accelerator' && (
            <div>
              {!formSubmitted ? (
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <span className="section-eyebrow">Cohort Application</span>
                    <h2 className="font-serif" style={{ fontSize: '2.2rem', marginTop: '12px', color: '#FFFFFF' }}>
                      Apply for the Accelerator
                    </h2>
                    <p style={{ fontSize: '1rem', color: '#B2BDC8', marginTop: '8px' }}>
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
                      className="btn btn-primary cta-btn-glow"
                      style={{ width: '100%', padding: '16px', marginTop: '12px', fontSize: '1.05rem' }}
                    >
                      <div className="btn-shine"></div>
                      <span style={{ position: 'relative', zIndex: 1 }}>
                        Submit Application for Review &rarr;
                      </span>
                    </button>
                    <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '16px' }}>
                      🔒 Reviewed personally by Ottobon creative directors within 24 hours.
                    </div>
                  </form>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'var(--accent-sage)',
                    color: 'var(--accent-sage-text)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    margin: '0 auto 24px',
                    boxShadow: '0 0 30px rgba(56, 199, 147, 0.3)'
                  }}>
                    ✓
                  </div>
                  <h3 className="font-serif" style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '12px' }}>
                    Application Received, {formData.name || 'Friend'}!
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: '#B2BDC8', marginBottom: '32px', lineHeight: '1.6' }}>
                    Thank you for applying to the <strong>S Bloom Accelerator</strong>. Our creative director is reviewing your profile and will contact <strong>{formData.email}</strong> with next steps.
                  </p>
                  <button className="btn btn-primary cta-btn-glow" style={{ padding: '14px 32px' }} onClick={onClose}>
                    <div className="btn-shine"></div>
                    <span style={{ position: 'relative', zIndex: 1 }}>Back to S Bloom</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
