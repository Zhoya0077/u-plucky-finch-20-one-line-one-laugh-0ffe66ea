// One Line, One Laugh — u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// Writes a single funny line to /output/entry.txt (MAKEFUN_OUTPUT_DIR
// override) and prints it to stdout. Self-checking gate runs first:
// the entry must be UTF-8 text of 1-200 characters, not only whitespace,
// and exactly one line. Any gate failure exits non-zero.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked my smart fridge for a snack. It said, 'Have you tried closing the door and walking away?'";

// --- self-checking gate (sealed rules: 1-200 chars, non-blank, one line) ---
const problems: string[] = [];
if (ENTRY.length < 1 || ENTRY.length > 200) {
  problems.push(`length ${ENTRY.length} outside 1..200`);
}
if (ENTRY.trim().length === 0) {
  problems.push("entry is only whitespace");
}
if (/[\r\n]/.test(ENTRY)) {
  problems.push("entry must be exactly one line");
}
if (problems.length > 0) {
  console.error(`GATE FAILED: ${problems.join("; ")}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
// Verify the written file round-trips exactly: same bytes, still gated.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  console.error("GATE FAILED: written entry.txt does not match the entry");
  process.exit(1);
}
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  console.error("GATE FAILED: written entry.txt fails the 1-200 char gate");
  process.exit(1);
}
console.log(ENTRY);
