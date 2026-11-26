"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, MapPin, ShieldCheck } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import PixelArtHeroScene from "./PixelArtHeroScene";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden isolate flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24 pt-32"
    >
      {/* =========================================================================
          16-BIT LO-FI PIXEL ART BACKGROUND (Isolated, z-0, parallax enabled)
         ========================================================================= */}
      <motion.div
        className="absolute inset-0 z-0 h-[112%] w-full pointer-events-none"
        style={{ y: prefersReduced ? 0 : bgY }}
      >
        <PixelArtHeroScene />

        {/* Shading veils — keep sunset & character bright on right, ensure text readability on left */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(16,16,15,0.92) 0%, rgba(16,16,15,0.65) 45%, rgba(16,16,15,0.15) 75%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, rgba(16,16,15,0.98) 0%, rgba(16,16,15,0.40) 35%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-32 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,16,15,0.75) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* =========================================================================
          HERO CONTENT: MODERN-PIXEL HYBRID TYPOGRAPHY
         ========================================================================= */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <motion.div
          style={{
            y: prefersReduced ? 0 : textY,
            opacity: prefersReduced ? 1 : textOpacity,
          }}
          className="max-w-3xl space-y-5"
        >
          {/* Retro Quest Eyebrow / Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <span className="pixel-badge flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 bg-[#D89A5B] animate-pulse" />
              STATUS: READY FOR QUEST
            </span>
            <span className="pixel-badge border-[#F5F1E8]/20 bg-[#171615] text-[#B8B3AA]">
              BUSINESS SYSTEM DEV &amp; WEB DEV
            </span>
            <span className="pixel-badge border-[#F5F1E8]/20 bg-[#171615] text-[#B8B3AA]">
              <MapPin className="h-2.5 w-2.5 text-[#D89A5B]" />
              INDONESIA
            </span>
          </motion.div>

          {/* Oversized Pixel Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-pixel text-[13vw] sm:text-[10vw] lg:text-[7.5vw] xl:text-[6.5vw] font-bold tracking-tight text-[#F5F1E8] leading-[0.92] drop-shadow-[4px_4px_0px_#000]"
          >
            SYAHRUL
            <br />
            <span className="text-[#D89A5B]">RAMADHANA</span>
          </motion.h1>

          {/* Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-lg font-light text-[#F5F1E8]/85 leading-relaxed max-w-xl"
          >
            &ldquo;Turning Ideas Into Digital Experiences.&rdquo; Bridging complex business
            architectures, automated pipelines, and responsive web applications with precision craft.
          </motion.p>

          {/* Interactive Pixel Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <a href="#projects" className="pixel-btn">
              <span>EXPLORE PROJECTS</span>
              <ArrowDown className="h-4 w-4" />
            </a>

            <a href="#contact" className="pixel-btn-outline">
              <span>START QUEST / TALK</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Retro HUD / Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        className="absolute bottom-8 right-6 sm:right-10 z-10 hidden sm:flex items-center gap-3 text-xs font-mono text-[#B8B3AA]"
      >
        <span className="pixel-badge border-[#F5F1E8]/10 text-[10px]">
          [ SCROLL TO EXPLORE ↓ ]
        </span>
      </motion.div>
    </section>
  );
}
