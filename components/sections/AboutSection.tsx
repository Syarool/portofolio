"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import RevealOnScroll from "../animations/RevealOnScroll";
import { MapPin } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 sm:py-36 lg:py-44 bg-[#10100F] text-[#F5F1E8] overflow-hidden border-t border-[#F5F1E8]/6"
    >
      {/* Ambient warm glow top-right */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#D89A5B]/6 blur-[150px]" />

      {/* Decorative ghost number */}
      <motion.div
        style={{ y: prefersReduced ? 0 : ghostY }}
        className="pointer-events-none absolute -right-8 top-8 select-none section-ghost-number opacity-100"
        aria-hidden="true"
      >
        01
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <RevealOnScroll direction="up">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-6 bg-[#D89A5B]" />
            <span className="text-xs uppercase tracking-widest text-[#D89A5B] font-semibold">
              Editorial Narrative
            </span>
          </div>
        </RevealOnScroll>

        {/* Headline */}
        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="font-serif-headline text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#F5F1E8]">
            Behind The Ideas.
          </h2>
        </RevealOnScroll>

        {/* Split Editorial Composition */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Portrait Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative offset border frame */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-2xl border border-[#D89A5B]/20"
                aria-hidden="true"
              />

              {/* Main photo frame */}
              <div className="relative overflow-hidden rounded-2xl border border-[#F5F1E8]/12 bg-[#171615] p-3 shadow-2xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#1c1b19]">
                  <motion.div
                    style={{ y: prefersReduced ? 0 : imgY }}
                    className="absolute -inset-y-[10%] inset-x-0 h-[120%] w-full"
                  >
                    <Image
                      src="/images/syahrul-portrait.jpg"
                      alt="Syahrul Ramadhana — Personal Portrait"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top"
                    />
                  </motion.div>

                  {/* Warm editorial vignette overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10100F]/65 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D89A5B]/5 via-transparent to-transparent" />
                </div>

                {/* Editorial Caption */}
                <div className="mt-3 flex items-center justify-between px-2 pt-1 text-[11px] text-[#B8B3AA]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-[#D89A5B]" />
                    <span>Indonesia</span>
                  </div>
                  <span className="font-serif-subtle italic text-[#F5F1E8]/60">
                    Syahrul Ramadhana — 2024
                  </span>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 rounded-xl border border-[#F5F1E8]/10 bg-[#171615]/95 p-4 shadow-xl backdrop-blur-md hidden sm:block max-w-[220px]"
              >
                <div className="text-[10px] uppercase tracking-wider text-[#D89A5B] font-semibold">
                  Current Role
                </div>
                <div className="mt-1.5 text-sm text-[#F5F1E8] font-medium leading-snug">
                  PT Apex Mitra Prima
                </div>
                <div className="text-[11px] text-[#B8B3AA] mt-0.5">
                  Business System Development
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Personal Introduction */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <RevealOnScroll direction="up" delay={0.2}>
              <p className="font-serif-headline text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F5F1E8] leading-snug">
                &ldquo;I am passionate about exploring the intersection of technology, business systems, and creative problem-solving.&rdquo;
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.3}>
              <div className="space-y-4 text-sm sm:text-base font-light text-[#B8B3AA] leading-relaxed border-l-2 border-[#D89A5B]/30 pl-6">
                <p>
                  During my tenure as a{" "}
                  <span className="text-[#F5F1E8] font-medium">
                    Business System Development Intern at PT Apex Mitra Prima
                  </span>
                  , I observed firsthand the structural inefficiencies caused by disconnected spreadsheets, manual paper records, and cumbersome candidate handoffs.
                </p>
                <p>
                  To bridge this gap, I conceived and architected{" "}
                  <span className="text-[#D89A5B] font-medium">Kawan Apex</span>
                  —an end-to-end open hiring and employee onboarding platform designed to eliminate friction, secure candidate records, and create an effortless transition for new team members.
                </p>
                <p>
                  I approach development not merely as writing code, but as crafting an intentional narrative where software logic directly empowers human potential.
                </p>
              </div>
            </RevealOnScroll>

            {/* Editorial Stats */}
            <RevealOnScroll direction="up" delay={0.4}>
              <div className="pt-6 border-t border-[#F5F1E8]/10 grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <span className="font-serif-headline text-3xl sm:text-4xl text-[#D89A5B] block font-light">
                    68%
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#B8B3AA] block leading-tight">
                    Onboarding Time Reduced
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-serif-headline text-3xl sm:text-4xl text-[#F5F1E8] block font-light">
                    100%
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#B8B3AA] block leading-tight">
                    Paperless Pipeline
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-serif-headline text-2xl sm:text-3xl text-[#B8B3AA] block font-light">
                    Full-Stack
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#B8B3AA] block leading-tight">
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
