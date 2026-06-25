"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  achievements,
  education,
  foundationTags,
  type Achievement,
} from "@/lib/achievements-education";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function PlacementBadge({ placement }: { placement: string }) {
  return (
    <span className="rounded border border-accent/35 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
      {placement}
    </span>
  );
}

function FeaturedAchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={reveal}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-lg border border-accent/25 bg-surface/80 p-6 shadow-[0_0_32px_rgba(200,255,0,0.05)] sm:p-7"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-background">
          <Terminal size={16} className="text-accent" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <PlacementBadge placement={achievement.placement} />
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {achievement.date}
            </span>
          </div>

          <h4 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            {achievement.placement} — {achievement.title}
          </h4>
          <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted">
            {achievement.organization}
          </p>
          {achievement.team && (
            <p className="mt-2 font-mono text-[11px] text-muted/80">
              Team: {achievement.team}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-muted">
            {achievement.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {achievement.technicalHighlights.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button
              href={achievement.link.href}
              variant="primary"
              external
              className="!px-3 !py-2 text-xs"
            >
              <ExternalLink size={13} />
              {achievement.link.label}
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SecondaryAchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={reveal}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-lg border border-border bg-surface/50 p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <PlacementBadge placement={achievement.placement} />
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
          {achievement.date}
        </span>
      </div>

      <h4 className="mt-3 text-base font-semibold tracking-tight text-foreground">
        {achievement.placement} — {achievement.title}
      </h4>
      <p className="mt-1.5 font-mono text-[11px] text-muted">
        {achievement.organization}
      </p>
      {achievement.team && (
        <p className="mt-1 font-mono text-[10px] text-muted/75">
          Team: {achievement.team}
        </p>
      )}

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {achievement.description}
      </p>

      <ul className="mt-4 space-y-2">
        {achievement.technicalHighlights.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-[13px] leading-relaxed text-muted"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <Button
          href={achievement.link.href}
          variant="secondary"
          external
          className="!px-3 !py-2 text-xs"
        >
          <ExternalLink size={13} />
          {achievement.link.label}
        </Button>
      </div>
    </motion.article>
  );
}

function CompactAchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={reveal}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-md border border-border/70 bg-surface/40 p-4 sm:p-4"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded border border-accent/25 bg-accent/[0.06] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
          {achievement.placement}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-wider text-muted/80">
          {achievement.date}
        </span>
      </div>

      <h4 className="mt-2.5 text-sm font-semibold tracking-tight text-foreground">
        {achievement.placement} — {achievement.title}
      </h4>
      <p className="mt-1 font-mono text-[10px] leading-relaxed text-muted/85">
        {achievement.organization}
      </p>

      <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
        {achievement.description}
      </p>

      <ul className="mt-3 space-y-1.5">
        {achievement.technicalHighlights.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-xs leading-relaxed text-muted"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <Button
          href={achievement.link.href}
          variant="ghost"
          external
          className="!px-2.5 !py-1.5 text-[11px]"
        >
          <ExternalLink size={12} />
          {achievement.link.label}
        </Button>
      </div>
    </motion.article>
  );
}

export function AchievementsEducation() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-t border-border py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Credentials"
          title="Selected Achievements & Education"
          description="Selective highlights in applied engineering, competition work, and academic foundation."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="relative lg:pl-8">
            <div
              aria-hidden
              className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-gradient-to-b from-accent/35 via-border to-transparent lg:block"
            />

            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden
                className="hidden h-2 w-2 rounded-full border border-accent/50 bg-accent/70 lg:block"
              />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Selected Achievements
              </h3>
            </div>

            <div className="space-y-5">
              {achievements.map((achievement, i) =>
                achievement.featured ? (
                  <FeaturedAchievementCard
                    key={`${achievement.date}-${achievement.title}`}
                    achievement={achievement}
                    index={i}
                  />
                ) : achievement.compact ? (
                  <CompactAchievementCard
                    key={`${achievement.date}-${achievement.title}`}
                    achievement={achievement}
                    index={i}
                  />
                ) : (
                  <SecondaryAchievementCard
                    key={`${achievement.date}-${achievement.title}`}
                    achievement={achievement}
                    index={i}
                  />
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Education
            </h3>

            <div className="space-y-5">
              {education.map((item, i) => (
                <motion.article
                  key={`${item.degree}-${item.graduated}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={reveal}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-lg border border-border bg-surface/60 p-6 sm:p-7"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                      <FileText size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                        {item.graduated}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold text-foreground">
                        {item.school}
                      </h4>
                      <p className="mt-1 text-sm text-muted">{item.degree}</p>
                      {"concentration" in item && item.concentration && (
                        <p className="mt-1 font-mono text-[11px] text-muted/80">
                          {item.concentration}
                        </p>
                      )}
                      {"gpa" in item && item.gpa && (
                        <p className="mt-2 font-mono text-[11px] text-muted">
                          {item.gpa}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 rounded-lg border border-border/70 bg-background/40 p-5"
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                Foundation
              </p>
              <div className="flex flex-wrap gap-2">
                {foundationTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border/80 px-2.5 py-1 font-mono text-[10px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
