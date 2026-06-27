"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, X, Maximize2, Minimize2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PortfolioAssistantChat } from "@/components/portfolio-assistant/PortfolioAssistantChat";
import { portfolioAssistantWidgetPrompts } from "@/lib/portfolio-assistant";

export function PortfolioAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();

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
              className="fixed inset-0 z-40 bg-background/45 backdrop-blur-[1px] md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.section
              id="portfolio-assistant-widget"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-assistant-widget-title"
              className={`fixed z-50 flex flex-col border border-border/80 bg-surface/96 shadow-[0_0_36px_rgba(200,255,0,0.07)] backdrop-blur-lg ${
                expanded
                  ? "inset-x-4 bottom-20 top-20 md:inset-auto md:bottom-24 md:right-6 md:top-auto md:h-[min(680px,calc(100vh-8rem))] md:w-[min(480px,calc(100vw-3rem))] md:rounded-lg"
                  : "inset-x-0 bottom-0 max-h-[min(85vh,640px)] rounded-t-xl md:inset-auto md:bottom-24 md:right-6 md:w-[min(380px,calc(100vw-2rem))] md:rounded-lg"
              }`}
            >
              <header className="flex items-start justify-between gap-3 border-b border-border/60 px-4 py-3 sm:px-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                    Portfolio Intelligence
                  </p>
                  <h2
                    id="portfolio-assistant-widget-title"
                    className="mt-1 text-sm font-semibold tracking-tight text-foreground sm:text-base"
                  >
                    Ask About My Work
                  </h2>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setExpanded((value) => !value)}
                    className="hidden rounded-md p-1.5 text-muted transition-colors hover:bg-background/60 hover:text-foreground md:inline-flex"
                    aria-label={
                      expanded ? "Collapse assistant panel" : "Expand assistant panel"
                    }
                  >
                    {expanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md p-1.5 text-muted transition-colors hover:bg-background/60 hover:text-foreground"
                    aria-label="Close assistant"
                  >
                    <X size={15} />
                  </button>
                </div>
              </header>

              <div className="flex min-h-0 flex-1 flex-col px-4 py-3 sm:px-4">
                <PortfolioAssistantChat
                  variant="widget"
                  starterPrompts={portfolioAssistantWidgetPrompts}
                  welcomeCopy="Ask about my projects, engineering background, skills, or career focus."
                  groundLine="Answers are grounded in my public portfolio materials."
                  showFullAssistantLink
                  className="min-h-0 flex-1"
                />
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>

      {!open && (
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.35, delay: reducedMotion ? 0 : 0.4 }}
          className="assistant-launcher fixed bottom-5 right-4 z-40 inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface/90 py-2 pl-2.5 pr-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors hover:border-accent/40 sm:bottom-6 sm:right-6 sm:pr-4"
          aria-expanded={open}
          aria-controls="portfolio-assistant-widget"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08]">
            <Sparkles size={15} className="text-accent" />
            <span
              className="assistant-live-indicator absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(200,255,0,0.75)]"
              aria-hidden
            />
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/90 sm:inline">
            Ask About My Work
          </span>
        </motion.button>
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
