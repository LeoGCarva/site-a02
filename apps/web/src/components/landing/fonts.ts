import { Instrument_Sans, Instrument_Serif, Noto_Music } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

// only used for the treble clef glyph
export const notoMusic = Noto_Music({
  variable: "--font-noto-music",
  weight: "400",
  subsets: ["music"],
});
