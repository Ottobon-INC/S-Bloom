// AsBloom Interactive Logic & Pathway Management

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initPathwayModals();
  initCohortForm();
  initBatchSimulator();
  handleHashRouting();
});

// Navigation & Smooth Scroll
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.position = 'absolute';
        navLinks.style.top = '74px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#FFFFFF';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      }
    });
  }

  const categoryBtn = document.getElementById('btn-open-category-nav');
  if (categoryBtn) {
    categoryBtn.addEventListener('click', () => {
      const gatewaysSection = document.getElementById('gateways');
      if (gatewaysSection) {
        gatewaysSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const headerApplyBtn = document.getElementById('btn-header-apply');
  if (headerApplyBtn) {
    headerApplyBtn.addEventListener('click', () => {
      const cohortSection = document.getElementById('cohort');
      if (cohortSection) {
        cohortSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// Pathway Data & Interactive Modal
const pathwayData = {
  creators: {
    title: "Creator Studio & 5-Pillar Accelerator",
    badge: "Gateway 01 • Individual Talent",
    badgeClass: "badge-creators",
    hook: "“Stop struggling alone. Master the camera, scale your audience, and let us handle your post-production as you grow.”",
    description: "Designed for aspiring creators, actors, dancers, singers, influencers, and artists who want to turn their natural talent into a massive audience and lucrative opportunities.",
    focusAreas: [
      {
        title: "Pillar 1: Hook & Retention Scripting",
        desc: "Learn psychological 3-second visual and audio hooks that capture high retention rates on Reels, TikTok, and YouTube Shorts."
      },
      {
        title: "Pillar 2: Camera Presence & Natural Charisma",
        desc: "Ditch stiff teleprompter reads. Master eye-line discipline, vocal pacing, and authentic energy that feels magnetic on camera."
      },
      {
        title: "Pillar 3: Cinematic Mobile & Mirrorless Setup",
        desc: "Professional lighting geometry (Key, Fill, Backlight) and framing angles using gear you already own or accessible studio rentals."
      },
      {
        title: "Pillar 4: Fast-Paced Retention Video Editing",
        desc: "Pattern interrupts, pacing curves, punch-ins, sound design layers, and verified caption styling that boosts watch time."
      },
      {
        title: "Pillar 5: Algorithmic Virality & Distribution",
        desc: "Repurposing systems to publish across Instagram, YouTube, and LinkedIn effortlessly while maintaining platform-native metadata."
      }
    ],
    productionService: "The S Bloom Fallback Desk: Once you finish the cohort, you can hand off raw footage to our Ottobon studio team to edit 20-30 reels per month while you focus purely on creating.",
    ctaText: "Apply for Batch 1 Accelerator",
    ctaAction: () => {
      closeModal();
      document.getElementById('cohort')?.scrollIntoView({ behavior: 'smooth' });
    }
  },

  professionals: {
    title: "Practice Growth & Domain Authority",
    badge: "Gateway 02 • Independent Practices",
    badgeClass: "badge-professionals",
    hook: "“Turn your specialized knowledge into patient and client inquiries without spending hours filming or editing.”",
    description: "Built specifically for Healthcare Specialists (Doctors, Surgeons, Clinic Owners) and Educational Consultants (CAs, Lawyers, Independent Educators, Coaches).",
    focusAreas: [
      {
        title: "The 2-Hour Monthly Batching Shoot",
        desc: "You record for just 120 minutes per month following our medically/legally researched question prompts. We produce 24 to 30 high-impact shorts."
      },
      {
        title: "Local Search (GBP) Dominance",
        desc: "Optimizing your Google Business Profile with verified patient review workflows, Q&A seeding, and geo-tagged media to rank #1 locally."
      },
      {
        title: "Authority Positioning Without Hype",
        desc: "Preserving clinical and professional ethics. We never use cheap clickbait; we position you as the definitive expert in your region."
      },
      {
        title: "Inbound Consultation Routing",
        desc: "Streamlined inquiry forms, WhatsApp business automation, and appointment link embeds that turn viewers into booked consultations."
      }
    ],
    caseStudyHighlight: "Real Impact: Dr. Sanjay V. (Orthopedic Specialist) achieved a 340% increase in monthly patient consultations and a 4-month waitlist within 90 days of implementing our 2-hour batching system.",
    ctaText: "Book Practice Growth Consultation",
    ctaAction: () => {
      alert("Thank you! Our Healthcare & Professional Growth Strategist will contact you within 24 hours to schedule your 2-Hour Batching roadmap.");
      closeModal();
    }
  },

  institutions: {
    title: "Institutional Branding & Unified Footprint",
    badge: "Gateway 03 • Enterprise & Campuses",
    badgeClass: "badge-institutions",
    hook: "“Institutional branding that commands respect. Unified digital footprint across search, media, and web.”",
    description: "For Hospitals, Multi-specialty Healthcare Centers, Colleges, Schools, and Training Institutes looking for multi-departmental brand continuity and authoritative prestige.",
    focusAreas: [
      {
        title: "Multi-Staff & Faculty Brand Uniformity",
        desc: "Standardized digital footprints across all doctors, professors, and leadership to project institutional excellence."
      },
      {
        title: "Reputation Architecture & Review Management",
        desc: "Systematic local search optimization (Google Maps / GBP) across multiple campuses or hospital branches."
      },
      {
        title: "Admissions & Inpatient Conversion Portals",
        desc: "High-converting web experiences that highlight infrastructure, student achievements, clinical outcomes, and accreditations."
      }
    ],
    externalNotice: "Autobahn operates two dedicated vertical engines for deep institutional programs:",
    externalLinks: [
      {
        label: "🎓 Education Institutions (Schools & Colleges)",
        url: "https://marketing.autobahn.in",
        domain: "marketing.autobahn.in"
      },
      {
        label: "🏥 Healthcare Systems (Hospitals & Chains)",
        url: "https://marketing.medctech.com",
        domain: "marketing.medctech.com"
      }
    ],
    ctaText: "Request Institutional Audit",
    ctaAction: () => {
      alert("Institutional Request Received. An Autobahn Enterprise Director will coordinate an executive presentation.");
      closeModal();
    }
  }
};

const modalBackdrop = document.getElementById('pathway-modal');
const modalContent = document.getElementById('pathway-modal-content');
const modalCloseBtn = document.getElementById('modal-close-btn');

function initPathwayModals() {
  document.querySelectorAll('[data-open-pathway]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pathwayKey = btn.getAttribute('data-open-pathway');
      openPathwayModal(pathwayKey);
    });
  });

  document.querySelectorAll('[data-open-cohort]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPathwayModal('creators');
    });
  });

  document.querySelectorAll('[data-trigger-case-study]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPathwayModal('professionals');
    });
  });

  const spotlightBtn = document.getElementById('spotlight-apply-btn');
  if (spotlightBtn) {
    spotlightBtn.addEventListener('click', () => {
      openPathwayModal('creators');
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function openPathwayModal(key) {
  const data = pathwayData[key];
  if (!data || !modalContent) return;

  let contentHtml = `
    <div style="margin-bottom: 20px;">
      <span class="gateway-badge ${data.badgeClass}">${data.badge}</span>
      <h2 class="serif-display" style="font-size: 2rem; margin-top: 10px; color: var(--text-primary);">${data.title}</h2>
      <p style="font-size: 0.96rem; color: var(--text-secondary); margin-top: 8px;">${data.description}</p>
    </div>

    <div style="background: var(--bg-canvas-subtle); border-left: 4px solid var(--bg-forest); padding: 14px 18px; border-radius: 0 10px 10px 0; margin-bottom: 24px; font-style: italic; color: var(--text-primary); font-size: 0.94rem;">
      ${data.hook}
    </div>

    <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; color: var(--text-tertiary); margin-bottom: 12px;">Core Strategic Pillars</h4>
    <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px;">
      ${data.focusAreas.map((area, idx) => `
        <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: 12px; padding: 14px 16px;">
          <strong style="font-size: 0.95rem; color: var(--text-primary); display: block; margin-bottom: 4px;">${area.title}</strong>
          <span style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5;">${area.desc}</span>
        </div>
      `).join('')}
    </div>
  `;

  if (data.productionService) {
    contentHtml += `
      <div style="background: #F4F1EA; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
        <strong style="font-size: 0.92rem; color: var(--bg-forest); display: block; margin-bottom: 4px;">⚡ The AsBloom Fallback Desk:</strong>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${data.productionService}</p>
      </div>
    `;
  }

  if (data.caseStudyHighlight) {
    contentHtml += `
      <div style="background: #EDF7F2; border: 1px solid #C4E8D5; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
        <strong style="font-size: 0.92rem; color: #155734; display: block; margin-bottom: 4px;">📈 Case Study Snapshot:</strong>
        <p style="font-size: 0.85rem; color: #2A6C49; line-height: 1.5;">${data.caseStudyHighlight}</p>
      </div>
    `;
  }

  if (data.externalLinks) {
    contentHtml += `
      <div style="margin-bottom: 24px;">
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 10px;">${data.externalNotice}</div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${data.externalLinks.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener" class="ext-vertical-btn" style="padding: 12px 16px; font-size: 0.9rem;">
              <span>${link.label}</span>
              <span style="font-size: 0.78rem; font-weight: 700; color: #1E4E8C;">Visit Portal ↗</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  contentHtml += `
    <div style="display: flex; gap: 12px; margin-top: 20px;">
      <button class="btn btn-primary btn-full" id="modal-primary-action">${data.ctaText}</button>
    </div>
  `;

  modalContent.innerHTML = contentHtml;
  modalBackdrop.classList.add('open');

  const actionBtn = document.getElementById('modal-primary-action');
  if (actionBtn && data.ctaAction) {
    actionBtn.addEventListener('click', data.ctaAction);
  }
}

function closeModal() {
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
  }
}

// Cohort Application Form Simulation
function initCohortForm() {
  const form = document.getElementById('cohort-fast-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cohort-name').value.trim();
    const email = document.getElementById('cohort-email').value.trim();
    const category = document.getElementById('cohort-category').value;
    const handle = document.getElementById('cohort-handle').value.trim() || 'Not specified';

    const submitBtn = document.getElementById('cohort-submit-btn');
    submitBtn.innerText = 'Transmitting Application...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.innerHTML = `
        <div style="text-align: center; padding: 24px 10px;">
          <div style="width: 56px; height: 56px; background: #D7EDE0; color: #195232; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 16px;">✓</div>
          <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">Application Received, ${name}!</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 18px; line-height: 1.5;">
            Our creative team is reviewing your profile for <strong>Batch 1: From Zero to 10k</strong>. We'll send your prep materials to <strong>${email}</strong> shortly.
          </p>
          <div style="background: var(--bg-canvas-subtle); padding: 12px; border-radius: 10px; font-size: 0.82rem; color: var(--text-tertiary);">
            Applicant ID: #SB-${Math.floor(100000 + Math.random() * 900000)} • Category: ${category.toUpperCase()}
          </div>
        </div>
      `;
    }, 700);
  });
}

// Content Batching Simulator Modal
function initBatchSimulator() {
  const calcBtn = document.getElementById('btn-calc-demo');
  if (!calcBtn) return;

  calcBtn.addEventListener('click', () => {
    if (!modalContent) return;

    modalContent.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="gateway-badge badge-professionals">Interactive Production Model</span>
        <h2 class="serif-display" style="font-size: 2rem; margin-top: 10px; color: var(--text-primary);">The 2-Hour Batching System</h2>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 8px;">
          How AsBloom converts a single 120-minute recording session into 30 days of omnipresence.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 24px;">
        <div style="background: #FFF5F5; border: 1px solid #FED7D7; padding: 18px; border-radius: 14px;">
          <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: #C53030; margin-bottom: 6px;">Traditional Solo Approach</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: #9B2C2C; margin-bottom: 8px;">45+ Hours/mo</div>
          <p style="font-size: 0.82rem; color: #742A2A; line-height: 1.45;">Struggling with scripting, framing, bad audio, hours of editing cuts, captions, color grading, and manual posting.</p>
        </div>

        <div style="background: #F0FFF4; border: 1px solid #C6F6D5; padding: 18px; border-radius: 14px;">
          <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: #2F855A; margin-bottom: 6px;">AsBloom Production Engine</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: #22543D; margin-bottom: 8px;">2 Hours/mo</div>
          <p style="font-size: 0.82rem; color: #276749; line-height: 1.45;">You speak into our calibrated studio setup. Autobahn editors deliver 24-30 cut, captioned, colored, and scheduled master assets.</p>
        </div>
      </div>

      <div style="background: var(--bg-canvas-subtle); padding: 18px; border-radius: 14px; margin-bottom: 24px;">
        <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">Monthly Production Output Guarantee:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.86rem; color: var(--text-secondary);">
          <li>✨ <strong>24 High-Retention Reels & Shorts</strong> (1080x1920 60fps)</li>
          <li>✨ <strong>Google Business Profile (GBP) Media Pack</strong> (local geo-tagged photos + clip previews)</li>
          <li>✨ <strong>Full Multi-Platform Metadata</strong> (hooks, captions, hashtags, timestamps)</li>
          <li>✨ <strong>Monthly Lead Analytics Report</strong> (inquiries, views, watch-time)</li>
        </ul>
      </div>

      <button class="btn btn-primary btn-full" id="calc-modal-cta">Get Your Batching Strategy Blueprint</button>
    `;

    modalBackdrop.classList.add('open');

    const calcCta = document.getElementById('calc-modal-cta');
    if (calcCta) {
      calcCta.addEventListener('click', () => {
        closeModal();
        openPathwayModal('professionals');
      });
    }
  });
}

// Handle Direct Hash Routing (/creators, /professionals, /institutions)
function handleHashRouting() {
  const hash = window.location.hash.toLowerCase();
  if (hash === '#creators' || hash === '#pathway-creators') {
    openPathwayModal('creators');
  } else if (hash === '#professionals' || hash === '#pathway-professionals') {
    openPathwayModal('professionals');
  } else if (hash === '#institutions' || hash === '#pathway-institutions') {
    openPathwayModal('institutions');
  }

  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.toLowerCase();
    if (newHash === '#creators' || newHash === '#pathway-creators') {
      openPathwayModal('creators');
    } else if (newHash === '#professionals' || newHash === '#pathway-professionals') {
      openPathwayModal('professionals');
    } else if (newHash === '#institutions' || newHash === '#pathway-institutions') {
      openPathwayModal('institutions');
    }
  });
}
