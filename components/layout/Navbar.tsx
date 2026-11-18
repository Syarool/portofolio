"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
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

      // Section tracking
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#10100F]/85 backdrop-blur-md py-4 border-b border-[#F5F1E8]/8"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Top-Left: Minimal Name / Logo (Matches Image 1: 'lucabg.dev') */}
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-medium tracking-tight text-[#F5F1E8] transition-opacity hover:opacity-80"
          >
            <span className="font-serif-headline text-lg sm:text-xl font-bold tracking-normal">
              syahrul<span className="text-[#D89A5B]">.dev</span>
            </span>
          </a>

          {/* Centered Navigation (Matches Image 1: Centered clean links) */}
          <nav className="hidden md:flex items-center gap-8 rounded-full px-6 py-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium tracking-wider uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-[#F5F1E8]"
                      : "text-[#B8B3AA] hover:text-[#F5F1E8]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#D89A5B]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Top-Right: Pill Contact Button (Matches Image 1: Top-Right 'Talk') */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[#F5F1E8]/20 bg-[#F5F1E8]/5 px-5 py-2 text-xs font-medium tracking-wide text-[#F5F1E8] backdrop-blur-sm transition-all duration-300 hover:border-[#D89A5B] hover:bg-[#D89A5B] hover:text-[#10100F]"
            >
              <span>Talk</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full border border-[#F5F1E8]/15 bg-[#171615] text-[#F5F1E8]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Refined Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-[#10100F]/98 px-8 pt-28 pb-12 backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B8B3AA]">
                // Navigation
              </span>
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif-headline text-3xl font-medium text-[#F5F1E8] hover:text-[#D89A5B] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#F5F1E8]/10 space-y-3">
              <div className="text-xs text-[#B8B3AA]">
                Syahrul Ramadhana — Business System Development &amp; Web Developer
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#D89A5B] py-3 text-xs font-semibold uppercase tracking-wider text-[#10100F]"
              >
                <span>Initiate Conversation</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
