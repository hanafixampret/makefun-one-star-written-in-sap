import { mkdirSync, writeFileSync } from "node:fs";

// One Star, Written in Sap — a houseplant's one-star review of its human.
// The line: a repotted plant, a pot with no drainage, and a grudge held
// in a puddle of its own bathwater. Plant's-eye grievance at the centre,
// a clear complaint with a reason for the single star, fresh detail
// (no drainage, bathwater) instead of stock wilting/drama lines.
const ENTRY =
  "One star. She repotted me into a pot with no drainage and called it an upgrade, so now I sit in my own bathwater judging her life choices.";

function main(): void {
  // Gate (from the brief): UTF-8 text, 1 to 279 characters, not only whitespace.
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 279) {
    throw new Error(`entry is ${chars} characters, must be 1-279`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(`wrote /output/entry.txt (${chars} characters)`);
}

main();
