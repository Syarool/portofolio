"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Creative", href: "#creative-works" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 40);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D0D10]/92 backdrop-blur-md py-3.5 border-b-2 border-[#D89A5B]/30 shadow-[0_4px_0_0_#000]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Logo Mark */}
          <a
            href="#home"
            className="group flex items-center gap-2 transition-transform hover:-translate-y-0.5"
          >
            <span className="font-pixel text-xl sm:text-2xl font-bold tracking-tight text-[#F5F1E8]">
              [<span className="text-[#D89A5B]">SYAHRUL</span>.DEV]
            </span>
          </a>

          {/* Centered Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1 bg-[#141419]/85 border border-[#F5F1E8]/15 px-3 py-1.5 shadow-[2px_2px_0_0_#000]"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-pixel-accent text-[11px] uppercase tracking-wider px-3 py-1.5 transition-all ${
                    isActive
                      ? "bg-[#D89A5B] text-[#0D0D10] font-bold shadow-[2px_2px_0_0_#000]"
                      : "text-[#B8B3AA] hover:text-[#F5F1E8] hover:bg-[#F5F1E8]/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="pixel-btn-outline !py-2 !px-4 !text-xs !gap-1.5">
              <span>CONNECT</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden h-9 w-9 items-center justify-center border-2 border-[#F5F1E8]/30 bg-[#141419] text-[#F5F1E8] shadow-[2px_2px_0_0_#000] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-[#0D0D10]/98 px-8 pt-24 pb-12 backdrop-blur-2xl lg:hidden border-b-4 border-[#D89A5B]"
          >
            <div className="space-y-5">
              <span className="font-pixel-accent text-xs uppercase tracking-widest text-[#D89A5B]">
                {"// NAVIGATION"}
              </span>
              <div className="flex flex-col space-y-2.5">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-pixel text-2xl font-bold text-[#F5F1E8] hover:text-[#D89A5B] flex items-center justify-between py-2 border-b border-[#F5F1E8]/10"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#D89A5B]">0{idx + 1} →</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F5F1E8]/10 space-y-3">
              <div className="text-xs text-[#B8B3AA] font-mono">
                Syahrul Ramadhana — Business System &amp; Web Developer
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="pixel-btn w-full justify-center !py-3"
              >
                <span>LET&apos;S CONNECT</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
