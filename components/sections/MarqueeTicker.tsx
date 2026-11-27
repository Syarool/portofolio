"use client";

const TICKER_ITEMS = [
  "SYAHRUL RAMADHANA",
  "DEVELOPER & IT ENTHUSIAST",
  "BUSINESS SYSTEM DEVELOPER",
  "PT. APEX MITRA PRIMA",
  "MAGANGHUB PROGRAM",
  "KAWAN APEX OPEN HIRING",
  "EMPLOYEE ONBOARDING SYSTEM",
  "SATUPINTU KAWAN APEX",
  "CV SCREENING SYSTEM",
  "NEXT.JS · TYPESCRIPT · FRAMER MOTION",
];

export default function MarqueeTicker() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative overflow-hidden border-y-2 border-[#D89A5B]/30 py-4 bg-[#111115] select-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111115] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111115] to-transparent z-10" />

      <div className="marquee-track flex items-center gap-0">
        {repeated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-6 whitespace-nowrap"
          >
            <span className="font-pixel text-sm uppercase tracking-wider text-[#F5F1E8] font-bold">
              {item}
            </span>
            <span className="inline-block w-2 h-2 bg-[#D89A5B] rotate-45 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
