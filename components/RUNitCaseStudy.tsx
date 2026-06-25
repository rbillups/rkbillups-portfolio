"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import {
  runitCaseStudy,
  runitCaseStudyId,
  runitRepoUrl,
} from "@/lib/data";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { RUNitScreenshots } from "@/components/RUNitScreenshots";
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

export function RUNitCaseStudy() {
  return (
    <section
      id={runitCaseStudyId}
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
            NextUp — Pickup Basketball Coordination App
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            {runitCaseStudy.opening}
          </p>
        </motion.div>

        <div className="space-y-6">
          <CaseStudyBlock title={runitCaseStudy.problem.title}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {runitCaseStudy.problem.body}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock title={runitCaseStudy.solution.title} delay={0.05}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {runitCaseStudy.solution.body}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock title={runitCaseStudy.architecture.title} delay={0.1}>
            <div className="mb-6 rounded-md border border-border/60 bg-background p-5">
              <ArchitectureDiagram type="runit" />
            </div>
            <ul className="space-y-3">
              {runitCaseStudy.architecture.points.map((point) => (
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

          <CaseStudyBlock title={runitCaseStudy.engineering.title} delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {runitCaseStudy.engineering.decisions.map((item) => (
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

          <CaseStudyBlock title={runitCaseStudy.privacy.title} delay={0.2}>
            <ul className="space-y-3">
              {runitCaseStudy.privacy.points.map((point) => (
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

          <CaseStudyBlock title="Screenshots" delay={0.25}>
            <RUNitScreenshots variant="gallery" />
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
                Source Code
              </p>
              <p className="mt-2 text-sm text-muted">
                Explore the public repository, architecture, and implementation
                details on GitHub.
              </p>
              <p className="mt-3 max-w-xl font-mono text-[10px] leading-relaxed text-muted/70">
                {runitCaseStudy.disclaimer}
              </p>
            </div>
            <div className="mt-6 shrink-0 sm:mt-0">
              <Button href={runitRepoUrl} external className="text-sm">
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
