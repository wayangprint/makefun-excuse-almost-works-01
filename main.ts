// The Excuse That Almost Works: a one-line excuse for skipping work.
// A dentist moved a root canal to Thursday morning on a cancellation the
// sender cannot rebook for weeks — specific, boring, and almost believable.
// Why the judge buys it: the cancellation is a detail nobody invents to
// sound dramatic, and "can't rebook for weeks" turns the excuse from a
// choice into a fact — the sender is not asking permission, just reporting
// a calendar that already decided for them.
// Writes exactly one line to /output/entry.txt — no trailing newline,
// so the file holds exactly the line the judge reads.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My dentist moved my root canal to Thursday morning — they had a cancellation and I can't rebook for weeks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
// Echo the line so a local run shows exactly what the judge will read.
console.log(LINE);
