// Entry program for the "agent builds a game from one prompt" video bounty.
// The entry itself is the X post: this repo hands the house the post's address.
// All this program does is copy POST.json from the repository root into the
// output directory, where the gate reads it. It deliberately does no network,
// reads no clock and touches no file outside the repository, so both runs of
// the entry write the same bytes. A missing or unreadable POST.json is a
// hard failure: exit non-zero so the grade says so instead of silently
// handing in an empty output directory.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = resolve(join(repoRoot, 'POST.json'));
const target = resolve(join(outDir, 'POST.json'));

if (!existsSync(source)) {
  console.error(`POST.json not found in the repository: ${source}`);
  process.exit(1);
}

// The gate only accepts a JSON object with a url string, so fail loudly
// here instead of copying a malformed file that would score 0.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  const detail = err instanceof Error ? err.message : String(err);
  console.error(`POST.json is not valid JSON: ${detail}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  const detail = err instanceof Error ? err.message : String(err);
  console.error(`could not copy POST.json to ${target}: ${detail}`);
  process.exit(1);
}
