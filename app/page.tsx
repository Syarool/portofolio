import HeroSection from "@/components/sections/HeroSection";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import AboutSection from "@/components/sections/AboutSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import CreativeWorksSection from "@/components/sections/CreativeWorksSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden text-[#F5F1E8]">
      <HeroSection />
      <MarqueeTicker />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectSection />
      <CreativeWorksSection />
      <ContactSection />
    </div>
  );
}
