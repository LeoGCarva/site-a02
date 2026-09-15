import { cn } from "@site-a02/ui/lib/utils";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { instrumentSans, instrumentSerif, notoMusic } from "@/components/landing/fonts";
import LessonCard from "@/components/landing/lesson-card";
import { NoteMark } from "@/components/landing/notation";
import UnitPath from "@/components/landing/unit-path";

const APP_NAME = "Theoryca";

export const metadata: Metadata = {
  title: `${APP_NAME} · Music theory, five minutes a day`,
  description:
    "Short, game-like lessons that take you from your first note on the staff to hearing chord progressions.",
};

const CONTAINER = "mx-auto w-full max-w-[1440px] px-5 lg:px-20";

const PAPER_GRAIN = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .11  0 0 0 0 .1  0 0 0 0 .08  0 0 0 .05 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>")`;

const MOVEMENTS = [
  {
    numeral: "I.",
    title: "Learn one idea",
    body: "A single concept, like a note name, a rhythm or an interval, explained in under a minute and played out loud.",
  },
  {
    numeral: "II.",
    title: "Hear it, then name it",
    body: "Quick exercises on the staff and by ear. Anything you miss comes back in later lessons until it sticks.",
  },
  {
    numeral: "III.",
    title: "Keep your streak",
    body: "Earn XP for every lesson and build a daily streak that turns practice into a habit.",
  },
];

const DOUBTS = [
  {
    question: "“I can’t read music.”",
    answer: "That’s where unit one starts: the names of the lines and spaces, one at a time.",
  },
  {
    question: "“I only have a few minutes.”",
    answer: "Lessons are built to be finished in about five, and one a day keeps your streak alive.",
  },
  {
    question: "“I don’t play an instrument.”",
    answer: "You don’t need one. Every example plays in your browser, and you answer by tapping.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-ink-soft uppercase lg:gap-3 lg:text-[13px] lg:tracking-[0.16em]">
      <span className="block h-0.5 w-[22px] bg-vermilion lg:w-7" aria-hidden="true" />
      {children}
    </p>
  );
}

function StartLink({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link
      href="/login"
      className={cn(
        "flex h-14 items-center justify-center gap-3 rounded-[2px] px-7 text-[17px] font-semibold transition-colors lg:text-lg",
        inverted ? "bg-paper text-ink hover:bg-paper/85" : "bg-ink text-paper hover:bg-ink/85",
        className,
      )}
    >
      Start your first lesson
      <ArrowRight className="size-[18px]" aria-hidden="true" />
    </Link>
  );
}

