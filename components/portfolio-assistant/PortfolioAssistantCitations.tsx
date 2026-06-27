import type { PortfolioCitation } from "@/lib/portfolio-assistant";

export function PortfolioAssistantCitations({
  citations,
}: {
  citations: PortfolioCitation[];
}) {
  if (!citations.length) return null;

  const label =
    citations.length === 1
      ? "View supporting source"
      : `View ${citations.length} supporting sources`;

  return (
    <details className="mt-3 rounded-md border border-border/70 bg-background/50">
      <summary className="cursor-pointer list-none px-3 py-2 font-mono text-[11px] text-accent transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="text-muted">
            ▸
          </span>
          {label}
        </span>
      </summary>
      <ul className="space-y-3 border-t border-border/60 px-3 py-3">
        {citations.map((citation, index) => (
          <li
            key={`${citation.filename ?? citation.title ?? "source"}-${index}`}
            className="rounded border border-border/60 bg-surface/40 p-3"
          >
            {citation.title && (
              <p className="text-sm font-medium text-foreground">
                {citation.title}
              </p>
            )}
            {citation.filename && (
              <p className="mt-1 font-mono text-[10px] text-muted">
                {citation.filename}
              </p>
            )}
            {citation.excerpt && (
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {citation.excerpt}
              </p>
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}
