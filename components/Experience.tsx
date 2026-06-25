"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { earlyCareerExperience, lockheedExperience } from "@/lib/experience";

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type EarlyCareerRole = (typeof earlyCareerExperience)[number];

function SkillTags({ skills }: { skills: readonly string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-6">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded border border-border/80 px-2.5 py-1 font-mono text-[10px] text-muted"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function TimelineDot({ active = false }: { active?: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute -left-10 top-8 hidden h-2.5 w-2.5 rounded-full border lg:block ${
        active
          ? "border-accent/50 bg-accent/80 shadow-[0_0_10px_rgba(200,255,0,0.35)]"
          : "border-border bg-muted/40"
      }`}
    />
  );
}

function LockheedCard({ index }: { index: number }) {
  const role = lockheedExperience;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardMotion}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-lg border border-border bg-surface/80 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-background">
          <Building2 size={18} className="text-accent" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold text-foreground">
              {role.company}
            </h3>
            <span className="font-mono text-xs text-muted">{role.dates}</span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted">
              {role.previousTitle}
            </span>
            <ArrowRight size={14} className="text-accent" aria-hidden />
            <span className="rounded border border-accent/35 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent">
              {role.currentTitle}
            </span>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">
            {role.summary}
          </p>

          <ul className="mt-6 space-y-3">
            {role.responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <SkillTags skills={role.skills} />

          <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted/75">
            {role.disclaimer}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function InternshipCard({
  role,
  index,
}: {
  role: EarlyCareerRole;
  index: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardMotion}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-lg border border-border bg-surface/60 p-6 sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background">
          <Briefcase size={18} className="text-muted" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold text-foreground">
              {role.company}
            </h3>
            <span className="font-mono text-xs text-muted">{role.dates}</span>
          </div>

          <p className="mt-1 font-mono text-sm text-accent">{role.title}</p>
          <p className="mt-1 font-mono text-[11px] text-muted/80">
            {role.location}
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            {role.summary}
          </p>

          <ul className="mt-5 space-y-3">
            {role.responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <SkillTags skills={role.skills} />
        </div>
      </div>
    </motion.article>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Career"
          title="Professional Experience"
          description="Engineering roles focused on automation, software quality, CI/CD, and requirements-driven development."
        />

        <div className="relative lg:pl-10">
          <div
            aria-hidden
            className="absolute left-[11px] top-3 hidden h-[calc(100%-12px)] w-px bg-gradient-to-b from-accent/40 via-border to-border/30 lg:block"
          />

          <div className="space-y-8">
            <div className="relative">
              <TimelineDot active />
              <LockheedCard index={0} />
            </div>

            {earlyCareerExperience.map((role, i) => (
              <div key={role.company} className="relative">
                <TimelineDot />
                <InternshipCard role={role} index={i + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
