"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profileLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-mono text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          RKB<span className="text-accent drop-shadow-[0_0_6px_rgba(200,255,0,0.5)]">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={profileLinks.resume} variant="secondary" className="!px-4 !py-2 text-xs" external>
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button href={profileLinks.resume} variant="secondary" className="w-full" external>
                  Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
