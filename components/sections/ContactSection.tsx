"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import RevealOnScroll from "../animations/RevealOnScroll";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  const emailAddress = "syahrul.ramadhana.dev@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#D89A5B", "#7CE0D3", "#F5F1E8"],
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const subjectText = formState.subject
      ? formState.subject
      : `Portfolio Inquiry from ${formState.name}`;
    const bodyText = `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`;
    const url = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    setMailtoHref(url);
    window.location.href = url;
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#0D0D10] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[#D89A5B]/7 blur-[160px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -right-4 top-8 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        06 // COMM
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <RevealOnScroll direction="up">
            <span className="pixel-badge">
              <MessageSquareCode className="h-3 w-3" />
              06 // CONTACT
            </span>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
              LET&apos;S BUILD TOGETHER<span className="text-[#D89A5B]">.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#B8B3AA] font-light leading-relaxed">
              Open to business system development opportunities, full-stack web projects,
              and collaborative product design.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="pixel-box p-5 sm:p-6 space-y-3.5 bg-[#141419]">
              <span className="font-pixel text-xs uppercase tracking-widest text-[#D89A5B] font-bold block">
                [ DIRECT EMAIL ]
              </span>
              <p className="text-xs text-[#B8B3AA] leading-relaxed">
                Send an email directly or copy the address below:
              </p>

              <div className="flex items-center justify-between gap-2 border border-[#F5F1E8]/12 bg-[#0D0D10] p-3 shadow-[2px_2px_0_0_#000]">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-2 truncate text-xs sm:text-sm text-[#F5F1E8] hover:text-[#D89A5B] transition-colors font-mono"
                >
                  <Mail className="h-4 w-4 text-[#D89A5B] shrink-0" />
                  <span className="truncate">{emailAddress}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#F5F1E8]/20 bg-[#141419] text-[#B8B3AA] hover:border-[#D89A5B] hover:text-[#F5F1E8] transition-all shadow-[1px_1px_0_0_#000] cursor-pointer"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-[#7CE0D3]" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {copied && (
                <div className="text-xs text-[#7CE0D3] font-mono">
                  ✓ Email address copied to clipboard.
                </div>
              )}
            </div>

            {/* GitHub, LinkedIn & Social Media */}
            <div className="pixel-box p-5 sm:p-6 space-y-3.5 bg-[#141419]">
              <span className="font-pixel text-xs uppercase tracking-widest text-[#B8B3AA] font-bold block">
                [ GITHUB, LINKEDIN &amp; SOCIAL MEDIA ]
              </span>

              <div className="space-y-2.5 font-mono text-xs">
                <a
                  href="https://github.com/Syarool"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#F5F1E8]/12 bg-[#0D0D10] p-3 text-[#F5F1E8] hover:border-[#D89A5B] hover:bg-[#191920] transition-all shadow-[2px_2px_0_0_#000]"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="h-4 w-4 text-[#D89A5B]" />
                    <span>GitHub · github.com/Syarool</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#D89A5B]" />
                </a>

                <div className="flex items-center justify-between border border-[#F5F1E8]/10 bg-[#0D0D10] p-3 text-[#F5F1E8]/90">
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="h-4 w-4 text-[#7CE0D3]" />
                    <div>
                      <span className="block">LinkedIn · Syahrul Ramadhana</span>
                      <span className="text-[10px] text-[#B8B3AA]">
                        Direct link available upon email request
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border border-[#F5F1E8]/10 bg-[#0D0D10] p-3 text-[#F5F1E8]/90">
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="h-4 w-4 text-[#D89A5B]" />
                    <div>
                      <span className="block">Social Media · Instagram</span>
                      <span className="text-[10px] text-[#B8B3AA]">
                        Direct handle available upon email request
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mailto-backed Inquiry Composer */}
          <div className="lg:col-span-7">
            <div className="pixel-box p-6 sm:p-8 bg-[#141419]">
              <div className="mb-5 pb-3 border-b border-[#F5F1E8]/10 flex items-center justify-between">
                <span className="font-pixel text-sm font-bold text-[#F5F1E8]">
                  COMPOSE MESSAGE
                </span>
                <span className="font-mono text-[10px] text-[#7CE0D3]">
                  OPENS EMAIL CLIENT
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-[11px] font-pixel text-[#D89A5B] uppercase block"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full border-2 border-[#F5F1E8]/15 bg-[#0D0D10] px-3.5 py-3 text-xs font-mono text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none shadow-[2px_2px_0_0_#000]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-[11px] font-pixel text-[#D89A5B] uppercase block"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full border-2 border-[#F5F1E8]/15 bg-[#0D0D10] px-3.5 py-3 text-xs font-mono text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none shadow-[2px_2px_0_0_#000]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="text-[11px] font-pixel text-[#D89A5B] uppercase block"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Business System / Web Development Inquiry"
                    className="w-full border-2 border-[#F5F1E8]/15 bg-[#0D0D10] px-3.5 py-3 text-xs font-mono text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none shadow-[2px_2px_0_0_#000]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-pixel text-[#D89A5B] uppercase block"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Share your goals, system needs, or collaboration idea..."
                    className="w-full border-2 border-[#F5F1E8]/15 bg-[#0D0D10] px-3.5 py-3 text-xs font-mono text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none shadow-[2px_2px_0_0_#000] leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="pixel-btn w-full sm:w-auto justify-center"
                  >
                    <span>OPEN IN EMAIL APP</span>
                    <Send className="h-4 w-4" />
                  </button>

                  {mailtoHref && (
                    <a
                      href={mailtoHref}
                      className="text-xs font-mono text-[#7CE0D3] underline hover:text-[#F5F1E8]"
                    >
                      Click here if email client did not open automatically
                    </a>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
