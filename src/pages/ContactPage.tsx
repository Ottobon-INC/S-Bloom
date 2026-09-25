import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';


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
    <div className="contact-page section bg-hero-gradient organic-blob-wrapper" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="organic-shape-glow glow-peach" style={{ width: '440px', height: '440px', top: '0', right: '5%' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>


        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'start', marginTop: '20px' }}>
          {/* Left Column: Contact Details & Reassurance */}
          <div>
            <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1.2px', color: 'var(--color-indigo)', textTransform: 'uppercase' }}>Get in Touch</span>
            </div>
            <h1 className="hero-headline" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', lineHeight: 1.1, marginBottom: '20px' }}>
              Ready to <span className="editorial-italic" style={{ color: 'var(--color-coral)' }}>scale</span> your impact?
            </h1>
            <p className="hero-description" style={{ fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              Whether you are an expert, clinic, or academic institution, we provide the production team to amplify your voice. Reach out and let's explore what we can build together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-indigo)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email Us</span>
                  <p style={{ fontWeight: 600, color: 'var(--color-indigo)', margin: 0 }}>growth@sbloom.co</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-coral)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Call Us</span>
                  <p style={{ fontWeight: 600, color: 'var(--color-indigo)', margin: 0 }}>+91 00000 00000</p>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=A+Square+Business+Centre,+Waltair+Main+Road,+Visakhapatnam" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', textDecoration: 'none', transition: 'transform 0.2s', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--accent-pale-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-indigo)', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Visit Us</span>
                  <p style={{ fontWeight: 600, color: 'var(--color-indigo)', margin: '0 0 4px', lineHeight: 1.4 }}>
                    Suite 102, 1st Floor, A Square Business Centre<br />
                    Waltair Main Road, Waltair Uplands, Chinawaltair<br />
                    (next to Lifestyle Stores), Visakhapatnam<br />
                    Andhra Pradesh 530003
                  </p>
                </div>
              </a>
            </div>

            <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', height: '240px', background: 'var(--bg-white)', position: 'relative' }}>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=A+Square+Business+Centre,+Waltair+Main+Road,+Visakhapatnam" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, cursor: 'pointer' }}
                title="Open in Google Maps"
              ></a>
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent('A Square Business Centre, Waltair Main Road, Visakhapatnam')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
