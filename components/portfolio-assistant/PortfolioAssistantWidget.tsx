"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, X, Maximize2, Minimize2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioAssistantChat } from "@/components/portfolio-assistant/PortfolioAssistantChat";
import { portfolioAssistantWidgetPrompts } from "@/lib/portfolio-assistant";

export function PortfolioAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!open) setExpanded(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close assistant overlay"
              className="fixed inset-0 z-40 bg-background/50 backdrop-blur-[1px] md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.22 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-assistant-widget-title"
              className={`fixed z-50 flex flex-col border border-border bg-surface/95 shadow-[0_0_40px_rgba(200,255,0,0.08)] backdrop-blur-lg ${
                expanded
                  ? "inset-x-4 bottom-24 top-24 md:inset-auto md:bottom-24 md:right-6 md:top-auto md:h-[min(720px,calc(100vh-8rem))] md:w-[min(520px,calc(100vw-3rem))]"
                  : "inset-x-0 bottom-0 max-h-[min(88vh,680px)] rounded-t-xl md:inset-auto md:bottom-24 md:right-6 md:w-[min(400px,calc(100vw-2rem))] md:rounded-lg"
              }`}
            >
              <header className="flex items-start justify-between gap-3 border-b border-border/70 px-4 py-3 sm:px-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    Portfolio Assistant
                  </p>
                  <h2
                    id="portfolio-assistant-widget-title"
                    className="mt-1 text-base font-semibold text-foreground"
                  >
                    Ask About My Work
                  </h2>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setExpanded((value) => !value)}
                    className="hidden rounded-md border border-border p-2 text-muted transition-colors hover:text-foreground md:inline-flex"
                    aria-label={expanded ? "Collapse assistant panel" : "Expand assistant panel"}
                  >
                    {expanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md border border-border p-2 text-muted transition-colors hover:text-foreground"
                    aria-label="Close assistant"
                  >
                    <X size={16} />
                  </button>
                </div>
              </header>

              <div className="flex min-h-0 flex-1 flex-col px-4 py-4 sm:px-5">
                <PortfolioAssistantChat
                  variant="widget"
                  starterPrompts={portfolioAssistantWidgetPrompts}
                  welcomeCopy="Ask questions about Key'Shawn Billups' projects, engineering background, skills, and career focus. Answers are grounded in public portfolio materials only."
                  showFullAssistantLink
                  className="min-h-0 flex-1"
                />
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-surface/95 px-4 py-3 text-sm font-medium text-foreground shadow-[0_0_24px_rgba(200,255,0,0.12)] backdrop-blur-md transition-all hover:border-accent/55 hover:shadow-[0_0_32px_rgba(200,255,0,0.18)] sm:bottom-6 sm:right-6"
          aria-expanded={open}
          aria-controls="portfolio-assistant-widget"
        >
          <MessageSquare size={16} className="text-accent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] sm:text-xs">
            Ask About My Work
          </span>
        </button>
      )}

      {open && (
        <Link
          href="/ask"
          className="fixed bottom-5 left-4 z-50 font-mono text-[10px] text-muted transition-colors hover:text-accent sm:hidden"
        >
          Open full assistant →
        </Link>
      )}
    </>
  );
}
