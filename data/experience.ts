export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  program?: string;
  location: string;
  summary: string;
  keyContributions: string[];
  focusAreas: string[];
  skills: string[];
  isCurrent: boolean;
}

export const EXPERIENCE_HEADLINE = "Experience & Impact.";
export const EXPERIENCE_SUBTITLE =
  "Hands-on experience bridging operational business needs and software engineering to modernize internal workflows.";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "apex-maganghub",
    year: "2024 - 2025",
    role: "Business System Development",
    company: "PT. Apex Mitra Prima",
    program: "Maganghub",
    location: "Indonesia",
    summary:
      "Contributed to enterprise business system development through the Maganghub program, focusing on digitizing human capital workflows, developing recruitment and onboarding platforms, monitoring internal systems, and elevating UI/UX usability.",
    focusAreas: [
      "Open Hiring System (Kawan Apex)",
      "Employee Onboarding System",
      "System Monitoring & Management (SatuPintu)",
      "UI/UX Optimization",
      "Business Process Digitalization",
    ],
    keyContributions: [
      "Developed Kawan Apex Open Hiring & Recruitment System to replace scattered manual spreadsheets with an integrated multi-stage candidate pipeline.",
      "Built the Kawan Apex Employee Onboarding System, digitizing document submission, compliance checklists, and pre-day-one readiness.",
      "Contributed to SatuPintu Kawan Apex for centralized employee management, operational tracking, and system monitoring.",
      "Optimized internal dashboard UI/UX layouts to streamline daily HR and departmental review tasks.",
      "Analyzed manual administrative workflows and drove end-to-end business process digitalization across hiring and onboarding.",
    ],
    skills: [
      "Open Hiring System",
      "Employee Onboarding",
      "System Monitoring",
      "UI/UX Optimization",
      "Process Digitalization",
      "React & TypeScript",
      "Node.js & Express",
      "SQLite & Knex.js",
    ],
    isCurrent: false,
  },
  {
    id: "independent-web-dev",
    year: "2023 - Present",
    role: "Business System & Web Developer",
    company: "Independent Projects & Creative Practice",
    location: "Remote / Indonesia",
    summary:
      "Designing and engineering modern web applications, screening utilities, digital event invitations, and visual communication assets using Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    focusAreas: [
      "Full-Stack Web Apps",
      "CV Filtering Systems",
      "Interactive Digital Invitations",
      "Visual & Brand Design",
    ],
    keyContributions: [
      "Architected responsive web applications utilizing Next.js App Router, TypeScript, and Framer Motion.",
      "Built the CV Screening & Candidate Filtering System concept to standardize qualification benchmarking.",
      "Created Digital Invitation – Aqiqah Sabian with interactive mobile-first storytelling and guest engagement features.",
      "Produced visual communication deliverables spanning recruitment campaigns, corporate branding, posters, and safety awareness visuals.",
    ],
    skills: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "PostgreSQL & Prisma",
      "UI/UX & Graphic Design",
    ],
    isCurrent: true,
  },
];
