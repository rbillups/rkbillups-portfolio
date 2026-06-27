"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUp, ExternalLink } from "lucide-react";
import { usePortfolioAssistant } from "@/hooks/usePortfolioAssistant";
import { PortfolioAssistantMessages } from "@/components/portfolio-assistant/PortfolioAssistantMessages";
import { getPortfolioAssistantApiUrl } from "@/lib/portfolio-assistant";

type PortfolioAssistantChatProps = {
  variant: "page" | "widget";
  starterPrompts: readonly string[];
  welcomeCopy: string;
  showFullAssistantLink?: boolean;
  className?: string;
};

export function PortfolioAssistantChat({
  variant,
  starterPrompts,
  welcomeCopy,
  showFullAssistantLink = false,
  className = "",
}: PortfolioAssistantChatProps) {
  const { messages, isLoading, askQuestion } = usePortfolioAssistant();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isConfigured = Boolean(getPortfolioAssistantApiUrl());

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;
    setInput("");
    await askQuestion(question);
  };

  const handlePromptClick = async (prompt: string) => {
    if (isLoading) return;
    await askQuestion(prompt);
  };

  return (
    <div className={`flex min-h-0 flex-col ${className}`}>
      <div className="shrink-0">
        <p className="text-sm leading-relaxed text-muted">{welcomeCopy}</p>
        {!isConfigured && (
          <p className="mt-3 rounded-md border border-amber-500/25 bg-amber-500/[0.06] px-3 py-2 text-xs text-muted">
            Assistant API URL is not configured. Set{" "}
            <code className="font-mono text-[11px] text-foreground">
              NEXT_PUBLIC_PORTFOLIO_ASSISTANT_API_URL
            </code>{" "}
            to enable responses.
          </p>
        )}
      </div>

      <div
        className={`mt-4 min-h-0 flex-1 overflow-y-auto ${
          variant === "widget" ? "max-h-[340px] sm:max-h-[380px]" : ""
        }`}
      >
        {messages.length === 0 ? (
          <div className="space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              Starter prompts
            </p>
            <div className="flex flex-wrap gap-2">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handlePromptClick(prompt)}
                  disabled={isLoading || !isConfigured}
                  className="rounded-md border border-border bg-background/60 px-3 py-2 text-left text-xs leading-relaxed text-muted transition-colors hover:border-accent/35 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <PortfolioAssistantMessages messages={messages} />
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="mt-4 shrink-0 space-y-3">
        <label htmlFor={`assistant-input-${variant}`} className="sr-only">
          Ask about Key&apos;Shawn Billups&apos; portfolio
        </label>
        <textarea
          id={`assistant-input-${variant}`}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
          rows={variant === "widget" ? 2 : 3}
          placeholder="Ask about projects, skills, experience, or career focus..."
          disabled={isLoading || !isConfigured}
          className="w-full resize-none rounded-md border border-border bg-background/80 px-3 py-2.5 text-sm text-foreground placeholder:text-muted/70 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-60"
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          {showFullAssistantLink ? (
            <Link
              href="/ask"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted transition-colors hover:text-accent"
            >
              Open full assistant
              <ExternalLink size={12} />
            </Link>
          ) : (
            <span />
          )}
          <button
            type="submit"
            disabled={isLoading || !input.trim() || !isConfigured}
            className="inline-flex items-center gap-2 rounded-md border border-accent bg-accent px-4 py-2 text-sm font-medium text-background transition-all hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
            <ArrowUp size={14} />
          </button>
        </div>
      </form>
    </div>
  );
}
