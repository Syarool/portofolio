"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Terminal } from "lucide-react";
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
      className="relative min-h-screen w-full overflow-hidden isolate flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 pt-24 sm:pt-28"
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
          className="max-w-2xl lg:max-w-3xl space-y-5 pointer-events-auto"
        >
          {/* Prominent Profile Spotlight Bar (Avatar + Role & Location) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3.5 sm:gap-4 pixel-box p-2.5 sm:p-3 bg-[#141419]/92 backdrop-blur-md"
          >
            {/* Pixel-Framed Portrait Avatar */}
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden border-2 border-[#D89A5B] bg-[#1a1a20] shadow-[3px_3px_0px_0px_#000]">
              <Image
                src="/images/syahrul-portrait.jpg"
                alt="Syahrul Ramadhana"
                fill
                priority
                sizes="64px"
                className="object-cover object-[50%_40%] scale-[1.65] origin-[50%_40%]"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-1 right-1 h-2.5 w-2.5 bg-[#7CE0D3] border border-[#0D0D10]"
              />
            </div>

            {/* Identity Meta */}
            <div className="space-y-1.5 pr-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#7CE0D3]">
                  <Terminal className="h-3 w-3" />
                  <span>PROFILE // READY TO BUILD</span>
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#B8B3AA]">
                  <MapPin className="h-3 w-3 text-[#D89A5B]" />
                  <span>Indonesia</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="pixel-badge">BUSINESS SYSTEM DEVELOPER</span>
                <span className="pixel-badge border-[#F5F1E8]/20 bg-[#0D0D10]/90 text-[#B8B3AA]">
                  MAGANGHUB · PT. APEX MITRA PRIMA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Highlighted Name + Shortened Title */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#B8B3AA]">
              {"// HELLO, I'M"}
            </p>

            {/* Primary Focal Point: Highlighted Full Name */}
            <h1 className="font-pixel text-4xl sm:text-6xl lg:text-[4.35rem] font-bold tracking-tight leading-[1.06]">
              <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="inline-block bg-[#D89A5B] text-[#0D0D10] px-3.5 py-0.5 border-2 border-[#FFF2DC] shadow-[5px_5px_0px_0px_#000]">
                  SYAHRUL
                </span>
                <span className="inline-block text-[#F5F1E8] drop-shadow-[4px_4px_0px_#000]">
                  RAMADHANA
                  <span
                    aria-hidden="true"
                    className="block h-1.5 w-full bg-gradient-to-r from-[#D89A5B] to-[#7CE0D3] mt-1 shadow-[2px_2px_0_0_#000]"
                  />
                </span>
              </span>
            </h1>

            {/* Shortened Headline */}
            <h2 className="font-pixel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight drop-shadow-[3px_3px_0px_#000] pt-1">
              <span className="text-[#7CE0D3]">Developer</span>{" "}
              <span className="text-[#B8B3AA] font-normal">and</span>{" "}
              <span className="text-[#F5F1E8]">IT Enthusiast</span>
              <span className="text-[#D89A5B]">.</span>
            </h2>
          </motion.div>

          {/* Concise Profile Summary */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sm sm:text-base lg:text-lg font-light text-[#F5F1E8]/85 leading-relaxed max-w-xl"
          >
            Building digital products, business systems, and interactive web
            experiences—bridging operational workflows with clean engineering and UI/UX.
          </motion.p>

          {/* Interactive CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="flex flex-wrap items-center gap-4 pt-1"
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
