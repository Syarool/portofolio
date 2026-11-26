"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });
  const auraX = useSpring(0, { damping: 20, stiffness: 180 });
  const auraY = useSpring(0, { damping: 20, stiffness: 180 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || prefersReduced) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      auraX.set(e.clientX);
      auraY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("[role='button']") ||
          target.closest(".interactive-hover"))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, auraX, auraY, isVisible, prefersReduced]);

  if (!mounted || prefersReduced || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Square - Pixel Reticle Aura */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-2 border-[#D89A5B]/60 bg-[#D89A5B]/10 transition-[width,height,background-color] duration-150 shadow-[2px_2px_0_0_#000]"
        style={{
          x: auraX,
          y: auraY,
          width: isPointer ? 38 : 20,
          height: isPointer ? 38 : 20,
        }}
      />
      {/* Inner Pixel Dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#F5F1E8]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </div>
  );
}
