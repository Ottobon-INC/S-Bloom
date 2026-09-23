sBLOOM

FULL WEBSITE IMPLEMENTATION PLAN

Antigravity build plan • UX architecture • UI direction • step-by-step prompts

Approved visual direction / reference supplied for this implementation.

Purpose: turn the approved sBLOOM wireframe direction into a production-ready, responsive website. The design should preserve the reference's editorial character while making the two user journeys extremely clear: Client Growth and Creative Workspace.

# 1. Product Direction

sBLOOM should be implemented as an industry-focused marketing and growth partner, not as a generic agency directory. The homepage acts as a gateway. From there, visitors either enter the client journey—Industry → Expert/Institution → Tailored Strategy—or the partner journey—Creative Workspace → Gig/Partner application.

- Primary industries: Healthcare, Education, Consulting.

- Client types: individual Experts and Institutions/Organizations.

- Core service framework: BUILD · CREATE · PROMOTE.

- BUILD: SEO, Google Business Profile, Website, Social Media.

- CREATE: Content Strategy, Social Media Content, Video Production, Ad Creative.

- PROMOTE: Paid Ads, Promotions, Creator Collaborations, Audience Growth.

- Partner route: technical and creative freelancers such as editors, videographers, designers, content writers and creative executors.

- The homepage must make the two routes obvious without forcing users to read the whole page.

# 2. Approved Information Architecture

Use the following architecture as the implementation source of truth:

| Screen | Purpose |

| --- | --- |

| HOME / GATEWAY | Two primary CTAs: I’m an Expert / Institution looking to grow; Join our Creative Workspace. |

| INDUSTRY SELECTION | Healthcare / Education / Consulting. |

| INDUSTRY LANDING | Welcome to Healthcare / Education / Consulting. |

| ENTITY SELECTION | I’m an Expert / We’re an Institution. |

| TAILORED STRATEGY | Industry + entity-specific strategy, capabilities, proof and CTA. |

| CREATIVE WORKSPACE | Partner/gig page with workflow, roles and application CTA. |

The supplied PRD describes the same two-funnel architecture and a maximum three-click client route from homepage to tailored strategy. Keep that routing logic intact. fileciteturn2file0

# 3. Visual System to Reproduce

Use the attached reference as the visual benchmark, but do not copy it literally. Rebuild the design language as a flexible system.

- Overall mood: premium editorial, warm, intelligent, human and slightly artistic.

- Base: warm off-white/ivory rather than pure white.

- Primary dark: deep navy/ink for typography and navigation.

- Accent family: restrained coral/terracotta, soft lavender and muted blue.

- Use a limited palette; accents should identify interaction or category, not decorate every element.

- Typography: elegant high-contrast serif for major headlines + clean modern sans-serif for body, navigation and UI labels.

- Photography: authentic, high-quality industry imagery; avoid obvious AI-looking portraits.

- Layout: large editorial headlines, asymmetric image/text blocks, generous whitespace, rounded cards and strong grid alignment.

- Use subtle organic shapes/leaf-like forms only as supporting motifs.

- Avoid excessive gradients, glassmorphism, neon colors, excessive animation or generic SaaS dashboard styling.

- Buttons should be simple pill/rounded rectangles with clear directional arrows.

- Use micro-interactions: hover lift, image zoom, underline/arrow movement and gentle section reveal.

# 4. Responsive Rules

- Desktop: 12-column grid, large editorial hero and card-based pathways.

- Tablet: collapse to 6-column grid; preserve card hierarchy.

- Mobile: single-column flow; keep the two homepage gateway CTAs visible early.

- Industry cards become stacked or horizontally scrollable cards on mobile.

- Expert/Institution cards stack vertically on mobile.

- Do not shrink desktop typography excessively; use intentional mobile type scales.

- Navigation becomes a compact menu with a persistent primary CTA.

- Animations must respect prefers-reduced-motion.

# 5. Page-by-Page Implementation Plan

## 5.1 Home / Gateway

Purpose: immediately explain what sBLOOM does and split visitors into the correct journey.
Hero: sBLOOM brand, strong editorial headline, short supporting statement, premium visual.
Primary CTA: “I’m an Expert / Institution looking to grow”.
Secondary CTA: “Join our Creative Workspace”.
Below hero: BUILD · CREATE · PROMOTE service framework.
Then: industries we focus on, selected work/proof, short credibility section, final CTA.
The service cards must use the approved wording:
BUILD — Build your digital presence and make your business easy to find.
CREATE — Create content and communication that people understand and remember.
PROMOTE — Put your brand in front of the right audience.

## 5.2 Industry Selection

Title: “Choose your industry.”
Three large cards: Healthcare, Education, Consulting.
Each card needs image, short benefit statement and arrow.
Each card is clickable.
Use the same component for all three industries so the system is consistent.

