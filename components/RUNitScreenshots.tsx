"use client";

import Image from "next/image";
import { runitScreenshots } from "@/lib/data";

interface RUNitScreenshotsProps {
  limit?: number;
  variant?: "card" | "gallery";
}

export function RUNitScreenshots({
  limit,
  variant = "gallery",
}: RUNitScreenshotsProps) {
  const shots = limit ? runitScreenshots.slice(0, limit) : runitScreenshots;

  return (
    <div
      className={
        variant === "card"
          ? "grid grid-cols-3 gap-2"
          : "grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {shots.map((shot) => (
        <figure
          key={shot.src}
          className="group relative aspect-[9/16] overflow-hidden rounded-md border border-border/80 bg-background"
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes={
              variant === "card"
                ? "(max-width: 1024px) 28vw, 160px"
                : "(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
            }
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-2 pb-2 pt-6">
            <span className="font-mono text-[8px] uppercase tracking-wider text-foreground/80 sm:text-[9px]">
              {shot.label}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
