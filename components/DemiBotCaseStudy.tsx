"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import {
  demibotCaseStudy,
  demibotCaseStudyId,
  demibotPreviewImage,
  demibotRepoUrl,
} from "@/lib/data";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Button } from "@/components/ui/Button";

function CaseStudyBlock({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="rounded-lg border border-border bg-surface/60 p-6 sm:p-8"
    >
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

export function DemiBotCaseStudy() {
  return (
    <section
      id={demibotCaseStudyId}
      className="scroll-mt-24 border-t border-border py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent/50" />
            Case Study
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            DemiBot — Community Automation System
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            A Python automation case study focused on event-driven Discord
            workflows, scheduled community content, and environment-based
            configuration.
          </p>
        </motion.div>

        <div className="space-y-6">
          <CaseStudyBlock title={demibotCaseStudy.problem.title}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {demibotCaseStudy.problem.body}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock title={demibotCaseStudy.solution.title} delay={0.05}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {demibotCaseStudy.solution.body}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock title="Verified capabilities" delay={0.08}>
            <ul className="space-y-3">
              {demibotCaseStudy.capabilities.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>

          <CaseStudyBlock title="Architecture" delay={0.1}>
            <div className="rounded-md border border-border/60 bg-background p-5">
              <ArchitectureDiagram type="demibot" />
            </div>
          </CaseStudyBlock>

          <CaseStudyBlock
            title={demibotCaseStudy.engineering.title}
            delay={0.15}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {demibotCaseStudy.engineering.decisions.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-border/70 bg-background/50 p-4"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wide text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </CaseStudyBlock>

          <CaseStudyBlock title={demibotCaseStudy.security.title} delay={0.2}>
            <ul className="space-y-3">
              {demibotCaseStudy.security.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>

          <CaseStudyBlock title="Visual overview" delay={0.25}>
            <div className="overflow-hidden rounded-lg border border-accent/30 bg-background shadow-[0_0_32px_rgba(200,255,0,0.06)]">
              <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
                <Image
                  src={demibotPreviewImage}
                  alt="DemiBot architecture and core feature overview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="object-contain p-4 sm:p-6"
                />
              </div>
            </div>
          </CaseStudyBlock>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg border border-accent/25 bg-surface/80 p-6 sm:flex sm:items-center sm:justify-between sm:p-8"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Repository
              </p>
              <p className="mt-2 text-sm text-muted">
                Explore the public DemiBot repository, configuration model, and
                automation implementation on GitHub.
              </p>
            </div>
            <div className="mt-6 shrink-0 sm:mt-0">
              <Button href={demibotRepoUrl} external className="text-sm">
                <GitBranch size={16} />
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
