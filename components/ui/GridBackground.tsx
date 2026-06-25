export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1c1c1c 1px, transparent 1px),
            linear-gradient(to bottom, #1c1c1c 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 100% 80% at 50% 20%, black 10%, transparent 72%)",
        }}
      />

      {/* Finer technical grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #252525 1px, transparent 1px),
            linear-gradient(to bottom, #252525 1px, transparent 1px)
          `,
          backgroundSize: "14px 14px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 55% 25%, black 8%, transparent 68%)",
        }}
      />

      {/* Subtle scan line */}
      <div className="hero-scanline absolute inset-0 opacity-[0.018]" />
    </div>
  );
}
