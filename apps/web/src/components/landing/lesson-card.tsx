import { cn } from "@site-a02/ui/lib/utils";
import { Check, Volume2 } from "lucide-react";

import { Notehead, TREBLE_CLEF } from "./notation";

const STAFF_LINES = [45, 60, 75, 90, 105];
const LESSON_STEPS = 10;
const CURRENT_STEP = 6;
const ANSWERS = [
  { label: "Minor 3rd", correct: false },
  { label: "Major 3rd", correct: true },
  { label: "Perfect 4th", correct: false },
  { label: "Perfect 5th", correct: false },
];

/** Illustration of a lesson in progress: naming the interval G up to B. */
export default function LessonCard() {
  return (
    <figure
      aria-label="Example lesson: naming the interval from G up to B"
      className="flex flex-col gap-[18px] border border-ink bg-paper-card px-[18px] pt-[18px] shadow-[8px_8px_0_var(--color-paper-shadow)] lg:gap-[22px] lg:px-[30px] lg:pt-7 lg:shadow-[12px_12px_0_var(--color-paper-shadow)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs font-semibold tracking-[0.1em] text-ink-soft uppercase lg:text-[13px] lg:tracking-[0.12em]">
        <span>Unit 3 · Intervals</span>
        <div className="flex items-center gap-3.5 text-ink lg:gap-[18px]">
          <span className="flex items-center gap-2">
            <span className="hidden items-end gap-[3px] lg:flex" aria-hidden="true">
              {Array.from({ length: 7 }, (_, i) => (
                <span key={i} className={cn("block h-3.5 w-[3px]", i === 6 ? "bg-vermilion" : "bg-ink")} />
              ))}
            </span>
            12-day streak
          </span>
          <span>340 XP</span>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-[3px] lg:gap-1" aria-hidden="true">
        {Array.from({ length: LESSON_STEPS }, (_, i) => (
          <span
            key={i}
            className={cn(
              "block h-[5px] lg:h-1.5",
              i < CURRENT_STEP ? "bg-ink" : i === CURRENT_STEP ? "bg-vermilion" : "bg-ink/14",
            )}
          />
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 lg:items-end lg:gap-4">
        <figcaption className="font-display text-[30px] leading-[1.05] lg:text-[38px]">
          Name this interval
        </figcaption>
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/30"
          aria-hidden="true"
        >
          <Volume2 className="size-[18px]" />
        </span>
      </div>

      <svg viewBox="0 12 520 118" className="block w-full text-ink" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="1.4">
          {STAFF_LINES.map((y) => (
            <line key={y} x1="0" y1={y} x2="520" y2={y} />
          ))}
          <line x1="518.5" y1="45" x2="518.5" y2="105" strokeWidth="3" />
        </g>
        <text x="6" y="104" fontSize="60" fill="currentColor" className="font-music">
          {TREBLE_CLEF}
        </text>
        <g className="animate-note-in [animation-delay:250ms] motion-reduce:animate-none">
          <Notehead cx={220} cy={90} rx={10} ry={7.2} />
          <rect x="228.6" y="42" width="2" height="47" fill="currentColor" />
        </g>
        <g className="animate-note-in [animation-delay:750ms] motion-reduce:animate-none">
          <Notehead cx={340} cy={75} rx={10} ry={7.2} />
          <rect x="348.6" y="27" width="2" height="47" fill="currentColor" />
        </g>
      </svg>

      <ul className="grid grid-cols-2 gap-2 lg:gap-2.5">
        {ANSWERS.map(({ label, correct }) => (
          <li
            key={label}
            className={cn(
              "flex h-[50px] items-center justify-between border px-3.5 text-[15px] lg:h-[54px] lg:px-[18px] lg:text-[17px]",
              correct ? "border-ink bg-ink font-semibold text-paper" : "border-ink/22 font-medium",
            )}
          >
            {label}
            {correct && <Check className="size-4 lg:size-[18px]" strokeWidth={2.4} aria-label="correct answer" />}
          </li>
        ))}
      </ul>

      <div className="-mx-[18px] flex items-center justify-between gap-3 border-t border-ink/16 px-[18px] py-3.5 lg:-mx-[30px] lg:px-[30px] lg:py-[18px]">
        <span className="text-sm text-ink-soft lg:text-base">Correct. G up to B is a major third.</span>
        <span className="shrink-0 font-display text-2xl text-vermilion italic lg:text-[28px]">+10 XP</span>
      </div>
    </figure>
  );
}
