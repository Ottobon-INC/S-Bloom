import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('healthcare');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page section bg-hero-gradient organic-blob-wrapper" style={{ minHeight: '85vh' }}>
      <div className="organic-shape-glow glow-peach" style={{ width: '440px', height: '440px', top: '0', right: '5%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Breadcrumbs to="/" label="Back to Home" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'start', marginTop: '20px' }}>
          {/* Left Column: Contact Details & Reassurance */}
          <div>
            <span className="eyebrow">START A CONVERSATION</span>
            <h1 className="hero-headline" style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)' }}>
              Let's grow <br />
              <span className="editorial-italic" style={{ color: 'var(--color-coral)' }}>together.</span>
            </h1>
            <p className="hero-description" style={{ fontSize: '1.12rem', marginBottom: '36px' }}>
              Whether you are an individual doctor, faculty leader, senior consultant, or institution looking to elevate practice reach, we would love to connect.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-indigo)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Direct Inquiries</span>
                  <p style={{ fontWeight: 600, color: 'var(--color-indigo)', margin: 0 }}>growth@sbloom.co</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-coral)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Creative Studios</span>
                  <p style={{ fontWeight: 600, color: 'var(--color-indigo)', margin: 0 }}>Remote Global &middot; Studios in London &amp; New York</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-card)', padding: '24px 28px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
              <span className="editorial-italic" style={{ fontSize: '1.15rem', color: 'var(--color-indigo)' }}>
                "We respect clinical ethics, academic standards, and executive confidentiality in all client engagements."
              </span>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div style={{ background: 'var(--bg-white)', borderRadius: 'var(--radius-card)', padding: '44px 38px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-coral-light)', color: 'var(--color-coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-indigo)', marginBottom: '12px' }}>Message Received</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                  Thank you, <strong>{fullName}</strong>. An industry strategy director will review your notes and respond within 24 business hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-indigo">
                  <span>Send Another Note</span>
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-indigo)', marginBottom: '8px' }}>
                  Send a Growth Inquiry
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '0.95rem' }}>
                  Tell us about your organization or practice goals.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="modal-form-group">
                    <label className="modal-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Julian Croft / Claire Bennett"
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
                      placeholder="julian@clinic.org or claire@advisory.com"
                      className="modal-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label className="modal-label">Organization / Practice</label>
                      <input
                        type="text"
                        placeholder="Company or practice"
                        className="modal-input"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="modal-label">Target Industry</label>
                      <select
                        className="modal-select"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                      >
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div className="modal-form-group">
                    <label className="modal-label">Growth Goal / Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you would like to achieve with content, brand presence, or practice growth..."
                      className="modal-textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-indigo"
                    style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '8px' }}
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
