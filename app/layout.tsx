import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Pixelify_Sans,
  Silkscreen,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixel",
  display: "swap",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syahrul Ramadhana — Business System Developer & Web Developer",
  description:
    "Personal portfolio of Syahrul Ramadhana — Business System Developer focused on building digital products, business systems, and interactive web experiences.",
  keywords: [
    "Syahrul Ramadhana",
    "Business System Developer",
    "Web Developer",
    "PT Apex Mitra Prima",
    "Maganghub",
    "Kawan Apex",
    "SatuPintu Kawan Apex",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Indonesia",
  ],
  authors: [{ name: "Syahrul Ramadhana" }],
  creator: "Syahrul Ramadhana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syahrulramadhana-portfolio.vercel.app",
    title: "Syahrul Ramadhana — Business System Developer & Web Developer",
    description:
      "Building Digital Solutions Through Technology & Innovation. Business System Developer at PT. Apex Mitra Prima (Maganghub).",
    siteName: "Syahrul Ramadhana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syahrul Ramadhana — Business System Developer & Web Developer",
    description:
      "Building Digital Solutions Through Technology & Innovation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${plusJakarta.variable} ${pixelify.variable} ${silkscreen.variable} ${jetbrainsMono.variable}`}
    >
      <body className="film-grain crt-overlay min-h-screen bg-[#0D0D10] text-[#F5F1E8] font-sans antialiased selection:bg-[#D89A5B]/30 selection:text-[#F5F1E8]">
        <ScrollProgress />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="relative flex flex-col min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
