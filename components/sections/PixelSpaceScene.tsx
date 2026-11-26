"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, MotionValue } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ASTRONAUT_QUOTES = [
  "Architecting digital systems...",
  "Zero-gravity UX exploration!",
  "Kawan Apex systems: ONLINE",
  "Ready to build your next idea!",
];

interface PixelSpaceSceneProps {
  planetFarY: MotionValue<string>;
  planetMidY: MotionValue<string>;
  astronautY: MotionValue<string>;
  astronautX: MotionValue<string>;
}

/**
 * Interactive 16-bit Pixel Art Space Scene.
 * Features multi-depth twinkling pixel stars, orbiting/floating pixel planets,
 * and a cursor-reactive, clickable pixel astronaut with animated jetpack thrusters.
 */
export default function PixelSpaceScene({
  planetFarY,
  planetMidY,
  astronautY,
  astronautX,
}: PixelSpaceSceneProps) {
  const prefersReduced = useReducedMotion();
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [boosted, setBoosted] = useState(false);

  // Smooth springs for pointer-based 3D depth parallax
  const mouseX = useSpring(0, { stiffness: 70, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 70, damping: 20 });
  const astroMouseX = useSpring(0, { stiffness: 90, damping: 18 });
  const astroMouseY = useSpring(0, { stiffness: 90, damping: 18 });

  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;
    const handleMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mouseX.set(nx * -28);
      mouseY.set(ny * -22);
      astroMouseX.set(nx * 36);
      astroMouseY.set(ny * 28);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReduced, mouseX, mouseY, astroMouseX, astroMouseY]);

  const handleAstronautClick = () => {
    setQuoteIdx((prev) => (prev + 1) % ASTRONAUT_QUOTES.length);
    setBoosted(true);
    setTimeout(() => setBoosted(false), 900);
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0D0D10] select-none">
      {/* Subtle Pixel Nebula Gradient & Dither Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 78% 28%, rgba(216, 154, 91, 0.14) 0%, rgba(124, 224, 211, 0.06) 35%, rgba(13, 13, 16, 0.96) 78%)",
        }}
      />

      {/* ============================================================
          LAYER 1: TWINKLING PIXEL STARFIELD & DISTANT GALAXY PIXELS
         ============================================================ */}
      <motion.div
        style={{ y: prefersReduced ? 0 : planetFarY }}
        className="absolute inset-0 pointer-events-none"
      >
        <svg
          viewBox="0 0 480 270"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full pixelated"
          style={{ shapeRendering: "crispEdges" }}
          aria-hidden="true"
        >
          {/* Dim background stars */}
          <g fill="#B8B3AA" opacity="0.45">
            <rect x="24" y="28" width="1" height="1" />
            <rect x="68" y="62" width="1" height="1" />
            <rect x="115" y="19" width="1" height="1" />
            <rect x="158" y="88" width="1" height="1" />
            <rect x="204" y="40" width="1" height="1" />
            <rect x="260" y="22" width="1" height="1" />
            <rect x="305" y="95" width="1" height="1" />
            <rect x="342" y="18" width="1" height="1" />
            <rect x="412" y="45" width="1" height="1" />
            <rect x="452" y="82" width="1" height="1" />
            <rect x="48" y="142" width="1" height="1" />
            <rect x="92" y="188" width="1" height="1" />
            <rect x="180" y="155" width="1" height="1" />
            <rect x="245" y="210" width="1" height="1" />
            <rect x="320" y="185" width="1" height="1" />
            <rect x="398" y="218" width="1" height="1" />
            <rect x="444" y="160" width="1" height="1" />
          </g>

          {/* Twinkling cross stars (Ivory & Amber) */}
          <g className="animate-twinkle-slow" fill="#F5F1E8">
            <rect x="85" y="34" width="2" height="2" />
            <rect x="84" y="35" width="4" height="1" opacity="0.5" />
            <rect x="85" y="33" width="1" height="4" opacity="0.5" />

            <rect x="220" y="65" width="2" height="2" />
            <rect x="430" y="110" width="2" height="2" />
            <rect x="148" y="205" width="2" height="2" />
          </g>

          <g className="animate-twinkle-fast" fill="#D89A5B">
            <rect x="165" y="26" width="2" height="2" />
            <rect x="295" y="42" width="2" height="2" />
            <rect x="380" y="195" width="2" height="2" />
            <rect x="52" y="218" width="2" height="2" />
          </g>

          <g className="animate-twinkle-slow" fill="#7CE0D3">
            <rect x="278" y="145" width="2" height="2" />
            <rect x="462" y="24" width="2" height="2" />
          </g>
        </svg>

        {/* Periodic Pixel Shooting Star */}
        {!prefersReduced && (
          <motion.div
            initial={{ x: "85vw", y: "10vh", opacity: 0 }}
            animate={{
              x: ["85vw", "35vw"],
              y: ["8vh", "42vh"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "linear",
            }}
            className="absolute top-0 left-0 flex items-center"
          >
            <div className="h-[2px] w-16 bg-gradient-to-l from-[#F5F1E8] via-[#D89A5B] to-transparent -rotate-[32deg] pixelated" />
          </motion.div>
        )}
      </motion.div>

      {/* ============================================================
          LAYER 2: DISTANT VIOLET / TEAL PIXEL EXOPLANET (Top-Left/Mid)
         ============================================================ */}
      <motion.div
        style={{
          y: prefersReduced ? 0 : planetFarY,
          x: prefersReduced ? 0 : mouseX,
        }}
        animate={
          prefersReduced
            ? {}
            : {
                y: [0, -10, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-[14%] left-[8%] sm:left-[18%] opacity-75"
      >
        <svg
          width="68"
          height="68"
          viewBox="0 0 18 18"
          className="pixelated drop-shadow-[0_0_14px_rgba(124,224,211,0.22)]"
          style={{ shapeRendering: "crispEdges" }}
          aria-hidden="true"
        >
          {/* Stepped Pixel Moon / Ice Planet */}
          <rect x="6" y="2" width="6" height="14" fill="#3B828E" />
          <rect x="4" y="3" width="10" height="12" fill="#3B828E" />
          <rect x="3" y="4" width="12" height="10" fill="#4BA3AE" />
          <rect x="2" y="6" width="14" height="6" fill="#4BA3AE" />
          {/* Lit side */}
          <rect x="4" y="4" width="6" height="5" fill="#7CE0D3" />
          <rect x="3" y="6" width="4" height="4" fill="#9BF3E6" />
          {/* Dark shadow crescent */}
          <rect x="11" y="5" width="3" height="8" fill="#1F4A56" />
          <rect x="9" y="11" width="5" height="3" fill="#1F4A56" />
          {/* Pixel Craters */}
          <rect x="6" y="7" width="2" height="2" fill="#2A6370" />
          <rect x="9" y="5" width="2" height="1" fill="#2A6370" />
          <rect x="5" y="11" width="2" height="2" fill="#2A6370" />
        </svg>
      </motion.div>

      {/* ============================================================
          LAYER 3: PRIMARY RINGED PIXEL PLANET (Upper-Right Horizon)
         ============================================================ */}
      <motion.div
        style={{
          y: prefersReduced ? 0 : planetMidY,
          x: prefersReduced ? 0 : mouseX,
        }}
        animate={
          prefersReduced
            ? {}
            : {
                y: [0, -14, 0],
                rotate: [-2, 2, -2],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-[12%] right-[-4%] sm:right-[7%] lg:right-[10%] opacity-95"
      >
        <svg
          viewBox="0 0 64 48"
          className="w-52 h-40 sm:w-72 sm:h-56 lg:w-88 lg:h-64 pixelated drop-shadow-[0_0_28px_rgba(216,154,91,0.2)]"
          style={{ shapeRendering: "crispEdges" }}
          aria-hidden="true"
        >
          {/* Back Ring Half */}
          <g fill="#75604D">
            <rect x="10" y="16" width="10" height="2" />
            <rect x="14" y="14" width="12" height="2" />
            <rect x="24" y="12" width="16" height="2" />
            <rect x="38" y="14" width="12" height="2" />
            <rect x="46" y="16" width="8" height="2" />
          </g>

          {/* Planet Core Sphere (Pixel Stepped) */}
          <rect x="24" y="10" width="16" height="28" fill="#B86B35" />
          <rect x="20" y="12" width="24" height="24" fill="#B86B35" />
          <rect x="18" y="14" width="28" height="20" fill="#D89A5B" />
          <rect x="16" y="18" width="32" height="12" fill="#D89A5B" />

          {/* Atmospheric Horizontal Bands */}
          <rect x="19" y="15" width="22" height="2" fill="#E8B87D" />
          <rect x="17" y="19" width="26" height="3" fill="#F0C995" />
          <rect x="17" y="24" width="29" height="2" fill="#9E5224" />
          <rect x="19" y="28" width="25" height="2" fill="#7D3E1A" />
          <rect x="22" y="33" width="18" height="2" fill="#542710" />

          {/* Terminator Night Shadow (Right/Bottom) */}
          <rect x="38" y="15" width="8" height="18" fill="#2A1710" opacity="0.55" />
          <rect x="33" y="29" width="11" height="7" fill="#1C0F0A" opacity="0.65" />
          <rect x="26" y="34" width="14" height="4" fill="#140A06" opacity="0.7" />

          {/* Front Ring Half (Overlapping Planet) */}
          <g>
            <rect x="4" y="26" width="12" height="2" fill="#F5F1E8" />
            <rect x="8" y="28" width="16" height="2" fill="#D89A5B" />
            <rect x="16" y="30" width="28" height="2" fill="#F5F1E8" />
            <rect x="26" y="32" width="24" height="2" fill="#D89A5B" />
            <rect x="42" y="28" width="14" height="2" fill="#F5F1E8" />
            <rect x="48" y="26" width="10" height="2" fill="#E8B87D" />
            <rect x="52" y="24" width="8" height="2" fill="#75604D" />
          </g>
        </svg>
      </motion.div>

      {/* ============================================================
          LAYER 4: SMALL ORBITING ASTEROID / SATELLITE PIXEL
         ============================================================ */}
      <motion.div
        style={{ y: prefersReduced ? 0 : planetMidY }}
        animate={
          prefersReduced
            ? {}
            : {
                x: [0, 18, 0, -14, 0],
                y: [0, -12, 4, -8, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[55%] right-[32%] hidden md:block opacity-80"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 12 12"
          className="pixelated"
          style={{ shapeRendering: "crispEdges" }}
          aria-hidden="true"
        >
          {/* Mini Pixel Satellite / Probe */}
          <rect x="1" y="4" width="3" height="4" fill="#3B828E" />
          <rect x="8" y="4" width="3" height="4" fill="#3B828E" />
          <rect x="4" y="3" width="4" height="6" fill="#B8B3AA" />
          <rect x="5" y="4" width="2" height="2" fill="#D89A5B" />
          <rect x="5" y="1" width="1" height="2" fill="#F5F1E8" />
          <rect x="5" y="0" width="2" height="1" fill="#7CE0D3" className="animate-twinkle-fast" />
        </svg>
      </motion.div>

      {/* ============================================================
          LAYER 5: MOVING & INTERACTIVE PIXEL ASTRONAUT (Right-Center)
         ============================================================ */}
      <motion.div
        style={{
          y: prefersReduced ? 0 : astronautY,
          x: prefersReduced ? 0 : astronautX,
        }}
        className="absolute bottom-[18%] sm:bottom-[22%] right-[6%] sm:right-[10%] lg:right-[13%] z-20"
      >
        <motion.div
          style={{
            x: prefersReduced ? 0 : astroMouseX,
            y: prefersReduced ? 0 : astroMouseY,
          }}
        >
          <motion.button
            type="button"
            onClick={handleAstronautClick}
            aria-label="Interactive floating pixel astronaut — click to trigger thruster boost"
            animate={
              prefersReduced
                ? {}
                : boosted
                ? { y: -28, rotate: [0, -12, 8, 0], scale: 1.08 }
                : {
                    y: [0, -16, 0, -9, 0],
                    rotate: [-3, 3, -2, 2, -3],
                  }
            }
            transition={
              boosted
                ? { duration: 0.7, ease: "easeOut" }
                : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
            }
            whileHover={{ scale: 1.06 }}
            className="group relative cursor-pointer focus:outline-none"
          >
            {/* Interactive Speech Bubble */}
            <div className="pointer-events-none absolute -top-11 right-0 sm:right-auto sm:-left-16 whitespace-nowrap border border-[#D89A5B]/60 bg-[#141419]/95 px-2.5 py-1 font-mono text-[10px] text-[#F5F1E8] shadow-[2px_2px_0_0_#000] opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-[#D89A5B] mr-1">▸</span>
              {ASTRONAUT_QUOTES[quoteIdx]}
            </div>

            {/* 16-bit Pixel Astronaut Sprite */}
            <svg
              viewBox="0 0 32 36"
              className="w-28 h-32 sm:w-36 sm:h-40 lg:w-44 lg:h-48 pixelated drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
              style={{ shapeRendering: "crispEdges" }}
            >
              {/* Antenna */}
              <rect x="19" y="1" width="1" height="4" fill="#B8B3AA" />
              <rect
                x="18"
                y="0"
                width="3"
                height="2"
                fill={boosted ? "#7CE0D3" : "#D89A5B"}
                className="animate-twinkle-fast"
              />

              {/* Backpack / Jetpack */}
              <rect x="6" y="12" width="5" height="11" fill="#75604D" />
              <rect x="7" y="13" width="3" height="9" fill="#B8B3AA" />
              <rect x="7" y="15" width="2" height="2" fill="#D89A5B" />

              {/* Animated Jetpack Thruster Flame */}
              <g className={boosted ? "opacity-100" : "animate-twinkle-fast"}>
                <rect x="6" y="23" width="4" height={boosted ? "7" : "4"} fill="#D89A5B" />
                <rect x="7" y="23" width="2" height={boosted ? "9" : "5"} fill="#7CE0D3" />
                <rect x="7" y="23" width="2" height="2" fill="#F5F1E8" />
              </g>

              {/* Helmet Outer */}
              <rect x="10" y="4" width="12" height="10" fill="#F5F1E8" />
              <rect x="9" y="6" width="14" height="7" fill="#F5F1E8" />
              <rect x="11" y="3" width="10" height="1" fill="#F5F1E8" />
              {/* Helmet Shading */}
              <rect x="10" y="13" width="12" height="1" fill="#B8B3AA" />

              {/* Reflective Gold/Amber Visor */}
              <rect x="13" y="6" width="9" height="6" fill="#2A1C12" />
              <rect x="14" y="7" width="7" height="4" fill="#D89A5B" />
              {/* Visor Star Reflection */}
              <rect x="15" y="8" width="2" height="1" fill="#FFF7E2" />
              <rect x="19" y="9" width="1" height="1" fill="#7CE0D3" />

              {/* Torso / Space Suit */}
              <rect x="10" y="14" width="11" height="10" fill="#F5F1E8" />
              <rect x="11" y="15" width="9" height="8" fill="#E6E0D4" />
              {/* Chest Control Unit */}
              <rect x="13" y="16" width="6" height="4" fill="#26252D" />
              <rect x="14" y="17" width="2" height="2" fill="#7CE0D3" />
              <rect x="17" y="17" width="1" height="1" fill="#D89A5B" />
              {/* Utility Belt */}
              <rect x="10" y="22" width="11" height="2" fill="#75604D" />
              <rect x="15" y="22" width="2" height="2" fill="#D89A5B" />

              {/* Left Arm (Relaxed / Floating) */}
              <rect x="8" y="15" width="2" height="6" fill="#E6E0D4" />
              <rect x="7" y="20" width="3" height="2" fill="#B8B3AA" />

              {/* Right Arm (Waving / Holding Mini Code Star) */}
              <rect x="21" y="14" width="4" height="3" fill="#F5F1E8" />
              <rect x="24" y="11" width="3" height="4" fill="#F5F1E8" />
              <rect x="25" y="10" width="2" height="2" fill="#D89A5B" />
              {/* Floating Hologram Pixel Cube */}
              <rect x="27" y="7" width="2" height="2" fill="#7CE0D3" className="animate-twinkle-slow" />

              {/* Legs (Zero-gravity bent pose) */}
              <rect x="10" y="24" width="4" height="6" fill="#E6E0D4" />
              <rect x="9" y="29" width="5" height="3" fill="#75604D" />
              <rect x="9" y="31" width="5" height="1" fill="#2A2622" />

              <rect x="16" y="24" width="4" height="5" fill="#F5F1E8" />
              <rect x="17" y="28" width="5" height="3" fill="#75604D" />
              <rect x="17" y="30" width="5" height="1" fill="#2A2622" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Atmospheric Fade into Page Charcoal */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D10] via-[#0D0D10]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#0D0D10]/90 via-[#0D0D10]/50 to-transparent" />
    </div>
  );
}
