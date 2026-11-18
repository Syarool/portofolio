"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "cyan" | "emerald" | "purple" | "blue" | "amber";
  children: React.ReactNode;
}

export default function GlowCard({
  children,
  className,
  glowColor = "cyan",
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const glowStyles = {
    cyan: "rgba(6, 182, 212, 0.18)",
    emerald: "rgba(16, 185, 129, 0.18)",
    purple: "rgba(168, 85, 247, 0.18)",
    blue: "rgba(59, 130, 246, 0.18)",
    amber: "rgba(245, 158, 11, 0.18)",
  };

  const borderStyles = {
    cyan: "group-hover:border-cyan-500/40",
    emerald: "group-hover:border-emerald-500/40",
    purple: "group-hover:border-purple-500/40",
    blue: "group-hover:border-blue-500/40",
    amber: "group-hover:border-amber-500/40",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/50",
        borderStyles[glowColor],
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowStyles[glowColor]}, transparent 70%)`
            : "none",
        }}
      />
      {/* Corner accent glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-500" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

