export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  period: string;
  clientOrCompany: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  solutionOverview: string;
  keyFeatures: string[];
  businessImpact: {
    metric: string;
    label: string;
    description: string;
  }[];
  originalTechStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tooling: string[];
  };
  tags: string[];
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: "kawan-apex",
    slug: "kawan-apex-hiring-onboarding",
    title: "KAWAN APEX",
    subtitle: "Open Hiring & Employee Onboarding Platform",
    category: "Recruitment & Onboarding",
    featured: true,
    period: "2024",
    clientOrCompany: "PT Apex Mitra Prima",
    shortDescription:
      "A recruitment and employee onboarding platform developed to streamline candidate management, recruitment workflows, document verification, and employee onboarding.",
    fullDescription:
      "Kawan Apex is an enterprise-grade digital hiring and automated onboarding platform engineered for PT Apex Mitra Prima. Built from the ground up to eliminate hiring friction, it unites candidate application intakes, hiring manager review stages, automated status notifications, and digital document collection into an intuitive single pane of glass.",
    problemStatement:
      "PT Apex Mitra Prima previously handled recruitment and onboarding through fragmented spreadsheets, manual physical paperwork, and disparate chat channels. This resulted in delayed candidate turnaround times, document loss risks, and administrative overload for the HR and operations teams.",
    solutionOverview:
      "Architected a dedicated full-stack platform featuring a public-facing career portal, an administrative candidate kanban board, and a guided self-service onboarding portal. Designed a modular Node.js & Express API with Knex.js query builder and SQLite relational storage for reliable internal deployment, paired with a blazing-fast React + TypeScript frontend built on Vite and Tailwind CSS.",
    keyFeatures: [
      "Dynamic Multi-Stage Hiring Pipeline: Real-time candidate progression (Screening, Technical Interview, Executive Review, Offering, Onboarded).",
      "Automated Candidate Portal: Allows applicants to track application status in real-time without constant manual HR email inquiries.",
      "Digital Onboarding Checklist: Interactive wizard for new hires to submit compliance documents, tax IDs, and direct deposit details before Day 1.",
      "Role-Based Access Control (RBAC): Tailored permissions for Hiring Managers, Department Heads, and HR Administrators.",
      "Document Verification Engine: Automated file type validation, previewing, and secure record archiving.",
      "Audit Trail & Event Logs: Complete traceability of candidate status changes and document approvals.",
    ],
    businessImpact: [
      {
        metric: "68%",
        label: "Onboarding Time Reduction",
        description: "Reduced time spent collecting and validating new hire documents from days to hours.",
      },
      {
        metric: "100%",
        label: "Paperless Recruitment",
        description: "Completely phased out physical forms and redundant email threads for applicant data.",
      },
      {
        metric: "4.9 / 5",
        label: "Candidate & HR Rating",
        description: "Significantly elevated candidate first-impression and internal recruiter workflow.",
      },
    ],
    originalTechStack: {
      frontend: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST API", "JWT Auth"],
      database: ["SQLite", "Knex.js (Migrations & Seeds)"],
      tooling: ["Git", "Postman", "Figma", "VS Code"],
    },
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "SQLite",
      "Knex.js",
    ],
    accentColor: "#D89A5B",
  },
  {
    id: "cv-screening-system",
    slug: "cv-screening-system",
    title: "CV SCREENING SYSTEM",
    subtitle: "Candidate Qualification & Profile Parsing Engine",
    category: "System Analysis & Intelligence",
    featured: true,
    period: "2024",
    clientOrCompany: "Human Capital Optimization",
    shortDescription:
      "A digital solution for processing and screening candidate CVs based on qualifications, education, and work experience.",
    fullDescription:
      "An automated candidate evaluation system developed to parse resumes, benchmark applicant credentials against structured job descriptions, and rank candidates using rule-based algorithmic scoring.",
    problemStatement:
      "Reviewing hundreds of candidate resumes manually created significant fatigue, inconsistent scoring standards, and delayed responses to qualified talent.",
    solutionOverview:
      "Constructed a structured resume ingestion and evaluation engine that extracts candidate work histories, skills, and academic qualifications into standardized profiles with instant keyword matching and weighted criteria.",
    keyFeatures: [
      "Automated PDF & DOCX Parsing: Structured text extraction into standardized JSON talent profiles.",
      "Weighted Criterion Matching: Dynamic scorecards tailored to specific departmental job descriptions.",
      "Comparative Candidate Matrix: Side-by-side qualification comparison for hiring panels.",
      "Data Export & Integration: Synchronizes verified shortlist candidates directly into recruitment pipelines.",
    ],
    businessImpact: [
      {
        metric: "75%",
        label: "Screening Efficiency",
        description: "Cut down initial resume evaluation duration from 15 minutes to under 3 minutes per applicant.",
      },
      {
        metric: "94%",
        label: "Matching Accuracy",
        description: "Ensured standardized qualification rubrics across all hiring managers.",
      },
      {
        metric: "Zero",
        label: "Overlooked Applicants",
        description: "Every submission receives systematic analysis and structured categorization.",
      },
    ],
    originalTechStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express.js", "REST API", "PDF Extraction"],
      database: ["PostgreSQL", "Prisma ORM"],
      tooling: ["Git", "Figma", "VS Code"],
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "System Analysis"],
    accentColor: "#B8B3AA",
  },
  {
    id: "creative-works",
    slug: "creative-works-experiments",
    title: "CREATIVE WORKS",
    subtitle: "Interactive Digital Products & Design Experiments",
    category: "Design & Interaction",
    featured: true,
    period: "2023 - 2025",
    clientOrCompany: "Design Lab & Visual Research",
    shortDescription:
      "A flexible area for additional digital products, visual experiments, and design projects exploring motion and interaction.",
    fullDescription:
      "A curated collection of micro-applications, experimental web interactions, design token systems, and kinetic prototypes bridging human emotion with computational precision.",
    problemStatement:
      "Software often feels sterile when engineering ignores emotional craft. Modern web experiences require seamless physics, responsive typographic hierarchy, and delight.",
    solutionOverview:
      "Developed a series of experimental interfaces focusing on physics-based spring mechanics, 60 FPS scroll timelines, accessible color harmonies, and fluid spatial layouts.",
    keyFeatures: [
      "Kinetic Micro-Interactions: Physics-driven gestures, cursor magnetism, and organic spring curves.",
      "Design Systems & Token Architectures: Reusable UI component libraries created in Figma and coded in React.",
      "Algorithmic Data Visualizers: Interactive canvas charts for real-time data inspection.",
      "Fluid Typography & Layouts: Adaptive typographic grids scaling across mobile, tablet, and widescreen.",
    ],
    businessImpact: [
      {
        metric: "60 FPS",
        label: "Fluid Motion",
        description: "Silky hardware-accelerated animations across modern desktop and mobile browsers.",
      },
      {
        metric: "100%",
        label: "Design Consistency",
        description: "Unified token architecture translating Figma design systems directly into Tailwind CSS.",
      },
      {
        metric: "Awwwards",
        label: "Design Inspiration",
        description: "Crafted following world-class creative web aesthetics and editorial sensibilities.",
      },
    ],
    originalTechStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API", "Server Actions"],
      database: ["PostgreSQL", "SQL"],
      tooling: ["GSAP", "ScrollTrigger", "Figma", "Lenis"],
    },
    tags: ["GSAP", "ScrollTrigger", "Framer Motion", "Figma", "UI/UX Design", "Creative Problem Solver"],
    accentColor: "#75604D",
  },
];
