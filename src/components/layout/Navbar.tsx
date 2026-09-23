import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Layers,
  Video,
  TrendingUp,
  Heart,
  GraduationCap,
  Briefcase,
  Sparkles,
  Radio,
  FileText,
  CheckCircle2,
  Building2,
  UserCheck,
  Compass
} from 'lucide-react';

interface SubNavItem {
  title: string;
  subtitle: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string; color?: string }>;
  badge?: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: SubNavItem[];
  featuredLink?: {
    label: string;
    href: string;
  };
}

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const navItems: NavItem[] = [
    {
      label: 'Home',
      href: '/',
      dropdown: [
        {
          title: 'Studio Production Hub',
          subtitle: 'High-end recording & podcast infrastructure',
          href: '/#hero',
          icon: Radio
        },
        {
          title: 'Core Growth Framework',
          subtitle: 'Build · Create · Promote strategic pillars',
          href: '/#services',
          icon: Layers
        },
        {
          title: 'Industry Gateways',
          subtitle: 'Healthcare, Education & Consulting pathways',
          href: '/#industries',
          icon: Compass
        },
        {
          title: 'Client & Creator Flow',
          subtitle: 'End-to-end journey from concept to impact',
          href: '/#flow',
          icon: TrendingUp
        }
      ],
      featuredLink: {
        label: 'Explore Complete Experience →',
        href: '/'
      }
    },
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        {
          title: '01. BUILD',
          subtitle: 'Web architecture, SEO & search visibility foundation',
          href: '/services#build',
          icon: Layers,
          badge: 'Foundation'
        },
        {
          title: '02. CREATE',
          subtitle: 'Studio video shoots, audio mastering & explainers',
          href: '/services#create',
          icon: Video,
          badge: 'Production'
        },
        {
          title: '03. PROMOTE',
          subtitle: 'Targeted paid distribution & practice scaling',
          href: '/services#promote',
          icon: TrendingUp,
          badge: 'Growth'
        }
      ],
      featuredLink: {
        label: 'View All Service Pillars →',
        href: '/services'
      }
    },
    {
      label: 'Industries',
      href: '/industries',
      dropdown: [
        {
          title: 'Healthcare Sector',
          subtitle: 'Practice growth, clinics & patient trust',
          href: '/industries/healthcare',
          icon: Heart
        },
        {
          title: 'Doctor & Specialist Branding',
          subtitle: 'Personal reputation for specialized surgeons & physicians',
          href: '/industries/healthcare/expert',
          icon: UserCheck,
          badge: 'High Impact'
        },
        {
          title: 'Education Sector',
          subtitle: 'Faculty reach, academic institutes & student intake',
          href: '/industries/education',
          icon: GraduationCap
        },
        {
          title: 'Consulting Sector',
          subtitle: 'Senior advisory authority & executive practice growth',
          href: '/industries/consulting',
          icon: Briefcase
        }
      ],
      featuredLink: {
        label: 'Compare All Industry Models →',
        href: '/industries'
      }
    },
    {
      label: 'Creative Workspace',
      href: '/creative-workspace',
      dropdown: [
        {
          title: 'Partner Overview',
          subtitle: 'Collaborate with high-trust clients and curated briefs',
          href: '/creative-workspace',
          icon: Sparkles
        },
        {
          title: 'Production Workflow',
          subtitle: 'Storyboards, quality gates & collaborative milestones',
          href: '/creative-workspace#workflow',
          icon: FileText
        },
        {
          title: 'Open Partner Roles',
          subtitle: 'Video editors, audio engineers & motion artists',
          href: '/creative-workspace#roles',
          icon: Layers,
          badge: 'Openings'
        },
        {
          title: 'Apply as Technical Partner',
          subtitle: 'Submit your portfolio and join our creator network',
          href: '/creative-workspace/apply',
          icon: ArrowRight,
          badge: 'Apply'
        }
      ],
      featuredLink: {
        label: 'Join Our Workspace Network →',
        href: '/creative-workspace'
      }
    },
    {
      label: 'About',
      href: '/about',
      dropdown: [
        {
          title: 'Who We Are',
          subtitle: 'Our philosophy, team, and editorial growth approach',
          href: '/about',
          icon: Building2
        },
        {
          title: 'The Editorial Standard',
          subtitle: 'High-trust, noise-free communication guidelines',
          href: '/about#standard',
          icon: CheckCircle2
        },
        {
          title: 'Studio Infrastructure',
          subtitle: 'Acoustic design, cinema cameras & production rooms',
          href: '/about#infrastructure',
          icon: Radio
        }
      ],
      featuredLink: {
        label: 'Read The sBLOOM Story →',
        href: '/about'
      }
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ];

  // Check if link or any child is active
  const isActive = (item: NavItem) => {
    if (item.href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(item.href);
  };

  // Close dropdown on outside click or escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle desktop mouse enter with anti-flicker
  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  // Handle desktop mouse leave with smooth grace delay
  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 140);
  };

  // Handle anchor link click with smooth header offset
  const handleLinkClick = (href: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (href.includes('#')) {
      const [pathPart, hashPart] = href.split('#');
      const isCurrentPage =
        pathPart === '' ||
        location.pathname === pathPart ||
        (pathPart === '/' && location.pathname === '/');

      if (isCurrentPage) {
        setTimeout(() => {
          const element = document.getElementById(hashPart);
          if (element) {
            const headerOffset = 84;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 40);
      }
    }
  };

  return (
    <>
      {/* Main Global Header */}
      <header className="site-header" ref={navRef}>
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="brand-logo-wrap" aria-label="sBLOOM Home" onClick={() => handleLinkClick('/')}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C16 10 9 16 2 16C9 16 16 22 16 30C16 22 23 16 30 16C23 16 16 10 16 2Z" fill="#E74736"/>
              <path d="M22 6C22 12 18 16 14 16C18 16 22 20 22 26C22 20 26 16 30 16C26 16 22 12 22 6Z" fill="#C7B4EA" opacity="0.9"/>
            </svg>
            <span>sBLOOM</span>
          </Link>

          {/* Desktop Navigation Links with Dropdown Panels */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => {
                const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                const isOpen = activeDropdown === item.label;
                const active = isActive(item);

                return (
                  <li
                    key={item.label}
                    className={`nav-item-wrap ${hasDropdown ? 'has-dropdown' : ''}`}
                    onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasDropdown ? (
                      <div className="nav-dropdown-trigger-group">
                        <Link
                          to={item.href}
                          className={`nav-link ${active ? 'active' : ''} ${isOpen ? 'menu-open' : ''}`}
                          onClick={() => handleLinkClick(item.href)}
                        >
                          <span>{item.label}</span>
                        </Link>
                        <button
                          type="button"
                          className="nav-chevron-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveDropdown(isOpen ? null : item.label);
                          }}
                          aria-label={`Toggle ${item.label} dropdown`}
                          aria-expanded={isOpen}
                        >
                          <ChevronDown
                            size={14}
                            className={`nav-chevron ${isOpen ? 'rotate' : ''}`}
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`nav-link ${active ? 'active' : ''}`}
                        onClick={() => handleLinkClick(item.href)}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Desktop Dropdown Popover */}
                    {hasDropdown && isOpen && (
                      <div
                        className="nav-dropdown-popover"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="nav-dropdown-grid">
                          {item.dropdown!.map((sub) => {
                            const IconComponent = sub.icon;
                            return (
                              <Link
                                key={sub.title}
                                to={sub.href}
                                className="nav-dropdown-item"
                                onClick={() => handleLinkClick(sub.href)}
                              >
                                <div className="nav-dropdown-icon-box">
                                  <IconComponent size={18} color="var(--color-coral)" />
                                </div>
                                <div className="nav-dropdown-content">
                                  <div className="nav-dropdown-header-line">
                                    <span className="nav-dropdown-title">{sub.title}</span>
                                    {sub.badge && (
                                      <span className="nav-dropdown-badge">{sub.badge}</span>
                                    )}
                                  </div>
                                  <p className="nav-dropdown-subtext">{sub.subtitle}</p>
                                </div>
                                <ArrowRight size={14} className="nav-dropdown-arrow" />
                              </Link>
                            );
                          })}
                        </div>

                        {item.featuredLink && (
                          <div className="nav-dropdown-footer">
                            <Link
                              to={item.featuredLink.href}
                              className="nav-dropdown-featured-btn"
                              onClick={() => handleLinkClick(item.featuredLink!.href)}
                            >
                              <span>{item.featuredLink.label}</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Action Button & Mobile Toggle */}
          <div className="nav-actions">
            <button
              onClick={onOpenConsultation}
              className="btn btn-indigo"
              id="header-cta-talk"
            >
              <span>Let's Talk</span>
              <ArrowRight size={16} />
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Accordions */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-content">
              {navItems.map((item) => {
                const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                const isExpanded = mobileExpanded === item.label;

                return (
                  <div key={item.label} className="mobile-nav-item">
                    {hasDropdown ? (
                      <div>
                        <div className="mobile-nav-header-row">
                          <Link
                            to={item.href}
                            className="mobile-direct-link-flex"
                            onClick={() => handleLinkClick(item.href)}
                          >
                            <span>{item.label}</span>
                          </Link>
                          <button
                            type="button"
                            className="mobile-accordion-toggle-btn"
                            onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                            aria-label={`Toggle ${item.label} sub-items`}
                          >
                            <ChevronDown
                              size={18}
                              className={`mobile-chevron ${isExpanded ? 'rotate' : ''}`}
                            />
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="mobile-accordion-body">
                            {item.dropdown!.map((sub) => {
                              const IconComponent = sub.icon;
                              return (
                                <Link
                                  key={sub.title}
                                  to={sub.href}
                                  className="mobile-sub-link"
                                  onClick={() => handleLinkClick(sub.href)}
                                >
                                  <div className="mobile-sub-icon">
                                    <IconComponent size={16} color="var(--color-coral)" />
                                  </div>
                                  <div>
                                    <div className="mobile-sub-title">{sub.title}</div>
                                    <div className="mobile-sub-desc">{sub.subtitle}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="mobile-direct-link"
                        onClick={() => handleLinkClick(item.href)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="mobile-drawer-footer">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="btn btn-indigo"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Let's Talk</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
