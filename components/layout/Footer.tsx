"use client";

import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const currentYear = 2025;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t-2 border-[#D89A5B]/30 bg-[#0d0c0b] pt-16 pb-12 text-[#F5F1E8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F5F1E8]/10 items-start">
          {/* Main Brand Column */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-pixel text-3xl sm:text-4xl font-bold text-[#F5F1E8]">
              SYAHRUL RAMADHANA
            </h3>
            <div className="flex items-center gap-2">
              <span className="pixel-badge">LEVEL 99 DEVELOPER</span>
              <span className="text-xs text-[#B8B3AA]">PT Apex Mitra Prima</span>
            </div>
            <p className="text-sm text-[#B8B3AA] font-light max-w-md leading-relaxed pt-1">
              &ldquo;Turning Ideas Into Digital Experiences.&rdquo; Modern business systems,
              intuitive user interfaces, and robust web engineering.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="font-pixel-accent text-xs uppercase tracking-widest text-[#D89A5B] font-bold">
              [ INDEX ]
            </h4>
            <ul className="space-y-2 text-xs text-[#B8B3AA]">
              <li>
                <a href="#about" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 01. Behind The Ideas
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 02. Quest: Built Projects
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 03. Toolchain &amp; Stack
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 04. Career Timeline
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 05. Send Transmission
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="font-pixel-accent text-xs uppercase tracking-widest text-[#D89A5B] font-bold">
              [ NETWORKS ]
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#B8B3AA]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#D89A5B] transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-[#D89A5B]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Syarool"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#D89A5B] transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-[#D89A5B]" />
                <span>GitHub / Syarool</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#D89A5B] transition-colors"
              >
                <InstagramIcon className="h-4 w-4 text-[#D89A5B]" />
                <span>Instagram</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="pixel-btn-outline !py-1.5 !px-3 !text-[11px]"
              >
                <ArrowUp className="h-3 w-3" />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#B8B3AA]/70 font-mono">
          <div>
            © {currentYear} Syahrul Ramadhana. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-[#D89A5B]">
            <span>◆ MODERN-PIXEL HYBRID ARCHITECTURE ◆</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
