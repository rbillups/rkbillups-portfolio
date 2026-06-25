"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profileLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { HeroPortraitPanel } from "@/components/HeroPortraitPanel";

const skillTags = ["Python", "CI/CD", "Automation", "TypeScript"];

const contentMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [introDone, setIntroDone] = useState(false);

  const handleTypeComplete = useCallback(() => {
    setIntroDone(true);
  }, []);

  useEffect(() => {
    if (reducedMotion) setIntroDone(true);
  }, [reducedMotion]);

  const showContent = introDone;
  const contentTransition = {
    duration: reducedMotion ? 0 : 0.55,
    ease: "easeOut" as const,
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-65px)] items-center overflow-hidden bg-background"
    >
      <GridBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[58fr_42fr] lg:gap-12 xl:gap-16">
          {/* Left column */}
          <div className="relative order-1 lg:pr-4 lg:pt-6">
            <p className="mb-6 min-h-[1.25rem] font-mono text-xs uppercase tracking-[0.22em] text-accent">
              <TypewriterText
                text="Reginald Key'Shawn Billups"
                onComplete={handleTypeComplete}
              />
            </p>

            <motion.div
              initial={false}
              animate={showContent ? "visible" : "hidden"}
              variants={contentMotion}
              transition={contentTransition}
            >
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:max-w-2xl lg:text-[3.2rem] lg:leading-[1.08]">
                Building systems that{" "}
                <span className="text-accent">automate work</span> and move ideas
                into production.
              </h1>
            </motion.div>

            <motion.p
              initial={false}
              animate={showContent ? contentMotion.visible : contentMotion.hidden}
              transition={{ ...contentTransition, delay: reducedMotion ? 0 : 0.06 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
            >
              Software Engineer focused on backend development, CI/CD automation,
              developer tooling, and intelligent applications.
            </motion.p>

            <motion.div
              initial={false}
              animate={showContent ? contentMotion.visible : contentMotion.hidden}
              transition={{ ...contentTransition, delay: reducedMotion ? 0 : 0.12 }}
              className="mt-9 flex flex-wrap gap-2.5 font-mono text-[11px] text-muted"
            >
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border/80 px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={false}
              animate={showContent ? contentMotion.visible : contentMotion.hidden}
              transition={{ ...contentTransition, delay: reducedMotion ? 0 : 0.18 }}
              className="mt-11 flex flex-wrap gap-4"
            >
              <Button href="#projects">View Projects</Button>
              <Button href={profileLinks.resume} variant="secondary">
                Download Resume
              </Button>
            </motion.div>

            {/* Connector line — desktop */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-[42%] right-0 hidden items-center lg:flex"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(200,255,0,0.6)]" />
              <motion.span
                initial={false}
                animate={
                  showContent
                    ? { scaleX: 1, opacity: 1 }
                    : { scaleX: 0, opacity: 0 }
                }
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion ? 0 : 0.1,
                  ease: "easeOut",
                }}
                className="ml-1 h-px w-16 origin-left bg-gradient-to-r from-accent/50 to-border/30 xl:w-24"
              />
            </div>
          </div>

          {/* Right column — portrait */}
          <div className="order-2 flex justify-center lg:justify-end lg:self-start">
            <HeroPortraitPanel visible={showContent} />
          </div>
        </div>
      </div>

      <motion.a
        href="#projects"
        initial={false}
        animate={showContent ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : 0.35 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={20} className="animate-bounce motion-reduce:animate-none" />
      </motion.a>
    </section>
  );
}
