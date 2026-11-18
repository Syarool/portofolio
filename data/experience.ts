export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  keyContributions: string[];
  skills: string[];
  isCurrent: boolean;
}

export const EXPERIENCE_HEADLINE = "The Journey So Far.";
export const EXPERIENCE_SUBTITLE =
  "A timeline of hands-on technical contributions, enterprise software deployment, and continuous exploration in digital systems.";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "apex-intern",
    year: "2024",
    role: "Business System Development Intern",
    company: "PT Apex Mitra Prima",
    location: "Indonesia",
    summary:
      "Spearheaded business systems analysis and full-stack software development to modernize recruitment and employee transition workflows, culminating in the deployment of the Kawan Apex platform.",
    keyContributions: [
      "Conceived, architected, and delivered 'Kawan Apex' — a comprehensive Open Hiring & Employee Onboarding digital ecosystem.",
      "Conducted extensive system analysis and business process optimization (BPO) reviews across internal HR and departmental handoffs.",
      "Phased out paper-based forms and fragmented spreadsheets, establishing a 100% paperless onboarding workflow.",
      "Engineered relational database schemas with Knex.js migrations and SQLite/PostgreSQL for secure, reliable record management.",
      "Designed user-centric, accessible interfaces in Figma, translating them into responsive, type-safe React components.",
    ],
    skills: [
      "Kawan Apex Platform",
      "Business System Development",
      "Recruitment Workflow Optimization",
      "User Experience Improvements",
      "System Analysis",
      "Database Architecture",
      "Process Modernization",
    ],
    isCurrent: false,
  },
  {
    id: "independent-dev",
    year: "2023 - Present",
    role: "Web Developer & Systems Consultant",
    company: "Independent Practice",
    location: "Remote / Indonesia",
    summary:
      "Partnering with businesses and forward-thinking teams to architect responsive digital platforms, custom internal tools, and fluid interactive web experiences.",
    keyContributions: [
      "Developed custom web applications utilizing Next.js, React, TypeScript, and modern styling architectures.",
      "Engineered cinematic animation timelines and kinetic scrolling interactions with GSAP and Motion.",
      "Consulted on database structuring and digital workflow transition to help growing organizations eliminate operational bottlenecks.",
    ],
    skills: [
      "Next.js App Router",
      "TypeScript",
      "GSAP Motion Design",
      "Digital Product Strategy",
      "Tailwind CSS",
      "Creative Problem Solving",
    ],
    isCurrent: true,
  },
];
