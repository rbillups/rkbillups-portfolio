"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tech: readonly string[];
  githubUrl: string;
  caseStudyUrl: string;
  diagram: "runit" | "bot" | "docs" | "cicd";
  index: number;
}

export function ProjectCard({
  category,
  title,
  description,
  tech,
  githubUrl,
  caseStudyUrl,
  diagram,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-lg border border-border bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_8px_32px_rgba(200,255,0,0.06)]"
    >
      <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-accent">
        {category}
      </p>
      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-md border border-border/60 bg-background p-4">
        <ArchitectureDiagram type={diagram} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          href={githubUrl}
          variant="secondary"
          className="!px-3 !py-2 text-xs"
          external
        >
          <GitBranch size={14} />
          GitHub
        </Button>
        <Button
          href={caseStudyUrl}
          variant="ghost"
          className="!px-3 !py-2 text-xs"
          external
        >
          <ExternalLink size={14} />
          Case Study
        </Button>
      </div>
    </motion.article>
  );
}
