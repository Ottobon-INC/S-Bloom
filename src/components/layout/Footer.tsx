import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div>
            <Link to="/" className="brand-logo-wrap" style={{ color: '#FFFFFF' }}>
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C16 10 9 16 2 16C9 16 16 22 16 30C16 22 23 16 30 16C23 16 16 10 16 2Z" fill="#E74736"/>
                <path d="M22 6C22 12 18 16 14 16C18 16 22 20 22 26C22 20 26 16 30 16C26 16 22 12 22 6Z" fill="#C7B4EA" opacity="0.9"/>
              </svg>
              <span>sBLOOM</span>
            </Link>
            <p className="footer-brand-bio">
              Industry-specific marketing and growth partner for Healthcare, Education and Consulting. We build authoritative presence, craft compelling communication, and drive measurable practice growth.
            </p>
            <div style={{ marginTop: '20px' }}>
              <button onClick={onOpenConsultation} className="btn btn-indigo btn-sm">
                <span>Start a Conversation</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Client Pathways */}
          <div>
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-links">
              <li><Link to="/industries/healthcare">Healthcare Growth</Link></li>
              <li><Link to="/industries/education">Education & Academies</Link></li>
              <li><Link to="/industries/consulting">Strategic Consulting</Link></li>
              <li><Link to="/industries">All Industry Gateways</Link></li>
            </ul>
          </div>

          {/* Practice Models */}
          <div>
            <h4 className="footer-col-title">Client Models</h4>
            <ul className="footer-links">
              <li><Link to="/industries/healthcare/expert">Doctor & Specialist Branding</Link></li>
              <li><Link to="/industries/healthcare/institution">Hospital & Clinic Systems</Link></li>
              <li><Link to="/industries/education/expert">Faculty & Scholar Reach</Link></li>
              <li><Link to="/industries/consulting/expert">Senior Advisor Authority</Link></li>
            </ul>
          </div>

          {/* Creative Network */}
          <div>
            <h4 className="footer-col-title">Creative Workspace</h4>
            <ul className="footer-links">
              <li><Link to="/creative-workspace">Join Our Workspace</Link></li>
              <li><Link to="/creative-workspace/apply">Apply as Technical Partner</Link></li>
              <li><Link to="/creative-workspace#roles">Open Partner Roles</Link></li>
              <li><Link to="/creative-workspace#workflow">How sBLOOM Works</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} sBLOOM Marketing Partner. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Healthcare</span>
            <span>&bull;</span>
            <span>Education</span>
            <span>&bull;</span>
            <span>Consulting</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
