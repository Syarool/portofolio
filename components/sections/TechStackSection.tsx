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
import { ArrowRight, Sparkles, Check } from "lucide-react";

export default function TechStackSection() {
  const [activeExpertise, setActiveExpertise] = useState<string>(EXPERTISE_LIST[0].id);

  return (
    <section
      id="expertise"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#10100F] text-[#F5F1E8] overflow-hidden border-t border-[#F5F1E8]/6"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#D89A5B]/5 blur-[130px]" />
      {/* Ghost number */}
      <div className="pointer-events-none absolute -right-4 top-8 select-none section-ghost-number" aria-hidden="true">03</div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <RevealOnScroll direction="up">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#D89A5B]" />
              <span className="text-xs uppercase tracking-widest text-[#D89A5B] font-semibold">
                Capabilities &amp; Stack
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif-headline text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E8]">
              {EXPERTISE_HEADLINE}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-sm sm:text-base text-[#B8B3AA] font-light leading-relaxed">
              {EXPERTISE_SUBTITLE}
            </p>
          </RevealOnScroll>
        </div>

        {/* =========================================================================
            PART 1: EXPERTISE — EDITORIAL ACCORDION / INTERACTIVE ROW LISTING
           ========================================================================= */}
        <div className="mt-16 sm:mt-20">
          <div className="pb-4 border-b border-[#F5F1E8]/10 flex items-center justify-between text-xs text-[#B8B3AA]">
            <span className="uppercase tracking-wider">Domain &amp; Discipline</span>
            <span className="hidden sm:inline-block uppercase tracking-wider">Methodology &amp; Impact</span>
          </div>

          <div className="divide-y divide-[#F5F1E8]/8">
            {EXPERTISE_LIST.map((item, idx) => {
              const isActive = activeExpertise === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveExpertise(item.id)}
                  className={`group py-6 sm:py-8 cursor-pointer transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-serif-headline text-lg sm:text-xl text-[#D89A5B] font-light">
                        {item.number}
                      </span>
                      <h3 className="font-serif-headline text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F5F1E8] group-hover:text-[#D89A5B] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="sm:max-w-md text-xs sm:text-sm text-[#B8B3AA] font-light sm:text-right">
                      {item.impact}
                    </div>
                  </div>

                  {/* Expanded Narrative */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-[#F5F1E8]/6 text-sm text-[#F5F1E8]/80 font-light leading-relaxed sm:pl-16"
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
            PART 2: TECHNOLOGIES — MINIMAL REFINED TYPOGRAPHIC GRID
           ========================================================================= */}
        <div className="mt-24 sm:mt-32 pt-12 border-t border-[#F5F1E8]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D89A5B] font-semibold block mb-1">
                // Engineered Toolchain
              </span>
              <h3 className="font-serif-headline text-3xl sm:text-4xl text-[#F5F1E8] font-normal">
                Technologies &amp; Architecture.
              </h3>
            </div>
            <p className="text-xs text-[#B8B3AA] max-w-xs font-light">
              Carefully chosen libraries, languages, and frameworks for scalable execution.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.name}
                className="group rounded-2xl border border-[#F5F1E8]/8 bg-[#171615] p-5 transition-all duration-300 hover:border-[#D89A5B]/40 hover:bg-[#1a1918]"
              >
                <div className="flex items-center justify-between mb-3 text-[11px] text-[#B8B3AA]">
                  <span className="uppercase tracking-wider">{tech.category}</span>
                  <span className="text-[#D89A5B] font-serif-subtle italic">
                    {tech.proficiency}
                  </span>
                </div>
                <div className="font-serif-headline text-xl text-[#F5F1E8] group-hover:text-[#D89A5B] transition-colors">
                  {tech.name}
                </div>
                <p className="mt-2 text-[11px] text-[#B8B3AA] font-light leading-relaxed">
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
