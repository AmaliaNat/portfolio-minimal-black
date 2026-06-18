"use client";

import { useState, useCallback, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import SidebarNav from "@/components/SidebarNav";
import ProjectGrid from "@/components/ProjectGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ContactForm from "@/components/ContactForm";
import ProjectDetail from "@/components/ProjectDetail";
import Footer from "@/components/Footer";
import { WORK_ITEMS, NAV_LINKS, type WorkItem } from "@/data/portfolio";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null);

  useEffect(() => {
    const preloaderPlayed = sessionStorage.getItem("preloader_played");
    if (preloaderPlayed === "true") {
      setIsLoaded(true);
    }
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    sessionStorage.setItem("preloader_played", "true");
    setIsLoaded(true);
  }, []);

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <>
      {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}

      <main
        className={`w-full min-h-screen bg-[#121314] overflow-x-hidden flex flex-col transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <Hero show={isLoaded} />

        <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 border-t border-[#232427] py-10 items-start">
          <SidebarNav
            links={NAV_LINKS}
            activeSection={activeSection}
            onSectionChange={(section) => {
              setSelectedProject(null);
              setActiveSection(section);
            }}
          />

          <div className="md:col-span-9 w-full min-h-[60vh] flex flex-col justify-start overflow-visible">
            {(() => {
              switch (activeSection.toUpperCase()) {
                case "SKILLS":
                  return <SkillsGrid />;
                case "CONTACT":
                  return <ContactForm />;
                default:
                  return (
                    <ProjectGrid
                      items={WORK_ITEMS}
                      onItemClick={(item) => setSelectedProject(item)}
                    />
                  );
              }
            })()}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}