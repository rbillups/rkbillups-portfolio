"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  docAutomationApproachId,
  docAutomationCaseStudyId,
  documentAutomationCaseStudy,
} from "@/lib/data";
import { DocumentValidationFlowVisual } from "@/components/DocumentValidationFlowVisual";
import { DocumentSystemDiagram } from "@/components/DocumentSystemDiagram";
import { DocumentWorkflowVisual } from "@/components/DocumentWorkflowVisual";

function CaseStudyBlock({
  id,
  title,
  children,
  delay = 0,
}: {
  id?: string;
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="scroll-mt-24 rounded-lg border border-border bg-surface/60 p-6 sm:p-8"
    >
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

export function DocumentAutomationCaseStudy() {
  const study = documentAutomationCaseStudy;

  return (
    <section
      id={docAutomationCaseStudyId}
      className="scroll-mt-24 border-t border-border py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-px w-8 bg-accent/50" />
            Sanitized Case Study
          </p>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Requirements-to-Document Automation Toolkit
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {study.opening}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.demonstrates.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-6 rounded-md border border-border/70 bg-background/40 p-4 font-mono text-[11px] leading-relaxed text-muted/85">
                {study.confidentiality}
              </p>
            </div>

            <div className="lg:pt-2">
              <DocumentWorkflowVisual variant="hero" />
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <CaseStudyBlock title={study.problem.title}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {study.problem.body}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock title={study.solution.title} delay={0.05}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {study.solution.body}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock title={study.architecture.title} delay={0.1}>
            <DocumentSystemDiagram />
          </CaseStudyBlock>

          <CaseStudyBlock title={study.oop.title} delay={0.15}>
            <ul className="space-y-3">
              {study.oop.points.map((point) => (
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

          <CaseStudyBlock title={study.testing.title} delay={0.2}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {study.testing.body}
            </p>

            <div className="mt-6">
              <DocumentValidationFlowVisual
                manualReviewItems={study.testing.manualReviewItems}
              />
            </div>

            <div className="mt-8">
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
                How the workflow worked
              </h4>
              <ol className="space-y-4">
                {study.testing.howItWorked.map((item, i) => (
                  <li
                    key={item.title}
                    className="rounded-md border border-border/60 bg-background/40 px-4 py-3"
                  >
                    <p className="font-mono text-xs text-accent">
                      {i + 1}. {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 rounded-md border border-accent/20 bg-accent/[0.04] p-4 sm:p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Why it matters
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {study.testing.whyItMatters}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {study.testing.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border/80 px-2.5 py-1 font-mono text-[10px] text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CaseStudyBlock>

          <CaseStudyBlock
            id={docAutomationApproachId}
            title={study.engineering.title}
            delay={0.25}
          >
            <ul className="space-y-3">
              {study.engineering.points.map((point) => (
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

          <CaseStudyBlock title={study.demonstrates.title} delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {study.demonstrates.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-[11px] text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CaseStudyBlock>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="rounded-lg border border-border bg-surface/50 p-6 sm:p-8"
          >
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Confidentiality note
            </h3>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {study.closingConfidentiality}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
