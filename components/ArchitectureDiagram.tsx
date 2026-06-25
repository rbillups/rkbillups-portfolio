type DiagramType = "runit" | "bot" | "docs" | "cicd";

interface ArchitectureDiagramProps {
  type: DiagramType;
}

function Node({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded border px-2 py-1.5 text-center font-mono text-[10px] leading-tight ${
        accent
          ? "border-accent/50 bg-accent/10 text-accent"
          : "border-border bg-background text-muted"
      }`}
    >
      {label}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-px w-4 bg-border" />
      <div className="h-0 w-0 border-y-[3px] border-l-[5px] border-y-transparent border-l-border" />
    </div>
  );
}

function ArchitectureDiagram({ type }: ArchitectureDiagramProps) {
  switch (type) {
    case "runit":
      return (
        <div className="flex items-center justify-center gap-1">
          <Node label="User" />
          <Arrow />
          <Node label="Expo App" accent />
          <Arrow />
          <Node label="Supabase" />
          <Arrow />
          <Node label="Geo API" />
        </div>
      );
    case "bot":
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            <Node label="Discord" />
            <Arrow />
            <Node label="Bot" accent />
            <Arrow />
            <Node label="Scheduler" />
          </div>
          <div className="flex gap-1">
            <Node label="Alerts" />
            <Node label="Challenges" />
            <Node label="Workflows" />
          </div>
        </div>
      );
    case "docs":
      return (
        <div className="flex items-center justify-center gap-1">
          <Node label="Requirements" />
          <Arrow />
          <Node label="Pipeline" accent />
          <Arrow />
          <Node label="Reports" />
          <Arrow />
          <Node label="Validation" />
        </div>
      );
    case "cicd":
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            <Node label="Source" />
            <Arrow />
            <Node label="CI" accent />
            <Arrow />
            <Node label="Docker" />
            <Arrow />
            <Node label="Deploy" />
          </div>
          <div className="flex gap-1">
            <Node label="Tests" />
            <Node label="Lint" />
            <Node label="Env Config" />
          </div>
        </div>
      );
  }
}

export { ArchitectureDiagram };
