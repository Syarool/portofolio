"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CREATIVE_CATEGORIES,
  CREATIVE_WORKS,
  CreativeCategory,
  CreativeWorkItem,
} from "@/data/creativeWorks";
import RevealOnScroll from "../animations/RevealOnScroll";
import { Palette, X, Sparkles, Maximize2 } from "lucide-react";

function CreativeArtworkThumbnail({ item }: { item: CreativeWorkItem }) {
  const [bg, accent, fg] = item.palette;

  return (
    <div
      className="relative h-52 w-full overflow-hidden border-b-2 border-[#F5F1E8]/12 p-5 flex flex-col justify-between select-none"
      style={{ backgroundColor: bg }}
    >
      {/* Dither dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(${accent}55 1px, transparent 1px)`,
          backgroundSize: "10px 10px",
        }}
      />

      {/* Top Meta Tag */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px]">
        <span
          className="px-2 py-0.5 border font-bold uppercase"
          style={{ borderColor: accent, color: accent }}
        >
          {item.category}
        </span>
        <span style={{ color: fg }} className="opacity-60">
          {item.year}
        </span>
      </div>

      {/* Motif Graphic Illustration */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-2">
        {item.motif === "recruitment" && (
          <div
            className="w-full max-w-[210px] border-2 p-3 space-y-2 shadow-[3px_3px_0_0_#000]"
            style={{ borderColor: accent, backgroundColor: "#141419" }}
          >
            <div className="font-pixel text-xs font-bold" style={{ color: accent }}>
              WE ARE HIRING
            </div>
            <div className="h-1.5 w-3/4 bg-[#F5F1E8]/30" />
            <div className="h-1.5 w-1/2 bg-[#F5F1E8]/20" />
            <div
              className="inline-block px-2 py-0.5 text-[8px] font-mono font-bold"
              style={{ backgroundColor: accent, color: "#0D0D10" }}
            >
              APPLY NOW →
            </div>
          </div>
        )}

        {item.motif === "safety" && (
          <div className="flex items-center gap-3">
            <div
              className="h-16 w-16 border-2 flex items-center justify-center font-pixel text-2xl font-bold shadow-[3px_3px_0_0_#000]"
              style={{ borderColor: accent, color: accent, backgroundColor: "#0D0D10" }}
            >
              !
            </div>
            <div className="space-y-1.5 font-mono">
              <div className="text-[10px] font-bold" style={{ color: accent }}>
                SAFETY FIRST
              </div>
              <div className="h-1.5 w-24 bg-[#F5F1E8]/30" />
              <div className="h-1.5 w-16 bg-[#F5F1E8]/20" />
            </div>
          </div>
        )}

        {item.motif === "branding" && (
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-1">
              <div className="h-6 w-6" style={{ backgroundColor: accent }} />
              <div className="h-6 w-6 border border-[#F5F1E8]/40" />
              <div className="h-6 w-6 bg-[#F5F1E8]/20" />
              <div className="h-6 w-6" style={{ backgroundColor: fg }} />
            </div>
            <div className="font-pixel text-sm font-bold" style={{ color: fg }}>
              BRAND
              <span className="block text-[10px] font-mono" style={{ color: accent }}>
                GUIDELINES
              </span>
            </div>
          </div>
        )}

        {item.motif === "poster" && (
          <div
            className="w-28 h-32 border-2 p-2.5 flex flex-col justify-between shadow-[3px_3px_0_0_#000]"
            style={{ borderColor: fg, backgroundColor: "#141419" }}
          >
            <div className="font-pixel text-lg font-bold leading-none" style={{ color: accent }}>
              01
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-full" style={{ backgroundColor: fg }} />
              <div className="h-1 w-2/3 opacity-50" style={{ backgroundColor: fg }} />
            </div>
          </div>
        )}

        {item.motif === "event" && (
          <div
            className="w-full max-w-[200px] border-2 p-3 text-center space-y-1.5 shadow-[3px_3px_0_0_#000]"
            style={{ borderColor: accent, backgroundColor: "#141419" }}
          >
            <Sparkles className="h-4 w-4 mx-auto" style={{ color: accent }} />
            <div className="font-pixel text-xs font-bold" style={{ color: fg }}>
              EVENT VISUAL SUITE
            </div>
            <div className="text-[8px] font-mono opacity-75" style={{ color: accent }}>
              DIGITAL &amp; PRINT ASSETS
            </div>
          </div>
        )}
      </div>

      {/* Color Swatches */}
      <div className="relative z-10 flex items-center justify-between text-[9px] font-mono">
        <div className="flex items-center gap-1">
          {item.palette.map((color) => (
            <span
              key={color}
              className="h-2.5 w-2.5 border border-white/20"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-[#F5F1E8]/70 group-hover:text-[#D89A5B] transition-colors">
          <Maximize2 className="h-3 w-3" />
          PREVIEW
        </span>
      </div>
    </div>
  );
}

export default function CreativeWorksSection() {
  const [activeCategory, setActiveCategory] = useState<CreativeCategory>("All");
  const [selectedWork, setSelectedWork] = useState<CreativeWorkItem | null>(null);

  const filteredWorks =
    activeCategory === "All"
      ? CREATIVE_WORKS
      : CREATIVE_WORKS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="creative-works"
      className="relative py-24 sm:py-32 bg-[#0D0D10] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-[#A78BFA]/5 blur-[150px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -right-4 top-8 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        05 // ART
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#F5F1E8]/10">
          <div className="max-w-2xl space-y-3">
            <RevealOnScroll direction="up">
              <span className="pixel-badge">
                <Palette className="h-3 w-3" />
                05 // CREATIVE WORKS
              </span>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
                VISUAL DESIGN GALLERY<span className="text-[#D89A5B]">.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.18}>
              <p className="text-sm sm:text-base text-[#B8B3AA] font-light leading-relaxed">
                Visual communication works across poster design, recruitment campaigns,
                workplace safety awareness, corporate branding, and event visual suites.
              </p>
            </RevealOnScroll>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CREATIVE_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 font-pixel text-xs border-2 transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#D89A5B] text-[#0D0D10] border-[#D89A5B] shadow-[3px_3px_0_0_#000] font-bold"
                    : "bg-[#141419] text-[#B8B3AA] border-[#F5F1E8]/15 hover:border-[#D89A5B]/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedWork(item)}
                className="group pixel-box bg-[#141419] text-left flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <CreativeArtworkThumbnail item={item} />

                <div className="p-5 space-y-3">
                  <div>
                    <span className="font-mono text-[10px] text-[#D89A5B] block">
                      {item.context}
                    </span>
                    <h3 className="font-pixel text-lg font-bold text-[#F5F1E8] group-hover:text-[#D89A5B] transition-colors mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#B8B3AA] font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[10px] px-2 py-0.5 border border-[#F5F1E8]/12 bg-[#0D0D10] text-[#B8B3AA]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
              className="fixed inset-0 bg-[#0D0D10]/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="pixel-box relative w-full max-w-xl bg-[#141419] overflow-hidden z-10"
            >
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center border border-[#F5F1E8]/25 bg-[#0D0D10] text-[#F5F1E8] hover:border-[#D89A5B] cursor-pointer"
                aria-label="Close creative preview"
              >
                <X className="h-4 w-4" />
              </button>

              <CreativeArtworkThumbnail item={selectedWork} />

              <div className="p-6 space-y-4">
                <div>
                  <span className="pixel-badge">{selectedWork.category}</span>
                  <h3 className="font-pixel text-2xl font-bold text-[#F5F1E8] mt-2">
                    {selectedWork.title}
                  </h3>
                  <p className="font-mono text-xs text-[#D89A5B] mt-0.5">
                    {selectedWork.context} · {selectedWork.year}
                  </p>
                </div>
                <p className="text-sm text-[#B8B3AA] font-light leading-relaxed">
                  {selectedWork.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedWork.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-xs px-2.5 py-1 border border-[#F5F1E8]/12 bg-[#0D0D10] text-[#F5F1E8]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
