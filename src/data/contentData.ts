export interface ServicePillar {
  num: string;
  title: string;
  subtitle: string;
  deliverables: string[];
}

export interface IndustryProofBadge {
  label: string;
  iconName: string;
}

export interface IndustryConfig {
  id: 'healthcare' | 'education' | 'consulting';
  title: string;
  tagline: string;
  landingHeadline: string;
  landingDescription: string;
  cardHeadline?: string;
  cardDescription?: string;
  proofBadges: IndustryProofBadge[];
  imageUrl: string;
  landingImageUrl: string;
  quote: string;
}

export interface TailoredStrategyConfig {
  industryId: 'healthcare' | 'education' | 'consulting';
  entityType: 'expert' | 'institution';
  badge: string;
  headline: string;
  description: string;
  checklist: string[];
  organicTag: string;
  imageUrl: string;
}

export interface PartnerWorkflowStep {
  step: string;
  owner: string;
  description: string;
}

export interface PartnerRole {
  title: string;
  iconName: string;
  description: string;
}

// Approved BUILD · CREATE · PROMOTE Framework
export const SERVICE_PILLARS: ServicePillar[] = [
  {
    num: '01',
    title: 'PRESENCE',
    subtitle: 'Build your digital presence and make your business easy to find.',
    deliverables: [
      'SEO & Search Visibility',
      'Google Business Profile Optimization',
      'High-Performance Authority Website',
      'Social Media Foundation & Profiles'
    ]
  },
  {
    num: '02',
    title: 'STORYTELLING',
    subtitle: 'Create content and communication that people understand and remember.',
    deliverables: [
      'Content Strategy & Ideation',
      'Social Media Content Systems',
      'Video Production & Simplified Explainers',
      'Ad Creative & Multi-Format Assets'
    ]
  },
  {
    num: '03',
    title: 'AMPLIFY',
    subtitle: 'Put your brand in front of the right audience.',
    deliverables: [
      'Meta Ads',
      'Google Ads',
      'Influencer Collabs'
    ]
  }
];

// Industries Configuration (Screen 01, 02, 03)
export const INDUSTRIES_DATA: Record<string, IndustryConfig> = {
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare',
    tagline: 'Build Patient Trust & Grow Your Practice',
    landingHeadline: 'Healthcare',
    landingDescription: 'We help healthcare professionals and organizations build patient trust, strengthen visibility, and sustainably grow their practice.',
    cardHeadline: 'Build Trust. Share Your Expertise.',
    cardDescription: 'Create content that helps patients understand your services and get to know your practice.',
    proofBadges: [
      { label: 'Patients', iconName: 'Heart' },
      { label: 'Procedures', iconName: 'FileText' },
      { label: 'Awareness', iconName: 'Users' },
      { label: 'Growth', iconName: 'TrendingUp' }
    ],
    imageUrl: '/industry-healthcare.jpg',
    landingImageUrl: '/industry-healthcare-hero.jpg',
    quote: 'Every medical breakthrough begins with trust. We help you share clinical mastery with warmth and authority.'
  },
  education: {
    id: 'education',
    title: 'Education',
    tagline: 'Attract Students & Showcase Academic Excellence',
    landingHeadline: 'Education',
    landingDescription: 'We help schools, universities, and educators attract students, showcase academic programs, and build thought leadership.',
    cardHeadline: 'Showcase What Makes Your Institution Special.',
    cardDescription: 'Highlight your programs, faculty, campus, and learning experience to connect with students and families.',
    proofBadges: [
      { label: 'Learners', iconName: 'GraduationCap' },
      { label: 'Curricula', iconName: 'BookOpen' },
      { label: 'Reputation', iconName: 'Award' },
      { label: 'Outcomes', iconName: 'TrendingUp' }
    ],
    imageUrl: '/industry-education.jpg',
    landingImageUrl: '/edu_landing_image.png',
    quote: 'Knowledge is transformative only when it is understood. We help educators inspire a global audience.'
  },
  consulting: {
    id: 'consulting',
    title: 'Consulting',
    tagline: 'Win High-Value Clients & Build Market Authority',
    landingHeadline: 'Consulting',
    landingDescription: 'We help consultants and advisory firms build market authority, attract high-value clients, and scale their practice.',
    cardHeadline: 'Share Your Expertise. Build Your Presence.',
    cardDescription: 'Turn your knowledge, insights, and services into content that helps potential clients understand your value.',
    proofBadges: [
      { label: 'Advisory', iconName: 'Briefcase' },
      { label: 'Dealflow', iconName: 'Target' },
      { label: 'Authority', iconName: 'ShieldCheck' },
      { label: 'Valuation', iconName: 'TrendingUp' }
    ],
    imageUrl: '/industry-consulting.jpg',
    landingImageUrl: '/const2_image.png',
    quote: 'Consulting excellence is built on differentiated insights. We turn strategic methodologies into market authority.'
  }
};