## 5.3 Industry Landing — Healthcare / Education / Consulting

Create one reusable IndustryLanding component driven by industry data.
Hero changes by industry.
Show industry-specific context, proof/capability areas and a clear question such as “Who are you?”
Primary next action: choose Expert or Institution.
Do not duplicate page code for each industry; use shared structure + data.

## 5.4 Expert / Institution Selection

Two large cards.
Expert: individual professional building authority, visibility and personal presence.
Institution: organization showcasing capabilities, facilities, team and scale.
Cards must be visually equal in importance and fully clickable.
Selection routes to the appropriate tailored strategy page.

## 5.5 Tailored Strategy

Build a reusable StrategyPage component with industry + entity configuration.
Example: Healthcare / Expert.
Hero: expertise + wider reach.
Capabilities: professional branding, patient education content, video explainers, social media management, ad campaigns, thought leadership/content.
Show a portfolio of possibilities rather than asking users to choose a template.
Finish with a strong CTA to start a conversation / tailor strategy.

## 5.6 Creative Workspace / Partner Gig Page

Separate route from the client journey.
Headline: “Join our Creative Workspace.”
Explain that sBLOOM provides clients, briefs, storyboards and strategy while partners focus on execution.
Show workflow:
01 sBLOOM — secure client + generate brief/script/topic.
02 PARTNER — claim gig + execute technical work.
03 sBLOOM — final deployment + client management.
Show role cards: Video Editors, Videographers, Designers, Content Writers, Creative Executors.
CTA: “Apply to the Partner Workspace.”

# 6. Recommended Component & Data Architecture

Build the site as a reusable system instead of six independently coded pages.

- AppShell: global navigation, footer, page transitions.

- HeroSection: configurable headline, body, image, CTA.

- GatewayCTA: Expert/Institution and Creative Workspace actions.

- ServicePillars: BUILD / CREATE / PROMOTE.

- IndustryCard + IndustryGrid.

- IndustryHero + IndustryProofStrip.

- EntityChoiceCard + EntityChoiceGrid.

- StrategyHero + CapabilityGrid + PossibilityGallery + CTA.

- PartnerHero + GigWorkflow + RoleGrid + ApplicationCTA.

- FlowBreadcrumb/BackLink for all inner pages.

- ResponsiveFooter.

Use data objects/configuration rather than hard-coded copies. Conceptual structure:

industries = {
  healthcare: {
    title: "Healthcare",
    entityRoutes: ["expert", "institution"],
    ...
  },
  education: {...},
  consulting: {...}
}

services = {
  build: ["SEO", "Google Business Profile", "Website", "Social Media"],
  create: ["Content Strategy", "Social Media Content", "Video Production", "Ad Creative"],
  promote: ["Paid Ads", "Promotions", "Creator Collaborations", "Audience Growth"]
}

# 7. Route Map

- /

- /industries

- /industries/healthcare

- /industries/healthcare/expert

- /industries/healthcare/institution

- /industries/education

- /industries/education/expert

- /industries/education/institution

- /industries/consulting

- /industries/consulting/expert

- /industries/consulting/institution

- /creative-workspace

# 8. Antigravity Step-by-Step Build Prompts

Paste these prompts sequentially. Do not ask Antigravity to build the entire website in one pass. Each step should end with a working, reviewable state before moving to the next.

### Prompt 01 — Project foundation

You are building the sBLOOM website from the attached approved visual reference. First inspect the existing project structure and identify the framework, routing, styling system, asset pipeline and current entry points. Do not redesign anything yet. Establish a clean production-ready structure for a responsive marketing website. Create reusable components, a global layout, typography tokens, spacing tokens, color tokens, button styles and responsive breakpoints. Keep the code modular and easy to extend. Do not add unnecessary dependencies. Report what you changed and where.

### Prompt 02 — Design system

Implement the sBLOOM visual design system based on the supplied reference: premium editorial, warm off-white background, deep ink/navy typography, restrained coral/terracotta, soft lavender and muted blue accents, elegant serif display typography paired with a clean sans-serif UI font, rounded cards, generous whitespace, editorial grid, subtle organic shapes and premium photography. Do not copy the reference literally. Create reusable design tokens and components. Avoid neon colors, glassmorphism and generic SaaS styling. Make the result feel human, premium and industry-specific.

### Prompt 03 — Global navigation and shell

Build the global sBLOOM site shell: responsive header, logo treatment, navigation, primary “Let’s Talk” CTA, mobile menu, page container, footer and consistent inner-page back navigation. Keep navigation simple: Home, Services, Industries, Our Work, About. Add accessible keyboard navigation, visible focus states and semantic HTML. Do not build page-specific content yet.

### Prompt 04 — Homepage gateway

