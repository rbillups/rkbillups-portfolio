"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  facemaskCaseStudy,
  facemaskCaseStudyId,
  facemaskOverviewImage,
  facemaskSampleGridImage,
} from "@/lib/data";
import { FaceMaskModelFlow } from "@/components/FaceMaskModelFlow";

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

function HistoryColumn({
  title,
  points,
}: {
  title: string;
  points: readonly string[];
}) {
  return (
    <div className="rounded-md border border-border/70 bg-background/40 p-4 sm:p-5">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground">
        {title}
      </p>
      <ul className="space-y-2">
        {points.map((point) => (
          <li
            key={point}
            className="flex gap-2 text-sm leading-relaxed text-muted"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OverviewImage({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-md border border-border/80 bg-background shadow-[0_0_32px_rgba(200,255,0,0.04)] ${className}`}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={facemaskOverviewImage}
          alt="FaceMask Vision Classifier project overview"
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-contain p-3"
        />
      </div>
    </div>
  );
}

export function FaceMaskCaseStudy() {
  const study = facemaskCaseStudy;

  return (
    <section
      id={facemaskCaseStudyId}
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
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
            Computer Vision / ML
          </p>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                FaceMask Vision Classifier
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {study.opening}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.skills.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <span className="inline-block rounded border border-accent/35 bg-accent/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-accent sm:text-[10px]">
                  Historical notebook result: 97.38% test accuracy
                </span>
                <p className="mt-2 font-mono text-[10px] leading-relaxed text-muted/75">
                  Historical result from the original notebook; refactored
                  evaluation should be rerun with the dataset.
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <OverviewImage />
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <OverviewImage />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-8"
        >
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Project History
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <HistoryColumn
              title={study.history.original2022.title}
              points={study.history.original2022.points}
            />
            <HistoryColumn
              title={study.history.modernization2026.title}
              points={study.history.modernization2026.points}
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          <CaseStudyBlock title={study.dataset.title}>
            <ul className="space-y-2">
              {study.dataset.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 max-w-2xl">
              <div className="overflow-hidden rounded-md border border-border/70 bg-background/50">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={facemaskSampleGridImage}
                    alt="Sample labeled face-mask dataset images"
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-contain p-3"
                  />
                </div>
              </div>
              <p className="mt-3 font-mono text-[10px] leading-relaxed text-muted/75">
                {study.dataset.sampleCaption}
              </p>
            </div>
          </CaseStudyBlock>

          <CaseStudyBlock title={study.architecture.title} delay={0.05}>
            <FaceMaskModelFlow steps={study.architecture.flow} />
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              {study.architecture.classOrdering}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock title={study.training.title} delay={0.1}>
            <ul className="space-y-2">
              {study.training.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-md border border-amber-500/25 bg-amber-500/[0.06] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber-200/80">
                Evaluation note
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {study.training.note}
              </p>
            </div>
          </CaseStudyBlock>

          <CaseStudyBlock title={study.engineeringFix.title} delay={0.15}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {study.engineeringFix.body}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock title={study.responsibleUse.title} delay={0.2}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {study.responsibleUse.body}
            </p>
          </CaseStudyBlock>

          <CaseStudyBlock title={study.skills.title} delay={0.25}>
            <div className="flex flex-wrap gap-2">
              {study.skills.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-accent/20 bg-accent/[0.04] px-3 py-1.5 font-mono text-[11px] text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CaseStudyBlock>
        </div>
      </div>
    </section>
  );
}