// All 6 Tailored Strategy Matrix Combinations (Screen 05)
export const TAILORED_STRATEGIES: Record<string, TailoredStrategyConfig> = {
  'healthcare-expert': {
    industryId: 'healthcare',
    entityType: 'expert',
    badge: 'HEALTHCARE | EXPERT',
    headline: 'Your Expertise. A Wider Reach.',
    description: 'We create tailored strategies for doctors, surgeons, and medical specialists, so your knowledge reaches the patients and peers who need it most.',
    checklist: [
      'Professional Medical & Specialist Branding',
      'Patient Education & Preventive Care Content',
      'Video Production (Simplified Clinical Explainers)',
      'Ethical Social Media Channel Management',
      'Targeted Ad Campaigns for High-Intent Consultations',
      'Thought Leadership Articles & Clinical Publications'
    ],
    organicTag: 'Your Knowledge. More Impact.',
    imageUrl: '/doc_expert.png'
  },
  'healthcare-institution': {
    industryId: 'healthcare',
    entityType: 'institution',
    badge: 'HEALTHCARE | INSTITUTION',
    headline: 'Make Your Hospital Visible. Make Your Services Discoverable.',
    description: 'We partner with hospitals, multi-specialty clinics, and health systems to elevate institutional reputation, highlight clinical departments, and drive patient acquisition.',
    checklist: [
      'Hospital & Department Brand Architecture',
      'Doctor Directory & Specialty Video Profiles',
      'Multi-Channel Healthcare Consumer Campaigns',
      'Google Business Profile & Local Patient Search Mastery',
      'High-Converting Patient Appointment Portals',
      'Accreditation & Community Impact Showcase'
    ],
    organicTag: 'Scale Care. Inspire Trust.',
    imageUrl: '/healthcare_inst.png'
  },
  'education-expert': {
    industryId: 'education',
    entityType: 'expert',
    badge: 'EDUCATION | EXPERT',
    headline: 'Inspire Learners. Multiply Your Voice.',
    description: 'For professors, master educators, authors, and pedagogical leaders seeking to expand their intellectual influence and launch high-impact digital academies.',
    checklist: [
      'Academic & Scholar Personal Branding',
      'Curriculum-to-Content Conversion Strategies',
      'Micro-Lecture & Explainer Video Production',
      'Academic LinkedIn & Substack Publishing Channels',
      'Masterclass & Digital Course Launch Funnels',
      'Keynote & Media Placement Strategy'
    ],
    organicTag: 'Ideas That Teach. Voices That Guide.',
    imageUrl: '/edu_expert.png'
  },
  'education-institution': {
    industryId: 'education',
    entityType: 'institution',
    badge: 'EDUCATION | INSTITUTION',
    headline: 'Make Your Institution Stand Out. Reach the Right Students.',
    description: 'For universities, colleges, K-12 academies, and edtech organizations looking to attract ambitious students, foster alumni giving, and lead higher-ed discourse.',
    checklist: [
      'Student Recruitment & Enrollment Inbound Engines',
      'Campus Culture & Experiential Video Showcase',
      'Faculty Excellence & Groundbreaking Research Features',
      'Program-Specific Digital Prospectuses',
      'Targeted Open-Day Paid Media Campaigns',
      'Alumni Engagement & Foundation Storytelling'
    ],
    organicTag: 'Brighter Minds. Stronger Future.',
    imageUrl: '/institute_image.png'
  },
  'consulting-expert': {
    industryId: 'consulting',
    entityType: 'expert',
    badge: 'CONSULTING | EXPERT',
    headline: 'Turn Expertise Into Authority. Build a Brand That Blooms.',
    description: 'For consultants, founders, advisors, and ambitious professionals looking to position their expertise, build a credible digital presence, and attract high-value opportunities.',
    checklist: [
      'Strategic Brand Positioning & Expert Authority',
      'Signature Frameworks, IP & Knowledge Productization',
      'Executive Video Content & Insight-Led Storytelling',
      'LinkedIn Thought Leadership & Personal Brand Content',
      'Lead Generation & High-Value Client Acquisition',
      'Industry Content, Whitepapers & Presentation Assets'
    ],
    organicTag: 'Strategic Clarity. Unmatched Authority.',
    imageUrl: '/consulent_image.png'
  },
  'consulting-institution': {
    industryId: 'consulting',
    entityType: 'institution',
    badge: 'CONSULTING | INSTITUTION',
    headline: 'Scale Practice Impact & Enterprise Reach.',
    description: 'For consulting practices, advisory firms, and specialist agencies looking to outshine generic competitors, win RFP shortlists, and recruit premier tier-1 talent.',
    checklist: [
      'Practice Area Architecture & Market Differentiation',
      'Enterprise Case Study & Client ROI Storytelling',
      'Partner & Principal Video Thought Leadership',
      'Account-Based Marketing (ABM) Paid Ad Campaigns',
      'Annual Industry Benchmark & Trend Reports',
      'Talent Brand & Senior Consultant Recruitment'
    ],
    organicTag: 'Advisory Prestige. Sustainable Growth.',
    imageUrl: '/const_inst.png'
  }
};

