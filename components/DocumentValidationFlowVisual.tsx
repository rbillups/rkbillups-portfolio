function FlowStep({ label, primary = false }: { label: string; primary?: boolean }) {
  return (
    <div
      className={`w-full max-w-md rounded border px-3 py-2.5 text-center font-mono leading-snug ${
        primary
          ? "border-accent/25 bg-accent/[0.04] text-[11px] text-foreground sm:text-xs"
          : "border-border bg-background text-[10px] text-muted sm:text-[11px]"
      }`}
    >
      {label}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex flex-col items-center py-0.5" aria-hidden>
      <div className="h-3 w-px bg-border" />
      <div className="h-0 w-0 border-x-[3px] border-t-[5px] border-x-transparent border-t-border" />
    </div>
  );
}

function OutcomeRow() {
  return (
    <div className="mt-1 flex w-full max-w-md gap-2">
      <div className="flex-1 rounded border border-accent/40 bg-accent/10 px-2 py-2 text-center font-mono text-[10px] text-accent">
        Pass
      </div>
      <div className="flex-1 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-2 text-center font-mono text-[10px] text-amber-200/80">
        Investigate Mismatch
      </div>
    </div>
  );
}

export function DocumentValidationFlowVisual({
  manualReviewItems,
}: {
  manualReviewItems: readonly string[];
}) {
  return (
    <div
      className="rounded-md border border-border/70 bg-background/50 p-5 sm:p-6"
      role="img"
      aria-label="Fictional automated validation workflow with a supporting manual review lane"
    >
      <p className="mb-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-muted/70">
        Fictional test-flow representation
      </p>

      <div className="mx-auto flex max-w-md flex-col items-center rounded-md border border-accent/15 bg-accent/[0.02] p-4 sm:p-5">
        <FlowStep label="Controlled Requirements Dataset" primary />
        <FlowArrow />
        <FlowStep label="Expected Reference Exports" primary />
        <FlowArrow />
        <FlowStep label="Python Document Generation Workflow" primary />
        <FlowArrow />
        <FlowStep label="Generated Document + Structured Output Artifacts" primary />
        <FlowArrow />
        <FlowStep label="Automated Comparison and Validation Scripts" primary />
        <FlowArrow />
        <OutcomeRow />
      </div>

      <div className="mx-auto mt-5 max-w-sm border-t border-dashed border-border/60 pt-4">
        <p className="mb-2 text-center font-mono text-[8px] uppercase tracking-[0.12em] text-muted/50">
          Targeted Manual Review
        </p>
        <ul className="space-y-1">
          {manualReviewItems.map((item) => (
            <li
              key={item}
              className="flex gap-2 rounded border border-border/40 bg-surface/30 px-2.5 py-1 font-mono text-[8px] text-muted/65 sm:text-[9px]"
            >
              <span className="text-muted/40">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
