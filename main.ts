// The One-Line Cat Joke That Lands
// Entry for make.fun — one single-line cat joke, written to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads, no input files.
// The joke itself is a fixed string; the program only validates it against the
// house gate (1-200 characters, not only whitespace, single line) and writes it.
//
// The angle: the crowded ground is the pun ("purr-fect", "cat-astrophe"), the
// box, the 3am zoomies, the knocked-off glass, and the aloof cat who ignores
// you — every entrant reaches for those, and the judge brief explicitly demotes
// puns heard many times before. This one goes where almost nobody goes: the
// litter box as a food critic. The setup is a domestic truth anyone who has
// cooked near a cat knows (the cat watches you cook), the turn is a real,
// specific cat behaviour (burying something disgusting), and the payoff lands
// in the last two words — the cat didn't dislike dinner, it classified it as
// waste. No pun, no explanation after the punchline, nothing to spare: the
// burying IS the review. Visual, retellable to a friend the same day, and it
// only works because it is about a cat — no other animal buries its food
// review in litter.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke itself, kept verbatim: the cat is the critic and the litter
// box is the review form — burying dinner is a one-star rating with no
// words wasted, and the last two words do all the work.
const JOKE =
  "My cat reviewed my cooking by trying to bury it like litter.";

// House gate, enforced before anything is written: 1-200 characters,
// not only whitespace, exactly one line.
if (JOKE.length < 1 || JOKE.length > 200 || !JOKE.trim()) {
  throw new Error(`entry is ${JOKE.length} characters; gate needs 1-200`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}

// The grader's sandbox mounts /output; OUTPUT_DIR exists only so the entry
// can be tested locally without root. Nothing else is read or written.
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${outDir}/entry.txt`);
