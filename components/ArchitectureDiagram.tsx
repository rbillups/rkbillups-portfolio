type DiagramType = "runit" | "bot" | "docs" | "cicd" | "demibot" | "facemask";

interface ArchitectureDiagramProps {
  type: DiagramType;
}

function Node({
  label,
  accent = false,
  className = "",
}: {
  label: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded border px-2 py-1.5 text-center font-mono text-[10px] leading-tight ${
        accent
          ? "border-accent/50 bg-accent/10 text-accent"
          : "border-border bg-background text-muted"
      } ${className}`}
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

function ArrowDown() {
  return (
    <div className="flex flex-col items-center justify-center py-0.5">
      <div className="h-3 w-px bg-border" />
      <div className="h-0 w-0 border-x-[3px] border-t-[5px] border-x-transparent border-t-border" />
    </div>
  );
}

function ArchitectureDiagram({ type }: ArchitectureDiagramProps) {
  switch (type) {
    case "runit":
      return (
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:flex-nowrap">
            <Node label="Expo Mobile App" accent />
            <Arrow />
            <Node label="Supabase" />
            <Arrow />
            <Node label="Google Places API" />
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted/80">
            Edge Functions proxy · Realtime RSVP · RLS
          </p>
        </div>
      );
    case "demibot":
      return (
        <div className="flex flex-col items-center gap-1">
          <Node
            label="Discord Events + Scheduled Jobs"
            className="max-w-[220px]"
          />
          <ArrowDown />
          <Node label="DemiBot Python Service" accent className="max-w-[200px]" />
          <ArrowDown />
          <Node
            label="Environment Configuration + JSON Content Libraries"
            className="max-w-[260px]"
          />
          <ArrowDown />
          <Node
            label="Discord API + Configured Channels"
            className="max-w-[220px]"
          />
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
    case "facemask":
      return (
        <div className="flex flex-col items-center gap-1">
          <Node label="Image Input" accent />
          <ArrowDown />
          <Node label="Conv2D Blocks" />
          <ArrowDown />
          <Node label="Dense + Sigmoid" accent />
        </div>
      );
  }
}

export { ArchitectureDiagram };
