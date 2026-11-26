"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import RevealOnScroll from "../animations/RevealOnScroll";
import { MapPin, Terminal, Award, Zap, Code2 } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-36 bg-[#10100F] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Ambient warm glow */}
      <div className="pointer-events-none absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-[#D89A5B]/5 blur-[150px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -right-4 top-8 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        BIO_01
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <RevealOnScroll direction="up">
          <div className="flex items-center gap-2 mb-3">
            <span className="pixel-badge">
              <Terminal className="h-3 w-3" />
              QUEST 01 // CODEX
            </span>
          </div>
        </RevealOnScroll>

        {/* Headline in Pixel Style */}
        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
            BEHIND THE IDEAS<span className="text-[#D89A5B]">.</span>
          </h2>
        </RevealOnScroll>

        {/* Split Modern-Pixel Hybrid Composition */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait in Retro Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Retro Pixel Card Container */}
              <div className="pixel-box p-3 bg-[#171615]">
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F5F1E8]/10 text-[10px] font-mono text-[#B8B3AA]">
                  <span className="flex items-center gap-1.5 text-[#D89A5B]">
                    <span className="w-2 h-2 bg-[#D89A5B]" />
                    AVATAR: SYAHRUL_R.PNG
                  </span>
                  <span>ID: IND_2024</span>
                </div>

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1c1b19] border border-[#F5F1E8]/10">
                  <motion.div
                    style={{ y: prefersReduced ? 0 : imgY }}
                    className="absolute -inset-y-[8%] inset-x-0 h-[116%] w-full"
                  >
                    <Image
                      src="/images/syahrul-portrait.jpg"
                      alt="Syahrul Ramadhana — Portrait in Indonesia"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top filter saturate-[0.95] contrast-[1.05]"
                    />
                  </motion.div>

                  {/* Subtle warm retro vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10100F]/70 via-transparent to-transparent" />
                </div>

                {/* Caption Bar */}
                <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] font-mono text-[#B8B3AA]">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#D89A5B]" />
                    <span>INDONESIA</span>
                  </div>
                  <span className="text-[#D89A5B] font-pixel text-xs">
                    LEVEL 99 DEV
                  </span>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pixel-box absolute -bottom-5 -right-4 sm:-right-6 p-3.5 bg-[#171615] hidden sm:block max-w-[210px]"
              >
                <div className="font-pixel text-xs text-[#D89A5B] font-bold">
                  GUILD / ORG
                </div>
                <div className="mt-1 text-xs text-[#F5F1E8] font-bold leading-tight">
                  PT Apex Mitra Prima
                </div>
                <div className="text-[10px] text-[#B8B3AA] font-mono mt-0.5">
                  Business System Dev
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Narrative & Character Codex */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <RevealOnScroll direction="up" delay={0.2}>
              <div className="pixel-box p-5 sm:p-6 bg-[#171615]/90 border-l-4 border-l-[#D89A5B]">
                <p className="font-pixel text-xl sm:text-2xl text-[#F5F1E8] font-medium leading-snug">
                  &ldquo;I am passionate about exploring the intersection of technology, business systems, and creative problem-solving.&rdquo;
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.3}>
              <div className="space-y-4 text-sm sm:text-base font-light text-[#B8B3AA] leading-relaxed">
                <p>
                  During my role as a <span className="text-[#F5F1E8] font-semibold">Business System Development Intern at PT Apex Mitra Prima</span>, I identified critical operational friction points caused by fragmented spreadsheets, manual paper records, and slow candidate onboarding.
                </p>
                <p>
                  To solve this, I designed and built <span className="text-[#D89A5B] font-semibold">Kawan Apex</span>—an integrated digital open hiring and employee onboarding engine that digitized verification, automated workflows, and cut onboarding time by 68%.
                </p>
                <p>
                  I approach development as an intentional craft: writing clean, scalable software architecture that transforms operational challenges into smooth digital experiences.
                </p>
              </div>
            </RevealOnScroll>

            {/* Achievement Stats Grid */}
            <RevealOnScroll direction="up" delay={0.4}>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="pixel-box p-4 bg-[#141211]">
                  <span className="font-pixel text-3xl text-[#D89A5B] font-bold block">
                    -68%
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8B3AA] mt-1 block">
                    Onboarding Time
                  </span>
                </div>

                <div className="pixel-box p-4 bg-[#141211]">
                  <span className="font-pixel text-3xl text-[#F5F1E8] font-bold block">
                    100%
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8B3AA] mt-1 block">
                    Paperless Pipeline
                  </span>
                </div>

                <div className="pixel-box p-4 bg-[#141211]">
                  <span className="font-pixel text-2xl text-[#D89A5B] font-bold block">
                    FULL-STACK
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8B3AA] mt-1 block">
                    Systems &amp; Web
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
