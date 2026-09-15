import type { SVGProps } from "react";

export const TREBLE_CLEF = "\u{1D11E}";

/** A filled or open notehead, tilted like engraved notation. */
export function Notehead({
  cx,
  cy,
  rx,
  ry,
  open = false,
  ...props
}: { cx: number; cy: number; rx: number; ry: number; open?: boolean } & SVGProps<SVGEllipseElement>) {
  return (
    <ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      transform={`rotate(-20 ${cx} ${cy})`}
      {...(open ? { fill: "var(--color-paper-deep)", stroke: "currentColor", strokeWidth: 3 } : { fill: "currentColor" })}
      {...props}
    />
  );
}

/** The logo mark: an eighth note with an accent-colored flag. */
export function NoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 28" className={className} aria-hidden="true">
      <ellipse cx="8" cy="22" rx="7" ry="5" transform="rotate(-20 8 22)" fill="currentColor" />
      <rect x="13.5" y="2" width="2" height="19" fill="currentColor" />
      <path
        d="M15.5 2 C 19 5, 22 7, 20 12"
        fill="none"
        stroke="var(--color-vermilion)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
