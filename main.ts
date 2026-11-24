import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "My earbuds auto-connect to the laptop in the next room to play a YouTube ad, then go silent in my ears the moment my phone rings, which is their one job.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outputDir, "entry.txt");

const bytes = Buffer.byteLength(ENTRY, "utf8");
const chars = Array.from(ENTRY).length;

if (bytes < 1 || bytes > 200 || chars < 1 || chars > 200) {
  console.error(`entry length out of range: ${bytes} bytes, ${chars} characters`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY, { encoding: "utf8" });

console.log(`wrote ${entryPath}`);
console.log(`byte count: ${bytes} (${chars} characters)`);
