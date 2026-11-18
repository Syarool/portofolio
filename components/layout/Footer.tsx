"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const currentYear = 2025;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-[#F5F1E8]/8 bg-[#10100F] pt-20 pb-12 text-[#F5F1E8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F5F1E8]/8 items-start">
          {/* Main Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-serif-headline text-3xl sm:text-4xl font-normal text-[#F5F1E8]">
              Syahrul Ramadhana
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#D89A5B] font-medium">
              Business System Development &amp; Web Developer
            </p>
            <p className="text-sm text-[#B8B3AA] font-light max-w-md leading-relaxed">
              &ldquo;I don&apos;t just build websites. I build digital experiences.&rdquo;
            </p>
            <p className="text-xs text-[#B8B3AA]/70 pt-2 font-light">
              Former Business System Development Intern at <span className="text-[#F5F1E8]">PT Apex Mitra Prima</span>. Creator of <span className="text-[#D89A5B]">Kawan Apex</span>.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8] font-semibold">
              Index
            </h4>
            <ul className="space-y-2 text-xs text-[#B8B3AA] font-light">
              <li>
                <a href="#about" className="hover:text-[#D89A5B] transition-colors">
                  01. Behind The Ideas
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#D89A5B] transition-colors">
                  02. Things I&apos;ve Built
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-[#D89A5B] transition-colors">
                  03. Crafted With Curiosity
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#D89A5B] transition-colors">
                  04. The Journey So Far
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D89A5B] transition-colors">
                  05. Dialogue &amp; Transmission
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8] font-semibold">
              Presence
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-[#B8B3AA] font-light">
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
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#D89A5B] transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-[#D89A5B]" />
                <span>GitHub</span>
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

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-full border border-[#F5F1E8]/15 bg-[#171615] px-4 py-2 text-xs text-[#F5F1E8] hover:border-[#D89A5B] hover:text-[#D89A5B] transition-all"
              >
                <ArrowUp className="h-3 w-3" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8B3AA]/60 font-light">
          <div>
            © {currentYear} Syahrul Ramadhana. All Rights Reserved.
          </div>
          <div>
            Cinematic Personal Storytelling // Next.js &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
