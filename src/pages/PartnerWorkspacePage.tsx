import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Film,
  Video,
  Palette,
  PenTool,
  Clapperboard,
  FileCheck,
  FileText,
  ClipboardList,
  Laptop,
  Rocket,
  CheckCircle2,
  Clock,
  Globe,
  Sparkles,
  Link as LinkIcon,
  Check,
  Plus,
  Minus
} from 'lucide-react';

/* ==========================================================================
   Self-Contained Sub-Components
   ========================================================================== */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface InnerPageNavProps {
  backTo: string;
  backLabel: string;
  stepText?: string;
  breadcrumbs?: BreadcrumbItem[];
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Self-contained navigation breadcrumb & back button
 */
const InnerPageNav: React.FC<InnerPageNavProps> = ({
  backTo,
  backLabel,
  stepText,
  breadcrumbs,
  variant = 'light',
  className = ''
}) => {
  return (
    <nav
      aria-label="Breadcrumb and Page Navigation"
      className={`standalone-inner-nav standalone-inner-nav-${variant} ${className}`}
    >


      {breadcrumbs && breadcrumbs.length > 0 ? (
        <ol className="standalone-breadcrumb-list">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <li key={idx} className="standalone-breadcrumb-item">
                {crumb.href && !isLast ? (
                  <Link to={crumb.href} className="standalone-breadcrumb-link">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="standalone-breadcrumb-current" aria-current={isLast ? 'page' : undefined}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && (
                  <span className="standalone-breadcrumb-sep" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      ) : stepText ? (
        <div className="standalone-step-tag" role="status" aria-label={`Current Step: ${stepText}`}>
          {stepText}
        </div>
      ) : null}
    </nav>
  );
};

/* ==========================================================================
   Main Page Component: PartnerWorkspacePage (About Page)
   ========================================================================== */

export interface PartnerWorkspacePageProps {
  /**
   * Path or URL to the background video.
   * Default: '/workspace-bg-video.mp4' (located in the public/ folder).
   * Can also be a remote CDN URL (e.g. Cloudinary, AWS S3, Vimeo).
   */
  videoSrc?: string;
  /**
   * Optional fallback poster image if video is loading or missing.
   */
  posterSrc?: string;
}

export const PartnerWorkspacePage: React.FC<PartnerWorkspacePageProps> = ({
  videoSrc = '/workspace-bg-video.mp4',
  posterSrc = '/hero-studio.jpg'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'editors',
    portfolioUrl: '',
    intro: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [videoError, setVideoError] = useState(false);

  // Intelligent real-time link platform detector
  const getPlatformBadge = (url: string) => {
    const lower = url.toLowerCase();
    if (lower.includes('youtube') || lower.includes('youtu.be')) {
      return { name: 'YouTube', color: '#E74736', bg: 'rgba(231, 71, 54, 0.1)' };
    }
    if (lower.includes('vimeo')) {
      return { name: 'Vimeo', color: '#1AB7EA', bg: 'rgba(26, 183, 234, 0.1)' };
    }
    if (lower.includes('behance')) {
      return { name: 'Behance', color: '#0057FF', bg: 'rgba(0, 87, 255, 0.1)' };
    }
    if (lower.includes('dribbble')) {
      return { name: 'Dribbble', color: '#EA4C89', bg: 'rgba(234, 76, 137, 0.1)' };
    }
    if (lower.includes('drive.google') || lower.includes('dropbox')) {
      return { name: 'Cloud Drive', color: '#0F9D58', bg: 'rgba(15, 157, 88, 0.1)' };
    }
    if (lower.includes('github')) {
      return { name: 'GitHub', color: '#24292E', bg: 'rgba(36, 41, 46, 0.1)' };
    }
    if (lower.length > 4 && (lower.includes('.') || lower.includes('/'))) {
      return { name: 'Portfolio Link', color: 'var(--indigo-primary, #211D50)', bg: 'var(--lavender-soft, #E9E1F3)' };
    }
    return null;
  };

  const roles = [
    {
      id: 'editors',
      title: 'Video Editors',
      icon: <Film size={24} />,
      imgSrc: '/images/roles/role_video_editor.jpg',
      tagline: 'Edit videos into engaging content for digital platforms.',
      skills: ['Short-form videos', 'Reels', 'Sound & color']
    },
    {
      id: 'videographers',
      title: 'Videographers',
      icon: <Video size={24} />,
      imgSrc: '/images/roles/role_videographer.jpg',
      tagline: 'Film professional videos, interviews, and on-site content.',
      skills: ['Video shooting', 'Camera work', 'Lighting']
    },
    {
      id: 'designers',
      title: 'Designers',
      icon: <Palette size={24} />,
      imgSrc: '/images/roles/role_designer.jpg',
      tagline: 'Create visual content that helps brands communicate clearly.',
      skills: ['Social media graphics', 'Thumbnails', 'Branding']
    },
    {
      id: 'writers',
      title: 'Content Writers',
      icon: <PenTool size={24} />,
      imgSrc: '/images/roles/role_content_writer.jpg',
      tagline: 'Turn ideas and expertise into clear, engaging written content.',
      skills: ['Scripts', 'Articles', 'Blogs', 'Research']
    },
    {
      id: 'directors',
      title: 'Creative Directors',
      icon: <Clapperboard size={24} />,
      imgSrc: '/images/roles/role_creative_director.jpg',
      tagline: 'Help shape creative ideas and guide projects from concept to execution.',
      skills: ['Storyboards', 'Creative direction', 'Quality checks']
    }
  ];

  const handleSelectRole = (roleId: string) => {
    setFormData((prev) => ({ ...prev, role: roleId }));
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email is required';
    }
    if (!formData.portfolioUrl.trim()) {
      errs.portfolioUrl = 'Portfolio link is required';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="creative-workspace-page">
      {/* 1.0 Full-Screen Centered Hero Section with Background Video */}
      <section className="workspace-hero-center-section" aria-label="Creative Workspace Hero">
        {/* Background Video with Scrim & Fallback */}
        <div className="workspace-bg-video-container">
          {!videoError ? (
            <video
              src={videoSrc}
              poster={posterSrc}
              autoPlay
              loop
              muted
              playsInline
              className="workspace-bg-video"
              onError={() => setVideoError(true)}
            />
          ) : (
            <div
              className="workspace-bg-fallback-poster"
              style={{ backgroundImage: `url(${posterSrc})` }}
            />
          )}
          <div className="workspace-bg-video-scrim"></div>
        </div>

        {/* Top Breadcrumb Navigation */}
        <div className="workspace-hero-top-nav">
          <InnerPageNav
            backTo="/"
            backLabel="Home"
            stepText="About: Creative Workspace"
            variant="dark"
          />
        </div>

        {/* Centered Content */}
        <div className="workspace-hero-center-content">
          <span className="workspace-hero-tag">FOR CREATIVE TALENT</span>
          <h1 className="workspace-headline">
            Join our<br />Creative Workspace
          </h1>
          <p className="workspace-copy">
            We provide the clients, the storyboards and the strategies. You focus on execution.
          </p>

          <div className="workspace-cta-row">
            <a href="#apply" className="btn ws-primary-btn btn-lg">
              Apply to the Partner Workspace <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn btn-secondary-glass btn-lg">
              How It Works
            </a>
          </div>

          {/* Floating Editorial Badge Centered */}
          <div className="workspace-floating-badge">
            <span className="badge-line handwritten">Flexible</span>
            <span className="badge-dot">•</span>
            <span className="badge-line handwritten">Remote</span>
            <span className="badge-dot">•</span>
            <span className="badge-line handwritten">Meaningful Work</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container">
        {/* 2.0 How It Works / Redesigned Workflow Section */}
        <section id="workflow" className="how-it-works-section" aria-labelledby="how-it-works-title">
          <div id="how-it-works" style={{ position: 'relative', top: '-80px' }} />
          
          {/* Section Header */}
          <div className="section-head workflow-section-head">
            <span className="section-tag">THE WORKFLOW</span>
            <h2 id="how-it-works-title" className="section-title">
              You Focus on the Work. We Handle the Rest.
            </h2>
            <p className="section-sub">
              We bring the clients, prepare the briefs, and manage delivery. You focus on creating great work, from wherever you are.
            </p>
          </div>

          {/* 3-Step Progression Grid with Visual Connectors */}
          <div className="workflow-grid-wrapper">
            <div className="workflow-grid">
              {/* Step 01 — S-Bloom */}
              <div className="simple-card step-card step-card-sbloom">
                <div className="step-card-top-bar" />
                <div className="step-card-header">
                  <div className="step-num-wrap">
                    <span className="step-num">01</span>
                    <span className="step-phase-label">INITIATION</span>
                  </div>
                  <span className="step-actor sbloom-actor">S-BLOOM</span>
                </div>

                <div className="step-icon-wrap sbloom-icon-wrap">
                  <ClipboardList size={26} strokeWidth={2} />
                </div>

                <h3 className="step-title">We Bring the Client &amp; Prepare the Brief</h3>
                <p className="step-desc">
                  We find the clients and provide you with the project brief, script, or blog topic, so you know exactly what needs to be done.
                </p>

                <div className="step-responsibility-tag">
                  <span className="responsibility-dot dot-sbloom" />
                  <span>Handled by S-Bloom</span>
                </div>
              </div>

              {/* Connector 1 -> 2 (Desktop) */}
              <div className="step-connector desktop-connector" aria-hidden="true">
                <div className="connector-line" />
                <div className="connector-circle">
                  <ArrowRight size={15} />
                </div>
                <div className="connector-line" />
              </div>

              {/* Connector 1 -> 2 (Mobile) */}
              <div className="step-connector mobile-connector" aria-hidden="true">
                <div className="connector-arrow-down">
                  <ArrowDown size={18} />
                </div>
              </div>

              {/* Step 02 — Partner (Prominent Core Focus) */}
              <div className="simple-card step-card step-card-partner">
                <div className="step-card-top-bar partner-top-bar" />
                <div className="step-card-header">
                  <div className="step-num-wrap">
                    <span className="step-num partner-num">02</span>
                    <span className="step-phase-label partner-phase">EXECUTION</span>
                  </div>
                  <span className="step-actor partner-actor">PARTNER</span>
                </div>

                <div className="step-icon-wrap partner-icon-wrap">
                  <Laptop size={26} strokeWidth={2} />
                </div>

                <h3 className="step-title">You Create the Work</h3>
                <p className="step-desc">
                  Choose a project that fits your skills and handle the creative or technical work, whether it’s video editing, shooting, or design.
                </p>

                <div className="step-responsibility-tag partner-tag">
                  <span className="responsibility-dot dot-partner" />
                  <span>Your Core Focus</span>
                </div>
              </div>

              {/* Connector 2 -> 3 (Desktop) */}
              <div className="step-connector desktop-connector" aria-hidden="true">
                <div className="connector-line" />
                <div className="connector-circle">
                  <ArrowRight size={15} />
                </div>
                <div className="connector-line" />
              </div>

              {/* Connector 2 -> 3 (Mobile) */}
              <div className="step-connector mobile-connector" aria-hidden="true">
                <div className="connector-arrow-down">
                  <ArrowDown size={18} />
                </div>
              </div>

              {/* Step 03 — S-Bloom */}
              <div className="simple-card step-card step-card-sbloom">
                <div className="step-card-top-bar" />
                <div className="step-card-header">
                  <div className="step-num-wrap">
                    <span className="step-num">03</span>
                    <span className="step-phase-label">COMPLETION</span>
                  </div>
                  <span className="step-actor sbloom-actor">S-BLOOM</span>
                </div>

                <div className="step-icon-wrap sbloom-icon-wrap">
                  <Rocket size={26} strokeWidth={2} />
                </div>

                <h3 className="step-title">We Handle Delivery &amp; Client Management</h3>
                <p className="step-desc">
                  We take care of final delivery, client communication, and ad management, so you can focus on your craft.
                </p>

                <div className="step-responsibility-tag">
                  <span className="responsibility-dot dot-sbloom" />
                  <span>Handled by S-Bloom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Banner Below Cards */}
          <div className="workflow-cta-card">
            <div className="workflow-cta-content">
              <h3 className="workflow-cta-title">Ready to Work With Us?</h3>
              <p className="workflow-cta-sub">
                Join our network of creative and technical professionals and put your skills to work on real projects.
              </p>
            </div>
            <a href="#apply" className="btn ws-primary-btn btn-lg workflow-cta-btn">
              <span>Apply to the Partner Workspace</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* 3.0 Who Can Join / Open Partner Roles (Full View Height) */}
        <section id="roles" className="who-can-join-section" aria-labelledby="who-can-join-title">
          <div className="section-head">
            <span className="section-tag">ROSTER CATEGORIES</span>
            <h2 id="who-can-join-title" className="section-title">Find Your Role. Do Your Best Work.</h2>
            <p className="section-sub">
              Choose the role that matches your skills and experience. Work on creative projects with briefs and direction from S-Bloom.
            </p>
          </div>

          <div className="who-can-join-grid">
            {roles.map((role) => {
              const isSelected = formData.role === role.id;
              return (
                <div
                  key={role.id}
                  className={`role-card ${isSelected ? 'role-card-selected' : ''}`}
                  onClick={() => handleSelectRole(role.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectRole(role.id);
                    }
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="role-card-shimmer"></div>
                  <div className="role-image-wrapper">
                    <img src={role.imgSrc} alt={role.title} className="role-hero-image" />
                  </div>
                  
                  <div className="role-card-content">
                    <h3 className="role-title">{role.title}</h3>
                  <p className="role-tagline">{role.tagline}</p>

                  <div className="role-skills-wrap">
                    {role.skills.map((skill, idx) => (
                      <span key={idx} className="role-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="role-card-action">
                    <span className="role-action-text">
                      {isSelected ? 'Selected ✓' : 'Select Role'}
                    </span>
                    <ArrowRight size={13} className="role-action-arrow" />
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4.0 Creative Studio Pass / Application Form (Full View Height) */}
        <section id="apply" className="apply-section" aria-labelledby="apply-title">
          <div className="studio-pass-card">
            {/* Top Pass Ribbon */}
            <div className="pass-top-bar">
              <div className="pass-status-pill">
                <span className="live-status-dot"></span>
                <span>OPEN CALL · CREATIVE ROSTER 2026</span>
              </div>
              <div className="pass-perks-strip">
                <span className="pass-perk"><Clock size={13} /> 48h Review</span>
                <span className="pass-perk-divider">•</span>
                <span className="pass-perk"><Globe size={13} /> 100% Remote</span>
                <span className="pass-perk-divider">•</span>
                <span className="pass-perk"><Sparkles size={13} /> Paid Projects</span>
              </div>
            </div>

            <div className="pass-body">
              <div className="section-head" style={{ marginBottom: 14, textAlign: 'center' }}>
                <span className="section-tag">APPLY TO WORKSPACE</span>
                <h2 id="apply-title" className="section-title">Apply to the Partner Workspace</h2>
                <p className="section-sub">
                  Select your craft, drop your showreel, and join our healthcare, education, and consulting queues.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="pass-form">
                  {/* Step 1: Craft Selector Chips */}
                  <div className="craft-selector-wrap">
                    <label className="craft-label">Select Your Craft *</label>
                    <div className="craft-chips-grid">
                      {roles.map((r) => {
                        const active = formData.role === r.id;
                        return (
                          <button
                            type="button"
                            key={r.id}
                            className={`craft-chip ${active ? 'craft-chip-active' : ''}`}
                            onClick={() => setFormData({ ...formData, role: r.id })}
                          >
                            <span className="craft-chip-icon">{r.icon}</span>
                            <span className="craft-chip-title">{r.title}</span>
                            {active && <Check size={14} className="craft-chip-check" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Minimal 3-Field Inputs */}
                  <div className="pass-fields-grid">
                    <div className="form-group">
                      <label htmlFor="fullName">Your Name *</label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Maya Chen"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="pass-input"
                      />
                      {errors.fullName && <span className="field-err">{errors.fullName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Email *</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="maya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pass-input"
                      />
                      {errors.email && <span className="field-err">{errors.email}</span>}
                    </div>

                    <div className="form-group pass-field-full">
                      <div className="portfolio-label-row">
                        <label htmlFor="portfolio">Showreel / Portfolio Link *</label>
                        {(() => {
                          const badge = getPlatformBadge(formData.portfolioUrl);
                          return badge ? (
                            <span
                              className="platform-live-badge"
                              style={{ color: badge.color, backgroundColor: badge.bg }}
                            >
                              <LinkIcon size={12} /> {badge.name} Detected
                            </span>
                          ) : null;
                        })()}
                      </div>
                      <input
                        id="portfolio"
                        type="url"
                        placeholder="https://behance.net/portfolio or YouTube showreel"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        className="pass-input portfolio-input"
                      />
                      {errors.portfolioUrl && <span className="field-err">{errors.portfolioUrl}</span>}
                    </div>
                  </div>

                  {/* Optional Quick Note Accordion */}
                  <div className="optional-note-wrap">
                    {!showNote ? (
                      <button
                        type="button"
                        className="btn-toggle-note"
                        onClick={() => setShowNote(true)}
                      >
                        <Plus size={14} /> Add tools, software stack or short note (optional)
                      </button>
                    ) : (
                      <div className="note-open-box">
                        <div className="note-header">
                          <label htmlFor="intro">Tools, Software Stack or Note</label>
                          <button
                            type="button"
                            className="btn-close-note"
                            onClick={() => setShowNote(false)}
                          >
                            <Minus size={13} /> Collapse
                          </button>
                        </div>
                        <textarea
                          id="intro"
                          rows={2}
                          placeholder="e.g. Premiere, DaVinci, After Effects, Figma · Available 15h/week"
                          value={formData.intro}
                          onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                          className="pass-input pass-textarea"
                        />
                      </div>
                    )}
                  </div>

                  {/* Submit Action */}
                  <div className="pass-submit-row">
                    <button type="submit" className="btn ws-primary-btn btn-lg pass-submit-btn">
                      <span>Submit Application</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : (
                /* Digital Issued Creative Pass (Success State) */
                <div className="issued-pass-card">
                  <div className="issued-pass-stamp">
                    <CheckCircle2 size={32} color="var(--ws-indigo-primary)" />
                    <span>APPLICATION RECEIVED · QUEUE ACTIVE</span>
                  </div>
                  <h3 className="issued-pass-name">{formData.fullName}</h3>
                  <div className="issued-pass-role-badge">
                    {roles.find((r) => r.id === formData.role)?.icon}
                    <span>{roles.find((r) => r.id === formData.role)?.title.toUpperCase()}</span>
                  </div>
                  <p className="issued-pass-desc">
                    Your portfolio link has been received and queued for review. Our creative producer will reach out at <strong>{formData.email}</strong> within 48 hours with matching client briefs.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        role: 'editors',
                        portfolioUrl: '',
                        intro: ''
                      });
                      setShowNote(false);
                    }}
                    style={{ marginTop: 20 }}
                  >
                    Submit Another Application
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================
          Scoped CSS Styles with Design Token Fallbacks for Easy Portability
          ======================================================================== */}
      <style>{`
        /* Google Fonts Import for Standalone Portability */
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* Self-Contained Design Tokens */
        .creative-workspace-page {
          --ws-bg-primary: var(--bg-primary, #F7F3F4);
          --ws-indigo-primary: var(--indigo-primary, #211D50);
          --ws-coral-accent: var(--color-indigo, #211D50);
          --ws-lavender-soft: var(--lavender-soft, #E9E1F3);
          --ws-peach-soft: var(--peach-soft, #FCE9E2);
          --ws-text-secondary: var(--text-secondary, #66647C);
          --ws-border-light: var(--border-light, rgba(33, 29, 80, 0.08));
          --ws-border-card: var(--border-card, rgba(33, 29, 80, 0.08));
          --ws-font-heading: var(--font-heading, 'Plus Jakarta Sans', -apple-system, sans-serif);
          --ws-font-display: var(--font-display, 'Playfair Display', Georgia, serif);
          --ws-header-height: var(--header-height, 74px);

          min-height: 100vh;
          background-color: var(--ws-bg-primary);
          margin-top: 0;
          font-family: 'Inter', -apple-system, sans-serif;
          color: var(--ws-indigo-primary);
          box-sizing: border-box;
        }

        .creative-workspace-page *,
        .creative-workspace-page *::before,
        .creative-workspace-page *::after {
          box-sizing: border-box;
        }

        /* Standalone Container & Grid Utilities */
        .creative-workspace-page .container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .creative-workspace-page .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 960px) {
          .creative-workspace-page .grid-3 {
            grid-template-columns: 1fr;
          }
        }

        /* Standalone Section Header Typography */
        .creative-workspace-page .section-head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 32px auto;
        }

        .creative-workspace-page .section-tag {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background-color: var(--ws-lavender-soft);
          color: var(--ws-indigo-primary);
          padding: 5px 14px;
          border-radius: 9999px;
          margin-bottom: 12px;
          border: 1px solid rgba(33, 29, 80, 0.06);
        }

        .creative-workspace-page .section-title {
          font-family: var(--ws-font-display);
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--ws-indigo-primary);
          line-height: 1.18;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .creative-workspace-page .section-sub {
          font-size: 1.05rem;
          color: var(--ws-text-secondary);
          line-height: 1.55;
          margin: 0 auto;
        }

        /* Standalone Button Styles */
        .creative-workspace-page .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--ws-font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          border: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .creative-workspace-page .ws-primary-btn {
          background-color: var(--ws-coral-accent);
          color: #FFFFFF;
          box-shadow: 0 8px 20px rgba(231, 71, 54, 0.28);
          border: none;
        }

        .creative-workspace-page .ws-primary-btn:hover {
          background-color: #D63A2A;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(231, 71, 54, 0.38);
        }

        .creative-workspace-page .btn-secondary {
          background-color: #FFFFFF;
          color: var(--ws-indigo-primary);
          border: 1px solid var(--ws-border-card);
          padding: 10px 24px;
        }

        .creative-workspace-page .btn-secondary:hover {
          background-color: var(--ws-lavender-soft);
          border-color: var(--ws-indigo-primary);
          transform: translateY(-2px);
        }

        .creative-workspace-page .btn-lg {
          padding: 14px 32px;
          font-size: 1.02rem;
        }

        /* Standalone Card & Handwritten Utility */
        .creative-workspace-page .simple-card {
          background-color: #FFFFFF;
          border-radius: 18px;
          border: 1px solid var(--ws-border-card);
          box-shadow: 0 4px 16px rgba(33, 29, 80, 0.04);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .creative-workspace-page .handwritten {
          font-family: 'Caveat', cursive, sans-serif;
        }

        /* 1.0 Full-Screen Hero */
        .workspace-hero-center-section {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 68px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 36px 24px 44px 24px;
          margin-bottom: 0;
          overflow: hidden;
          background-color: #0c0a17;
          border: none;
          border-bottom: none;
        }

        .workspace-bg-video-container {
          position: absolute;
          inset: 0 0 -2px 0;
          width: 100%;
          height: calc(100% + 2px);
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(circle at 50% 40%, #1e1938 0%, #0c0a17 100%);
        }

        .workspace-bg-video {
          position: absolute;
          inset: 0 0 -2px 0;
          width: 100%;
          height: calc(100% + 2px);
          object-fit: cover;
          object-position: center center;
          z-index: 1;
          opacity: 1;
          filter: contrast(1.08) brightness(1.0);
        }

        .workspace-bg-fallback-poster {
          position: absolute;
          inset: 0 0 -2px 0;
          width: 100%;
          height: calc(100% + 2px);
          background-size: cover;
          background-position: center center;
          opacity: 0.65;
          filter: brightness(0.85) contrast(1.1);
          z-index: 1;
        }

        .workspace-bg-video-scrim {
          position: absolute;
          inset: 0 0 -2px 0;
          background: radial-gradient(circle at 50% 50%, rgba(12, 10, 23, 0.18) 0%, rgba(12, 10, 23, 0.45) 60%, rgba(12, 10, 23, 0.8) 100%);
          z-index: 2;
        }

        .workspace-hero-top-nav {
          position: absolute;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1440px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 5;
          padding: 0 24px;
        }

        /* Inner Nav Sub-Component Styles */
        .standalone-inner-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 16px;
        }

        .standalone-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--ws-font-heading);
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          padding: 6px 16px;
          border-radius: 9999px;
          transition: all 0.2s ease;
        }

        .standalone-inner-nav-dark .standalone-back-link {
          color: rgba(255, 255, 255, 0.9);
          background: rgba(12, 10, 23, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.22);
        }

        .standalone-inner-nav-dark .standalone-back-link:hover {
          color: #FFFFFF;
          background: rgba(12, 10, 23, 0.85);
          border-color: rgba(255, 255, 255, 0.45);
        }

        .standalone-step-tag {
          font-size: 0.82rem;
          font-weight: 600;
          padding: 6px 18px;
          border-radius: 9999px;
        }

        .standalone-inner-nav-dark .standalone-step-tag {
          color: rgba(255, 255, 255, 0.95);
          background: rgba(12, 10, 23, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.22);
        }

        .workspace-hero-center-content {
          position: relative;
          z-index: 4;
          max-width: 840px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .workspace-hero-tag {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(12, 10, 23, 0.7);
          color: #FFFFFF;
          padding: 7px 18px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          margin-bottom: 22px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
        }

        .workspace-headline {
          font-family: var(--ws-font-display);
          font-size: 4.2rem;
          line-height: 1.08;
          color: #FFFFFF;
          margin-bottom: 22px;
          letter-spacing: -0.025em;
          font-weight: 600;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.85), 0 1px 4px rgba(0, 0, 0, 0.9);
        }

        .workspace-copy {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.6;
          margin-bottom: 38px;
          max-width: 640px;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.85);
        }

        .workspace-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .btn-secondary-glass {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(12, 10, 23, 0.7);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.32);
          padding: 14px 32px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1.05rem;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        .btn-secondary-glass:hover {
          background: rgba(12, 10, 23, 0.9);
          border-color: rgba(255, 255, 255, 0.6);
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .workspace-floating-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background-color: #FFFFFF;
          padding: 10px 26px;
          border-radius: 9999px;
          border: 1px solid rgba(33, 29, 80, 0.08);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
        }

        .badge-line {
          font-size: 1.25rem;
          color: var(--ws-indigo-primary);
        }

        .badge-dot {
          color: var(--ws-coral-accent);
          font-size: 1.1rem;
        }

        /* 2.0 How It Works / Redesigned Workflow Section */
        .how-it-works-section {
          padding: 84px 0 76px 0;
          margin-bottom: 0;
          scroll-margin-top: var(--ws-header-height);
        }

        .workflow-section-head {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 52px auto;
        }

        .workflow-section-head .section-title {
          font-size: clamp(2.1rem, 3.5vw, 2.9rem);
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .workflow-section-head .section-sub {
          font-size: 1.12rem;
          line-height: 1.6;
          max-width: 660px;
          margin: 0 auto;
        }

        /* 3-Step Progression Grid with Connectors */
        .workflow-grid-wrapper {
          position: relative;
          width: 100%;
        }

        .workflow-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: stretch;
          gap: 0;
        }

        .step-card {
          padding: 34px 28px 28px 28px;
          display: flex;
          flex-direction: column;
          background-color: #FFFFFF;
          border-radius: 20px;
          border: 1px solid var(--ws-border-card);
          box-shadow: 0 4px 20px rgba(33, 29, 80, 0.04);
          position: relative;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.35s ease;
        }

        .step-card-top-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, transparent, #8B70C9, transparent);
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .step-card-sbloom:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(33, 29, 80, 0.09);
          border-color: rgba(139, 112, 201, 0.45);
        }

        .step-card-sbloom:hover .step-card-top-bar {
          opacity: 1;
        }

        /* Step 02: Partner (Prominent Core Focus) */
        .step-card-partner {
          border: 1.5px solid rgba(231, 71, 54, 0.28);
          background: linear-gradient(180deg, #FFFFFF 0%, #FFFDFC 100%);
          box-shadow: 0 8px 30px rgba(231, 71, 54, 0.07), 0 2px 8px rgba(33, 29, 80, 0.04);
        }

        .partner-top-bar {
          background: linear-gradient(90deg, #F09C7D, #E74736, #F09C7D);
          opacity: 0.95;
          height: 4px;
        }

        .step-card-partner:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 44px rgba(231, 71, 54, 0.16), 0 4px 12px rgba(33, 29, 80, 0.06);
          border-color: rgba(231, 71, 54, 0.6);
        }

        .step-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .step-num-wrap {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .step-num {
          font-family: var(--ws-font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #8B70C9;
          letter-spacing: -0.02em;
        }

        .partner-num {
          color: #E74736;
        }

        .step-phase-label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ws-text-secondary);
          opacity: 0.75;
        }

        .partner-phase {
          color: #E74736;
          opacity: 0.85;
        }

        .step-actor {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 9999px;
        }

        .sbloom-actor {
          background-color: var(--ws-lavender-soft);
          color: var(--ws-indigo-primary);
          border: 1px solid rgba(139, 112, 201, 0.22);
        }

        .partner-actor {
          background-color: var(--ws-peach-soft);
          color: #B03423;
          border: 1px solid rgba(231, 71, 54, 0.25);
        }

        .step-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .sbloom-icon-wrap {
          background-color: var(--ws-lavender-soft);
          color: var(--ws-indigo-primary);
        }

        .partner-icon-wrap {
          background-color: var(--ws-peach-soft);
          color: #E74736;
        }

        .step-card:hover .step-icon-wrap {
          transform: scale(1.1) rotate(3deg);
        }

        .step-card-sbloom:hover .step-icon-wrap {
          box-shadow: 0 6px 16px rgba(139, 112, 201, 0.25);
        }

        .step-card-partner:hover .step-icon-wrap {
          box-shadow: 0 6px 16px rgba(231, 71, 54, 0.25);
        }

        .step-title {
          font-size: 1.25rem;
          color: var(--ws-indigo-primary);
          margin-bottom: 12px;
          font-weight: 700;
          line-height: 1.32;
        }

        .step-desc {
          font-size: 0.94rem;
          color: var(--ws-text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .step-responsibility-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--ws-indigo-primary);
          padding-top: 14px;
          border-top: 1px solid var(--ws-border-light);
        }

        .step-responsibility-tag.partner-tag {
          color: #B03423;
        }

        .responsibility-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .dot-sbloom {
          background-color: #8B70C9;
        }

        .dot-partner {
          background-color: #E74736;
        }

        /* Progression Connectors */
        .step-connector.desktop-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          padding: 0 6px;
        }

        .step-connector.mobile-connector {
          display: none;
        }

        .connector-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, rgba(33, 29, 80, 0.08), rgba(33, 29, 80, 0.16));
        }

        .connector-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid var(--ws-border-card);
          box-shadow: 0 2px 8px rgba(33, 29, 80, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ws-text-secondary);
          flex-shrink: 0;
        }

        /* Call To Action Card Below Workflow */
        .workflow-cta-card {
          margin-top: 48px;
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid var(--ws-border-card);
          padding: 34px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          box-shadow: 0 6px 24px rgba(33, 29, 80, 0.04);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .workflow-cta-card:hover {
          box-shadow: 0 12px 32px rgba(33, 29, 80, 0.08);
          border-color: rgba(33, 29, 80, 0.16);
        }

        .workflow-cta-title {
          font-family: var(--ws-font-heading);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--ws-indigo-primary);
          margin-bottom: 6px;
          letter-spacing: -0.015em;
        }

        .workflow-cta-sub {
          font-size: 1rem;
          color: var(--ws-text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .workflow-cta-btn {
          flex-shrink: 0;
          padding: 14px 30px;
          font-size: 1rem;
          white-space: nowrap;
        }

        @media (max-width: 980px) {
          .workflow-grid {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .step-connector.desktop-connector {
            display: none;
          }

          .step-connector.mobile-connector {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2px 0;
          }

          .connector-arrow-down {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #FFFFFF;
            border: 1px solid var(--ws-border-card);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--ws-text-secondary);
            box-shadow: 0 2px 8px rgba(33, 29, 80, 0.06);
          }

          .workflow-cta-card {
            flex-direction: column;
            text-align: center;
            padding: 30px 24px;
            gap: 20px;
          }

          .workflow-cta-btn {
            width: 100%;
          }
        }

        /* 3.0 Who Can Join Grid (Full View Height) */
        .who-can-join-section {
          min-height: calc(100vh - var(--ws-header-height));
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 0;
          margin-bottom: 0;
          scroll-margin-top: var(--ws-header-height);
        }

        .who-can-join-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .role-card {
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          background-color: #FFFFFF;
          border-radius: 24px;
          border: 1.5px solid rgba(33, 29, 80, 0.08);
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease,
                      background-color 0.3s ease;
        }

        .role-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(33, 29, 80, 0.28);
          box-shadow: 0 20px 36px -10px rgba(33, 29, 80, 0.12),
                      0 0 24px rgba(33, 29, 80, 0.06);
        }

        .role-card.role-card-selected {
          border-color: var(--ws-indigo-primary);
          box-shadow: 0 16px 36px -8px rgba(33, 29, 80, 0.2),
                      0 0 0 2px var(--ws-indigo-primary);
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF8FC 100%);
        }

        .role-card-shimmer {
          position: absolute;
          top: 0;
          left: -140%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
          transform: skewX(-25deg);
          transition: left 0.75s ease;
          pointer-events: none;
          z-index: 2;
        }

        .role-card:hover .role-card-shimmer {
          left: 160%;
        }

        .role-card-content {
          padding: 20px 16px 24px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .role-image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-bottom: 1.5px solid rgba(33, 29, 80, 0.08);
          position: relative;
        }

        .role-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .role-card:hover .role-hero-image,
        .role-card.role-card-selected .role-hero-image {
          transform: scale(1.08);
        }

        .role-title {
          font-family: var(--ws-font-heading);
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--ws-indigo-primary);
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }

        .role-tagline {
          font-size: 0.8rem;
          color: var(--ws-text-secondary);
          line-height: 1.35;
          margin-bottom: 12px;
          min-height: 34px;
        }

        .role-skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          justify-content: center;
          margin-bottom: 14px;
        }

        .role-skill-pill {
          font-size: 0.68rem;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: 9999px;
          background-color: var(--ws-bg-primary);
          color: var(--ws-indigo-primary);
          border: 1px solid rgba(33, 29, 80, 0.06);
          transition: all 0.2s ease;
        }

        .role-card:hover .role-skill-pill,
        .role-card.role-card-selected .role-skill-pill {
          background-color: var(--ws-lavender-soft);
          border-color: rgba(33, 29, 80, 0.12);
        }

        .role-card-action {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--ws-coral-accent);
          transition: gap 0.25s ease;
        }

        .role-card:hover .role-card-action {
          gap: 8px;
        }

        .role-action-arrow {
          transition: transform 0.25s ease;
        }

        .role-card:hover .role-action-arrow {
          transform: translateX(3px);
        }

        /* 4.0 Creative Studio Pass Application Card (Full View Height) */
        .apply-section {
          min-height: calc(100vh - var(--ws-header-height));
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;
          margin-bottom: 0;
          scroll-margin-top: var(--ws-header-height);
        }

        .studio-pass-card {
          max-width: 820px;
          margin: 0 auto;
          background-color: #FFFFFF;
          border-radius: 20px;
          border: 1.5px solid rgba(33, 29, 80, 0.09);
          box-shadow: 0 24px 60px -16px rgba(33, 29, 80, 0.08), 0 2px 10px rgba(33, 29, 80, 0.03);
          overflow: hidden;
          position: relative;
        }

        .pass-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FAF8FD;
          border-bottom: 1.5px dashed rgba(33, 29, 80, 0.12);
          padding: 8px 24px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pass-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--ws-indigo-primary);
        }

        .live-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #22C55E;
          box-shadow: 0 0 8px #22C55E;
          display: inline-block;
          animation: livePulse 2s infinite ease-in-out;
        }

        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .pass-perks-strip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--ws-text-secondary);
        }

        .pass-perk {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--ws-indigo-primary);
        }

        .pass-perk-divider {
          color: rgba(33, 29, 80, 0.25);
        }

        .pass-body {
          padding: 20px 32px 18px 32px;
        }

        .pass-body .section-head {
          margin-bottom: 14px;
        }

        .pass-body .section-tag {
          font-size: 0.68rem;
          padding: 3px 9px;
          margin-bottom: 6px;
        }

        .pass-body .section-title {
          font-size: 1.75rem;
          margin-bottom: 4px;
          line-height: 1.15;
        }

        .pass-body .section-sub {
          font-size: 0.85rem;
          line-height: 1.35;
        }

        .pass-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .craft-selector-wrap {
          display: flex;
          flex-direction: column;
          gap: 5px;
          text-align: left;
        }

        .craft-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--ws-indigo-primary);
          letter-spacing: 0.02em;
        }

        .craft-chips-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
        }

        .craft-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 8px 6px;
          border-radius: 10px;
          background-color: var(--ws-bg-primary);
          border: 1.5px solid rgba(33, 29, 80, 0.08);
          cursor: pointer;
          position: relative;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .craft-chip:hover {
          border-color: rgba(33, 29, 80, 0.3);
          transform: translateY(-2px);
          background-color: #FFFFFF;
        }

        .craft-chip-active {
          background-color: #FFFFFF;
          border-color: var(--ws-indigo-primary);
          box-shadow: 0 6px 16px rgba(33, 29, 80, 0.12), 0 0 0 1.5px var(--ws-indigo-primary);
          transform: translateY(-2px);
        }

        .craft-chip-icon {
          color: var(--ws-indigo-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .craft-chip-icon svg {
          width: 18px;
          height: 18px;
        }

        .craft-chip-active .craft-chip-icon {
          color: var(--ws-coral-accent);
          transform: scale(1.08);
        }

        .craft-chip-title {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--ws-indigo-primary);
          text-align: center;
          line-height: 1.2;
        }

        .craft-chip-check {
          position: absolute;
          top: 4px;
          right: 5px;
          color: var(--ws-coral-accent);
        }

        .pass-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .pass-field-full {
          grid-column: 1 / -1;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 3px;
          text-align: left;
        }

        .form-group label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--ws-indigo-primary);
        }

        .pass-input {
          width: 100%;
          padding: 8px 12px;
          border: 1.5px solid rgba(33, 29, 80, 0.1);
          border-radius: 8px;
          background-color: #FFFFFF;
          font-family: inherit;
          font-size: 0.88rem;
          color: var(--ws-indigo-primary);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .pass-input:focus {
          border-color: var(--ws-indigo-primary);
          box-shadow: 0 0 0 3px rgba(33, 29, 80, 0.1);
        }

        .portfolio-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2px;
        }

        .platform-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 9999px;
          animation: badgePop 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes badgePop {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .optional-note-wrap {
          text-align: left;
          margin-top: -2px;
        }

        .btn-toggle-note {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--ws-text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px 0;
          transition: color 0.2s ease;
        }

        .btn-toggle-note:hover {
          color: var(--ws-coral-accent);
        }

        .note-open-box {
          display: flex;
          flex-direction: column;
          gap: 5px;
          animation: fadeInDown 0.25s ease;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .note-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .note-header label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--ws-indigo-primary);
        }

        .btn-close-note {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          color: var(--ws-text-secondary);
          background: none;
          border: none;
          cursor: pointer;
        }

        .btn-close-note:hover {
          color: var(--ws-coral-accent);
        }

        .pass-textarea {
          resize: vertical;
          min-height: 54px;
          padding: 7px 10px;
          font-size: 0.85rem;
        }

        .pass-submit-row {
          display: flex;
          justify-content: center;
          margin-top: 4px;
        }

        .pass-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 30px;
          border-radius: 9999px;
          font-size: 0.92rem;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(33, 29, 80, 0.25);
          transition: all 0.25s ease;
        }

        .pass-submit-btn:hover {
          background-color: #17133B;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(33, 29, 80, 0.35);
        }

        .issued-pass-card {
          text-align: center;
          padding: 44px 32px;
          border: 2px dashed rgba(33, 29, 80, 0.15);
          border-radius: 20px;
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF8FC 100%);
        }

        .issued-pass-stamp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--ws-indigo-primary);
          background: rgba(33, 29, 80, 0.08);
          padding: 6px 16px;
          border-radius: 9999px;
          margin-bottom: 20px;
        }

        .issued-pass-name {
          font-family: var(--ws-font-display);
          font-size: 2.2rem;
          font-weight: 600;
          color: var(--ws-indigo-primary);
          margin-bottom: 12px;
        }

        .issued-pass-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--ws-indigo-primary);
          background-color: var(--ws-lavender-soft);
          padding: 6px 18px;
          border-radius: 9999px;
          margin-bottom: 20px;
        }

        .issued-pass-desc {
          font-size: 0.98rem;
          color: var(--ws-text-secondary);
          line-height: 1.6;
          max-width: 520px;
          margin: 0 auto;
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          .workspace-headline {
            font-size: 2.8rem;
          }
          .workspace-hero-center-section {
            padding: 40px 16px 60px 16px;
          }
          .who-can-join-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .craft-chips-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .pass-body {
            padding: 24px 20px;
          }
        }

        @media (max-width: 640px) {
          .workspace-headline {
            font-size: 2.2rem;
          }
          .who-can-join-grid {
            grid-template-columns: 1fr;
          }
          .craft-chips-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pass-fields-grid {
            grid-template-columns: 1fr;
          }
          .pass-top-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

// Aliases for seamless portability across different naming conventions
export const AboutPage = PartnerWorkspacePage;
export default PartnerWorkspacePage;
