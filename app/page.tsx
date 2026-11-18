import HeroSection from "@/components/sections/HeroSection";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-[#10100F] text-[#F5F1E8]">
      <HeroSection />
      <MarqueeTicker />
      <AboutSection />
      <ProjectSection />
      <TechStackSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
