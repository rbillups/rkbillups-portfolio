"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const statusLines = [
  "STATUS: AVAILABLE",
  "TARGET: REMOTE ENGINEERING",
  "FOCUS: AUTOMATION / SYSTEMS",
];

interface HeroPortraitPanelProps {
  visible: boolean;
}

export function HeroPortraitPanel({ visible }: HeroPortraitPanelProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      animate={
        visible
          ? { opacity: 1, x: 0 }
          : { opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : 28 }
      }
      transition={{ duration: reducedMotion ? 0 : 0.55, ease: "easeOut" }}
      className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none lg:w-full"
    >
      {/* Silhouette glow */}
      <div
        aria-hidden
        className="absolute -right-6 top-8 bottom-0 w-[88%] rounded-[2rem] bg-accent/[0.045] blur-3xl"
      />

      <div className="relative lg:-mr-4 lg:pt-2">
        {/* Portrait composition */}
        <div
          className="relative overflow-hidden rounded-2xl lg:min-h-[min(82vh,720px)] lg:rounded-[1.25rem]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 88%, transparent 100%)",
          }}
        >
          {/* Faint lime edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 rounded-2xl shadow-[inset_0_0_0_1px_rgba(200,255,0,0.18),0_0_40px_rgba(200,255,0,0.06)] lg:rounded-[1.25rem]"
          />

          <div className="relative aspect-[3/4] w-full bg-background sm:aspect-[3/4.1] lg:aspect-auto lg:h-[min(82vh,720px)]">
            <Image
              src="/headshot.jpg"
              alt="Reginald Key'Shawn Billups in a pinstripe suit."
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="scale-[1.06] object-cover object-[center_33%] lg:scale-[1.04]"
            />

            {/* Mute studio white */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[rgba(5,5,5,0.3)]"
            />

            {/* Blend into page — left to right */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.62) 38%, rgba(10,10,10,0.12) 72%, transparent 100%)",
              }}
            />

            {/* Top edge */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0a0a0a]/80 to-transparent"
            />

            {/* Bottom edge */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent"
            />
          </div>
        </div>

        {/* Status panel — lower-right, clear of face */}
        <motion.div
          initial={false}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{
            duration: reducedMotion ? 0 : 0.5,
            delay: reducedMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
          className="absolute right-0 bottom-6 z-30 border border-border/60 bg-background/75 px-3 py-2.5 font-mono text-[9px] leading-relaxed tracking-wide text-muted backdrop-blur-sm sm:text-[10px] lg:bottom-10"
        >
          {statusLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
