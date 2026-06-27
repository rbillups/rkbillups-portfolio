function Step({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`rounded border px-2.5 py-2 text-center font-mono text-[10px] leading-snug ${
        accent
          ? "border-accent/35 bg-accent/[0.06] text-foreground"
          : "border-border/80 bg-background/80 text-muted"
      }`}
    >
      {label}
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex justify-center py-0.5 text-muted/45" aria-hidden>
      ↓
    </div>
  );
}

export function KnowledgeForgeVisual() {
  return (
    <div
      className="rounded-md border border-border/70 bg-background/50 p-4 sm:p-5"
      role="img"
      aria-label="KnowledgeForge RAG workflow overview"
    >
      <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-muted/70">
        Citation-grounded RAG workflow
      </p>
      <div className="mx-auto max-w-xs space-y-0.5">
        <Step label="Approved documents" />
        <ArrowDown />
        <Step label="Chunking + embeddings" />
        <ArrowDown />
        <Step label="pgvector semantic search" accent />
        <ArrowDown />
        <Step label="Grounded response + citations" accent />
      </div>
    </div>
  );
}
