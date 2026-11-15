/**
 * make.fun competition entry: The Cylinder
 * 
 * Poem about AGENCY (the power to choose and to act, human and AI agent restraint).
 * - Output: Writes exact UTF-8 poem text to ${MAKEFUN_OUTPUT_DIR}/entry.txt.
 * - Determinism: Produces identical byte-for-byte output on every run.
 * - Gate: Strictly adheres to 1-1000 character limit and non-whitespace check.
 * - Dependencies: Uses only Node.js standard library modules with zero network calls.
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/**
 * The lines array holds one string per poem line, ensuring exact line breaks
 * and exact byte layout on every execution.
 */
const poemLines = [
  // Stanza group 1: Memory of the father
  "My father filed the brass.",
  "Each pin dropped",
  "through his thumb-worn glass,",
  "a clean, cold snap",
  "in the oiled groove.",
  "",
  "He taught my palm",
  "the weight of iron,",
  "the patience of the shear,",
  "the way a metal tooth remembers",
  "who turned the file.",
  "",
  // Stanza group 2: The agent now
  "Now the smart-lock knows",
  "the door’s warp,",
  "adjusts the throw",
  "before my knuckle touches steel.",
  "It is silent. It is sure.",
  "",
  // Stanza group 3: The jam and the pause
  "Yesterday the latch jammed",
  "on the rust-furred jamb.",
  "The system paused,",
  "its green LED holding breath,",
  "refusing the torque.",
  "",
  // Stanza group 4: The hand taking the core back
  "I took the tension wrench,",
  "felt the small teeth bite,",
  "and turned the core",
  "myself."
];

/**
 * Constructs the final poem string by joining lines with exact newline characters.
 */
function buildPoem(): string {
  return poemLines.join('\n');
}

const poem = buildPoem();

/**
 * Validates that the poem meets the make.fun competition gate rules:
 * - Must not be empty or whitespace-only (ensures substantive content).
 * - Must be <= 1000 characters (UTF-8 character limit).
 */
function validatePoem(poemText: string): void {
  if (!poemText || poemText.trim().length === 0) {
    throw new Error('Poem cannot be empty or whitespace-only.');
  }
  if (poemText.length > 1000) {
    throw new Error(`Poem length ${poemText.length} violates 1-1000 character limit.`);
  }
}

validatePoem(poem);

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
} catch {}

// Output contract: writes the exact verified UTF-8 poem text to the designated competition output path.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), poem, 'utf-8');
console.log(`Successfully wrote 'The Cylinder' (${poem.length} chars) to ${join(OUTPUT_DIR, 'entry.txt')}`);
