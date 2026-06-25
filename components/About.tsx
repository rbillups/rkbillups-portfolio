"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="About" title="Engineer & Builder" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl text-base leading-relaxed text-muted"
        >
          Reginald Key&apos;Shawn is an engineer who solves operational problems through
          automation, reliable systems, and user-focused products. He builds
          tools that reduce manual work, improve software quality, and help
          teams move from idea to production with confidence.
        </motion.p>

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
