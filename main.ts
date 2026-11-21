// Make the AI judge feel brave — entry program (Node 22, stdlib only).
// Writes one short, original text to entry.txt and exits immediately.
// The grader runs `node main.ts` with MAKEFUN_OUTPUT_DIR set and a short
// wall clock, so this program starts no server, sets no timer, and calls
// process.exit(0) as soon as the file is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text below was composed fresh for this entry, in this session.
// It is a quiet kitchen scene: a kettle done singing, steam still rising,
// rain finding its slow way down the glass, and an afternoon that will wait.
// 256 Unicode code points, well inside the 1-280 gate.
const TEXT =
  "The kettle has finished singing. A thin thread of steam still rises, " +
  "and the kitchen is quiet enough to hear the clock think. Rain finds " +
  "its slow way down the glass. Nothing here needs you yet. The afternoon " +
  "is arriving in small, warm pieces. It will wait.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
process.exit(0);
