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
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#10100F]/90 backdrop-blur-md"
        />

        {/* Modal Window: Pixel Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="pixel-box relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-[#171615] p-6 sm:p-8 md:p-10 text-[#F5F1E8]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center border-2 border-[#F5F1E8]/20 bg-[#10100F] text-[#B8B3AA] transition-all hover:border-[#D89A5B] hover:text-[#F5F1E8] shadow-[2px_2px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header */}
          <div className="space-y-2.5 pr-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pixel-badge">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#B8B3AA]">
                {project.period} // {project.clientOrCompany}
              </span>
            </div>
            <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F1E8]">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#D89A5B]">
              {project.subtitle}
            </p>
          </div>

          <div className="my-6 h-0.5 w-full bg-[#F5F1E8]/10" />

          {/* Core Description */}
          <div className="space-y-4 text-[#F5F1E8]/90 text-sm sm:text-base font-light leading-relaxed">
            <p>{project.fullDescription}</p>
          </div>

          {/* Original Tech Stack Spotlight */}
          <div className="mt-8 border border-[#F5F1E8]/15 bg-[#121110] p-5 shadow-[3px_3px_0_0_#000]">
            <div className="flex items-center gap-2 mb-2 font-pixel text-sm text-[#D89A5B] font-bold">
              <Layers className="h-4 w-4" />
              <span>ORIGINAL PRODUCTION ARCHITECTURE</span>
            </div>
            <p className="text-xs font-mono text-[#B8B3AA] mb-4">
              Real technology stack deployed for {project.title} at {project.clientOrCompany}:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className="bg-[#171615] p-3 border border-[#F5F1E8]/10">
                <div className="flex items-center gap-1.5 text-[#D89A5B] mb-2 font-bold font-pixel">
                  <Code2 className="h-3.5 w-3.5" /> Frontend
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.originalTechStack.frontend.map((item, i) => (
                    <span key={i} className="bg-[#10100F] px-1.5 py-0.5 text-[#F5F1E8] border border-[#F5F1E8]/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#171615] p-3 border border-[#F5F1E8]/10">
                <div className="flex items-center gap-1.5 text-[#F5F1E8] mb-2 font-bold font-pixel">
                  <Server className="h-3.5 w-3.5 text-[#D89A5B]" /> Backend
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.originalTechStack.backend.map((item, i) => (
                    <span key={i} className="bg-[#10100F] px-1.5 py-0.5 text-[#F5F1E8] border border-[#F5F1E8]/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#171615] p-3 border border-[#F5F1E8]/10">
                <div className="flex items-center gap-1.5 text-[#D89A5B] mb-2 font-bold font-pixel">
                  <Database className="h-3.5 w-3.5" /> Database
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.originalTechStack.database.map((item, i) => (
                    <span key={i} className="bg-[#10100F] px-1.5 py-0.5 text-[#D89A5B] border border-[#F5F1E8]/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#171615] p-3 border border-[#F5F1E8]/10">
                <div className="flex items-center gap-1.5 text-[#B8B3AA] mb-2 font-bold font-pixel">
                  <Layers className="h-3.5 w-3.5 text-[#D89A5B]" /> Tooling
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.originalTechStack.tooling.map((item, i) => (
                    <span key={i} className="bg-[#10100F] px-1.5 py-0.5 text-[#F5F1E8] border border-[#F5F1E8]/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="border border-[#F5F1E8]/10 bg-[#121110] p-4">
              <span className="font-pixel text-xs uppercase text-[#D89A5B] font-bold block">
                [ OPERATIONAL PROBLEM ]
              </span>
              <p className="mt-2 text-[#B8B3AA] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
            <div className="border border-[#F5F1E8]/10 bg-[#121110] p-4">
              <span className="font-pixel text-xs uppercase text-[#F5F1E8] font-bold block">
                [ ENGINEERED SOLUTION ]
              </span>
              <p className="mt-2 text-[#B8B3AA] leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-6">
            <h4 className="font-pixel text-sm uppercase text-[#F5F1E8] mb-3 flex items-center gap-2 font-bold">
              <CheckCircle2 className="h-4 w-4 text-[#D89A5B]" /> CORE CAPABILITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 border border-[#F5F1E8]/8 bg-[#121110] p-2.5 text-[#B8B3AA]"
                >
                  <span className="text-[#D89A5B] font-bold font-pixel">▸</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact Metrics */}
          <div className="mt-6">
            <h4 className="font-pixel text-sm uppercase text-[#F5F1E8] mb-3 flex items-center gap-2 font-bold">
              <TrendingUp className="h-4 w-4 text-[#D89A5B]" /> BUSINESS IMPACT
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.businessImpact.map((impact, i) => (
                <div
                  key={i}
                  className="border border-[#F5F1E8]/10 bg-[#121110] p-3.5 text-center font-mono"
                >
                  <div className="font-pixel text-2xl font-bold text-[#D89A5B]">
                    {impact.metric}
                  </div>
                  <div className="mt-1 text-xs font-bold text-[#F5F1E8]">
                    {impact.label}
                  </div>
                  <p className="mt-1 text-[10px] text-[#B8B3AA] leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F1E8]/10 pt-5">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="pixel-badge !text-[9px]"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="pixel-btn-outline !py-1.5 !px-4 !text-xs"
            >
              CLOSE WINDOW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
