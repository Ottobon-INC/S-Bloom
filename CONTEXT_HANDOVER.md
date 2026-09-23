# sBLOOM - Project Context & Handover Document

## 1. Project Overview

sBLOOM is an industry-focused marketing and growth partner, acting as a gateway rather than a generic agency directory. The platform is designed with a premium, editorial visual direction that maintains two extremely clear user journeys: Client Growth and Creative Workspace.

### Core Service Framework (BUILD · CREATE · PROMOTE)
- **BUILD:** SEO, Google Business Profile, Website, Social Media.
- **CREATE:** Content Strategy, Social Media Content, Video Production, Ad Creative.
- **PROMOTE:** Paid Ads, Promotions, Creator Collaborations, Audience Growth.

---

## 2. User Flow & Journeys

The platform routes users through two primary funnels starting from the Homepage:

### Journey A: The Client Route
Targeting individual Experts and Institutions/Organizations in Healthcare, Education, and Consulting.

1. **Home / Gateway:** User selects "I’m an Expert / Institution looking to grow"
2. **Industry Selection (`/industries`):** User chooses Healthcare, Education, or Consulting.
3. **Industry Landing (`/industries/:industry`):** Contextual page for the chosen industry.
4. **Entity Selection (`/industries/:industry/entity`):** User selects either "I’m an Expert" or "We’re an Institution".
5. **Tailored Strategy (`/industries/:industry/:entity`):** Displays a highly contextualized strategy with capabilities, proof, and a final CTA to start a conversation.

### Journey B: The Partner Route
Targeting technical and creative freelancers (editors, videographers, designers, content writers).

1. **Home / Gateway:** User selects "Join our Creative Workspace"
2. **Creative Workspace (`/creative-workspace`):** Details the workflow (sBLOOM secures client -> Partner executes -> sBLOOM deploys).
3. **Partner Apply (`/creative-workspace/apply`):** Application form to join the partner network.

---

## 3. Codebase Structure & Technology Stack

**Tech Stack:** React (TypeScript) + Vite + CSS (Vanilla/Custom Design System)

The architecture is highly component-driven to avoid duplicating pages for different industries and entities. Data configurations power the dynamic rendering of pages.

**Directory Overview:**
- `/src/pages/`: Contains all main route components.
  - `HomePage.tsx`: The main gateway.
  - `IndustrySelectionPage.tsx`, `IndustryLandingPage.tsx`: Dynamic industry routing.
  - `EntitySelectionPage.tsx`, `TailoredStrategyPage.tsx`: Dynamic entity-based content routing.
  - `PartnerWorkspacePage.tsx`, `PartnerApplyPage.tsx`: The freelancer workspace funnel.
  - `AboutPage.tsx`, `ServicesPage.tsx`, `ContactPage.tsx`: Standard informational pages.
- `/src/components/`: Reusable UI components (Hero Sections, Cards, Navigation, Footer).
- `/src/data/`: Centralized configuration objects that power dynamic pages (e.g., industry text, capabilities).
- `/src/index.css`: Contains the global design tokens, typography (serif/sans-serif mix), color variables (off-white, navy, terracotta, lavender, muted blue), and responsive grid setup.

---

## 4. Visual Design & Aesthetics Rules

- **Overall Mood:** Premium editorial, warm, intelligent, human.
- **Base Color:** Warm off-white/ivory.
- **Primary Text Color:** Deep navy/ink.
- **Accents:** Restrained coral/terracotta, soft lavender, and muted blue (used for interaction, not decoration).
- **Typography:** Elegant high-contrast serif for major headlines; clean modern sans-serif for body/UI labels.
- **Avoid:** Neon colors, generic SaaS dashboard styling, glassmorphism, or excessive animations.
- **Interactions:** Subtle hover lifts, image zoom, gentle section reveals (respecting `prefers-reduced-motion`).

---

## 5. Maintenance & Update SOP

If any changes are made to the codebase, follow these procedures to maintain consistency:

### 1. Adding a New Industry
- Do not create a new page component.
- Open the relevant configuration file in `/src/data/` (e.g., `industries.ts`).
- Add the new industry key with its associated text, capabilities, and image references. The `IndustryLandingPage` and `TailoredStrategyPage` will automatically render it.

### 2. Updating Services or Capabilities
- Update the centralized data objects. Do not hardcode new text into components directly. Keep the `BUILD · CREATE · PROMOTE` framework intact.

### 3. Styling Changes
- All new styling must adhere to the design system in `index.css`.
- Use existing CSS variables for colors, typography, and spacing.
- Ensure desktop (12-column grid), tablet (6-column grid), and mobile (single column) breakpoints are respected.

### 4. Updating this Context Document
- **MANDATORY:** If architectural changes are made, new routes are added, or core dependencies change, this `CONTEXT_HANDOVER.md` file MUST be updated in the same pull request/commit to reflect the current state of truth.

---

## 6. Available Context & Reference Documents
- **`sBLOOM_Antigravity_Full_Implementation_Plan.md`**: Found in the project root. This contains the original 15-step prompt breakdown, product direction, and exact content matrix used to build the site. It is the ultimate source of truth for the project's original intent.
- **Development Server:** Run `npm run dev` to start the local Vite server.
