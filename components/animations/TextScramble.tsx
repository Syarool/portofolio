"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: boolean;
  speed?: number;
}

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#";

export default function TextScramble({
  text,
  className,
  trigger = true,
  speed = 30,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const iterationRef = useRef(0);
  const prefersReduced = useReducedMotion();

  const scramble = useCallback(() => {
    if (prefersReduced) {
      setDisplayText(text);
      return;
    }

    iterationRef.current = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iterationRef.current) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iterationRef.current >= text.length) {
        clearInterval(interval);
      }

      iterationRef.current += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, prefersReduced, speed]);

  useEffect(() => {
    if (trigger) {
      const cleanup = scramble();
      return cleanup;
    }
  }, [trigger, scramble]);

  return <span className={className}>{displayText}</span>;
}

