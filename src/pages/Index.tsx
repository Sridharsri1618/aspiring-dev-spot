import { useState, useEffect } from "react";
import SidebarNav from "@/components/SidebarNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav activeSection={activeSection} />
      <main className="lg:ml-56">
        <HeroSection />
        <div className="border-t border-border" />
        <AboutSection />
        <div className="border-t border-border" />
        <ExperienceSection />
        <div className="border-t border-border" />
        <CertificationsSection />
        <div className="border-t border-border" />
        <EducationSection />
        <div className="border-t border-border" />
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Index;
