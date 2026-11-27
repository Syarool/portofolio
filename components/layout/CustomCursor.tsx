"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  // Instant 1:1 tracking for the rocket nose tip
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring-lagged trailing exhaust glow / target reticle
  const trailX = useSpring(cursorX, { damping: 22, stiffness: 260 });
  const trailY = useSpring(cursorY, { damping: 22, stiffness: 260 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || prefersReduced) {
      document.documentElement.classList.remove("has-rocket-cursor");
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      document.documentElement.classList.add("has-rocket-cursor");

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("select") ||
          target.closest("[role='button']") ||
          target.closest(".interactive-hover"))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      setIsVisible(false);
      document.documentElement.classList.remove("has-rocket-cursor");
    };
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("has-rocket-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, prefersReduced]);

  if (prefersReduced || !isVisible) return null;

  const boosted = isPointer || isClicking;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden"
      aria-hidden="true"
    >
      {/* Trailing Rocket Thruster Aura / Target Reticle */}
      <motion.div
        className="fixed top-0 left-0"
        style={{
          x: trailX,
          y: trailY,
        }}
      >
        <div
          className={`transition-all duration-150 ${
            isPointer
              ? "translate-x-2 translate-y-2 h-8 w-8 rounded-none border border-[#7CE0D3]/65 bg-[#7CE0D3]/10 shadow-[0_0_14px_rgba(124,224,211,0.35)]"
              : "translate-x-4 translate-y-4 h-3 w-3 bg-[#D89A5B]/30 blur-[3px]"
          }`}
        />
      </motion.div>

      {/* Crisp 16-bit Pixel Art Space Rocket Cursor (Nose tip aligned at 0,0) */}
      <motion.div
        className="fixed top-0 left-0 will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicking ? 0.9 : isPointer ? 1.12 : 1,
        }}
        transition={{ duration: 0.12 }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 15 15"
          className="pixelated drop-shadow-[2px_3px_0px_rgba(0,0,0,0.85)] -translate-x-[1px] -translate-y-[1px]"
          style={{ shapeRendering: "crispEdges" }}
        >
          {/* Dark Pixel Outline (ensures contrast over light & dark UI) */}
          <g fill="#0D0D10">
            <rect x="2" y="0" width="1" height="1" />
            <rect x="3" y="1" width="1" height="1" />
            <rect x="0" y="2" width="1" height="1" />
            <rect x="4" y="2" width="1" height="1" />
            <rect x="1" y="3" width="1" height="1" />
            <rect x="5" y="3" width="3" height="1" />
            <rect x="2" y="4" width="1" height="1" />
            <rect x="6" y="4" width="1" height="1" />
            <rect x="8" y="4" width="1" height="1" />
            <rect x="3" y="5" width="1" height="3" />
            <rect x="9" y="5" width="1" height="3" />
            <rect x="4" y="8" width="1" height="1" />
            <rect x="9" y="8" width="1" height="1" />
            <rect x="5" y="9" width="3" height="1" />
            <rect x="9" y="9" width="1" height="1" />
          </g>

          {/* Rocket Nose Cone (Amber / Cream Highlight) */}
          <rect x="0" y="0" width="1" height="1" fill="#FFF7E2" />
          <rect x="1" y="0" width="1" height="1" fill="#D89A5B" />
          <rect x="0" y="1" width="1" height="1" fill="#D89A5B" />
          <rect x="1" y="1" width="2" height="1" fill="#E8B87D" />
          <rect x="1" y="2" width="1" height="1" fill="#D89A5B" />

          {/* Main Rocket Fuselage (Ivory & Metallic Shade) */}
          <rect x="2" y="2" width="2" height="1" fill="#F5F1E8" />
          <rect x="2" y="3" width="3" height="1" fill="#F5F1E8" />
          <rect x="3" y="4" width="1" height="1" fill="#F5F1E8" />
          <rect x="4" y="5" width="1" height="1" fill="#C9C3B8" />
          <rect x="5" y="5" width="1" height="1" fill="#F5F1E8" />
          <rect x="6" y="5" width="1" height="1" fill="#C9C3B8" />
          <rect x="4" y="6" width="2" height="1" fill="#C9C3B8" />
          <rect x="6" y="6" width="1" height="1" fill="#F5F1E8" />
          <rect x="7" y="6" width="1" height="1" fill="#C9C3B8" />
          <rect x="6" y="7" width="1" height="1" fill="#C9C3B8" />

          {/* Cyan Porthole Window */}
          <rect x="4" y="4" width="2" height="1" fill="#7CE0D3" />
          <rect x="4" y="5" width="1" height="1" fill="#2A6370" />

          {/* Symmetrical Amber Stabilizer Fins */}
          <rect x="7" y="4" width="1" height="1" fill="#D89A5B" />
          <rect x="7" y="5" width="2" height="1" fill="#D89A5B" />
          <rect x="8" y="6" width="1" height="1" fill="#D89A5B" />
          <rect x="4" y="7" width="2" height="1" fill="#D89A5B" />
          <rect x="5" y="8" width="2" height="1" fill="#D89A5B" />

          {/* Thruster Nozzle */}
          <rect x="7" y="7" width="2" height="2" fill="#75604D" />
          <rect x="8" y="9" width="1" height="1" fill="#4A4642" />

          {/* Animated Pixel Exhaust Flame (Cyan core on hover/click, warm amber idle) */}
          <g className={boosted ? "opacity-100" : "animate-twinkle-fast"}>
            <rect
              x="10"
              y="9"
              width="2"
              height="1"
              fill={boosted ? "#7CE0D3" : "#D89A5B"}
            />
            <rect
              x="9"
              y="10"
              width="1"
              height="2"
              fill={boosted ? "#7CE0D3" : "#D89A5B"}
            />
            <rect x="10" y="10" width="2" height="2" fill="#FFF7E2" />
            <rect
              x="12"
              y="10"
              width="1"
              height="2"
              fill={boosted ? "#7CE0D3" : "#D89A5B"}
            />
            <rect
              x="10"
              y="12"
              width="2"
              height="1"
              fill={boosted ? "#7CE0D3" : "#D89A5B"}
            />
            {boosted && (
              <>
                <rect x="12" y="12" width="2" height="2" fill="#D89A5B" />
                <rect x="13" y="11" width="1" height="1" fill="#FFF7E2" />
                <rect x="11" y="13" width="1" height="1" fill="#FFF7E2" />
              </>
            )}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