Build the sBLOOM homepage using the approved reference structure. Create a premium editorial hero with two clear gateway actions: “I’m an Expert / Institution looking to grow” and “Join our Creative Workspace”. Under the hero create BUILD · CREATE · PROMOTE using exactly these service descriptions:
BUILD — Build your digital presence and make your business easy to find. SEO, Google Business Profile, Website, Social Media.
CREATE — Create content and communication that people understand and remember. Content Strategy, Social Media Content, Video Production, Ad Creative.
PROMOTE — Put your brand in front of the right audience. Paid Ads, Promotions, Creator Collaborations, Audience Growth.
Then add industries, work/proof and a final CTA. Prioritize hierarchy and whitespace. Make the two gateway buttons real links.

### Prompt 05 — Industry selection

Create the /industries page. Title: “Choose your industry.” Present three large premium cards: Healthcare, Education and Consulting. Each card needs a relevant authentic image, concise supporting copy, hover interaction and arrow CTA. Each card must route to its correct industry landing page. Reuse the IndustryCard component. Ensure mobile usability and keyboard accessibility.

### Prompt 06 — Reusable industry landing template

Create a reusable IndustryLanding component driven by data. Build Healthcare first as the reference implementation, then configure Education and Consulting from the same component. The page should contain a hero, short industry-specific context, capability/proof strip and a clear Expert vs Institution gateway. Do not duplicate markup for each industry. Keep content configurable.

### Prompt 07 — Healthcare page

Populate the IndustryLanding component for Healthcare. Use a premium healthcare visual language without making the page look like a hospital portal. Communicate trust, expertise, patient-facing communication, visibility and growth. Include a strong “Who are you?” transition to Expert and Institution. Make both options clickable and route correctly.

### Prompt 08 — Education and Consulting pages

Now configure the same IndustryLanding component for Education and Consulting. Education should speak to institutions and experts in a credible, modern way; Consulting should speak to authority, expertise, visibility and business growth. Do not change the underlying component architecture. Verify both routes and all CTAs.

### Prompt 09 — Expert / Institution selection

Build a reusable EntitySelection page. It receives the selected industry as data and renders two equal cards: “I’m an Expert” and “We’re an Institution”. The page heading should be contextual to the selected industry. Example: “Welcome to Healthcare” followed by “Who are you?” Add appropriate imagery/icons, short descriptions and clear arrows. Route each selection to the correct strategy page.

### Prompt 10 — Tailored strategy template

Build a reusable TailoredStrategy component. It receives industry and entity type and renders: contextual hero, short value proposition, capability grid, portfolio of possibilities, proof/work area and final CTA. Do not ask users to choose a template. The experience should communicate that sBLOOM handles strategy, ideation, production and promotion around the client's expertise. Use a premium editorial layout rather than a generic service list.

### Prompt 11 — Populate all six strategy routes

Configure TailoredStrategy for all six combinations: Healthcare Expert, Healthcare Institution, Education Expert, Education Institution, Consulting Expert, Consulting Institution. Keep shared structure but tailor copy, imagery, capability labels and examples to each combination. Do not invent unsupported case-study numbers or client claims. Where proof is unavailable, use clearly labeled portfolio placeholders.

### Prompt 12 — Creative Workspace

Build /creative-workspace as a completely separate partner/gig journey. Headline: “Join our Creative Workspace.” Explain that sBLOOM provides clients, briefs, storyboards and strategy while partners focus on execution. Show the three-step workflow: 01 sBLOOM secures client and generates brief/script/topic; 02 PARTNER claims gig and executes; 03 sBLOOM handles final deployment, ad management and client relations. Add role cards for Video Editors, Videographers, Designers, Content Writers and Creative Executors. End with “Apply to the Partner Workspace”.

### Prompt 13 — Interaction polish

Add restrained micro-interactions across the site: card hover lift, image scale, arrow movement, button transitions, active navigation states, subtle section reveal and page transition. Keep motion premium and fast. Respect prefers-reduced-motion. Do not use excessive parallax or distracting animations.

### Prompt 14 — Responsive implementation

Audit every page at mobile, tablet and desktop widths. Fix overflow, spacing, typography, card stacking, navigation and image cropping. The two homepage gateway actions must remain obvious on mobile. Industry cards and Expert/Institution cards must become easy-to-scan vertical or horizontal layouts. Do not simply scale the desktop layout down; redesign the composition responsively where necessary.

### Prompt 15 — Accessibility

Perform a complete accessibility pass. Add semantic headings, landmarks, descriptive alt text, accessible buttons/links, keyboard focus states, logical tab order, sufficient contrast, reduced-motion handling and form labels. Ensure cards are not clickable only through tiny icons. Do not change the visual direction unless required for accessibility.

### Prompt 16 — SEO and metadata

