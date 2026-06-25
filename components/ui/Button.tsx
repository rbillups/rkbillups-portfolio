import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-background border border-accent shadow-[0_0_20px_rgba(200,255,0,0.2)] hover:bg-accent/90 hover:shadow-[0_0_28px_rgba(200,255,0,0.35)]",
  secondary:
    "bg-surface/40 text-foreground border border-border backdrop-blur-sm hover:border-accent/50 hover:text-accent hover:shadow-[0_0_16px_rgba(200,255,0,0.08)]",
  ghost:
    "bg-transparent text-muted hover:text-foreground border border-transparent",
};

const disabledStyles =
  "pointer-events-none cursor-not-allowed opacity-45 border-border bg-surface/20 text-muted";

export function Button({
  href = "#",
  variant = "primary",
  children,
  className = "",
  external = false,
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
    disabled ? disabledStyles : variantStyles[variant]
  } ${className}`;

  if (disabled) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
