"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import PixelSpaceScene from "./PixelSpaceScene";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Multi-layer cosmic parallax transforms
  const planetFarY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const planetMidY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const astronautY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const astronautX = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden isolate flex flex-col justify-end pb-16 sm:pb-24 lg:pb-28 pt-32"
    >
      {/* Animated Pixel Art Space Scene (Planets + Moving Astronaut) */}
      <PixelSpaceScene
        planetFarY={planetFarY}
        planetMidY={planetMidY}
        astronautY={astronautY}
        astronautX={astronautX}
      />

      {/* Hero Editorial & Pixel Hybrid Foreground */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full relative z-10 pointer-events-none">
        <motion.div
          style={{
            y: prefersReduced ? 0 : textY,
            opacity: prefersReduced ? 1 : textOpacity,
          }}
          className="max-w-3xl space-y-5 pointer-events-auto"
        >
          {/* Identity Tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <span className="pixel-badge">
              <span className="inline-block w-1.5 h-1.5 bg-[#7CE0D3] animate-pulse" />
              SYAHRUL RAMADHANA
            </span>
            <span className="pixel-badge border-[#F5F1E8]/20 bg-[#141419]/90 text-[#B8B3AA]">
              BUSINESS SYSTEM &amp; WEB DEVELOPER
            </span>
            <span className="pixel-badge border-[#F5F1E8]/20 bg-[#141419]/90 text-[#B8B3AA]">
              <MapPin className="h-2.5 w-2.5 text-[#D89A5B]" />
              INDONESIA
            </span>
          </motion.div>

          {/* Main Name + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="space-y-3"
          >
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#D89A5B]">
              {"// SYAHRUL RAMADHANA PORTFOLIO"}
            </p>
            <h1 className="font-pixel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F1E8] leading-[1.02] drop-shadow-[4px_4px_0px_#000]">
              Building Digital Solutions Through{" "}
              <span className="text-[#D89A5B]">Technology</span> &amp;{" "}
              <span className="text-[#7CE0D3]">Innovation.</span>
            </h1>
          </motion.div>

          {/* Role Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="text-sm sm:text-base lg:text-lg font-light text-[#F5F1E8]/85 leading-relaxed max-w-xl"
          >
            Business System Developer focused on building digital products,
            business systems, and interactive web experiences.
          </motion.p>

          {/* Interactive CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a href="#projects" className="pixel-btn">
              <span>EXPLORE PROJECTS</span>
              <ArrowDown className="h-4 w-4" />
            </a>

            <a href="#contact" className="pixel-btn-outline">
              <span>LET&apos;S CONNECT</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-[#B8B3AA]/80">
              <Sparkles className="h-3.5 w-3.5 text-[#D89A5B]" />
              Tip: Click the floating astronaut
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
