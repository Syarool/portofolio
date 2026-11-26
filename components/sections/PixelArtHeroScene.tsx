"use client";

import React from "react";

/**
 * 16-bit Lo-Fi Pixel Art Sunset Scene
 * Uses SVG with shape-rendering="crispEdges" to guarantee sharp pixel blocks across any screen resolution.
 */
export default function PixelArtHeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
      <svg
        viewBox="0 0 480 270"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block pixelated"
        style={{ shapeRendering: "crispEdges" }}
        aria-hidden="true"
      >
        <defs>
          {/* Sky Gradient: Deep Indigo -> Dusky Violet -> Warm Terracotta -> Sunset Amber */}
          <linearGradient id="pixelSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#140c1e" />
            <stop offset="30%" stopColor="#2b142e" />
            <stop offset="55%" stopColor="#5a2238" />
            <stop offset="75%" stopColor="#9a3c2a" />
            <stop offset="90%" stopColor="#d46a2a" />
            <stop offset="100%" stopColor="#f39c38" />
          </linearGradient>

          {/* Dither pattern for retro 16-bit transition */}
          <pattern id="pixelDither" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="2" height="2" fill="#d46a2a" opacity="0.3" />
            <rect x="2" y="2" width="2" height="2" fill="#d46a2a" opacity="0.3" />
          </pattern>
        </defs>

        {/* 1. Base Sky */}
        <rect width="480" height="270" fill="url(#pixelSky)" />

        {/* Dither band across horizon */}
        <rect x="0" y="140" width="480" height="40" fill="url(#pixelDither)" opacity="0.4" />

        {/* 2. Pixel Twinkling Stars (Upper Sky) */}
        <g fill="#fbe9c8">
          <rect x="42" y="18" width="2" height="2" opacity="0.75" />
          <rect x="88" y="32" width="2" height="2" opacity="0.6" />
          <rect x="140" y="12" width="3" height="3" opacity="0.9" />
          <rect x="195" y="24" width="2" height="2" opacity="0.5" />
          <rect x="230" y="16" width="2" height="2" opacity="0.8" />
          <rect x="290" y="28" width="2" height="2" opacity="0.6" />
          <rect x="360" y="14" width="3" height="3" opacity="0.85" />
          <rect x="420" y="22" width="2" height="2" opacity="0.7" />
          <rect x="460" y="38" width="2" height="2" opacity="0.5" />
          <rect x="110" y="50" width="2" height="2" opacity="0.4" />
          <rect x="330" y="44" width="2" height="2" opacity="0.5" />
        </g>

        {/* 3. Pixel Golden Sun (Right-Center) */}
        {/* Outer glow ring (stepped circle) */}
        <g fill="#ffd175" opacity="0.25">
          <rect x="332" y="48" width="56" height="56" />
          <rect x="336" y="44" width="48" height="64" />
          <rect x="340" y="40" width="40" height="72" />
        </g>
        {/* Mid glow ring */}
        <g fill="#ffe08c" opacity="0.5">
          <rect x="338" y="54" width="44" height="44" />
          <rect x="342" y="50" width="36" height="52" />
        </g>
        {/* Core sun disc */}
        <g fill="#fff5d0">
          <rect x="344" y="60" width="32" height="32" />
          <rect x="348" y="56" width="24" height="40" />
          <rect x="352" y="54" width="16" height="44" />
        </g>

        {/* 4. Distant 16-bit Pixel Mountain Ridge */}
        <path
          d="M0,172 L45,152 L78,162 L120,138 L160,154 L205,134 L250,150 L285,132 L330,146 L375,126 L420,142 L480,122 L480,270 L0,270 Z"
          fill="#441a32"
          opacity="0.8"
        />
        {/* Secondary closer mountain ridge */}
        <path
          d="M0,188 L60,166 L110,180 L170,156 L230,176 L290,150 L345,168 L410,144 L480,164 L480,270 L0,270 Z"
          fill="#2b1122"
        />

        {/* 5. 16-bit Lo-Fi Pixel Clouds (Warm Lit Sunset Clouds) */}
        {/* Cloud 1 (Drifting Upper Right) */}
        <g fill="#f7ab52" opacity="0.9">
          <rect x="290" y="86" width="70" height="12" />
          <rect x="302" y="78" width="50" height="24" />
          <rect x="314" y="72" width="30" height="32" />
          <rect x="298" y="94" width="80" height="6" />
        </g>
        <g fill="#933626" opacity="0.6">
          <rect x="294" y="98" width="86" height="4" />
          <rect x="306" y="102" width="64" height="4" />
        </g>

        {/* Cloud 2 (Center Left) */}
        <g fill="#eb8742" opacity="0.85">
          <rect x="60" y="108" width="90" height="14" />
          <rect x="74" y="100" width="64" height="26" />
          <rect x="88" y="94" width="40" height="34" />
        </g>
        <g fill="#70222b" opacity="0.55">
          <rect x="68" y="122" width="84" height="5" />
          <rect x="82" y="127" width="56" height="4" />
        </g>

        {/* Cloud 3 (Distant Horizon Cloud Bank) */}
        <g fill="#c95832" opacity="0.75">
          <rect x="180" y="132" width="120" height="10" />
          <rect x="200" y="126" width="80" height="18" />
        </g>

        {/* 6. Foreground Cliff / Plateau (Right & Bottom Left) */}
        {/* Right Cliff Side Mass */}
        <path
          d="M210,270 L210,210 L224,202 L248,198 L276,182 L308,178 L334,170 L370,166 L410,172 L440,168 L480,180 L480,270 Z"
          fill="#1b1418"
        />
        {/* Cliff Rock Shadows */}
        <path
          d="M260,270 L276,210 L308,196 L334,188 L370,182 L420,186 L480,192 L480,270 Z"
          fill="#110d10"
        />

        {/* Pixel Grass Strip along cliff edge */}
        <g fill="#4e6828">
          <rect x="224" y="200" width="24" height="3" />
          <rect x="248" y="196" width="28" height="3" />
          <rect x="276" y="180" width="32" height="3" />
          <rect x="308" y="176" width="26" height="3" />
          <rect x="334" y="168" width="36" height="3" />
          <rect x="370" y="164" width="40" height="3" />
          <rect x="410" y="170" width="30" height="3" />
          <rect x="440" y="166" width="40" height="3" />
        </g>
        {/* Pixel Grass Highlights */}
        <g fill="#829c36">
          <rect x="280" y="179" width="16" height="2" />
          <rect x="340" y="167" width="20" height="2" />
          <rect x="380" y="163" width="24" height="2" />
        </g>

        {/* 7. Telephone / Electric Pole with Pixel Wires */}
        <g fill="#18131a">
          {/* Main Pole */}
          <rect x="260" y="100" width="4" height="96" />
          {/* Crossbars */}
          <rect x="248" y="112" width="28" height="3" />
          <rect x="252" y="126" width="20" height="3" />
          {/* Insulators */}
          <rect x="250" y="110" width="2" height="2" fill="#d46a2a" />
          <rect x="272" y="110" width="2" height="2" fill="#d46a2a" />
          <rect x="254" y="124" width="2" height="2" fill="#d46a2a" />
          <rect x="268" y="124" width="2" height="2" fill="#d46a2a" />
        </g>
        {/* Pixel Power Lines */}
        <path
          d="M0,118 Q120,126 250,112 M0,132 Q120,140 254,126 M272,112 Q370,128 480,120 M268,126 Q370,142 480,134"
          stroke="#18131a"
          strokeWidth="1"
          fill="none"
          opacity="0.8"
        />

        {/* 8. Pixel Character (Sitting on Cliff, Coding on Glowing Laptop) */}
        <g id="pixelCharacter">
          {/* Sitting Legs */}
          <rect x="350" y="160" width="14" height="6" fill="#20222f" />
          <rect x="354" y="164" width="12" height="3" fill="#14151f" />
          {/* Torso & Jacket */}
          <rect x="346" y="148" width="10" height="13" fill="#32493d" />
          {/* Arms reaching to laptop */}
          <rect x="354" y="152" width="8" height="4" fill="#32493d" />
          <rect x="360" y="154" width="4" height="3" fill="#d69f78" />
          {/* Head & Neck */}
          <rect x="348" y="141" width="7" height="7" fill="#d69f78" />
          {/* Hair (Black/Dark styled) */}
          <rect x="346" y="139" width="9" height="5" fill="#181418" />
          <rect x="345" y="142" width="3" height="4" fill="#181418" />

          {/* Laptop Base */}
          <rect x="362" y="156" width="12" height="2" fill="#88929e" />
          {/* Laptop Open Screen */}
          <rect x="370" y="147" width="2" height="10" fill="#a4b0be" />
          {/* Glowing Laptop Screen (Cyan / Warm Glow) */}
          <rect x="369" y="148" width="2" height="8" fill="#7bede4" />
          {/* Screen Light Reflection on face & chest */}
          <rect x="354" y="144" width="2" height="4" fill="#7bede4" opacity="0.35" />
          <rect x="356" y="151" width="3" height="4" fill="#7bede4" opacity="0.3" />
        </g>

        {/* Tiny Retro Campfire / Lantern Glow nearby (Lo-Fi vibe) */}
        <g id="pixelLantern">
          <rect x="390" y="164" width="4" height="5" fill="#1b1418" />
          <rect x="391" y="165" width="2" height="3" fill="#ffd175" />
          {/* Warm lantern aura */}
          <rect x="388" y="163" width="8" height="7" fill="#ffd175" opacity="0.18" />
        </g>
      </svg>
    </div>
  );
}
