"use client";

const TICKER_ITEMS = [
  "Business System Development",
  "Web Developer",
  "Creative Problem Solver",
  "Turning Ideas Into Digital Experiences",
  "UI/UX Design",
  "Kawan Apex",
  "PT Apex Mitra Prima",
  "Next.js",
  "React",
  "TypeScript",
];

export default function MarqueeTicker() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-[#F5F1E8]/6 py-5 bg-[#10100F] select-none">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#10100F] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#10100F] to-transparent z-10" />

      <div className="marquee-track flex items-center gap-0">
        {repeated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-6 whitespace-nowrap"
          >
            <span className="text-xs uppercase tracking-widest text-[#B8B3AA] font-medium">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#D89A5B] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

