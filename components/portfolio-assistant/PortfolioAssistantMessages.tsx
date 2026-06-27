import { PortfolioAssistantCitations } from "@/components/portfolio-assistant/PortfolioAssistantCitations";
import type { PortfolioChatMessage } from "@/lib/portfolio-assistant";

function StatusNotice({
  label,
  tone,
}: {
  label: string;
  tone: "warning" | "muted";
}) {
  return (
    <p
      className={`mt-2 rounded border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] ${
        tone === "warning"
          ? "border-amber-500/30 bg-amber-500/10 text-amber-200/85"
          : "border-border/70 bg-background/50 text-muted"
      }`}
    >
      {label}
    </p>
  );
}

export function PortfolioAssistantMessages({
  messages,
}: {
  messages: PortfolioChatMessage[];
}) {
  if (!messages.length) return null;

  return (
    <div className="space-y-4">
      {messages.map((message) => {
        const isUser = message.role === "user";
        const isLoading = message.status === "loading";

        return (
          <div
            key={message.id}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[92%] rounded-lg border px-4 py-3 sm:max-w-[85%] ${
                isUser
                  ? "border-accent/25 bg-accent/[0.08]"
                  : message.status === "error"
                    ? "border-amber-500/25 bg-amber-500/[0.06]"
                    : "border-border/70 bg-surface/60"
              }`}
            >
              {!isUser && (
                <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  Portfolio Assistant
                </p>
              )}
              <p
                className={`text-sm leading-relaxed ${
                  isUser ? "text-foreground" : "text-muted"
                } ${isLoading ? "animate-pulse" : ""}`}
              >
                {message.content}
              </p>

              {!isUser && message.policyBlocked && (
                <StatusNotice
                  label="Response limited for privacy"
                  tone="warning"
                />
              )}

              {!isUser &&
                message.insufficientContext &&
                !message.policyBlocked && (
                  <StatusNotice
                    label="Limited portfolio context available"
                    tone="muted"
                  />
                )}

              {!isUser &&
                message.status === "complete" &&
                message.citations &&
                message.citations.length > 0 && (
                  <PortfolioAssistantCitations citations={message.citations} />
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
