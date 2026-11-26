export type CreativeCategory =
  | "All"
  | "Poster Design"
  | "Recruitment Campaign"
  | "Safety Awareness"
  | "Corporate Branding"
  | "Event Design";

export interface CreativeWorkItem {
  id: string;
  title: string;
  category: Exclude<CreativeCategory, "All">;
  year: string;
  description: string;
  context: string;
  tools: string[];
  palette: [string, string, string];
  motif: "poster" | "recruitment" | "safety" | "branding" | "event";
}

export const CREATIVE_CATEGORIES: CreativeCategory[] = [
  "All",
  "Poster Design",
  "Recruitment Campaign",
  "Safety Awareness",
  "Corporate Branding",
  "Event Design",
];

export const CREATIVE_WORKS: CreativeWorkItem[] = [
  {
    id: "cw-recruitment-campaign",
    title: "Kawan Apex — Open Hiring Visual Series",
    category: "Recruitment Campaign",
    year: "2024",
    context: "PT. Apex Mitra Prima Recruitment Drive",
    description:
      "Series of crisp recruitment visual announcements and role highlight cards designed to attract candidates clearly while reflecting modern corporate identity.",
    tools: ["Figma", "Visual Hierarchy", "Typography"],
    palette: ["#10100F", "#D89A5B", "#F5F1E8"],
    motif: "recruitment",
  },
  {
    id: "cw-safety-awareness",
    title: "Workplace HSE & Safety Awareness Posters",
    category: "Safety Awareness",
    year: "2024",
    context: "Operational Safety Communication",
    description:
      "High-contrast safety awareness signage and digital bulletin posters built for rapid readability, hazard awareness, and daily operational compliance.",
    tools: ["Figma", "Iconography", "Grid Systems"],
    palette: ["#161513", "#F59E0B", "#EF4444"],
    motif: "safety",
  },
  {
    id: "cw-corporate-branding",
    title: "Internal System & Corporate Brand Kit",
    category: "Corporate Branding",
    year: "2024",
    context: "PT. Apex Mitra Prima Digital Ecosystem",
    description:
      "Cohesive visual language, badge iconography, color tokens, and UI presentation templates unifying Kawan Apex and SatuPintu internal portals.",
    tools: ["Figma", "Design Tokens", "Brand Identity"],
    palette: ["#141418", "#7CE0D3", "#F5F1E8"],
    motif: "branding",
  },
  {
    id: "cw-poster-design",
    title: "Editorial & Technology Showcase Posters",
    category: "Poster Design",
    year: "2024 - 2025",
    context: "Visual Exploration & Typography Lab",
    description:
      "Experimental graphic posters exploring modular Swiss grids, retro pixel typography, and atmospheric dark-mode contrast.",
    tools: ["Figma", "Pixel Typography", "Layout Grid"],
    palette: ["#0F0D18", "#A78BFA", "#F5F1E8"],
    motif: "poster",
  },
  {
    id: "cw-event-design",
    title: "Event Key Visuals & Digital Invitation Suite",
    category: "Event Design",
    year: "2024",
    context: "Community & Milestone Celebrations",
    description:
      "Custom digital banners, social invitation cards, and event visual identities including celebratory stationery for Aqiqah Sabian.",
    tools: ["Figma", "Illustration", "Motion Layout"],
    palette: ["#101816", "#6EE7B7", "#F5F1E8"],
    motif: "event",
  },
];