export default function Home() {
  return (
    <div
      className={cn(
        instrumentSans.variable,
        instrumentSerif.variable,
        notoMusic.variable,
        "bg-paper font-landing text-ink antialiased",
      )}
      style={{ backgroundImage: PAPER_GRAIN }}
    >

      <header className="border-b border-ink/16">
        <div className={cn(CONTAINER, "flex items-center justify-between py-3.5 lg:py-[26px]")}>
          <Link href="/" className="flex items-center gap-2.5 lg:gap-3">
            <NoteMark className="h-[23px] w-[18px] lg:h-7 lg:w-[22px]" />
            <span className="font-display text-2xl lg:text-[28px] lg:tracking-[-0.01em]">{APP_NAME}</span>
          </Link>
          <nav className="flex items-center gap-9 text-base">
            <a href="#how" className="hidden transition-colors hover:text-vermilion lg:inline">
              How it works
            </a>
            <a href="#path" className="hidden transition-colors hover:text-vermilion lg:inline">
              The path
            </a>
            <Link href="/login" className="hidden transition-colors hover:text-vermilion lg:inline">
              Sign in
            </Link>
            <Link
              href="/login"
              className="flex h-11 items-center rounded-[2px] bg-ink px-4 text-[15px] font-semibold text-paper transition-colors hover:bg-ink/85 lg:px-5 lg:text-base"
            >
              Start learning
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section
          className={cn(
            CONTAINER,
            "grid items-center gap-7 pt-12 pb-16 lg:grid-cols-2 lg:gap-[72px] lg:pt-[104px] lg:pb-[128px]",
          )}
        >
          <div className="flex flex-col gap-[22px] lg:gap-8">
            <Eyebrow>Music theory, five minutes a day</Eyebrow>
            <h1 className="font-display text-[64px] leading-[0.94] tracking-[-0.025em] text-balance sm:text-[88px] xl:text-[116px]">
              Theory, <em className="text-vermilion">one bar</em> at a time.
            </h1>
            <p className="text-[17px] leading-[1.55] text-pretty text-ink-soft lg:max-w-[540px] lg:text-xl">
              Short, game-like lessons that take you from your first note on the staff to hearing chord
              progressions. Keep a streak, earn XP, and actually remember what you learn.
            </p>
            <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:gap-7 lg:pt-2">
              <StartLink />
              <a
                href="#path"
                className="self-center py-2.5 underline decoration-1 underline-offset-4 transition-colors hover:text-vermilion lg:text-[17px]"
              >
                See the path
              </a>
            </div>
          </div>
          <LessonCard />
        </section>

        <section id="how" className="border-t border-ink/16">
          <div className={cn(CONTAINER, "flex flex-col gap-9 py-16 lg:gap-[72px] lg:py-[120px]")}>
            <div className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-[72px]">
              <h2 className="font-display text-[44px] leading-none tracking-[-0.02em] text-balance lg:text-[68px]">
                Every lesson is three short movements.
              </h2>
              <p className="text-[17px] leading-[1.55] text-ink-soft lg:max-w-[480px] lg:text-[19px]">
                Each one takes about five minutes, so it fits between everything else you do.
              </p>
            </div>
            <ol className="grid border-t border-ink lg:grid-cols-3">
              {MOVEMENTS.map(({ numeral, title, body }) => (
                <li
                  key={numeral}
                  className="grid grid-cols-[52px_minmax(0,1fr)] gap-2 border-ink/16 py-6 not-first:border-t max-lg:last:border-b lg:flex lg:flex-col lg:gap-3.5 lg:pt-8 lg:pb-0 lg:not-first:border-t-0 lg:not-first:border-l lg:not-first:pl-10 lg:not-last:pr-10"
                >
                  <span className="font-display text-[34px] leading-none text-vermilion italic lg:text-[44px]">
                    {numeral}
                  </span>
                  <div className="flex flex-col gap-2 lg:gap-3.5">
                    <h3 className="font-display text-[28px] leading-[1.1] lg:text-[34px]">{title}</h3>
                    <p className="text-base leading-[1.6] text-ink-soft lg:text-[17px]">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="path" className="bg-paper-deep">
          <div className={cn(CONTAINER, "flex flex-col gap-8 py-16 lg:gap-14 lg:pt-[120px] lg:pb-[128px]")}>
            <div className="flex flex-col gap-4 lg:gap-5">
              <Eyebrow>The path</Eyebrow>
              <h2 className="font-display text-[44px] leading-none tracking-[-0.02em] text-balance lg:max-w-[900px] lg:text-[68px]">
                From your first note to your first chord progression.
              </h2>
            </div>
            <UnitPath />
          </div>
        </section>

        <section className={cn(CONTAINER, "grid gap-7 py-16 lg:grid-cols-[1fr_2fr] lg:gap-[72px] lg:py-[120px]")}>
          <h2 className="font-display text-[44px] leading-none tracking-[-0.02em] lg:text-[60px]">
            Not sure it’s for you?
          </h2>
          <dl className="border-t border-ink">
            {DOUBTS.map(({ question, answer }) => (
              <div
                key={question}
                className="flex flex-col gap-2.5 border-ink/16 py-[22px] not-first:border-t last:border-b lg:grid lg:grid-cols-2 lg:gap-10 lg:py-[30px]"
              >
                <dt className="font-display text-[28px] leading-[1.1] lg:text-[34px]">{question}</dt>
                <dd className="text-base leading-[1.6] text-ink-soft lg:text-lg">{answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="bg-ink text-paper">
          <div
            className={cn(
              CONTAINER,
              "flex flex-col gap-7 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-[72px] lg:py-[120px]",
            )}
          >
            <div className="flex flex-col gap-7 lg:gap-8">
              <h2 className="font-display text-[54px] leading-[0.96] tracking-[-0.025em] lg:max-w-[820px] lg:text-[92px]">
                Your first lesson takes <em className="text-vermilion-light">five minutes.</em>
              </h2>
              <StartLink inverted className="lg:self-start" />
            </div>
            {/* final barline, the end of the piece */}
            <svg viewBox="0 0 120 220" className="hidden h-[220px] w-[120px] shrink-0 lg:block" aria-hidden="true">
              <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4">
                {[40, 75, 110, 145, 180].map((y) => (
                  <line key={y} x1="0" y1={y} x2="120" y2={y} />
                ))}
              </g>
              <rect x="96" y="40" width="2" height="140" fill="currentColor" />
              <rect x="106" y="40" width="10" height="140" fill="currentColor" />
            </svg>
          </div>
        </section>
      </main>

      <footer
        className={cn(
          CONTAINER,
          "flex flex-col gap-3.5 pt-7 pb-9 text-[15px] text-ink-soft lg:flex-row lg:items-center lg:justify-between lg:py-8",
        )}
      >
        <span className="font-display text-[22px] text-ink">{APP_NAME}</span>
        <nav className="flex flex-wrap gap-x-6 lg:gap-x-8">
          <a href="#how" className="py-2.5 transition-colors hover:text-ink lg:py-0">
            How it works
          </a>
          <a href="#path" className="py-2.5 transition-colors hover:text-ink lg:py-0">
            The path
          </a>
          <Link href="/login" className="py-2.5 transition-colors hover:text-ink lg:py-0">
            Sign in
          </Link>
        </nav>
      </footer>
    </div>
  );
}
