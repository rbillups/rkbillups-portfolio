"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  speed = 40,
  delay = 350,
  className = "",
  onComplete,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  useEffect(() => {
    if (done) onComplete?.();
  }, [done, onComplete]);

  return (
    <span className={className}>
      <span aria-hidden="true">{displayed}</span>
      <span className="sr-only">{text}</span>
      <span
        aria-hidden
        className={`ml-0.5 inline-block w-[2px] bg-accent ${
          done ? "animate-[cursor-blink_1s_step-end_infinite]" : "opacity-90"
        }`}
        style={{ height: "0.9em", verticalAlign: "text-bottom" }}
      />
    </span>
  );
}
