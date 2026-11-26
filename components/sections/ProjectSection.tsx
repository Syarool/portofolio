"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { PROJECTS, Project } from "@/data/projects";
import RevealOnScroll from "../animations/RevealOnScroll";
import ProjectModal from "../ui/ProjectModal";
import ProjectThumbnail from "../ui/ProjectThumbnail";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Eye, ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";

function ProjectCard3D({
  project,
  index,
  onInspect,
}: {
  project: Project;
  index: number;
  onInspect: (project: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 220,
    damping: 22,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const allTech = [
    ...project.techStack.frontend,
    ...project.techStack.backend,
    ...project.techStack.database,
  ];

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 900,
        rotateX: prefersReduced ? 0 : rotateX,
        rotateY: prefersReduced ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group pixel-box bg-[#141419] flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Bespoke Project Thumbnail */}
        <ProjectThumbnail
          theme={project.thumbnailTheme}
          accentColor={project.accentColor}
        />

        {/* Card Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Category & Project Status */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
            <span className="text-[#B8B3AA] uppercase tracking-wider">
              0{index + 1} · {project.category}
            </span>
            <span
              className="px-2 py-0.5 border font-bold uppercase"
              style={{
                borderColor: `${project.accentColor}66`,
                color: project.accentColor,
                backgroundColor: `${project.accentColor}16`,
              }}
            >
              {project.status}
            </span>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#F5F1E8] group-hover:text-[#D89A5B] transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#B8B3AA] font-light leading-relaxed line-clamp-3">
              {project.shortDescription}
            </p>
          </div>

          {/* Compact Problem & Solution Preview */}
          <div className="border border-[#F5F1E8]/10 bg-[#0D0D10]/75 p-3 space-y-1.5 text-[11px] font-mono">
            <div>
              <span className="text-[#D89A5B] font-bold">PROBLEM: </span>
              <span className="text-[#B8B3AA] line-clamp-1">
                {project.problemStatement}
              </span>
            </div>
            <div>
              <span className="text-[#7CE0D3] font-bold">SOLUTION: </span>
              <span className="text-[#B8B3AA] line-clamp-1">
                {project.solutionOverview}
              </span>
            </div>
          </div>

          {/* Technology Stack Pills */}
          <div className="flex flex-wrap gap-1.5">
            {allTech.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] px-2 py-0.5 border border-[#F5F1E8]/12 bg-[#0D0D10] text-[#F5F1E8]/85"
              >
                {tech}
              </span>
            ))}
            {allTech.length > 6 && (
              <span className="font-mono text-[10px] px-2 py-0.5 text-[#D89A5B]">
                +{allTech.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#F5F1E8]/8 flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onInspect(project)}
          className="inline-flex items-center gap-1.5 font-pixel text-xs font-bold text-[#F5F1E8] hover:text-[#D89A5B] transition-colors cursor-pointer"
        >
          <Eye className="h-3.5 w-3.5 text-[#D89A5B]" />
          <span>CASE STUDY &amp; SPECS</span>
        </button>

        {/* Honest Links — only render verified Live Demo / GitHub links */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 border border-[#F5F1E8]/20 bg-[#0D0D10] px-2.5 py-1 font-mono text-[10px] text-[#F5F1E8] hover:border-[#D89A5B] hover:text-[#D89A5B] transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon className="h-3 w-3" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 border border-[#7CE0D3]/40 bg-[#7CE0D3]/10 px-2.5 py-1 font-mono text-[10px] text-[#7CE0D3] hover:bg-[#7CE0D3] hover:text-[#0D0D10] transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <span>Live</span>
              <ExternalLink className="h-2.5 w-2.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-[#0D0D10] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-[450px] w-[450px] rounded-full bg-[#D89A5B]/5 blur-[150px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -left-4 top-8 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        04 // WORK
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#F5F1E8]/10">
          <RevealOnScroll direction="up">
            <div className="space-y-3">
              <span className="pixel-badge">
                <Layers className="h-3 w-3" />
                04 // FEATURED PROJECTS
              </span>
              <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
                FEATURED SYSTEMS &amp; WEB PROJECTS<span className="text-[#D89A5B]">.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#B8B3AA] max-w-md font-light leading-relaxed">
              Six data-driven case studies spanning enterprise recruitment, employee onboarding,
              internal HR management, CV filtering, event web experiences, and creative web systems.
            </p>
          </RevealOnScroll>
        </div>

        {/* 6 Featured Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {PROJECTS.map((project, idx) => (
            <ProjectCard3D
              key={project.id}
              project={project}
              index={idx}
              onInspect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Full Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
