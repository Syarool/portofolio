export type ProjectStatus =
  | "Production (Internal)"
  | "Live"
  | "Completed"
  | "Active Development";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: ProjectStatus;
  featured: boolean;
  period: string;
  companyOrContext: string;
  thumbnailTheme:
    | "hiring"
    | "onboarding"
    | "satupintu"
    | "cv-screening"
    | "aqiqah-sabian"
    | "portfolio";
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  solutionOverview: string;
  keyFeatures: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tooling: string[];
  };
  tags: string[];
  liveDemoUrl: string | null;
  githubUrl: string | null;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: "kawan-apex-hiring",
    slug: "kawan-apex-open-hiring",
    title: "Kawan Apex – Open Hiring & Recruitment System",
    subtitle: "End-to-End Talent Acquisition & Applicant Tracking Platform",
    category: "Business System",
    status: "Production (Internal)",
    featured: true,
    period: "2024",
    companyOrContext: "PT. Apex Mitra Prima (Maganghub)",
    thumbnailTheme: "hiring",
    shortDescription:
      "A centralized web platform built to digitize job postings, candidate registration, recruitment stages, and hiring manager evaluations for PT. Apex Mitra Prima.",
    fullDescription:
      "Kawan Apex Open Hiring is a dedicated recruitment portal and applicant tracking system developed during the Maganghub Business System Development program at PT. Apex Mitra Prima. It connects public job applicants directly with internal HR workflows, providing structured pipeline stages and clear evaluation visibility.",
    problemStatement:
      "Recruitment workflows previously relied on scattered email attachments, manual spreadsheets, and ad-hoc chat updates, making applicant tracking slow and prone to missed follow-ups.",
    solutionOverview:
      "Built a full-stack recruitment platform with a responsive public career portal and an internal recruiter dashboard featuring multi-stage candidate progression, structured screening notes, and automated database persistence.",
    keyFeatures: [
      "Public Career Portal with structured role requirements and streamlined application intake",
      "Multi-stage Applicant Tracking Pipeline (Applied, Screening, Interview, Final Review, Hired)",
      "Recruiter & Hiring Manager assessment views with status history",
      "Automated validation for candidate profiles and uploaded CV documents",
      "Role-based access permissions for HR and departmental reviewers",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST API"],
      database: ["SQLite", "Knex.js"],
      tooling: ["Git", "Figma", "VS Code"],
    },
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "SQLite", "Knex.js"],
    liveDemoUrl: null,
    githubUrl: null,
    accentColor: "#D89A5B",
  },
  {
    id: "kawan-apex-onboarding",
    slug: "kawan-apex-employee-onboarding",
    title: "Kawan Apex – Employee Onboarding System",
    subtitle: "Paperless New-Hire Transition & Compliance Verification Portal",
    category: "Business System",
    status: "Production (Internal)",
    featured: true,
    period: "2024",
    companyOrContext: "PT. Apex Mitra Prima (Maganghub)",
    thumbnailTheme: "onboarding",
    shortDescription:
      "A guided digital onboarding ecosystem automating new employee document collection, compliance checklists, and pre-day-one readiness.",
    fullDescription:
      "Designed as the seamless continuation of the Kawan Apex ecosystem, the Employee Onboarding System transforms how newly hired candidates transition into active employees by replacing paper checklists and manual document verification with an interactive self-service portal.",
    problemStatement:
      "New hires previously faced repetitive physical paperwork, slow manual ID/tax verification across departments, and unclear onboarding milestones prior to starting.",
    solutionOverview:
      "Engineered a step-by-step onboarding portal integrated with structured relational records, allowing HR teams to verify compliance documents digitally and track readiness in real time.",
    keyFeatures: [
      "Interactive step-by-step onboarding checklist for newly accepted candidates",
      "Digital upload and HR verification flow for identity, tax, and administrative documents",
      "Automated progress tracking from offer acceptance to Day-1 readiness",
      "Centralized employee initialization records linked directly from hiring data",
      "Clean, responsive UI designed to reduce candidate confusion",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST API"],
      database: ["SQLite", "Knex.js"],
      tooling: ["Git", "Figma", "Postman"],
    },
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "SQLite", "Knex.js"],
    liveDemoUrl: null,
    githubUrl: null,
    accentColor: "#7CE0D3",
  },
  {
    id: "satupintu-kawan-apex",
    slug: "satupintu-kawan-apex",
    title: "SatuPintu Kawan Apex – Employee Management System",
    subtitle: "Unified Internal Employee Directory & Operational Monitoring Hub",
    category: "Enterprise Platform",
    status: "Production (Internal)",
    featured: true,
    period: "2024 - 2025",
    companyOrContext: "PT. Apex Mitra Prima (Maganghub)",
    thumbnailTheme: "satupintu",
    shortDescription:
      "A single-portal employee management system centralizing employee records, internal monitoring, and operational HR coordination.",
    fullDescription:
      "SatuPintu Kawan Apex serves as the unified internal workspace (one-door gateway) for managing active employee profiles, monitoring administrative status, and streamlining internal business processes within PT. Apex Mitra Prima.",
    problemStatement:
      "Employee records and departmental status tracking were distributed across disconnected files, creating friction during administrative audits and operational monitoring.",
    solutionOverview:
      "Developed a centralized employee management portal consolidating employee data, departmental mapping, and system monitoring dashboards under one consistent architecture.",
    keyFeatures: [
      "Centralized Employee Master Data directory with fast search and filtering",
      "Operational & administrative status monitoring dashboard",
      "Seamless data continuity from Kawan Apex Onboarding records",
      "Structured relational schema ensuring consistent employee history",
      "UI/UX optimization tailored for daily HR and management workflows",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST API"],
      database: ["SQLite", "PostgreSQL", "Knex.js"],
      tooling: ["Git", "Figma", "VS Code"],
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "System Monitoring"],
    liveDemoUrl: null,
    githubUrl: null,
    accentColor: "#E8B059",
  },
  {
    id: "cv-screening-system",
    slug: "cv-screening-candidate-filtering",
    title: "CV Screening & Candidate Filtering System",
    subtitle: "Qualification Benchmarking & Automated Resume Filtering Tool",
    category: "System Analysis & Automation",
    status: "Completed",
    featured: true,
    period: "2024",
    companyOrContext: "Human Capital Process Optimization",
    thumbnailTheme: "cv-screening",
    shortDescription:
      "A digital filtering system designed to parse, evaluate, and shortlist candidate CVs based on role qualifications, education, and experience criteria.",
    fullDescription:
      "Built to accelerate early-stage candidate screening, this system extracts key qualification attributes from incoming resumes and evaluates applicants against structured job requirements, enabling recruiters to focus quickly on high-fit talent.",
    problemStatement:
      "Manual review of high-volume CV submissions led to screening fatigue, inconsistent evaluation rubrics, and bottlenecks when shortlisting qualified applicants.",
    solutionOverview:
      "Created a rule-based qualification parser and candidate filtering dashboard that categorizes resumes by skills, education background, and relevant experience criteria.",
    keyFeatures: [
      "Automated extraction and structuring of applicant qualification metadata",
      "Multi-criteria filtering by education level, experience years, and core skills",
      "Structured qualification matching checklist for faster HR shortlisting",
      "Clean side-by-side applicant comparison table",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Next.js API", "Document Parsing"],
      database: ["PostgreSQL", "Prisma"],
      tooling: ["Git", "VS Code", "Figma"],
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Filtering"],
    liveDemoUrl: null,
    githubUrl: null,
    accentColor: "#A78BFA",
  },
  {
    id: "digital-invitation-aqiqah-sabian",
    slug: "digital-invitation-aqiqah-sabian",
    title: "Digital Invitation – Aqiqah Sabian",
    subtitle: "Interactive Mobile-First Digital Event Invitation",
    category: "Web Experience",
    status: "Completed",
    featured: true,
    period: "2024",
    companyOrContext: "Event Web Design & Development",
    thumbnailTheme: "aqiqah-sabian",
    shortDescription:
      "An interactive, mobile-optimized digital invitation website featuring personalized guest greetings, schedule details, location guide, and wishes wall.",
    fullDescription:
      "A bespoke digital event invitation crafted for the Aqiqah celebration of Sabian. Engineered with warm visual storytelling, smooth entrance transitions, effortless mobile navigation, and interactive guest attendance & prayer notes.",
    problemStatement:
      "Traditional printed invitations are static, costly to distribute across distant relatives, and cannot provide instant map navigation or dynamic guest wishes.",
    solutionOverview:
      "Designed and built a fast, mobile-first digital invitation web app with custom visual framing, clear event schedule cards, Google Maps integration, and interactive guestbook feedback.",
    keyFeatures: [
      "Personalized guest greeting parameter support via URL",
      "Smooth section transitions and mobile-friendly single-hand layout",
      "Event countdown, schedule breakdown, and venue navigation link",
      "Interactive guest wishes and RSVP confirmation section",
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Next.js API Routes"],
      database: ["Static / JSON Storage"],
      tooling: ["Figma", "Git", "VS Code"],
    },
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
    liveDemoUrl: null,
    githubUrl: null,
    accentColor: "#6EE7B7",
  },
  {
    id: "personal-portfolio-website",
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    subtitle: "Interactive Pixel Space Developer Portfolio & Case Study Showcase",
    category: "Web & Creative Dev",
    status: "Live",
    featured: true,
    period: "2025",
    companyOrContext: "Personal Brand — Syahrul Ramadhana",
    thumbnailTheme: "portfolio",
    shortDescription:
      "A modern pixel-art space developer portfolio featuring interactive astronaut & planet parallax animations, data-driven project architecture, and responsive design.",
    fullDescription:
      "Designed and built to showcase both business system engineering depth and creative frontend execution. Combines a custom animated pixel-art cosmos (moving astronaut, orbiting planets, multi-depth starfields) with clean charcoal editorial readability and App Router performance.",
    problemStatement:
      "Conventional developer portfolios often feel generic and fail to communicate both enterprise problem-solving depth and visual creativity.",
    solutionOverview:
      "Engineered a modular Next.js App Router site pairing Framer Motion parallax physics, bespoke crisp-edge pixel art scenes, data-driven case studies, and accessible UI across devices.",
    keyFeatures: [
      "Interactive 16-bit Pixel Art Space hero with animated astronaut and orbiting planets",
      "Multi-layer scroll parallax & cursor reactivity respecting prefers-reduced-motion",
      "Data-driven project architecture with 3D hover cards and full specification modal",
      "Curated Creative Works visual gallery with category filtering and lightbox view",
      "Self-hosted Next.js fonts and optimized asset delivery",
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      backend: ["Next.js App Router"],
      database: ["Data-Driven Static Configuration"],
      tooling: ["Git", "GitHub", "Vercel", "VS Code"],
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Pixel Art", "Vercel"],
    liveDemoUrl: "https://syahrulramadhana-portfolio.vercel.app",
    githubUrl: "https://github.com/Syarool/portofolio",
    accentColor: "#F59E0B",
  },
];
