function FlowNode({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded border px-3 py-2 text-center font-mono text-[10px] leading-snug sm:text-[11px] ${
        accent
          ? "border-accent/30 bg-accent/[0.06] text-foreground"
          : "border-border/80 bg-background/80 text-muted"
      }`}
    >
      {label}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center py-0.5 text-muted/50" aria-hidden>
      →
    </div>
  );
}

export function FaceMaskModelFlow({ steps }: { steps: readonly string[] }) {
  return (
    <div
      className="rounded-md border border-border/70 bg-background/40 p-4 sm:p-5"
      role="img"
      aria-label="CNN model architecture flow"
    >
      <div className="mx-auto max-w-sm space-y-0.5">
        {steps.map((step, i) => (
          <div key={step}>
            <FlowNode
              label={step}
              accent={i === 0 || i === steps.length - 1}
            />
            {i < steps.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>
    </div>
  );
}
