export interface SkillCategory {
  id: string;
  code: string;
  title: string;
  summary: string;
  items: {
    name: string;
    detail: string;
    level: string;
  }[];
}

export const SKILLS_HEADLINE = "Capabilities & Tech Stack.";
export const SKILLS_SUBTITLE =
  "A structured blend of full-stack engineering, relational database modeling, human-centered UI/UX, and modern development workflows.";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    code: "01",
    title: "Frontend Development",
    summary: "Building responsive, interactive, and type-safe web interfaces.",
    items: [
      { name: "Next.js", detail: "App Router, SSR/SSG, Server & Client Components", level: "Core" },
      { name: "React", detail: "Reusable component systems & modern hooks", level: "Advanced" },
      { name: "TypeScript", detail: "End-to-end type safety & clean interfaces", level: "Advanced" },
      { name: "Tailwind CSS", detail: "Utility-first design tokens & responsive grids", level: "Advanced" },
      { name: "Framer Motion", detail: "Scroll parallax, spring physics & micro-interactions", level: "Proficient" },
      { name: "JavaScript (ES6+)", detail: "Async DOM logic, browser APIs & state handling", level: "Advanced" },
    ],
  },
  {
    id: "backend",
    code: "02",
    title: "Backend Development",
    summary: "Designing reliable APIs, authentication flows, and server business logic.",
    items: [
      { name: "Node.js", detail: "Server-side JavaScript runtime & REST services", level: "Proficient" },
      { name: "Express.js", detail: "Modular API routing, middleware & validation", level: "Proficient" },
      { name: "Next.js API / Actions", detail: "Integrated full-stack endpoints & server handlers", level: "Proficient" },
      { name: "REST API Architecture", detail: "Structured contracts, error handling & CRUD flows", level: "Proficient" },
      { name: "Auth & RBAC", detail: "Role-based access permissions for HR & admins", level: "Applied" },
    ],
  },
  {
    id: "database",
    code: "03",
    title: "Database Management",
    summary: "Structuring normalized schemas, migrations, and dependable data pipelines.",
    items: [
      { name: "PostgreSQL", detail: "Relational modeling, constraints & structured queries", level: "Proficient" },
      { name: "SQLite", detail: "Lightweight relational storage for internal tools", level: "Proficient" },
      { name: "Knex.js", detail: "SQL query builder, schema migrations & seeding", level: "Proficient" },
      { name: "Prisma ORM", detail: "Type-safe database modeling & client queries", level: "Proficient" },
      { name: "SQL", detail: "Joins, indexing, filtering & reporting queries", level: "Proficient" },
    ],
  },
  {
    id: "ui-ux",
    code: "04",
    title: "UI/UX Design",
    summary: "Translating complex operational processes into clear, engaging user journeys.",
    items: [
      { name: "Figma", detail: "Wireframing, component libraries & visual prototypes", level: "Advanced" },
      { name: "System UI Optimization", detail: "Improving usability of internal enterprise dashboards", level: "Applied" },
      { name: "Visual Design & Branding", detail: "Posters, campaigns, corporate visual assets", level: "Proficient" },
      { name: "User Flow Mapping", detail: "Simplifying multi-step hiring and onboarding flows", level: "Applied" },
    ],
  },
  {
    id: "tools",
    code: "05",
    title: "Development Tools",
    summary: "Everyday tooling for version control, debugging, bundling, and deployment.",
    items: [
      { name: "Git & GitHub", detail: "Branching, clean commit history & repository management", level: "Proficient" },
      { name: "VS Code", detail: "Primary TypeScript & Next.js development environment", level: "Daily" },
      { name: "Vite", detail: "Fast frontend build tooling for React applications", level: "Proficient" },
      { name: "Postman", detail: "API endpoint testing & payload verification", level: "Proficient" },
      { name: "Vercel", detail: "Production builds, previews & cloud deployment", level: "Proficient" },
    ],
  },
];
