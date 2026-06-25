"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Engineering Experience" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-surface p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background">
              <Building2 size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Associate Software Engineer
              </h3>
              <p className="mt-1 font-mono text-sm text-accent">
                Lockheed Martin Aeronautics
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                Contribute to engineering automation, developer tooling, CI/CD
                workflows, and requirements-driven software processes.
              </p>
            </div>
          </div>

          <p className="mt-6 border-t border-border pt-6 font-mono text-[11px] leading-relaxed text-muted/80">
            Public work is intentionally sanitized and contains no proprietary
            code, internal artifacts, or customer data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
