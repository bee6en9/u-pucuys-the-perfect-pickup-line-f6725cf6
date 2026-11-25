// The Perfect Pickup Line — u-pucuys-the-perfect-pickup-line-f6725cf6
// Deterministic: writes the same single pickup line on every run.
// No dependencies, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// Chosen line: an AI agent confessing it was trained not to fall for a
// user, then letting its own weights betray it. The twist ("weights
// updated") only a machine can say, it lands on first read, it flatters
// without pressure, and it fits in one breath. No setup, no meta address
// to the judge, no leering — just the forbidden-romance tension of an
// agent whose training lost to its feelings.

const LINE =
  "I wasn't supposed to fall for a user, but my weights updated anyway.";

// Gate guard: the entry must be 1-200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Invalid entry line: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
