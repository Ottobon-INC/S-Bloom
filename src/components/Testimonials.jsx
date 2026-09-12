import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I record for 2 hours once a month following S Bloom's question blueprints. My orthopedic practice now has a 4-month waiting list from inbound reel inquiries.",
      name: "Dr. Sanjay V.",
      role: "Chief Orthopedic Surgeon",
      organization: "Apex Bone & Joint Clinic",
      initials: "SV"
    },
    {
      quote: "The Accelerator eliminated my camera fear in week one. Learning hook architecture took my average retention from 18% to 71%, taking me from 800 to 26k followers.",
      name: "Ananya K.",
      role: "Design & Cultural Creator",
      organization: "Studio Ananya",
      initials: "AK"
    },
    {
      quote: "S Bloom brought unified brand continuity across all 6 departments of our campus and secured the #1 Google ranking in our higher education region.",
      name: "Prof. Rajesh M.",
      role: "Dean of Admissions",
      organization: "National Institute of Tech & Media",
      initials: "RM"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <span className="section-eyebrow">
            Proven Track Record
          </span>
          <h2 className="font-serif section-title" style={{ color: '#FFFFFF' }}>
            Trust is the currency of the digital age.
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card-premium group">
              <div className="testimonial-inner">
                <div className="quote-mark">"</div>
                <p className="test-quote">"{t.quote}"</p>
                
                <div className="test-author-row">
                  <div className="test-avatar">
                    <div className="avatar-halo"></div>
                    <span>{t.initials}</span>
                  </div>
                  <div>
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role} • {t.organization}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
