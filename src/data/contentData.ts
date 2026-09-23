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
    title: 'BUILD',
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
    title: 'CREATE',
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
    title: 'PROMOTE',
    subtitle: 'Put your brand in front of the right audience.',
    deliverables: [
      'Targeted Paid Ad Campaigns',
      'Strategic Promotion Launches',
      'Creator & Subject-Matter Collaborations',
      'Systematic Audience & Practice Growth'
    ]
  }
];

// Industries Configuration (Screen 01, 02, 03)
export const INDUSTRIES_DATA: Record<string, IndustryConfig> = {
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare',
    tagline: 'More trust. More patients. A stronger presence.',
    landingHeadline: 'Healthcare',
    landingDescription: 'We understand your world. From patient trust to practice growth, we create strategies that make your expertise more visible and more valuable.',
    proofBadges: [
      { label: 'Patients', iconName: 'Heart' },
      { label: 'Procedures', iconName: 'FileText' },
      { label: 'Awareness', iconName: 'Users' },
      { label: 'Growth', iconName: 'TrendingUp' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85',
    landingImageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85',
    quote: 'Every medical breakthrough begins with trust. We help you share clinical mastery with warmth and authority.'
  },
  education: {
    id: 'education',
    title: 'Education',
    tagline: 'More visibility. More opportunities. A brighter future.',
    landingHeadline: 'Education',
    landingDescription: 'We illuminate academic rigor and innovative pedagogy. From prospective student enrollment to faculty thought leadership, we turn complex curricula into compelling narratives.',
    proofBadges: [
      { label: 'Learners', iconName: 'GraduationCap' },
      { label: 'Curricula', iconName: 'BookOpen' },
      { label: 'Reputation', iconName: 'Award' },
      { label: 'Outcomes', iconName: 'TrendingUp' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=85',
    landingImageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85',
    quote: 'Knowledge is transformative only when it is understood. We help educators inspire a global audience.'
  },
  consulting: {
    id: 'consulting',
    title: 'Consulting',
    tagline: 'More authority. More business. A wider impact.',
    landingHeadline: 'Consulting',
    landingDescription: 'High-stakes advisory requires unassailable credibility. We help management consultants and strategic advisory firms productize their intellectual property and win enterprise mandates.',
    proofBadges: [
      { label: 'Advisory', iconName: 'Briefcase' },
      { label: 'Dealflow', iconName: 'Target' },
      { label: 'Authority', iconName: 'ShieldCheck' },
      { label: 'Valuation', iconName: 'TrendingUp' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85',
    landingImageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85',
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
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85'
  },
  'healthcare-institution': {
    industryId: 'healthcare',
    entityType: 'institution',
    badge: 'HEALTHCARE | INSTITUTION',
    headline: 'Institutional Scale. Uncompromised Care.',
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
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85'
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
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85'
  },
  'education-institution': {
    industryId: 'education',
    entityType: 'institution',
    badge: 'EDUCATION | INSTITUTION',
    headline: 'Empower Next-Generation Learning.',
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
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85'
  },
  'consulting-expert': {
    industryId: 'consulting',
    entityType: 'expert',
    badge: 'CONSULTING | EXPERT',
    headline: 'High-Trust Authority for Elite Advisors.',
    description: 'For independent management consultants, executive coaches, and boutique founders seeking to command premium retainer fees and attract board-level clients.',
    checklist: [
      'Executive Brand & C-Suite Advisory Positioning',
      'Proprietary Framework & IP Productization',
      'Executive Video Briefings & Insight Breakdowns',
      'LinkedIn Thought Leadership & Executive Ghostwriting',
      'High-Ticket Client Inbound Funnels',
      'Industry Whitepapers & Keynote Presentation Kits'
    ],
    organicTag: 'Strategic Clarity. Unmatched Authority.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85'
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
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85'
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
