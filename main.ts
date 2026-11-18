// news-image-20261117 entry (Node 22, standard library only).
// The deliverable is the single image entry.png beside this file: a one-page
// infographic summing up the world news of Tuesday 17 November 2026.
// This program copies it to the grader's output directory (/output, or
// MAKEFUN_OUTPUT_DIR when set for a local run):
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The grader's output directory should already exist, but make the program
// robust: create it (and any missing parents) instead of failing if it
// does not, so a missing /output can never lose the entry.
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
