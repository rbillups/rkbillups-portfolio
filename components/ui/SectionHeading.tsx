interface SectionHeadingProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  id,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      {label && (
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
          <span className="h-px w-8 bg-accent/50" />
          {label}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
