import React from 'react';
import { Link } from 'react-router-dom';
import { GenerateButton } from '../common/GenerateButton';
import SocialFlipButton from '../common/SocialFlipButton';
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
            <Link to="/" className="brand-logo-wrap" aria-label="sBLOOM Home" style={{ color: '#FFFFFF' }}>
              <img
                src="/sbloom-logo.png"
                alt="sBLOOM"
                className="brand-logo-img footer-logo-img"
              />
            </Link>
            <p className="footer-brand-bio">
              Industry-specific marketing and growth partner for Healthcare, Education and Consulting. We build authoritative presence, craft compelling communication, and drive measurable practice growth.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px' }}>
              <GenerateButton
                onClick={onOpenConsultation}
                palette="indigo"
                className="btn-sm"
                text="Start a Conversation"
                icon={<ArrowRight size={14} />}
              />
            </div>
          </div>

          {/* Client Pathways */}
          <div>
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-links">
              <li><Link to="/industries/healthcare">Healthcare Growth</Link></li>
              <li><Link to="/industries/education">Education & Academies</Link></li>
              <li><Link to="/industries/consulting">Strategic Consulting</Link></li>
              <li><Link to="/">All Industry Gateways</Link></li>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span>Healthcare</span>
              <span>&bull;</span>
              <span>Education</span>
              <span>&bull;</span>
              <span>Consulting</span>
            </div>
            <SocialFlipButton className="!p-0" />
          </div>
        </div>
      </div>
    </footer>
  );
};
