"use client";

import { motion } from "framer-motion";
import { FileText, GitBranch, Link, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactLinks } from "@/lib/data";

const iconMap = {
  mail: Mail,
  linkedin: Link,
  github: GitBranch,
  file: FileText,
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-surface px-6 py-16 text-center sm:px-12"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something reliable.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Open to engineering roles, automation projects, and collaborations
            on tools that ship.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {contactLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <Button
                  key={link.label}
                  href={link.href}
                  variant={link.label === "Email" ? "primary" : "secondary"}
                  external={link.href.startsWith("http")}
                >
                  <Icon size={16} />
                  {link.label}
                </Button>
              );
            })}
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-muted">
            RKB<span className="text-accent">.</span> — Built by Reginald
            Key&apos;Shawn Billups
          </p>
          <p className="font-mono text-xs text-muted/60">
            © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </section>
  );
}