// Creative Workspace / Partner Gig Information (Screen 06)
export const PARTNER_WORKFLOW_STEPS: PartnerWorkflowStep[] = [
  {
    step: '01',
    owner: 'sBLOOM',
    description: 'We secure the client, align the strategic scope, and generate the brief, production script, or editorial blog topic.'
  },
  {
    step: '02',
    owner: 'PARTNER',
    description: 'You claim the gig and execute the technical work (video editing, sound design, shooting, or brand graphics) with total creative focus.'
  },
  {
    step: '03',
    owner: 'sBLOOM',
    description: 'We handle quality control, final multi-channel deployment, client management, revisions, and ensure prompt payments.'
  }
];

export const PARTNER_ROLES: PartnerRole[] = [
  {
    title: 'Video Editors',
    iconName: 'Video',
    description: 'Short-form reel specialists, long-form documentary cutters, and rhythm-driven storytellers.'
  },
  {
    title: 'Videographers',
    iconName: 'Camera',
    description: 'On-site cinema directors and lighting experts capturing authentic doctor & executive interviews.'
  },
  {
    title: 'Designers',
    iconName: 'Palette',
    description: 'Brand identity architects, UI designers, and carousel graphic specialists.'
  },
  {
    title: 'Content Writers',
    iconName: 'FileText',
    description: 'Editorial researchers, medical copywriters, and executive thought-leadership ghostwriters.'
  },
  {
    title: 'Creative Executors',
    iconName: 'Wand2',
    description: 'Motion graphic artists, sound engineers, and creative producers managing deliverables.'
  }
];
