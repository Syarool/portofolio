"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  EXPERTISE_HEADLINE,
  EXPERTISE_SUBTITLE,
  EXPERTISE_LIST,
  TECHNOLOGIES,
  ExpertiseItem,
  TechnologyItem,
} from "@/data/skills";
import RevealOnScroll from "../animations/RevealOnScroll";
import { Terminal, Cpu, Sparkles, Check } from "lucide-react";

export default function TechStackSection() {
  const [activeExpertise, setActiveExpertise] = useState<string>(EXPERTISE_LIST[0].id);

  return (
    <section
      id="expertise"
      className="relative py-24 sm:py-32 lg:py-36 bg-[#10100F] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#D89A5B]/5 blur-[130px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -right-4 top-8 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        TOOL_03
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <RevealOnScroll direction="up">
            <span className="pixel-badge">
              <Cpu className="h-3 w-3" />
              QUEST 03 // SKILL TREE &amp; TOOLCHAIN
            </span>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
              TOOLS BEHIND THE PROCESS<span className="text-[#D89A5B]">.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-sm sm:text-base text-[#B8B3AA] font-light leading-relaxed">
              {EXPERTISE_SUBTITLE}
            </p>
          </RevealOnScroll>
        </div>

        {/* =========================================================================
            PART 1: EXPERTISE — RETRO CODEX ACCORDION
           ========================================================================= */}
        <div className="mt-14 sm:mt-16">
          <div className="pb-3 border-b border-[#F5F1E8]/10 flex items-center justify-between text-xs font-mono text-[#B8B3AA]">
            <span>// DOMAIN &amp; DISCIPLINE</span>
            <span className="hidden sm:inline-block">// METHODOLOGY &amp; IMPACT</span>
          </div>

          <div className="divide-y divide-[#F5F1E8]/8">
            {EXPERTISE_LIST.map((item, idx) => {
              const isActive = activeExpertise === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveExpertise(item.id)}
                  className={`group py-5 sm:py-6 cursor-pointer transition-all ${
                    isActive ? "opacity-100 bg-[#171615]/40 px-3 -mx-3" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-pixel text-lg text-[#D89A5B] font-bold">
                        [{item.number}]
                      </span>
                      <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#F5F1E8] group-hover:text-[#D89A5B] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="sm:max-w-md text-xs sm:text-sm text-[#B8B3AA] font-mono sm:text-right">
                      {item.impact}
                    </div>
                  </div>

                  {/* Expanded Narrative */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3 pt-3 border-t border-[#F5F1E8]/8 text-sm text-[#F5F1E8]/80 font-light leading-relaxed sm:pl-12"
                    >
                      {item.description}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            PART 2: TECHNOLOGIES — 16-BIT INVENTORY GRID
           ========================================================================= */}
        <div className="mt-20 sm:mt-24 pt-10 border-t border-[#F5F1E8]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="pixel-badge mb-2">
                EQUIPPED INVENTORY
              </span>
              <h3 className="font-pixel text-2xl sm:text-3xl text-[#F5F1E8] font-bold">
                ENGINEERED TOOLCHAIN<span className="text-[#D89A5B]">.</span>
              </h3>
            </div>
            <p className="text-xs font-mono text-[#B8B3AA] max-w-xs">
              Libraries, runtime environments, and frameworks utilized for scalable production systems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.name}
                className="pixel-box p-4 bg-[#141211] group hover:border-[#D89A5B]"
              >
                <div className="flex items-center justify-between mb-2 text-[10px] font-mono text-[#B8B3AA]">
                  <span className="uppercase">{tech.category}</span>
                  <span className="text-[#D89A5B] font-bold">
                    {tech.proficiency}
                  </span>
                </div>
                <div className="font-pixel text-lg text-[#F5F1E8] group-hover:text-[#D89A5B] transition-colors font-bold">
                  {tech.name}
                </div>
                <p className="mt-1 text-[11px] text-[#B8B3AA] font-light leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
