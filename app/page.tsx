import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { Solutions } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <Solutions />
      <About />
      <ExperienceSection />
      <Contact />
    </>
  );
}
