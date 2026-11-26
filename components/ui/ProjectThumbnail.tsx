"use client";

import React from "react";
import { Project } from "@/data/projects";

/**
 * Generates bespoke, crisp Pixel-UI thumbnail artwork for each project.
 * Zero broken image dependencies and uniquely tailored to each system's workflow.
 */
export default function ProjectThumbnail({
  theme,
  accentColor,
}: {
  theme: Project["thumbnailTheme"];
  accentColor: string;
}) {
  return (
    <div className="relative h-48 w-full overflow-hidden border-b-2 border-[#F5F1E8]/12 bg-[#0B0B0E] p-4 flex flex-col justify-between select-none">
      {/* Subtle Pixel Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(rgba(245, 241, 232, 0.35) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Ambient Accent Glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-25 transition-opacity duration-300 group-hover:opacity-45"
        style={{ backgroundColor: accentColor }}
      />

      {/* Top Window Chrome */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#B8B3AA]">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 bg-[#EF4444]" />
          <span className="h-2 w-2 bg-[#F59E0B]" />
          <span className="h-2 w-2 bg-[#10B981]" />
          <span className="ml-1.5 uppercase tracking-wider text-[#F5F1E8]/70">
            {theme}.sys
          </span>
        </div>
        <span
          className="px-1.5 py-0.5 border text-[9px]"
          style={{
            borderColor: `${accentColor}55`,
            color: accentColor,
            backgroundColor: `${accentColor}14`,
          }}
        >
          UI PREVIEW
        </span>
      </div>

      {/* Bespoke Visual Mockup per Project */}
      <div className="relative z-10 mt-3 flex-1 flex items-center justify-center">
        {theme === "hiring" && (
          <div className="w-full grid grid-cols-4 gap-1.5 font-mono text-[9px]">
            {[
              { stage: "APPLIED", count: "Open", active: false },
              { stage: "SCREEN", count: "Review", active: true },
              { stage: "INTERVIEW", count: "Panel", active: false },
              { stage: "HIRED", count: "Offer", active: false },
            ].map((col, idx) => (
              <div
                key={idx}
                className="border p-2 bg-[#141419] space-y-1.5"
                style={{
                  borderColor: col.active ? accentColor : "rgba(245,241,232,0.12)",
                }}
              >
                <div
                  className="text-[8px] font-bold truncate"
                  style={{ color: col.active ? accentColor : "#B8B3AA" }}
                >
                  {col.stage}
                </div>
                <div className="h-2 w-full bg-[#F5F1E8]/15" />
                <div className="h-2 w-3/4 bg-[#F5F1E8]/10" />
                <div
                  className="text-[8px] pt-1"
                  style={{ color: col.active ? accentColor : "#75604D" }}
                >
                  [{col.count}]
                </div>
              </div>
            ))}
          </div>
        )}

        {theme === "onboarding" && (
          <div className="w-full space-y-2 font-mono text-[9px]">
            {[
              { label: "01. Identity & Tax Verification", done: true },
              { label: "02. Digital Compliance Checklist", done: true },
              { label: "03. Day-1 Readiness Sign-off", done: false },
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center justify-between border border-[#F5F1E8]/12 bg-[#141419] px-2.5 py-1.5"
              >
                <span className="text-[#F5F1E8]/85 truncate">{step.label}</span>
                <span
                  className="px-1.5 py-0.5 text-[8px] font-bold"
                  style={{
                    color: step.done ? "#0D0D10" : accentColor,
                    backgroundColor: step.done ? accentColor : "transparent",
                    border: `1px solid ${accentColor}`,
                  }}
                >
                  {step.done ? "DONE" : "NEXT"}
                </span>
              </div>
            ))}
          </div>
        )}

        {theme === "satupintu" && (
          <div className="w-full grid grid-cols-12 gap-2 font-mono text-[9px]">
            <div className="col-span-4 border border-[#F5F1E8]/12 bg-[#141419] p-2 space-y-1.5">
              <div className="h-2.5 w-full bg-[#E8B059]/80" />
              <div className="h-1.5 w-4/5 bg-[#F5F1E8]/20" />
              <div className="h-1.5 w-3/4 bg-[#F5F1E8]/15" />
              <div className="h-1.5 w-5/6 bg-[#F5F1E8]/15" />
            </div>
            <div className="col-span-8 border border-[#F5F1E8]/12 bg-[#141419] p-2 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[#E8B059] font-bold">SATUPINTU HUB</span>
                <span className="text-[#7CE0D3] text-[8px]">MONITORING</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-8 border border-[#F5F1E8]/10 bg-[#0D0D10] p-1">
                  <div className="h-1.5 w-8 bg-[#E8B059]" />
                </div>
                <div className="h-8 border border-[#F5F1E8]/10 bg-[#0D0D10] p-1">
                  <div className="h-1.5 w-6 bg-[#7CE0D3]" />
                </div>
                <div className="h-8 border border-[#F5F1E8]/10 bg-[#0D0D10] p-1">
                  <div className="h-1.5 w-10 bg-[#F5F1E8]/60" />
                </div>
              </div>
            </div>
          </div>
        )}

        {theme === "cv-screening" && (
          <div className="w-full flex items-center gap-3 font-mono text-[9px]">
            <div className="w-1/3 border border-[#A78BFA]/50 bg-[#141419] p-2.5 space-y-1.5">
              <div className="text-[#A78BFA] font-bold text-[8px]">RESUME.PDF</div>
              <div className="h-1.5 w-full bg-[#F5F1E8]/25" />
              <div className="h-1.5 w-4/5 bg-[#F5F1E8]/15" />
              <div className="h-1.5 w-full bg-[#F5F1E8]/20" />
              <div className="h-1.5 w-2/3 bg-[#A78BFA]/50" />
            </div>
            <div className="text-[#A78BFA] font-pixel text-sm">→</div>
            <div className="flex-1 border border-[#F5F1E8]/12 bg-[#141419] p-2.5 space-y-1.5">
              <div className="flex justify-between text-[#F5F1E8]">
                <span>SKILLS MATCH</span>
                <span className="text-[#A78BFA] font-bold">FILTERED</span>
              </div>
              <div className="h-2 w-full bg-[#0D0D10] border border-[#F5F1E8]/10">
                <div className="h-full w-4/5 bg-[#A78BFA]" />
              </div>
              <div className="flex gap-1 pt-0.5">
                <span className="px-1 bg-[#A78BFA]/20 text-[#A78BFA] text-[8px]">EDU</span>
                <span className="px-1 bg-[#A78BFA]/20 text-[#A78BFA] text-[8px]">EXP</span>
                <span className="px-1 bg-[#A78BFA]/20 text-[#A78BFA] text-[8px]">ROLE</span>
              </div>
            </div>
          </div>
        )}

        {theme === "aqiqah-sabian" && (
          <div className="w-48 border-2 border-[#6EE7B7]/45 bg-[#141419] p-3 text-center space-y-1.5 shadow-[3px_3px_0_0_#000]">
            <div className="font-mono text-[8px] tracking-widest text-[#6EE7B7] uppercase">
              Digital Invitation
            </div>
            <div className="font-pixel text-base font-bold text-[#F5F1E8]">
              Aqiqah Sabian
            </div>
            <div className="mx-auto h-px w-12 bg-[#6EE7B7]/50" />
            <div className="flex justify-center gap-2 pt-1 font-mono text-[8px] text-[#B8B3AA]">
              <span className="border border-[#F5F1E8]/15 px-1.5 py-0.5">DATE</span>
              <span className="border border-[#F5F1E8]/15 px-1.5 py-0.5">MAPS</span>
              <span className="border border-[#F5F1E8]/15 px-1.5 py-0.5">WISHES</span>
            </div>
          </div>
        )}

        {theme === "portfolio" && (
          <div className="w-full border border-[#F59E0B]/40 bg-[#141419] p-3 flex items-center justify-between">
            <div className="space-y-1.5 font-mono">
              <div className="text-[8px] text-[#F59E0B]">PIXEL SPACE COSMOS</div>
              <div className="font-pixel text-sm font-bold text-[#F5F1E8]">
                SYAHRUL.DEV
              </div>
              <div className="text-[8px] text-[#B8B3AA]">Next.js · Framer Motion</div>
            </div>
            {/* Mini Pixel Planet + Astronaut */}
            <svg
              width="52"
              height="44"
              viewBox="0 0 26 22"
              className="pixelated"
              style={{ shapeRendering: "crispEdges" }}
              aria-hidden="true"
            >
              <rect x="4" y="4" width="10" height="10" fill="#D89A5B" />
              <rect x="2" y="6" width="14" height="6" fill="#D89A5B" />
              <rect x="0" y="9" width="18" height="2" fill="#F5F1E8" />
              <rect x="19" y="8" width="4" height="6" fill="#F5F1E8" />
              <rect x="20" y="9" width="2" height="2" fill="#7CE0D3" />
              <rect x="18" y="14" width="2" height="3" fill="#D89A5B" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
