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
      <div 
        className={`modal-sheet-premium ${type === 'gateway' ? 'modal-sheet-gateway' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-glow-bg"></div>
        
        <button className="modal-close-trigger" onClick={onClose} aria-label="Close modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-content-relative">
          {type === 'gateway' && data && (
            <div className="gw-modal-container">
              {/* Header Meta */}
              <div className="gw-modal-header">
                <div className="gw-modal-tag-row">
                  <span className={`eco-tag ${data.tagClass} premium-tag`}>
                    {data.tag}
                  </span>
                  <span className="gw-pathway-badge">DEDICATED GATEWAY</span>
                </div>

                <h2 className="gw-modal-title">
                  {data.title}
                </h2>

                <p className="gw-modal-desc">
                  {data.description}
                </p>

                <div className="gw-modal-quote">
                  <div className="gw-quote-mark">“</div>
                  <div className="gw-quote-text">{data.hook}</div>
                </div>
              </div>

              {/* Core Capabilities & Execution Roadmap */}
              <div className="gw-section-title">
                <span>Core Capabilities &amp; Execution Roadmap</span>
              </div>

              <div className="gw-pillars-grid">
                {(data.pillars || data.benefits || []).map((b, idx) => {
                  const icons = ['🎬', '📈', '⚖️', '📲', '⚡', '🚀'];
                  const icon = icons[idx % icons.length];
                  return (
                    <div key={idx} className="gw-pillar-card">
                      <div className="gw-pillar-top">
                        <span className="gw-pillar-badge">PHASE {String(idx + 1).padStart(2, '0')}</span>
                        <span className="gw-pillar-icon">{icon}</span>
                      </div>
                      <h4 className="gw-pillar-title">{b.title}</h4>
                      <p className="gw-pillar-desc">{b.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Specialized Portals if present */}
              {data.externalLinks && data.externalLinks.length > 0 && (
                <div style={{ marginBottom: '28px' }}>
                  <div className="gw-section-title">
                    <span>Specialized Industry Portals &amp; Systems</span>
                  </div>
                  <div className="gw-portals-grid">
                    {data.externalLinks.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="gw-portal-card"
                      >
                        <div>
                          <div className="gw-portal-label">{link.label}</div>
                          <div style={{ fontSize: '0.8rem', color: '#6E7B8B', marginTop: '4px' }}>
                            Dedicated Enterprise Infrastructure
                          </div>
                        </div>
                        <span className="gw-portal-action">
                          <span>Visit</span>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                          </svg>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Actions */}
              <div className="gw-modal-footer">
                <div className="gw-footer-note">
                  Direct production, strategic execution, and audience growth powered by <strong>sBloom Studio</strong>.
                </div>
                <div className="gw-footer-actions">
                  <button 
                    type="button"
                    className="btn btn-secondary"
                    onClick={onClose}
                    style={{ padding: '12px 24px' }}
                  >
                    Back to Gateways
                  </button>
                  <button 
                    type="button"
                    className="btn btn-primary cta-btn-glow"
                    style={{ padding: '12px 30px' }}
                    onClick={() => {
                      onClose();
                      onOpenAccelerator();
                    }}
                  >
                    <span>Start Blooming on this Path &rarr;</span>
                  </button>
                </div>
              </div>
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
