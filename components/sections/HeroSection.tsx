"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Cinematic cliff-at-golden-hour SVG scene
 * Extracted directly from "Portofolio – Hero Background.html"
 * Exact visual match to Image 1: golden-hour sunset, dramatic clouds, cliff, figure with laptop.
 */
function CinematicSVG() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full object-cover block"
    >
      <defs>
        {/* Sky gradient: deep midnight → warm amber at horizon */}
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"   stopColor="#1a0f0a"/>
          <stop offset=".32" stopColor="#5c2810"/>
          <stop offset=".58" stopColor="#c4661a"/>
          <stop offset=".75" stopColor="#e8923a"/>
          <stop offset="1"   stopColor="#f0b35a"/>
        </linearGradient>

        {/* Solar radial glow (right-center) */}
        <radialGradient id="sunGlow" cx="1140" cy="130" r="460" gradientUnits="userSpaceOnUse">
          <stop offset="0"   stopColor="#fff8d4"/>
          <stop offset=".08" stopColor="#ffe0a0" stopOpacity=".95"/>
          <stop offset=".22" stopColor="#f5b060" stopOpacity=".80"/>
          <stop offset=".50" stopColor="#e07020" stopOpacity=".45"/>
          <stop offset="1"   stopColor="#c04a10" stopOpacity="0"/>
        </radialGradient>

        {/* Secondary warm horizon bloom */}
        <radialGradient id="horizon" cx="800" cy="610" r="600" gradientUnits="userSpaceOnUse">
          <stop offset="0"   stopColor="#f5a040" stopOpacity=".50"/>
          <stop offset=".40" stopColor="#c05828" stopOpacity=".25"/>
          <stop offset="1"   stopColor="#200e06" stopOpacity="0"/>
        </radialGradient>

        {/* Cloud: lit (warm golden) */}
        <linearGradient id="cloudWarm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"   stopColor="#ffe0a8"/>
          <stop offset=".35" stopColor="#e09040"/>
          <stop offset=".75" stopColor="#7a3814"/>
          <stop offset="1"   stopColor="#281208"/>
        </linearGradient>

        {/* Cloud: dark (shadowed) */}
        <linearGradient id="cloudDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"   stopColor="#2e1a0f"/>
          <stop offset=".50" stopColor="#1a0d08"/>
          <stop offset="1"   stopColor="#0d0704"/>
        </linearGradient>

        {/* Mid-level amber cloud */}
        <linearGradient id="cloudMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"   stopColor="#c87030"/>
          <stop offset="1"   stopColor="#3c1a0a"/>
        </linearGradient>

        {/* Cliff / terrain gradient */}
        <linearGradient id="cliff" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0"   stopColor="#4a3820"/>
          <stop offset=".50" stopColor="#2a1e10"/>
          <stop offset="1"   stopColor="#0d0905"/>
        </linearGradient>

        {/* Grass / vegetation */}
        <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0"   stopColor="#5a7a28"/>
          <stop offset="1"   stopColor="#2a4010"/>
        </linearGradient>

        {/* Soft glow blur */}
        <filter id="soft"><feGaussianBlur stdDeviation="16"/></filter>
        <filter id="softer"><feGaussianBlur stdDeviation="28"/></filter>
      </defs>

      {/* 1. Sky base */}
      <rect width="1600" height="900" fill="url(#sky)"/>

      {/* 2. Sun radial glow */}
      <ellipse cx="1140" cy="118" rx="52" ry="52" fill="#fffae8" opacity=".92"/>
      <rect width="1600" height="900" fill="url(#sunGlow)"/>
      <rect width="1600" height="900" fill="url(#horizon)"/>

      {/* 3. Thin atmospheric haze band at horizon */}
      <rect x="0" y="480" width="1600" height="90" fill="#e08030" opacity=".22" filter="url(#softer)"/>

      {/* 4. Dark upper/left clouds */}
      <g fill="url(#cloudDark)" opacity=".95">
        <ellipse cx="80"  cy="210" rx="260" ry="115"/>
        <ellipse cx="380" cy="100" rx="205" ry="72"/>
        <ellipse cx="720" cy="52"  rx="230" ry="52"/>
        <ellipse cx="560" cy="145" rx="175" ry="60"/>
      </g>

      {/* 5. Brilliant warm cloud towers (right, backlit by sun) */}
      <g fill="url(#cloudWarm)">
        <ellipse cx="1140" cy="310" rx="230" ry="185"/>
        <ellipse cx="1420" cy="300" rx="200" ry="118"/>
        <ellipse cx="1340" cy="460" rx="340" ry="130"/>
        <ellipse cx="1540" cy="600" rx="270" ry="155"/>
        <ellipse cx="1200" cy="510" rx="180" ry="90"/>
      </g>

      {/* 6. Mid-tone amber cloud bank */}
      <g fill="url(#cloudMid)" opacity=".88">
        <ellipse cx="1020" cy="620" rx="340" ry="115"/>
        <ellipse cx="1300" cy="750" rx="410" ry="115"/>
      </g>

      {/* 7. Deep shadow base */}
      <g filter="url(#soft)" fill="#1a0a04" opacity=".75">
        <ellipse cx="880" cy="862" rx="720" ry="95"/>
      </g>

      {/* 8. Foreground cliff/terrain */}
      <path
        d="M0 572 C180 530 340 480 520 440 C670 408 800 418 900 455 C1000 490 1100 510 1220 568 L1230 900 L0 900 Z"
        fill="url(#cliff)"
      />

      {/* Grass/vegetation strip on cliff edge */}
      <path
        d="M320 476 C520 416 740 400 900 455 C1000 490 1100 510 1220 568 L1218 586 C1098 538 998 520 898 480 C740 432 548 448 320 508 Z"
        fill="url(#grass)"
        opacity=".90"
      />

      {/* 9. Rocky outcrop center-left */}
      <path d="M570 338 L620 294 L700 304 L732 356 L700 396 L598 406 Z" fill="#6b5a46"/>
      <path d="M570 338 L620 294 L660 306 L618 358 L588 400 Z" fill="#8c7660" opacity=".70"/>
      <path d="M622 296 Q648 288 698 308 Q688 294 648 288 Z" fill="#b09878" opacity=".40"/>

      {/* 10. Ground vegetation / bushes */}
      <g fill="#5b7a2a">
        <ellipse cx="1020" cy="502" rx="54"  ry="34"/>
        <ellipse cx="622"  cy="288" rx="42"  ry="25"/>
        <ellipse cx="460"  cy="440" rx="36"  ry="20"/>
        <ellipse cx="790"  cy="438" rx="30"  ry="17"/>
      </g>
      <g fill="#3d5c18" opacity=".60">
        <ellipse cx="610"  cy="295" rx="38"  ry="20"/>
        <ellipse cx="1030" cy="510" rx="48"  ry="28"/>
      </g>

      {/* 11. Small hut / shelter */}
      <g>
        <path d="M252 474 L336 382 L434 398 L404 474 Z" fill="#281c12"/>
        <path d="M252 474 L336 382 L354 395 L292 474 Z" fill="#5c4432"/>
        <path d="M290 444 L402 458" stroke="#b08040" strokeWidth="3.5" strokeLinecap="round"/>
      </g>

      {/* 12. Electricity poles */}
      <g stroke="#16100a" strokeLinecap="round">
        <line x1="510" y1="128" x2="520" y2="432" strokeWidth="8"/>
        <line x1="478" y1="162" x2="556" y2="158" strokeWidth="6"/>
        <line x1="482" y1="208" x2="548" y2="204" strokeWidth="5"/>
        <line x1="62"  y1="282" x2="68"  y2="432" strokeWidth="7"/>
        <line x1="674" y1="236" x2="672" y2="412" strokeWidth="5"/>
        <line x1="650" y1="258" x2="700" y2="254" strokeWidth="4"/>
      </g>

      {/* 13. Suspension wires */}
      <g stroke="#16100a" strokeWidth="1.6" fill="none" opacity=".90">
        <path d="M0 252 Q250 213 480 165"/>
        <path d="M0 292 Q250 248 480 207"/>
        <path d="M0 334 Q250 285 490 213"/>
        <path d="M558 162 Q616 192 650 260"/>
        <path d="M544 206 Q606 234 656 264"/>
      </g>

      {/* 14. Figure: person sitting with laptop */}
      <g>
        <ellipse cx="885" cy="502" rx="62" ry="10" fill="#000" opacity=".32"/>
        <path d="M835 498 L854 433 L888 412 L908 442 L922 498 Z" fill="#4a4830"/>
        <circle cx="870" cy="397" r="18" fill="#c46038"/>
        <path d="M854 393 Q870 366 890 384 L887 398 Q872 382 854 400 Z" fill="#9e4225"/>
        <path d="M848 445 L810 458 L812 472 L852 462 Z" fill="#4a4830"/>
        <path d="M902 428 L948 418 L962 455 L914 465 Z" fill="#c8daf0"/>
        <path d="M913 433 L948 426 L958 452 L917 460 Z" fill="#ffffff" opacity=".65"/>
        <ellipse cx="934" cy="438" rx="68" ry="44" fill="#c8daf0" opacity=".14" filter="url(#soft)"/>
        <path d="M882 500 L934 472 L948 482 L902 508 Z" fill="#38382a"/>
      </g>

      {/* 15. Foreground depth edge vignette */}
      <rect width="1600" height="900" fill="url(#cliff)" opacity=".08"/>
    </svg>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden isolate flex flex-col justify-end pb-16 sm:pb-20 lg:pb-28 pt-32"
    >
      {/* =========================================================================
          CINEMATIC BACKGROUND — Cliff at golden hour (isolated, z-0)
         ========================================================================= */}
      <motion.div
        className="absolute inset-0 z-0 h-[112%] w-full pointer-events-none"
        style={{ y: prefersReduced ? 0 : bgY }}
      >
        <CinematicSVG />

        {/* Soft, balanced gradient overlays — only dims text area on left/bottom */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(16,16,15,0.85) 0%, rgba(16,16,15,0.40) 45%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, rgba(16,16,15,0.95) 0%, rgba(16,16,15,0.25) 35%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-28 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,16,15,0.60) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* =========================================================================
          EDITORIAL TYPOGRAPHY — lower-left position, Image 1 style
         ========================================================================= */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <motion.div
          style={{
            y: prefersReduced ? 0 : textY,
            opacity: prefersReduced ? 1 : textOpacity,
          }}
          className="max-w-3xl space-y-5"
        >
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center gap-3 text-xs sm:text-sm font-light tracking-wider text-[#B8B3AA]"
          >
            <span className="h-px w-8 bg-[#D89A5B]" />
            <span>Business System Development &amp; Web Developer</span>
            <span className="h-1 w-1 rounded-full bg-[#D89A5B]" />
            <span className="text-[#F5F1E8]/70">Based in Indonesia</span>
          </motion.div>

          {/* Oversized serif name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-headline text-[13vw] sm:text-[11vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[112px] font-normal tracking-tight text-[#F5F1E8] leading-[0.9]"
          >
            Syahrul
            <br />
            <span className="text-[#F5F1E8]/90">Ramadhana</span>
          </motion.h1>

          {/* Supporting description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-sm sm:text-base lg:text-lg font-light text-[#F5F1E8]/85 leading-relaxed max-w-xl"
          >
            I design and develop digital solutions that connect technology,
            business processes, and meaningful user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#F5F1E8] px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#10100F] shadow-lg shadow-black/40 transition-all duration-300 hover:bg-[#D89A5B] hover:shadow-xl hover:scale-[1.02]"
            >
              <span>Explore My Work</span>
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#F5F1E8]/30 bg-[#F5F1E8]/10 backdrop-blur-md px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-[#F5F1E8] transition-all duration-300 hover:border-[#F5F1E8]/70 hover:bg-[#F5F1E8]/20"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.0 }}
        className="absolute bottom-10 right-8 sm:right-12 lg:right-16 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-[#B8B3AA]/70 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-[#D89A5B]/80 to-transparent" />
      </motion.div>
    </section>
  );
}
