"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS, Project } from "@/data/projects";
import RevealOnScroll from "../animations/RevealOnScroll";
import ProjectModal from "../ui/ProjectModal";
import { ArrowUpRight, Layers, Eye, Terminal, CheckCircle2 } from "lucide-react";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 lg:py-36 bg-[#10100F] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Ambient glow left */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-[450px] w-[450px] rounded-full bg-[#D89A5B]/5 blur-[150px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -left-4 top-10 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        QUEST_02
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#F5F1E8]/10">
          <RevealOnScroll direction="up">
            <div className="space-y-2">
              <span className="pixel-badge">
                <Terminal className="h-3 w-3" />
                QUEST 02 // BUILT SYSTEMS
              </span>
              <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
                THINGS I&apos;VE BUILT<span className="text-[#D89A5B]">.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#B8B3AA] max-w-sm font-mono leading-relaxed">
              [ MISSION LOG ] Production platforms, automated candidate screening engines, and interactive applications.
            </p>
          </RevealOnScroll>
        </div>

        {/* Project Selector Navigation (Retro Pixel Slots) */}
        <div className="mt-8 flex items-center gap-2.5 overflow-x-auto pb-2">
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 font-pixel text-xs sm:text-sm transition-all whitespace-nowrap border-2 ${
                activeTab === idx
                  ? "bg-[#D89A5B] text-[#10100F] border-[#D89A5B] shadow-[3px_3px_0_0_#000] font-bold"
                  : "bg-[#171615] text-[#B8B3AA] border-[#F5F1E8]/15 hover:border-[#F5F1E8]/40 hover:text-[#F5F1E8] shadow-[2px_2px_0_0_#000]"
              }`}
            >
              <span className="opacity-80">0{idx + 1}.</span>
              <span className="tracking-wide uppercase">{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Active Project Showcase */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {PROJECTS.map((project, idx) => {
              if (activeTab !== idx) return null;
              const isKawanApex = project.id === "kawan-apex";

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                >
                  {/* Left: Project Story */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="pixel-badge">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-[#B8B3AA]">
                        {project.period} // {project.clientOrCompany}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-[#D89A5B] font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#B8B3AA] font-light leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Production Tech Stack Card */}
                    <div className="pixel-box p-4 bg-[#141211] space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="uppercase text-[#D89A5B] font-bold flex items-center gap-1.5 font-pixel text-sm">
                          <Layers className="h-3.5 w-3.5" />
                          {isKawanApex ? "ACTUAL PRODUCTION STACK" : "TECHNOLOGY STACK"}
                        </span>
                        {isKawanApex && (
                          <span className="text-[10px] text-[#B8B3AA] border border-[#F5F1E8]/20 px-1.5 py-0.5">
                            ORIGINAL DEPLOYED STACK
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                        <div className="bg-[#1a1817] p-2 border border-[#F5F1E8]/10">
                          <span className="text-[9px] text-[#B8B3AA] block uppercase mb-0.5">Frontend</span>
                          <span className="font-bold text-[#F5F1E8] block truncate">
                            {project.originalTechStack.frontend[0]}
                          </span>
                          <span className="text-[9px] text-[#B8B3AA]/70 block truncate">
                            {project.originalTechStack.frontend.slice(1).join(", ")}
                          </span>
                        </div>
                        <div className="bg-[#1a1817] p-2 border border-[#F5F1E8]/10">
                          <span className="text-[9px] text-[#B8B3AA] block uppercase mb-0.5">Backend</span>
                          <span className="font-bold text-[#F5F1E8] block truncate">
                            {project.originalTechStack.backend[0]}
                          </span>
                          <span className="text-[9px] text-[#B8B3AA]/70 block truncate">
                            {project.originalTechStack.backend.slice(1).join(", ")}
                          </span>
                        </div>
                        <div className="bg-[#1a1817] p-2 border border-[#F5F1E8]/10">
                          <span className="text-[9px] text-[#B8B3AA] block uppercase mb-0.5">Database</span>
                          <span className="font-bold text-[#D89A5B] block truncate">
                            {project.originalTechStack.database[0]}
                          </span>
                          <span className="text-[9px] text-[#B8B3AA]/70 block truncate">
                            {project.originalTechStack.database[1] || "Relational"}
                          </span>
                        </div>
                        <div className="bg-[#1a1817] p-2 border border-[#F5F1E8]/10">
                          <span className="text-[9px] text-[#B8B3AA] block uppercase mb-0.5">Tooling</span>
                          <span className="font-bold text-[#F5F1E8] block truncate">
                            {project.originalTechStack.tooling[0]}
                          </span>
                          <span className="text-[9px] text-[#B8B3AA]/70 block truncate">
                            {project.originalTechStack.tooling.slice(1).join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Impact Stats Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {project.businessImpact.map((impact, i) => (
                        <div key={i} className="border-l-2 border-[#D89A5B] pl-2.5">
                          <span className="font-pixel text-2xl text-[#D89A5B] font-bold block">
                            {impact.metric}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8B3AA] block mt-0.5">
                            {impact.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-1">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="pixel-btn"
                      >
                        <Eye className="h-4 w-4" />
                        <span>VIEW SPECIFICATIONS</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right: Retro Window Mockup */}
                  <div className="lg:col-span-6">
                    <div className="pixel-box p-4 sm:p-5 bg-[#171615]">
                      {/* Window Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#F5F1E8]/10 text-xs font-mono text-[#B8B3AA]">
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-2.5 h-2.5 bg-[#D89A5B]" />
                          <span className="font-pixel text-xs text-[#F5F1E8]">
                            [SYS_VIEW]: {project.title}.EXE
                          </span>
                        </div>
                        <span className="pixel-badge text-[9px] !py-0.5">
                          LIVE RUNTIME
                        </span>
                      </div>

                      {/* Mockup Body Content */}
                      <div className="mt-4 space-y-3 font-mono text-xs">
                        {isKawanApex ? (
                          <>
                            <div className="bg-[#121110] p-3.5 border border-[#F5F1E8]/10 space-y-2.5">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[#F5F1E8] font-pixel text-sm">
                                  CANDIDATE ONBOARDING PIPELINE
                                </span>
                                <span className="text-[10px] text-[#D89A5B]">ACTIVE</span>
                              </div>
                              <div className="grid grid-cols-5 gap-1.5 text-center">
                                {["APPLIED", "SCREEN", "INTERVIEW", "ASSESS", "ONBOARD"].map((stage, si) => (
                                  <div
                                    key={stage}
                                    className={`p-1.5 border ${
                                      si === 3
                                        ? "border-[#D89A5B] bg-[#D89A5B]/15 text-[#D89A5B]"
                                        : "border-[#F5F1E8]/10 bg-[#171615] text-[#B8B3AA]"
                                    }`}
                                  >
                                    <span className="text-[8px] block font-mono">{stage}</span>
                                    <span className="font-pixel text-base font-bold block mt-0.5">
                                      {[142, 38, 21, 28, 16][si]}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-[#121110] p-3.5 border border-[#F5F1E8]/10 space-y-2">
                              <span className="text-[10px] uppercase text-[#D89A5B] font-bold block font-pixel">
                                AUTOMATED VERIFICATION ENGINE
                              </span>
                              {[
                                "Identity Verification & Document OCR",
                                "Digital NDA & Employment Contract",
                                "Hardware & Resource Provisioning",
                              ].map((item, ii) => (
                                <div key={ii} className="flex items-center justify-between text-[11px] text-[#B8B3AA]">
                                  <span>{ii + 1}. {item}</span>
                                  <span className="text-[#D89A5B] font-bold">[VERIFIED]</span>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="bg-[#121110] p-4 border border-[#F5F1E8]/10 space-y-3">
                            <span className="font-pixel text-sm text-[#D89A5B] font-bold block">
                              ARCHITECTURE BLUEPRINT
                            </span>
                            <p className="text-[#B8B3AA] text-xs leading-relaxed">
                              {project.solutionOverview}
                            </p>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="pixel-badge !text-[9px]"
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
