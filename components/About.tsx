"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About"
          title="SOFTWARE ENGINEER · AUTOMATION · PRODUCT DEVELOPMENT"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-base leading-relaxed text-muted">
            Reginald Key&apos;Shawn Billups is a Software Engineer focused on
            building reliable automation, maintainable developer tools, and
            user-centered software products.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            His work combines Python development, object-oriented design, test
            automation, requirements-driven engineering workflows, and modern
            product development. He enjoys solving operational problems by
            reducing repetitive effort, improving software quality, and turning
            complex workflows into dependable systems.
          </p>
          <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted/85">
            Currently focused on Python automation, developer tooling, CI/CD-adjacent
            quality workflows, mobile products, and practical AI/ML foundations.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 font-mono text-xs text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
