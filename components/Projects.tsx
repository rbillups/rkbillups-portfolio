import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Selected Work"
          title="Featured Projects"
          description="Systems and tools built to automate workflows, ship reliable software, and solve real operational problems."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
