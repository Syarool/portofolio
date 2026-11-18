"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Layers, Database, Code2, Server } from "lucide-react";
import { Project } from "@/data/projects";

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
        {/* Backdrop with dark editorial blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#10100F]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#F5F1E8]/15 bg-[#171615] p-6 sm:p-8 md:p-12 shadow-2xl text-[#F5F1E8]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#F5F1E8]/15 bg-[#10100F] text-[#B8B3AA] transition-colors hover:border-[#D89A5B] hover:text-[#F5F1E8]"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="space-y-3 pr-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#D89A5B]/30 bg-[#D89A5B]/10 px-3 py-1 text-xs font-medium text-[#D89A5B]">
                {project.category}
              </span>
              <span className="text-xs text-[#B8B3AA]">
                {project.period} // {project.clientOrCompany}
              </span>
            </div>
            <h2 className="font-serif-headline text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#F5F1E8]">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#B8B3AA] font-light">
              {project.subtitle}
            </p>
          </div>

          <div className="my-8 h-px w-full bg-[#F5F1E8]/10" />

          {/* Core Description */}
          <div className="space-y-4 text-[#F5F1E8]/90 text-sm sm:text-base font-light leading-relaxed">
            <p>{project.fullDescription}</p>
          </div>

          {/* Original Tech Stack Spotlight */}
          <div className="mt-8 rounded-2xl border border-[#F5F1E8]/10 bg-[#10100F]/60 p-6">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="h-4 w-4 text-[#D89A5B]" />
              <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5F1E8]">
                Original Production Architecture
              </h3>
            </div>
            <p className="text-xs text-[#B8B3AA] mb-4">
              Real technology stack deployed for {project.title} at {project.clientOrCompany}:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="rounded-xl border border-[#F5F1E8]/8 bg-[#171615] p-3.5">
                <div className="flex items-center gap-1.5 text-[#D89A5B] mb-2 font-medium">
                  <Code2 className="h-4 w-4" /> Frontend
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.originalTechStack.frontend.map((item, i) => (
                    <span key={i} className="rounded bg-[#10100F] px-2 py-0.5 text-[#F5F1E8]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#F5F1E8]/8 bg-[#171615] p-3.5">
                <div className="flex items-center gap-1.5 text-[#F5F1E8] mb-2 font-medium">
                  <Server className="h-4 w-4" /> Backend
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.originalTechStack.backend.map((item, i) => (
                    <span key={i} className="rounded bg-[#10100F] px-2 py-0.5 text-[#F5F1E8]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#F5F1E8]/8 bg-[#171615] p-3.5">
                <div className="flex items-center gap-1.5 text-[#D89A5B] mb-2 font-medium">
                  <Database className="h-4 w-4" /> Database
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.originalTechStack.database.map((item, i) => (
                    <span key={i} className="rounded bg-[#10100F] px-2 py-0.5 text-[#F5F1E8]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#F5F1E8]/8 bg-[#171615] p-3.5">
                <div className="flex items-center gap-1.5 text-[#B8B3AA] mb-2 font-medium">
                  <Layers className="h-4 w-4" /> Tooling
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.originalTechStack.tooling.map((item, i) => (
                    <span key={i} className="rounded bg-[#10100F] px-2 py-0.5 text-[#F5F1E8]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#F5F1E8]/10 bg-[#10100F]/40 p-5">
              <span className="text-xs uppercase tracking-wider text-[#D89A5B] font-semibold">
                Operational Problem
              </span>
              <p className="mt-2 text-sm text-[#B8B3AA] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
            <div className="rounded-2xl border border-[#F5F1E8]/10 bg-[#10100F]/40 p-5">
              <span className="text-xs uppercase tracking-wider text-[#F5F1E8] font-semibold">
                Engineered Solution
              </span>
              <p className="mt-2 text-sm text-[#B8B3AA] leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F1E8] mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#D89A5B]" /> Core Platform Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-[#F5F1E8]/8 bg-[#10100F]/30 p-3 text-xs sm:text-sm text-[#B8B3AA]"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D89A5B]/15 text-[#D89A5B] text-[10px]">
                    ✓
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact Metrics */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F1E8] mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[#D89A5B]" /> Business Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.businessImpact.map((impact, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#F5F1E8]/8 bg-[#10100F]/50 p-4 text-center"
                >
                  <div className="font-serif-headline text-3xl font-light text-[#D89A5B]">
                    {impact.metric}
                  </div>
                  <div className="mt-1 text-xs font-medium text-[#F5F1E8]">
                    {impact.label}
                  </div>
                  <p className="mt-1 text-[11px] text-[#B8B3AA] leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F1E8]/10 pt-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-md border border-[#F5F1E8]/10 bg-[#10100F] px-2.5 py-1 text-xs text-[#B8B3AA]"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="rounded-full border border-[#F5F1E8]/20 bg-[#10100F] px-6 py-2.5 text-xs uppercase tracking-wider text-[#F5F1E8] transition-colors hover:border-[#D89A5B] hover:text-[#D89A5B]"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
