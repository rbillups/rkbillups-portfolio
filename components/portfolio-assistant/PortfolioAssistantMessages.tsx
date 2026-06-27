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
      className={`mt-2 font-mono text-[9px] uppercase tracking-[0.12em] ${
        tone === "warning" ? "text-amber-200/80" : "text-muted/80"
      }`}
    >
      {label}
    </p>
  );
}

export function PortfolioAssistantMessages({
  messages,
  variant = "page",
}: {
  messages: PortfolioChatMessage[];
  variant?: "page" | "widget";
}) {
  if (!messages.length) return null;

  const isWidget = variant === "widget";

  return (
    <div className={isWidget ? "space-y-5" : "space-y-4"}>
      {messages.map((message) => {
        const isUser = message.role === "user";
        const isLoading = message.status === "loading";

        if (isWidget) {
          return (
            <div key={message.id} className="space-y-1.5">
              {!isUser && (
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/70">
                  {isLoading ? "Searching portfolio" : "Response"}
                </p>
              )}
              {isUser && (
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/70">
                  Your question
                </p>
              )}
              <p
                className={`text-sm leading-relaxed ${
                  isUser ? "text-foreground/90" : "border-l border-accent/30 pl-3 text-muted"
                } ${isLoading ? "animate-pulse" : ""}`}
              >
                {message.content}
              </p>

              {!isUser && message.policyBlocked && (
                <StatusNotice label="Response limited for privacy" tone="warning" />
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
          );
        }

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
                <StatusNotice label="Response limited for privacy" tone="warning" />
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
