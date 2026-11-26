"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  SKILLS_HEADLINE,
  SKILLS_SUBTITLE,
  SKILL_CATEGORIES,
} from "@/data/skills";
import RevealOnScroll from "../animations/RevealOnScroll";
import { Cpu, Code2, Server, Database, Layout, Wrench } from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  "ui-ux": Layout,
  tools: Wrench,
};

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const visibleCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#0D0D10] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#7CE0D3]/5 blur-[140px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -right-4 top-8 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        02 // TECH
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <RevealOnScroll direction="up">
              <span className="pixel-badge">
                <Cpu className="h-3 w-3" />
                02 // SKILLS &amp; TOOLCHAIN
              </span>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
                {SKILLS_HEADLINE}
              </h2>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.18}>
              <p className="text-sm sm:text-base text-[#B8B3AA] font-light leading-relaxed">
                {SKILLS_SUBTITLE}
              </p>
            </RevealOnScroll>
          </div>

          {/* Interactive Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 font-pixel text-xs border-2 transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#D89A5B] text-[#0D0D10] border-[#D89A5B] shadow-[3px_3px_0_0_#000] font-bold"
                  : "bg-[#141419] text-[#B8B3AA] border-[#F5F1E8]/15 hover:border-[#D89A5B]/60"
              }`}
            >
              ALL (5)
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 font-pixel text-xs border-2 transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#D89A5B] text-[#0D0D10] border-[#D89A5B] shadow-[3px_3px_0_0_#000] font-bold"
                    : "bg-[#141419] text-[#B8B3AA] border-[#F5F1E8]/15 hover:border-[#D89A5B]/60"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Grouped Skill Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.id] || Cpu;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className={`pixel-box p-6 bg-[#141419] flex flex-col justify-between ${
                  category.id === "frontend" && selectedCategory === "all"
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#F5F1E8]/10">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center border border-[#D89A5B]/40 bg-[#D89A5B]/10 text-[#D89A5B]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#D89A5B] block">
                          MODULE {category.code}
                        </span>
                        <h3 className="font-pixel text-lg font-bold text-[#F5F1E8]">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-[#B8B3AA] leading-relaxed">
                    {category.summary}
                  </p>

                  {/* Skill Items */}
                  <div className="mt-4 space-y-2.5">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="border border-[#F5F1E8]/8 bg-[#0D0D10]/70 p-2.5 transition-colors hover:border-[#D89A5B]/45"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-pixel text-sm font-bold text-[#F5F1E8]">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 border border-[#7CE0D3]/30 text-[#7CE0D3] bg-[#7CE0D3]/10">
                            {skill.level}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-[#B8B3AA]/85 leading-snug">
                          {skill.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
