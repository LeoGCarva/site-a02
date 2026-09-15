import { cn } from "@site-a02/ui/lib/utils";

import { Notehead, TREBLE_CLEF } from "./notation";

type UnitStatus = "complete" | "current" | "next" | "locked";

const UNITS: { title: string; status: UnitStatus }[] = [
  { title: "Notes & the staff", status: "complete" },
  { title: "Rhythm & meter", status: "complete" },
  { title: "Intervals", status: "current" },
  { title: "Scales & keys", status: "next" },
  { title: "Chords", status: "locked" },
  { title: "Progressions", status: "locked" },
];

const STATUS_LABEL: Record<UnitStatus, string> = {
  complete: "Complete",
  current: "Lesson 3 of 8",
  next: "Up next",
  locked: "Locked",
};

// staff geometry for the desktop arpeggio (viewBox 1280 x 210)
const STAFF_WIDTH = 1280;
const STAFF_LINES = [60, 82, 104, 126, 148];
// C4 (ledger line), E4, G4, B4, D5, F5: each unit climbs a third
const NOTE_Y = [170, 148, 126, 104, 82, 60];
const noteX = (index: number) => ((index + 0.5) * STAFF_WIDTH) / UNITS.length;

/** The curriculum drawn as a rising arpeggio: one note per unit. */
export default function UnitPath() {
  const currentIndex = UNITS.findIndex((unit) => unit.status === "current");

  return (
    <>
      {/* Desktop: one staff, units as ascending notes with labels underneath */}
      <div className="hidden flex-col gap-2 lg:flex">
        <svg
          viewBox={`0 0 ${STAFF_WIDTH} 210`}
          className="block w-full overflow-visible text-ink"
          aria-hidden="true"
        >
          <g stroke="currentColor" strokeWidth="1.4">
            {STAFF_LINES.map((y) => (
              <line key={y} x1="0" y1={y} x2={STAFF_WIDTH} y2={y} />
            ))}
            <line x1={noteX(0) - 24} y1="170" x2={noteX(0) + 24} y2="170" />
            <line x1="1272" y1="60" x2="1272" y2="148" />
            <line x1="1277.5" y1="60" x2="1277.5" y2="148" strokeWidth="5" />
          </g>
          <text x="4" y="148" fontSize="88" fill="currentColor" className="font-music">
            {TREBLE_CLEF}
          </text>
          {UNITS.map((unit, i) =>
            unit.status === "current" ? (
              <g key={unit.title} className="text-vermilion">
                <circle
                  cx={noteX(i)}
                  cy={NOTE_Y[i]}
                  r="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeDasharray="3 4"
                />
                <Notehead cx={noteX(i)} cy={NOTE_Y[i]} rx={15} ry={10.5} />
                <text
                  x={noteX(i)}
                  y="36"
                  textAnchor="middle"
                  fontSize="22"
                  fill="currentColor"
                  className="font-display italic"
                >
                  you are here
                </text>
              </g>
            ) : (
              <Notehead
                key={unit.title}
                cx={noteX(i)}
                cy={NOTE_Y[i]}
                rx={unit.status === "complete" ? 15 : 14}
                ry={unit.status === "complete" ? 10.5 : 9.5}
                open={unit.status !== "complete"}
              />
            ),
          )}
        </svg>

        <ol className="grid grid-cols-6">
          {UNITS.map((unit, i) => {
            const isCurrent = i === currentIndex;
            return (
              <li key={unit.title} className="flex flex-col items-center gap-1.5 px-3 text-center">
                <span
                  className={cn(
                    "text-[13px] font-semibold tracking-[0.12em]",
                    isCurrent ? "text-vermilion" : "text-ink-soft",
                  )}
                >
                  UNIT {i + 1}
                </span>
                <span className="font-display text-[28px] leading-[1.1]">{unit.title}</span>
                <span
                  className={cn("text-[15px]", isCurrent ? "font-semibold text-vermilion" : "text-ink-soft")}
                >
                  {STATUS_LABEL[unit.status]}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: a vertical list with a notehead per unit */}
      <ol className="flex flex-col gap-1 lg:hidden">
        {UNITS.map((unit, i) => {
          const isCurrent = i === currentIndex;
          return (
            <li key={unit.title} className="grid grid-cols-[48px_minmax(0,1fr)] items-center gap-4 py-2.5">
              <svg
                viewBox="0 0 48 48"
                className={cn("size-12", isCurrent ? "text-vermilion" : "text-ink")}
                aria-hidden="true"
              >
                {isCurrent ? (
                  <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 4" />
                ) : (
                  <line x1="4" y1="24" x2="44" y2="24" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
                )}
                {unit.status === "complete" || isCurrent ? (
                  <Notehead cx={24} cy={24} rx={10} ry={7} />
                ) : (
                  <Notehead cx={24} cy={24} rx={9} ry={6} strokeWidth={2.6} open />
                )}
              </svg>
              <div className="flex flex-col gap-0.5">
                <span
                  className={cn(
                    "text-xs font-semibold tracking-[0.12em] uppercase",
                    isCurrent ? "text-vermilion" : "text-ink-soft",
                  )}
                >
                  Unit {i + 1} · {STATUS_LABEL[unit.status]}
                </span>
                <span className="font-display text-[26px] leading-[1.1]">
                  {unit.title}
                  {isCurrent && <em className="ml-1.5 text-xl text-vermilion">you are here</em>}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
