"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
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
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const emailAddress = "syahrul.ramadhana.dev@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#D89A5B", "#F5F1E8", "#75604D"],
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

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D89A5B", "#F5F1E8", "#75604D"],
      });
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-36 bg-[#10100F] text-[#F5F1E8] overflow-hidden border-t-2 border-[#D89A5B]/20"
    >
      {/* Background warm amber glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[#D89A5B]/7 blur-[160px]" />

      {/* Decorative Pixel Watermark */}
      <div
        className="pointer-events-none absolute -right-4 top-8 select-none font-pixel text-8xl sm:text-9xl font-bold text-white/[0.03]"
        aria-hidden="true"
      >
        TALK_05
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <RevealOnScroll direction="up">
            <span className="pixel-badge">
              <MessageSquareCode className="h-3 w-3" />
              QUEST 05 // DIALOGUE &amp; TRANSMISSION
            </span>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F1E8]">
              START A CONVERSATION<span className="text-[#D89A5B]">.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#B8B3AA] font-light leading-relaxed">
              Every meaningful digital system begins with dialogue. Have a project, technical opportunity, or collaboration in mind?
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Inquiries & Social Profiles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <div className="pixel-box p-5 sm:p-6 space-y-3.5 bg-[#141211]">
              <span className="font-pixel text-xs uppercase tracking-widest text-[#D89A5B] font-bold block">
                [ DIRECT COMM CHANNEL ]
              </span>
              <p className="text-xs text-[#B8B3AA]">
                Reach out directly for engineering roles, technical consultations, or new project architectures:
              </p>

              <div className="flex items-center justify-between gap-2 border border-[#F5F1E8]/10 bg-[#10100F] p-3 shadow-[2px_2px_0_0_#000]">
                <div className="flex items-center gap-2 truncate text-xs sm:text-sm text-[#F5F1E8] font-mono">
                  <Mail className="h-4 w-4 text-[#D89A5B] shrink-0" />
                  <span className="truncate">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#F5F1E8]/20 bg-[#171615] text-[#B8B3AA] hover:border-[#D89A5B] hover:text-[#F5F1E8] transition-all shadow-[1px_1px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5"
                  title="Copy email address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-[#D89A5B]" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {copied && (
                <div className="text-xs text-[#D89A5B] font-mono">
                  ✓ Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Social Network Channels */}
            <div className="pixel-box p-5 sm:p-6 space-y-3.5 bg-[#141211]">
              <span className="font-pixel text-xs uppercase tracking-widest text-[#B8B3AA] font-bold block">
                [ NETWORK REPOSITORIES ]
              </span>

              <div className="space-y-2.5 font-mono text-xs">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#F5F1E8]/10 bg-[#10100F] p-3 text-[#F5F1E8] hover:border-[#D89A5B] hover:bg-[#171615] transition-all shadow-[2px_2px_0_0_#000]"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="h-4 w-4 text-[#D89A5B]" />
                    <span>LinkedIn / Syahrul Ramadhana</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#B8B3AA]" />
                </a>

                <a
                  href="https://github.com/Syarool"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#F5F1E8]/10 bg-[#10100F] p-3 text-[#F5F1E8] hover:border-[#D89A5B] hover:bg-[#171615] transition-all shadow-[2px_2px_0_0_#000]"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="h-4 w-4 text-[#D89A5B]" />
                    <span>GitHub / Syarool</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#B8B3AA]" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#F5F1E8]/10 bg-[#10100F] p-3 text-[#F5F1E8] hover:border-[#D89A5B] hover:bg-[#171615] transition-all shadow-[2px_2px_0_0_#000]"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="h-4 w-4 text-[#D89A5B]" />
                    <span>Instagram</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#B8B3AA]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Retro Transmission Form */}
          <div className="lg:col-span-7">
            <div className="pixel-box p-6 sm:p-8 bg-[#171615]">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <span className="font-pixel text-3xl sm:text-4xl text-[#D89A5B] block font-bold">
                    TRANSMISSION SENT!
                  </span>
                  <p className="text-sm text-[#B8B3AA] max-w-md mx-auto font-mono leading-relaxed">
                    Message logged successfully. I will review your inquiry and follow up promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-3 pixel-btn-outline"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-pixel text-[#D89A5B] uppercase block">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full border-2 border-[#F5F1E8]/15 bg-[#10100F] px-3.5 py-3 text-xs font-mono text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none shadow-[2px_2px_0_0_#000]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-pixel text-[#D89A5B] uppercase block">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full border-2 border-[#F5F1E8]/15 bg-[#10100F] px-3.5 py-3 text-xs font-mono text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none shadow-[2px_2px_0_0_#000]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-pixel text-[#D89A5B] uppercase block">
                      QUEST / PROJECT SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Business System Architecture / Full-Stack Project"
                      className="w-full border-2 border-[#F5F1E8]/15 bg-[#10100F] px-3.5 py-3 text-xs font-mono text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none shadow-[2px_2px_0_0_#000]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-pixel text-[#D89A5B] uppercase block">
                      MESSAGE TRANSMISSION *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project, ideas, or timeline requirements..."
                      className="w-full border-2 border-[#F5F1E8]/15 bg-[#10100F] px-3.5 py-3 text-xs font-mono text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none shadow-[2px_2px_0_0_#000] leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="pixel-btn w-full sm:w-auto justify-center"
                    >
                      {isSending ? (
                        <span>TRANSMITTING DATA...</span>
                      ) : (
                        <>
                          <span>SEND TRANSMISSION</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
