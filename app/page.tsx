import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { RUNitCaseStudy } from "@/components/RUNitCaseStudy";
import { DemiBotCaseStudy } from "@/components/DemiBotCaseStudy";
import { DocumentAutomationCaseStudy } from "@/components/DocumentAutomationCaseStudy";
import { FaceMaskCaseStudy } from "@/components/FaceMaskCaseStudy";
import { Experience } from "@/components/Experience";
import { AchievementsEducation } from "@/components/AchievementsEducation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { PortfolioAssistantWidget } from "@/components/portfolio-assistant/PortfolioAssistantWidget";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <DocumentAutomationCaseStudy />
        <RUNitCaseStudy />
        <DemiBotCaseStudy />
        <FaceMaskCaseStudy />
        <Experience />
        <AchievementsEducation />
        <About />
        <Contact />
      </main>
      <PortfolioAssistantWidget />
    </>
  );
}
