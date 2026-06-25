function LayerNode({ label }: { label: string }) {
  return (
    <div className="rounded border border-border bg-background px-2.5 py-1.5 font-mono text-[10px] text-muted">
      {label}
    </div>
  );
}

function LayerTitle({ children }: { children: string }) {
  return (
    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
      {children}
    </p>
  );
}

export function DocumentSystemDiagram() {
  return (
    <div
      className="space-y-4"
      role="img"
      aria-label="Fictional three-layer system design for document automation"
    >
      <div className="rounded-md border border-border/70 bg-background/50 p-4">
        <LayerTitle>Input Layer</LayerTitle>
        <div className="flex flex-wrap gap-2">
          <LayerNode label="Structured Requirements Export" />
          <LayerNode label="Configuration File" />
          <LayerNode label="Approved Document Template" />
        </div>
      </div>

      <div className="flex justify-center" aria-hidden>
        <div className="h-4 w-px bg-border" />
      </div>

      <div className="rounded-md border border-accent/25 bg-accent/[0.04] p-4">
        <LayerTitle>Processing Layer</LayerTitle>
        <div className="grid gap-2 sm:grid-cols-2">
          <LayerNode label="Python Automation Engine" />
          <LayerNode label="Shared Document Base Class" />
          <LayerNode label="Specialized Document Handlers" />
          <LayerNode label="Table and Traceability Services" />
        </div>
      </div>

      <div className="flex justify-center" aria-hidden>
        <div className="h-4 w-px bg-border" />
      </div>

      <div className="rounded-md border border-border/70 bg-background/50 p-4">
        <LayerTitle>Output Layer</LayerTitle>
        <div className="flex flex-wrap gap-2">
          <LayerNode label="Standardized Engineering Document" />
          <LayerNode label="Validation Report" />
          <LayerNode label="Repeatable Test Evidence" />
        </div>
      </div>
    </div>
  );
}
