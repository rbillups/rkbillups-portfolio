interface DocumentWorkflowVisualProps {
  variant?: "card" | "hero";
}

function FlowNode({
  label,
  accent = false,
  compact = false,
}: {
  label: string;
  accent?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded border text-center font-mono leading-tight ${
        compact ? "px-2 py-1.5 text-[9px]" : "px-3 py-2 text-[10px] sm:text-[11px]"
      } ${
        accent
          ? "border-accent/45 bg-accent/10 text-accent"
          : "border-border bg-background text-muted"
      }`}
    >
      {label}
    </div>
  );
}

function Plus() {
  return (
    <span className="font-mono text-[10px] text-muted/60" aria-hidden>
      +
    </span>
  );
}

function FlowArrow({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center ${compact ? "py-0.5" : "py-1"}`}
      aria-hidden
    >
      <div className={`w-px bg-border ${compact ? "h-2" : "h-3"}`} />
      <div className="h-0 w-0 border-x-[3px] border-t-[5px] border-x-transparent border-t-border" />
    </div>
  );
}

export function DocumentWorkflowVisual({
  variant = "card",
}: DocumentWorkflowVisualProps) {
  const compact = variant === "card";

  return (
    <div
      className={`overflow-hidden rounded-md border border-accent/25 bg-background ${
        variant === "hero"
          ? "p-6 shadow-[0_0_36px_rgba(200,255,0,0.07)] sm:p-8"
          : "p-4 shadow-[0_0_24px_rgba(200,255,0,0.05)] lg:p-5"
      }`}
      role="img"
      aria-label="Fictional document automation workflow from structured inputs through a Python engine to standardized outputs and validation evidence"
    >
      <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-muted/70">
        Fictional workflow representation
      </p>

      <div className="flex flex-col items-center gap-1">
        <div
          className={`grid w-full gap-1.5 ${
            compact
              ? "max-w-[240px] grid-cols-1"
              : "max-w-sm grid-cols-1 sm:max-w-md"
          }`}
        >
          <FlowNode
            label="Structured Requirements Data"
            compact={compact}
          />
          <div className="flex justify-center">
            <Plus />
          </div>
          <FlowNode label="Approved Document Template" compact={compact} />
          <div className="flex justify-center">
            <Plus />
          </div>
          <FlowNode label="Workflow Configuration" compact={compact} />
        </div>

        <FlowArrow compact={compact} />

        <FlowNode
          label="Python Automation Engine"
          accent
          compact={compact}
        />

        <FlowArrow compact={compact} />

        <div
          className={`grid w-full gap-1.5 ${
            compact ? "max-w-[240px]" : "max-w-sm sm:max-w-md"
          }`}
        >
          <FlowNode
            label="Standardized Document Output"
            compact={compact}
          />
          <div className="flex justify-center">
            <Plus />
          </div>
          <FlowNode label="Validation Evidence" compact={compact} />
        </div>
      </div>
    </div>
  );
}
