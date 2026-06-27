import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Selected Work"
          title="Selected Engineering Work"
          description="A mix of sanitized enterprise case studies and public software projects spanning automation, mobile development, machine learning, and developer tooling — including KnowledgeForge, the live portfolio assistant you can try from this site."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={
                "featured" in project &&
                project.featured &&
                !("featuredCompact" in project && project.featuredCompact)
                  ? "sm:col-span-2"
                  : undefined
              }
            >
              <ProjectCard {...project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