Implement production SEO foundations for every route: unique title, meta description, canonical URL strategy, Open Graph metadata, descriptive headings, clean URLs, sitemap/robots configuration if appropriate, image alt text and structured internal linking. Use industry-specific page titles without keyword stuffing. Ensure each industry/entity route can be indexed independently.

### Prompt 17 — Analytics and conversion tracking

Add a clean analytics event plan without coupling the UI to a single vendor. Track: homepage expert/institution CTA click, creative workspace CTA click, industry selection, expert selection, institution selection, strategy CTA click, partner application CTA click, contact/Let's Talk click. Create a small analytics abstraction so the provider can be changed later.

### Prompt 18 — QA and final audit

Perform a production QA pass across every route and user journey. Verify all links, back buttons, browser refresh behavior, direct URL access, mobile menu, images, typography, accessibility, responsive behavior and console errors. Verify the exact flows:
Home → Industry → Entity → Tailored Strategy.
Home → Creative Workspace → Apply.
Do not change the approved design direction unless fixing a functional problem. Provide a final checklist of anything still requiring content/assets.

# 9. Content Matrix

Use this as the minimum content inventory for implementation. Final copy can be refined after manager review.

| Page | Minimum content |

| --- | --- |

| Homepage | Hero, two gateway CTAs, BUILD/CREATE/PROMOTE, industries, proof/work, final CTA |

| Healthcare | Hero, trust/patient/procedure/awareness/growth themes, Expert/Institution selection |

| Education | Hero, visibility/opportunity/education themes, Expert/Institution selection |

| Consulting | Hero, authority/leads/business impact themes, Expert/Institution selection |

| Expert strategy | Personal authority, expertise, content, social presence, promotion |

| Institution strategy | Capabilities, facilities, team, services, organizational credibility |

| Creative workspace | Partner value proposition, workflow, roles, application CTA |

# 10. Asset Plan

- sBLOOM logo in SVG/PNG.

- Primary display font and UI font, or approved web-safe alternatives.

- Healthcare imagery: professional, authentic, non-stock-looking where possible.

- Education imagery: classrooms, learning, institutional environments and educators.

- Consulting imagery: professionals, meetings, strategy and business environments.

- Creative workspace imagery: editors, designers, videographers and production setups.

- Portfolio/work thumbnails for the homepage and strategy pages.

- Simple line icons for services and entity choices.

- OG/social preview image.

# 11. Acceptance Criteria

1. A first-time visitor can understand what sBLOOM does within a few seconds.

1. The homepage clearly separates the Client journey from the Creative Workspace journey.

1. The client route is Home → Industry → Expert/Institution → Tailored Strategy.

1. Healthcare, Education and Consulting all use the same scalable architecture.

1. Expert and Institution experiences are clearly differentiated.

1. BUILD · CREATE · PROMOTE is implemented exactly as approved.

1. All primary CTAs are functional and route to real pages.

1. The site works on desktop, tablet and mobile.

1. The visual language remains premium, editorial and human.

1. No unsupported numerical claims, fake testimonials or invented case studies are presented.

1. Accessibility and SEO basics are implemented.

1. There are no console errors, broken links or obvious layout issues.

# 12. Recommended Build Order

1. Project audit and foundation.

1. Design tokens and typography.

1. Global navigation/footer.

1. Homepage.

1. Industry selection.

1. Reusable industry landing.

1. Healthcare configuration.

1. Education + Consulting configuration.

1. Expert/Institution selection.

1. Reusable strategy page.

1. Six strategy configurations.

1. Creative Workspace.

1. Interactions.

1. Responsive pass.

1. Accessibility.

1. SEO.

1. Analytics.

1. QA and deployment.

# 13. Manager Review Checkpoints

- Checkpoint 1: approve visual system + homepage gateway.

- Checkpoint 2: approve Industry Selection + Expert/Institution flow.

- Checkpoint 3: approve Healthcare strategy page before duplicating to Education and Consulting.

- Checkpoint 4: approve Creative Workspace route.

- Checkpoint 5: approve final responsive implementation and conversion CTAs.

# 14. Important Implementation Notes

The attached reference should be treated as a visual direction and UX presentation, not as a pixel-perfect specification. Preserve its hierarchy, whitespace, editorial typography, card logic and two-journey structure, but improve readability, responsiveness and accessibility during implementation.

The supplied PRD describes sBLOOM as an industry-specific growth partner with Healthcare, Education and Consulting as the target industries and separate Expert/Institution and partner-workspace funnels. It also specifies that the partner network should not be framed as an influencer/creator marketplace. fileciteturn2file0

# 15. Final One-Line Build Brief

Build sBLOOM as a premium editorial gateway: help a client choose their industry and audience type, lead them to a tailored strategy, while giving technical creative partners a separate workspace to execute the work.



