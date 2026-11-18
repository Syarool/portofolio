"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";
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
        particleCount: 45,
        spread: 55,
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
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#D89A5B", "#F5F1E8", "#75604D"],
      });
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#10100F] text-[#F5F1E8] overflow-hidden border-t border-[#F5F1E8]/6"
    >
      {/* Ambient warm glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[#D89A5B]/7 blur-[160px]" />
      {/* Ghost number */}
      <div className="pointer-events-none absolute -right-4 top-8 select-none section-ghost-number" aria-hidden="true">05</div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <RevealOnScroll direction="up">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#D89A5B]" />
              <span className="text-xs uppercase tracking-widest text-[#D89A5B] font-semibold">
                Dialogue
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif-headline text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F1E8]">
              Let&apos;s Create Something Meaningful.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-[#B8B3AA] font-light leading-relaxed">
              Every great idea starts with a conversation. Have a project, opportunity, or idea? Let&apos;s connect.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Social Profiles */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Email Card */}
            <div className="rounded-3xl border border-[#F5F1E8]/10 bg-[#171615] p-6 sm:p-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#D89A5B] font-semibold block">
                Direct Inquiry
              </span>
              <div className="text-xs text-[#B8B3AA]">
                Feel free to email me directly for collaborations, technical roles, or project consultations:
              </div>

              <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#F5F1E8]/8 bg-[#10100F] p-4">
                <div className="flex items-center gap-2.5 truncate text-xs sm:text-sm text-[#F5F1E8] font-medium">
                  <Mail className="h-4 w-4 text-[#D89A5B] shrink-0" />
                  <span className="truncate">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#F5F1E8]/15 bg-[#171615] text-[#B8B3AA] hover:border-[#D89A5B] hover:text-[#F5F1E8] transition-all"
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
                <div className="text-xs text-[#D89A5B] font-serif-subtle italic">
                  ✓ Email address copied to clipboard.
                </div>
              )}
            </div>

            {/* Social Network Links */}
            <div className="rounded-3xl border border-[#F5F1E8]/10 bg-[#171615] p-6 sm:p-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#B8B3AA] font-semibold block">
                Social &amp; Professional Channels
              </span>

              <div className="space-y-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[#F5F1E8]/6 bg-[#10100F] p-4 text-xs text-[#F5F1E8] hover:border-[#D89A5B]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="h-4 w-4 text-[#D89A5B]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#B8B3AA]" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[#F5F1E8]/6 bg-[#10100F] p-4 text-xs text-[#F5F1E8] hover:border-[#D89A5B]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="h-4 w-4 text-[#D89A5B]" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#B8B3AA]" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[#F5F1E8]/6 bg-[#10100F] p-4 text-xs text-[#F5F1E8] hover:border-[#D89A5B]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <InstagramIcon className="h-4 w-4 text-[#D89A5B]" />
                    <span>Instagram</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#B8B3AA]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#F5F1E8]/10 bg-[#171615] p-6 sm:p-10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <span className="font-serif-headline text-3xl sm:text-4xl text-[#F5F1E8] block font-light">
                    Thank You.
                  </span>
                  <p className="text-sm text-[#B8B3AA] max-w-md mx-auto font-light leading-relaxed">
                    Your message has been received. I will review your requirements and follow up promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 rounded-full border border-[#F5F1E8]/20 bg-[#10100F] px-6 py-2.5 text-xs uppercase tracking-wider text-[#F5F1E8] hover:border-[#D89A5B]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-[#B8B3AA] block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-[#F5F1E8]/10 bg-[#10100F] px-4 py-3.5 text-xs text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none focus:ring-1 focus:ring-[#D89A5B]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-[#B8B3AA] block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-2xl border border-[#F5F1E8]/10 bg-[#10100F] px-4 py-3.5 text-xs text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none focus:ring-1 focus:ring-[#D89A5B]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#B8B3AA] block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Business System Architecture / Web Platform Project"
                      className="w-full rounded-2xl border border-[#F5F1E8]/10 bg-[#10100F] px-4 py-3.5 text-xs text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none focus:ring-1 focus:ring-[#D89A5B]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#B8B3AA] block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share a brief overview of what you have in mind..."
                      className="w-full rounded-2xl border border-[#F5F1E8]/10 bg-[#10100F] px-4 py-3.5 text-xs text-[#F5F1E8] placeholder-[#B8B3AA]/40 focus:border-[#D89A5B] focus:outline-none focus:ring-1 focus:ring-[#D89A5B] leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#D89A5B] px-8 py-3.5 text-xs font-semibold tracking-wide text-[#10100F] transition-all hover:bg-[#F5F1E8] disabled:opacity-50"
                    >
                      {isSending ? (
                        <span>Sending Transmission...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-3.5 w-3.5" />
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
