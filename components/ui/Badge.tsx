import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cyan" | "emerald" | "purple" | "outline" | "ghost";
  size?: "sm" | "md";
}

export default function Badge({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-white/10 text-white border-white/15",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    outline: "bg-transparent text-zinc-300 border-zinc-700 hover:border-zinc-500",
    ghost: "bg-white/5 text-zinc-400 border-transparent",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3.5 py-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium rounded-full border transition-all duration-200 tracking-wide",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

