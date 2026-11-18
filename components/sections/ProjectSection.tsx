"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS, Project } from "@/data/projects";
import RevealOnScroll from "../animations/RevealOnScroll";
import ProjectModal from "../ui/ProjectModal";
import { ArrowUpRight, Layers, Eye } from "lucide-react";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#10100F] text-[#F5F1E8] overflow-hidden border-t border-[#F5F1E8]/6"
    >
      {/* Ambient glow left */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-[#D89A5B]/5 blur-[150px]" />

      {/* Ghost number */}
      <div
        className="pointer-events-none absolute -left-4 top-12 select-none section-ghost-number"
        aria-hidden="true"
      >
        02
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#F5F1E8]/10">
          <RevealOnScroll direction="up">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#D89A5B]" />
                <span className="text-xs uppercase tracking-widest text-[#D89A5B] font-semibold">
                  Selected Works
                </span>
              </div>
              <h2 className="font-serif-headline text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#F5F1E8]">
                Things I&apos;ve Built.
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#B8B3AA] max-w-sm font-light leading-relaxed">
              A curated collection of mission-critical business platforms, qualification engines, and experimental digital products.
            </p>
          </RevealOnScroll>
        </div>

        {/* Project Selector Navigation */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-3 px-5 py-3 rounded-full text-left transition-all whitespace-nowrap ${
                activeTab === idx
                  ? "bg-[#F5F1E8] text-[#10100F]"
                  : "border border-[#F5F1E8]/10 text-[#B8B3AA] hover:border-[#F5F1E8]/30 hover:text-[#F5F1E8]"
              }`}
            >
              <span
                className={`font-serif-headline text-sm font-light ${
                  activeTab === idx ? "text-[#D89A5B]" : ""
                }`}
              >
                0{idx + 1}
              </span>
              <span className="text-xs font-medium tracking-wide uppercase">
                {proj.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Project Showcase */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {PROJECTS.map((project, idx) => {
              if (activeTab !== idx) return null;
              const isKawanApex = project.id === "kawan-apex";

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Left: Project Story */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[#D89A5B]/30 bg-[#D89A5B]/10 px-3.5 py-1 text-xs font-medium text-[#D89A5B]">
                        {project.category}
                      </span>
                      <span className="text-xs text-[#B8B3AA]">
                        {project.period} · {project.clientOrCompany}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1E8] leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-base sm:text-lg text-[#D89A5B] font-light">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#B8B3AA] font-light leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack Card */}
                    <div className="rounded-2xl border border-[#F5F1E8]/10 bg-[#171615] p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="uppercase tracking-wider text-[#D89A5B] font-medium flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5" />
                          {isKawanApex ? "Actual Production Stack" : "Technology Stack"}
                        </span>
                        {isKawanApex && (
                          <span className="text-[10px] text-[#B8B3AA] border border-[#F5F1E8]/10 rounded px-2 py-0.5">
                            Original Tech — Not Misrepresented
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="rounded-xl border border-[#F5F1E8]/6 bg-[#10100F] p-2.5">
                          <span className="text-[10px] text-[#B8B3AA] block uppercase mb-1">Frontend</span>
                          <span className="font-medium text-[#F5F1E8] block leading-tight">
                            {project.originalTechStack.frontend[0]}
                          </span>
                          <span className="text-[10px] text-[#B8B3AA]/70 block leading-tight">
                            {project.originalTechStack.frontend.slice(1).join(", ")}
                          </span>
                        </div>
                        <div className="rounded-xl border border-[#F5F1E8]/6 bg-[#10100F] p-2.5">
                          <span className="text-[10px] text-[#B8B3AA] block uppercase mb-1">Backend</span>
                          <span className="font-medium text-[#F5F1E8] block leading-tight">
                            {project.originalTechStack.backend[0]}
                          </span>
                          <span className="text-[10px] text-[#B8B3AA]/70 block leading-tight">
                            {project.originalTechStack.backend.slice(1).join(", ")}
                          </span>
                        </div>
                        <div className="rounded-xl border border-[#F5F1E8]/6 bg-[#10100F] p-2.5">
                          <span className="text-[10px] text-[#B8B3AA] block uppercase mb-1">Database</span>
                          <span className="font-medium text-[#D89A5B] block leading-tight">
                            {project.originalTechStack.database[0]}
                          </span>
                          <span className="text-[10px] text-[#B8B3AA]/70 block leading-tight">
                            {project.originalTechStack.database[1] || "Relational"}
                          </span>
                        </div>
                        <div className="rounded-xl border border-[#F5F1E8]/6 bg-[#10100F] p-2.5">
                          <span className="text-[10px] text-[#B8B3AA] block uppercase mb-1">Tooling</span>
                          <span className="font-medium text-[#F5F1E8] block leading-tight">
                            {project.originalTechStack.tooling[0]}
                          </span>
                          <span className="text-[10px] text-[#B8B3AA]/70 block leading-tight">
                            {project.originalTechStack.tooling.slice(1).join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.businessImpact.map((impact, i) => (
                        <div key={i} className="border-l-2 border-[#D89A5B]/30 pl-3">
                          <span className="font-serif-headline text-2xl text-[#D89A5B] block font-light">
                            {impact.metric}
                          </span>
                          <span className="text-[11px] uppercase tracking-wider text-[#B8B3AA] block mt-0.5 leading-tight">
                            {impact.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-[#F5F1E8] px-6 py-3 text-xs font-medium tracking-wide text-[#10100F] transition-all hover:bg-[#D89A5B] hover:scale-[1.02]"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>View Project Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  {/* Right: Editorial Mockup Card */}
                  <div className="lg:col-span-6">
                    <div className="relative mx-auto max-w-lg lg:max-w-none">
                      {/* Decorative accent border */}
                      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#D89A5B]/20 via-transparent to-transparent" />

                      <div className="relative rounded-3xl border border-[#F5F1E8]/10 bg-[#171615] p-6 sm:p-8 shadow-2xl">
                        {/* Interface Bar */}
                        <div className="flex items-center justify-between pb-4 border-b border-[#F5F1E8]/10 text-xs text-[#B8B3AA]">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                              <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                              <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                            </div>
                            <span className="ml-2 font-serif-subtle italic text-[#F5F1E8]/70">
                              {project.title}
                            </span>
                          </div>
                          <span className="rounded bg-[#D89A5B]/15 border border-[#D89A5B]/20 px-2 py-0.5 text-[10px] text-[#D89A5B]">
                            LIVE BUILD
                          </span>
                        </div>

                        {/* Mockup content */}
                        <div className="mt-5 space-y-3 text-xs font-light">
                          {isKawanApex ? (
                            <>
                              <div className="rounded-xl border border-[#F5F1E8]/8 bg-[#10100F] p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-[#F5F1E8]">Candidate Pipeline</span>
                                  <span className="text-[10px] text-[#D89A5B]">5 Active Stages</span>
                                </div>
                                <div className="grid grid-cols-5 gap-1">
                                  {["Applied", "Screening", "Interview", "Assessing", "Onboarded"].map((stage, si) => (
                                    <div
                                      key={stage}
                                      className={`rounded-lg p-2 text-center border ${
                                        si === 1
                                          ? "border-[#D89A5B]/30 bg-[#D89A5B]/10 text-[#D89A5B]"
                                          : "border-[#F5F1E8]/6 bg-[#171615] text-[#B8B3AA]"
                                      }`}
                                    >
                                      <span className="text-[9px] block leading-tight">{stage}</span>
                                      <span className="font-serif-headline text-sm block mt-0.5">
                                        {[142, 38, 21, 28, 16][si]}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="rounded-xl border border-[#F5F1E8]/8 bg-[#10100F] p-4 space-y-2">
                                <span className="text-[10px] uppercase tracking-wider text-[#D89A5B] font-medium block">
                                  Onboarding Checklist
                                </span>
                                {[
                                  "Identity Verification & Tax Documents",
                                  "Digital Employment NDA Signature",
                                  "Department Hardware Allocation",
                                ].map((item, ii) => (
                                  <div key={ii} className="flex items-center justify-between text-[11px]">
                                    <span className="text-[#B8B3AA]">{ii + 1}. {item}</span>
                                    <span className="text-[#D89A5B]">✓</span>
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : (
                            <div className="rounded-xl border border-[#F5F1E8]/8 bg-[#10100F] p-6 space-y-4">
                              <span className="text-[10px] uppercase tracking-wider text-[#D89A5B] font-medium block">
                                Solution Blueprint
                              </span>
                              <p className="text-[#B8B3AA] leading-relaxed">
                                {project.solutionOverview}
                              </p>
                              <div className="flex flex-wrap gap-2 pt-1">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-md border border-[#F5F1E8]/10 bg-[#171615] px-2.5 py-1 text-[11px] text-[#F5F1E8]/80"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
