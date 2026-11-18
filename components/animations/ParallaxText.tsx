"use client";

import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface ParallaxTextProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  itemClassName?: string;
}

export default function ParallaxText({
  items,
  direction = "left",
  speed = 25,
  className,
  itemClassName,
}: ParallaxTextProps) {
  const prefersReduced = useReducedMotion();

  // Duplicate items to ensure smooth infinite loop
  const repeated = [...items, ...items, ...items, ...items];

  if (prefersReduced) {
    return (
      <div className={cn("flex flex-wrap gap-4 overflow-hidden py-4", className)}>
        {items.map((item, idx) => (
          <span key={idx} className={itemClassName}>
            {item}
          </span>
        ))}
      </div>
    );
  }

  const animateProps =
    direction === "left"
      ? { x: ["0%", "-50%"] }
      : { x: ["-50%", "0%"] };

  return (
    <div className={cn("relative flex w-full overflow-hidden select-none py-3", className)}>
      {/* Gradient masks for edge fade */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-[#07090e] to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-[#07090e] to-transparent" />

      <motion.div
        className="flex shrink-0 items-center gap-8 whitespace-nowrap"
        animate={animateProps}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {repeated.map((item, idx) => (
          <div key={idx} className={cn("flex items-center gap-8", itemClassName)}>
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/60" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

