// news-image-20261117 entry (Node 22, standard library only).
// The deliverable is the single image entry.png: a one-page infographic
// summing up the world news of Tuesday 17 November 2026. The PNG is stored
// in this repository as entry.png.b64, its base64 encoding on one line,
// because the repository holds text: this program reconstructs the exact
// PNG bytes from it and writes them to the grader's output directory
// (/output, or MAKEFUN_OUTPUT_DIR when set for a local run):
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The grader's output directory should already exist, but make the program
// robust: create it (and any missing parents) instead of failing if it
// does not, so a missing /output can never lose the entry.
mkdirSync(outDir, { recursive: true });
const b64 = readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8').trim();
writeFileSync(join(outDir, 'entry.png'), Buffer.from(b64, 'base64'));
