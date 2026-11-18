"use client";

import React from "react";
import { motion } from "motion/react";
import {
  EXPERIENCE_HEADLINE,
  EXPERIENCE_SUBTITLE,
  EXPERIENCES,
  ExperienceItem,
} from "@/data/experience";
import RevealOnScroll from "../animations/RevealOnScroll";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#10100F] text-[#F5F1E8] overflow-hidden border-t border-[#F5F1E8]/6"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#D89A5B]/5 blur-[130px]" />
      {/* Ghost number */}
      <div className="pointer-events-none absolute -left-4 top-8 select-none section-ghost-number" aria-hidden="true">04</div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <RevealOnScroll direction="up">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#D89A5B]" />
              <span className="text-xs uppercase tracking-widest text-[#D89A5B] font-semibold">
                Career Trajectory
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif-headline text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E8]">
              {EXPERIENCE_HEADLINE}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-sm sm:text-base text-[#B8B3AA] font-light leading-relaxed">
              {EXPERIENCE_SUBTITLE}
            </p>
          </RevealOnScroll>
        </div>

        {/* Cinematic Vertical Timeline */}
        <div className="mt-16 sm:mt-24 relative">
          {/* Subtle vertical center guide line */}
          <div className="absolute top-2 bottom-6 left-4 sm:left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#D89A5B] via-[#F5F1E8]/10 to-transparent" />

          <div className="space-y-16 sm:space-y-24">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#D89A5B] bg-[#10100F] z-10">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#D89A5B]" />
                  </div>

                  {/* Content Card (Left or Right on Desktop) */}
                  <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-10">
                    <RevealOnScroll direction={isEven ? "left" : "right"}>
                      <div className="rounded-3xl border border-[#F5F1E8]/10 bg-[#171615] p-6 sm:p-8 space-y-5 transition-all duration-300 hover:border-[#D89A5B]/40">
                        {/* Period & Location */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#B8B3AA]">
                          <div className="flex items-center gap-1.5 font-serif-subtle text-base sm:text-lg text-[#D89A5B]">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-[#B8B3AA]" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Role & Company */}
                        <div>
                          <h3 className="font-serif-headline text-2xl sm:text-3xl text-[#F5F1E8] font-normal leading-snug">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-medium text-[#D89A5B] mt-1">
                            {exp.company}
                          </div>
                        </div>

                        {/* Summary */}
                        <p className="text-sm text-[#B8B3AA] font-light leading-relaxed">
                          {exp.summary}
                        </p>

                        {/* Key Contributions */}
                        <div className="space-y-2 pt-2 border-t border-[#F5F1E8]/8">
                          <span className="text-[11px] uppercase tracking-wider text-[#F5F1E8] font-medium block">
                            Key Accomplishments:
                          </span>
                          <div className="space-y-2">
                            {exp.keyContributions.map((contrib, cIdx) => (
                              <div
                                key={cIdx}
                                className="flex items-start gap-2.5 text-xs text-[#B8B3AA] font-light"
                              >
                                <span className="text-[#D89A5B] mt-0.5">•</span>
                                <span>{contrib}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Skills / Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-[#F5F1E8]/10 bg-[#10100F] px-3 py-1 text-[11px] text-[#F5F1E8]/80"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </RevealOnScroll>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
