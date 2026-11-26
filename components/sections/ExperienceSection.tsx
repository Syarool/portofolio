"use client";

import React from "react";
import {
  EXPERIENCE_HEADLINE,
  EXPERIENCE_SUBTITLE,
  EXPERIENCES,
} from "@/data/experience";
import RevealOnScroll from "../animations/RevealOnScroll";
import { Building2, Calendar, MapPin, Flag } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#0D0D10] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#D89A5B]/5 blur-[130px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -left-4 top-8 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        03 // EXP
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <RevealOnScroll direction="up">
            <span className="pixel-badge">
              <Flag className="h-3 w-3" />
              03 // EXPERIENCE
            </span>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
              {EXPERIENCE_HEADLINE}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-sm sm:text-base text-[#B8B3AA] font-light leading-relaxed">
              {EXPERIENCE_SUBTITLE}
            </p>
          </RevealOnScroll>
        </div>

        {/* Vertical Timeline */}
        <div className="mt-14 sm:mt-20 relative">
          <div className="absolute top-2 bottom-6 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#D89A5B] via-[#7CE0D3]/40 to-transparent" />

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Pixel Timeline Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-3 flex h-6 w-6 items-center justify-center bg-[#D89A5B] text-[#0D0D10] font-pixel text-xs font-bold shadow-[2px_2px_0_0_#000] z-10">
                    0{idx + 1}
                  </div>

                  {/* Content Card */}
                  <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8">
                    <RevealOnScroll direction={isEven ? "left" : "right"}>
                      <div className="pixel-box p-6 space-y-4 bg-[#141419]">
                        {/* Header Metadata */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#B8B3AA]">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="pixel-badge !py-0.5">
                              <Calendar className="h-3 w-3" />
                              {exp.year}
                            </span>
                            {exp.program && (
                              <span className="pixel-badge !py-0.5 !border-[#7CE0D3]/50 !text-[#7CE0D3] !bg-[#7CE0D3]/10">
                                Program: {exp.program}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-[#D89A5B]" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Company & Role */}
                        <div>
                          <div className="flex items-center gap-2 text-sm font-mono text-[#D89A5B] font-bold">
                            <Building2 className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <h3 className="font-pixel text-2xl sm:text-3xl text-[#F5F1E8] font-bold leading-snug mt-1">
                            {exp.role}
                          </h3>
                        </div>

                        {/* Focus Areas Highlight */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.focusAreas.map((area) => (
                            <span
                              key={area}
                              className="font-mono text-[10px] px-2 py-0.5 border border-[#D89A5B]/30 bg-[#D89A5B]/10 text-[#F5F1E8]"
                            >
                              {area}
                            </span>
                          ))}
                        </div>

                        {/* Summary */}
                        <p className="text-sm text-[#B8B3AA] font-light leading-relaxed">
                          {exp.summary}
                        </p>

                        {/* Contributions */}
                        <div className="space-y-2 pt-3 border-t border-[#F5F1E8]/8">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#D89A5B] font-bold block">
                            Key Contributions &amp; Systems Delivered:
                          </span>
                          <ul className="space-y-1.5">
                            {exp.keyContributions.map((contrib, cIdx) => (
                              <li
                                key={cIdx}
                                className="flex items-start gap-2 text-xs text-[#B8B3AA] font-light leading-relaxed"
                              >
                                <span className="text-[#D89A5B] mt-0.5 shrink-0">▸</span>
                                <span>{contrib}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="font-mono text-[10px] px-2 py-0.5 border border-[#F5F1E8]/12 bg-[#0D0D10] text-[#B8B3AA]"
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
