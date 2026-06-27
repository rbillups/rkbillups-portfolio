import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { PortfolioAssistantChat } from "@/components/portfolio-assistant/PortfolioAssistantChat";
import { portfolioAssistantStarterPrompts } from "@/lib/portfolio-assistant";

export default function AskPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-[calc(100vh-65px)] border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <div className="mt-8">
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-px w-8 bg-accent/50" />
              Portfolio Intelligence
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ask About My Work
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ask about my projects, engineering background, skills, or career
              focus. Answers are grounded in my public portfolio materials and
              cite supporting sources when available.
            </p>
            <p className="mt-2 max-w-2xl font-mono text-[11px] leading-relaxed text-muted/75">
              This assistant does not access private systems, internal
              documents, or admin tools.
            </p>
          </div>

          <section className="mt-10 rounded-lg border border-border bg-surface/70 p-5 sm:p-7">
            <PortfolioAssistantChat
              variant="page"
              starterPrompts={portfolioAssistantStarterPrompts}
              welcomeCopy="Ask about my engineering background, portfolio projects, technical skills, or career direction."
              groundLine="Answers are grounded in my public portfolio materials."
            />
          </section>
        </div>
      </main>
    </>
  );
}
