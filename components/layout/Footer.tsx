"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const currentYear = 2025;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t-2 border-[#D89A5B]/30 bg-[#0A0A0D] pt-16 pb-12 text-[#F5F1E8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F5F1E8]/10 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-pixel text-3xl sm:text-4xl font-bold text-[#F5F1E8]">
              SYAHRUL RAMADHANA
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="pixel-badge">BUSINESS SYSTEM DEVELOPER</span>
              <span className="text-xs font-mono text-[#B8B3AA]">
                PT. Apex Mitra Prima · Maganghub
              </span>
            </div>
            <p className="text-sm text-[#B8B3AA] font-light max-w-md leading-relaxed pt-1">
              Building Digital Solutions Through Technology &amp; Innovation.
            </p>
          </div>

          {/* Index Column */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="font-pixel-accent text-xs uppercase tracking-widest text-[#D89A5B] font-bold">
              [ SECTIONS ]
            </h4>
            <ul className="space-y-2 text-xs text-[#B8B3AA]">
              <li>
                <a href="#about" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 01. About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 02. Skills &amp; Stack
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 03. Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 04. Featured Projects
                </a>
              </li>
              <li>
                <a href="#creative-works" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 05. Creative Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D89A5B] transition-colors flex items-center gap-1.5">
                  <span>▸</span> 06. Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="font-pixel-accent text-xs uppercase tracking-widest text-[#D89A5B] font-bold">
              [ CONNECT ]
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#B8B3AA]">
              <a
                href="mailto:syahrul.ramadhana.dev@gmail.com"
                className="flex items-center gap-2 hover:text-[#D89A5B] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#D89A5B]" />
                <span>Email Me</span>
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
            </div>

            <div className="pt-2">
              <button
                type="button"
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
          <div>© {currentYear} Syahrul Ramadhana. All Rights Reserved.</div>
          <div className="text-[#D89A5B]">
            ◆ NEXT.JS · TYPESCRIPT · FRAMER MOTION · PIXEL SPACE ◆
          </div>
        </div>
      </div>
    </footer>
  );
}
