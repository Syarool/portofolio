export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  impact: string;
}

export interface TechnologyItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Design & Motion";
  description: string;
  proficiency: string;
}

export const EXPERTISE_HEADLINE = "Crafted With Curiosity.";
export const EXPERTISE_SUBTITLE =
  "A dedicated synthesis of business system architecture, robust web engineering, and human-centered design principles.";

export const EXPERTISE_LIST: ExpertiseItem[] = [
  {
    id: "business-systems",
    number: "01",
    title: "Business System Development",
    description:
      "Engineering custom enterprise platforms that replace disconnected spreadsheets and paper forms with cohesive, automated business systems.",
    impact: "Turn operational friction into streamlined internal workflows.",
  },
  {
    id: "web-development",
    number: "02",
    title: "Web Development",
    description:
      "Developing high-performance, accessible, and reactive web applications utilizing Next.js, React, and TypeScript with rigorous architectural standards.",
    impact: "Flawless responsiveness, high speed, and clean codebases.",
  },
  {
    id: "ui-ux-design",
    number: "03",
    title: "UI/UX Design",
    description:
      "Crafting intuitive user interfaces, comprehensive Figma wireframes, and design systems where clarity, aesthetic refinement, and ease of use meet.",
    impact: "Higher adoption rates and intuitive digital journeys.",
  },
  {
    id: "system-analysis",
    number: "04",
    title: "System Analysis",
    description:
      "Conducting in-depth audits of operational bottlenecks, data flows, and team requirements to formulate actionable technical blueprints.",
    impact: "Diagnose problems before writing a single line of code.",
  },
  {
    id: "database-management",
    number: "05",
    title: "Database Management",
    description:
      "Designing normalized relational data models, schema migrations, and secure queries across PostgreSQL and SQL engines for data integrity.",
    impact: "Bulletproof data consistency and fast retrieval.",
  },
  {
    id: "bpo",
    number: "06",
    title: "Business Process Optimization",
    description:
      "Redesigning organizational handoffs, automating recurring tasks, and reducing cycle times across hiring, onboarding, and administrative operations.",
    impact: "Measurable time and resource savings.",
  },
];

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    name: "Next.js",
    category: "Frontend",
    description: "App Router, SSR/SSG, Server Components & full-stack web architecture.",
    proficiency: "Core Framework",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Component composition, reactive state, custom hooks, and modern React 19.",
    proficiency: "Advanced",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Strict typing, interface contracts, maintainable enterprise architecture.",
    proficiency: "Advanced",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first design systems, responsive typography, and editorial styling.",
    proficiency: "Advanced",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Server runtime, asynchronous I/O, micro-services, and CLI utilities.",
    proficiency: "Proficient",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "RESTful API routes, modular controllers, and token authentication.",
    proficiency: "Proficient",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Relational modeling, indexing, transactions, and schema integrity.",
    proficiency: "Proficient",
  },
  {
    name: "Prisma",
    category: "Database",
    description: "Declarative schema modeling, type-safe queries, and automated migrations.",
    proficiency: "Proficient",
  },
  {
    name: "Figma",
    category: "Design & Motion",
    description: "Wireframing, high-fidelity prototypes, user journey mapping & design tokens.",
    proficiency: "Advanced",
  },
  {
    name: "GSAP",
    category: "Design & Motion",
    description: "ScrollTrigger timelines, multi-layer parallax choreographies & kinetic motion.",
    proficiency: "Advanced",
  },
];
