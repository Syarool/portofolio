"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  CheckCircle2,
  Layers,
  Database,
  Code2,
  Server,
  Wrench,
  ExternalLink,
} from "lucide-react";
import { Project } from "@/data/projects";
import { GithubIcon } from "./BrandIcons";
import ProjectThumbnail from "./ProjectThumbnail";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0D0D10]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="pixel-box relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-[#141419] p-6 sm:p-8 md:p-10 text-[#F5F1E8]"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center border-2 border-[#F5F1E8]/20 bg-[#0D0D10] text-[#B8B3AA] transition-all hover:border-[#D89A5B] hover:text-[#F5F1E8] shadow-[2px_2px_0_0_#000] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header */}
          <div className="space-y-3 pr-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pixel-badge">{project.category}</span>
              <span
                className="font-mono text-[10px] px-2 py-0.5 border font-bold uppercase"
                style={{
                  borderColor: `${project.accentColor}66`,
                  color: project.accentColor,
                  backgroundColor: `${project.accentColor}14`,
                }}
              >
                Status: {project.status}
              </span>
              <span className="text-xs font-mono text-[#B8B3AA]">
                {project.period} {"//"} {project.companyOrContext}
              </span>
            </div>

            <h2 className="font-pixel text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F1E8]">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#D89A5B]">
              {project.subtitle}
            </p>
          </div>

          {/* Visual Thumbnail */}
          <div className="mt-6 border border-[#F5F1E8]/15">
            <ProjectThumbnail
              theme={project.thumbnailTheme}
              accentColor={project.accentColor}
            />
          </div>

          {/* Core Description */}
          <div className="mt-6 space-y-4 text-[#F5F1E8]/90 text-sm sm:text-base font-light leading-relaxed">
            <p>{project.fullDescription}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="border border-[#F5F1E8]/12 bg-[#0D0D10] p-4">
              <span className="font-pixel text-xs uppercase text-[#D89A5B] font-bold block">
                [ PROBLEM STATEMENT ]
              </span>
              <p className="mt-2 text-[#B8B3AA] leading-relaxed font-sans text-sm">
                {project.problemStatement}
              </p>
            </div>
            <div className="border border-[#F5F1E8]/12 bg-[#0D0D10] p-4">
              <span className="font-pixel text-xs uppercase text-[#7CE0D3] font-bold block">
                [ SOLUTION ARCHITECTURE ]
              </span>
              <p className="mt-2 text-[#B8B3AA] leading-relaxed font-sans text-sm">
                {project.solutionOverview}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-6">
            <h3 className="font-pixel text-sm uppercase text-[#F5F1E8] mb-3 flex items-center gap-2 font-bold">
              <CheckCircle2 className="h-4 w-4 text-[#D89A5B]" /> KEY FEATURES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 border border-[#F5F1E8]/10 bg-[#0D0D10] p-3 text-[#B8B3AA]"
                >
                  <span className="text-[#D89A5B] font-bold font-pixel">▸</span>
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="mt-6 border border-[#F5F1E8]/15 bg-[#0D0D10] p-5 shadow-[3px_3px_0_0_#000]">
            <div className="flex items-center gap-2 mb-4 font-pixel text-sm text-[#D89A5B] font-bold">
              <Layers className="h-4 w-4" />
              <span>TECHNOLOGY STACK</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className="bg-[#141419] p-3 border border-[#F5F1E8]/10">
                <div className="flex items-center gap-1.5 text-[#D89A5B] mb-2 font-bold font-pixel">
                  <Code2 className="h-3.5 w-3.5" /> Frontend
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.frontend.map((item) => (
                    <span
                      key={item}
                      className="bg-[#0D0D10] px-1.5 py-0.5 text-[#F5F1E8] border border-[#F5F1E8]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#141419] p-3 border border-[#F5F1E8]/10">
                <div className="flex items-center gap-1.5 text-[#F5F1E8] mb-2 font-bold font-pixel">
                  <Server className="h-3.5 w-3.5 text-[#D89A5B]" /> Backend
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.backend.map((item) => (
                    <span
                      key={item}
                      className="bg-[#0D0D10] px-1.5 py-0.5 text-[#F5F1E8] border border-[#F5F1E8]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#141419] p-3 border border-[#F5F1E8]/10">
                <div className="flex items-center gap-1.5 text-[#7CE0D3] mb-2 font-bold font-pixel">
                  <Database className="h-3.5 w-3.5" /> Database
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.database.map((item) => (
                    <span
                      key={item}
                      className="bg-[#0D0D10] px-1.5 py-0.5 text-[#7CE0D3] border border-[#F5F1E8]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#141419] p-3 border border-[#F5F1E8]/10">
                <div className="flex items-center gap-1.5 text-[#B8B3AA] mb-2 font-bold font-pixel">
                  <Wrench className="h-3.5 w-3.5 text-[#D89A5B]" /> Tooling
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.tooling.map((item) => (
                    <span
                      key={item}
                      className="bg-[#0D0D10] px-1.5 py-0.5 text-[#F5F1E8] border border-[#F5F1E8]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F1E8]/10 pt-5">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pixel-btn !py-2 !px-4 !text-xs"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pixel-btn-outline !py-2 !px-4 !text-xs"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GITHUB REPO</span>
                </a>
              )}
              {!project.liveDemoUrl && !project.githubUrl && (
                <span className="font-mono text-xs text-[#B8B3AA]">
                  {"// Proprietary or private repository (walkthrough available on request)"}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="pixel-btn-outline !py-2 !px-4 !text-xs"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
