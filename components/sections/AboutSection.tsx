"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import RevealOnScroll from "../animations/RevealOnScroll";
import { MapPin, Terminal, RefreshCw, Database, Layout, Layers, Code2 } from "lucide-react";

const PILLARS = [
  {
    icon: Layers,
    title: "Business Systems",
    text: "Digitizing recruitment, onboarding, and employee workflows.",
  },
  {
    icon: Code2,
    title: "Web Engineering",
    text: "Scalable full-stack apps with Next.js, React & TypeScript.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "Structured relational schemas across PostgreSQL & SQLite.",
  },
  {
    icon: Layout,
    title: "UI/UX Craft",
    text: "Human-centered interfaces combining clarity and motion.",
  },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [altPhoto, setAltPhoto] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#0D0D10] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Ambient Space Glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-[#D89A5B]/6 blur-[150px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -right-4 top-8 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        01 // BIO
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex items-center gap-2 mb-3">
            <span className="pixel-badge">
              <Terminal className="h-3 w-3" />
              01 // ABOUT ME
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
            SYSTEMS ENGINEER &amp; WEB CREATOR<span className="text-[#D89A5B]">.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Portrait Frame with Syahrul's Photos */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="pixel-box p-3 bg-[#141419]">
                {/* Window Bar */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#F5F1E8]/10 text-[10px] font-mono text-[#B8B3AA]">
                  <span className="flex items-center gap-1.5 text-[#D89A5B]">
                    <span className="w-2 h-2 bg-[#7CE0D3]" />
                    SYAHRUL_RAMADHANA.JPG
                  </span>
                  <button
                    type="button"
                    onClick={() => setAltPhoto((prev) => !prev)}
                    className="inline-flex items-center gap-1 px-2 py-0.5 border border-[#F5F1E8]/15 hover:border-[#D89A5B] hover:text-[#D89A5B] transition-colors cursor-pointer"
                    title="Switch portrait view"
                  >
                    <RefreshCw className="h-2.5 w-2.5" />
                    <span>{altPhoto ? "Photo 2/2" : "Photo 1/2"}</span>
                  </button>
                </div>

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1a1a20] border border-[#F5F1E8]/10">
                  <motion.div
                    style={{ y: prefersReduced ? 0 : imgY }}
                    className="absolute -inset-y-[7%] inset-x-0 h-[114%] w-full"
                  >
                    <Image
                      src={
                        altPhoto
                          ? "/images/syahrul-portrait-side.jpg"
                          : "/images/syahrul-portrait.jpg"
                      }
                      alt="Syahrul Ramadhana — Developer and IT Enthusiast"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0D10]/70 via-transparent to-transparent" />
                </div>

                {/* Caption */}
                <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] font-mono text-[#B8B3AA]">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#D89A5B]" />
                    <span>Indonesia</span>
                  </div>
                  <span className="bg-[#D89A5B] text-[#0D0D10] px-2 py-0.5 font-pixel text-xs font-bold shadow-[2px_2px_0_0_#000]">
                    SYAHRUL RAMADHANA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Storytelling & Disciplines */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <RevealOnScroll direction="up" delay={0.15}>
              <div className="pixel-box p-5 sm:p-6 bg-[#141419] border-l-4 border-l-[#D89A5B]">
                <p className="font-pixel text-xl sm:text-2xl text-[#F5F1E8] leading-snug">
                  &ldquo;Translating manual operational challenges into structured,
                  reliable digital systems with thoughtful user experiences.&rdquo;
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.25}>
              <div className="space-y-4 text-sm sm:text-base font-light text-[#B8B3AA] leading-relaxed">
                <p>
                  I am{" "}
                  <span className="bg-[#D89A5B]/20 border-b-2 border-[#D89A5B] px-1.5 py-0.5 text-[#F5F1E8] font-semibold">
                    Syahrul Ramadhana
                  </span>
                  , a Developer and IT Enthusiast focused on building
                  practical digital products that connect business logic, clean
                  database architecture, and intuitive UI/UX.
                </p>
                <p>
                  Through my experience at{" "}
                  <span className="text-[#D89A5B] font-medium">
                    PT. Apex Mitra Prima (Maganghub)
                  </span>
                  , I designed and built internal business ecosystems—spanning{" "}
                  <span className="text-[#F5F1E8]">Kawan Apex Open Hiring</span>,{" "}
                  <span className="text-[#F5F1E8]">Employee Onboarding</span>, and{" "}
                  <span className="text-[#F5F1E8]">SatuPintu Kawan Apex</span>—while
                  optimizing database structures, system monitoring, and user journeys.
                </p>
              </div>
            </RevealOnScroll>

            {/* 4 Discipline Pillars */}
            <RevealOnScroll direction="up" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="pixel-box p-4 bg-[#121216] space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-[#D89A5B]">
                        <Icon className="h-4 w-4" />
                        <span className="font-pixel text-sm font-bold text-[#F5F1E8]">
                          {pillar.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#B8B3AA] leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
