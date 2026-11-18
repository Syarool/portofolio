import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

export const metadata: Metadata = {
  title: "Syahrul Ramadhana — Business System Development & Web Developer",
  description:
    "Cinematic personal portfolio of Syahrul Ramadhana. Business System Development Intern at PT Apex Mitra Prima and creator of Kawan Apex. Based in Indonesia.",
  keywords: [
    "Syahrul Ramadhana",
    "Business System Development",
    "Web Developer",
    "Creative Problem Solver",
    "PT Apex Mitra Prima",
    "Kawan Apex",
    "Indonesia",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Syahrul Ramadhana" }],
  creator: "Syahrul Ramadhana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syahrulramadhana.dev",
    title: "Syahrul Ramadhana — Business System Development & Web Developer",
    description:
      "Turning Ideas Into Digital Experiences. Business System Development Intern at PT Apex Mitra Prima and creator of Kawan Apex.",
    siteName: "Syahrul Ramadhana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syahrul Ramadhana — Business System Development & Web Developer",
    description:
      "Turning Ideas Into Digital Experiences. Business System Development Intern at PT Apex Mitra Prima and creator of Kawan Apex.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="film-grain min-h-screen bg-[#10100F] text-[#F5F1E8] antialiased selection:bg-[#D89A5B]/30 selection:text-[#F5F1E8]">
        <ScrollProgress />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="relative flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
