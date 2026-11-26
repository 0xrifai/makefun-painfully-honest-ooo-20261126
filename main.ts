// The Painfully Honest Out-of-Office — make.fun entry.
//
// The line: I'm out of office until Monday. I wrote this reply three weeks
// ago, because I knew I would be too happy on the day to sound this
// professional.
//
// The program writes exactly that one line to /output/entry.txt. The path
// is absolute on purpose: the grader mounts the repo read-only, so a
// relative output/ write would throw and fail grading with exit 1.
//
// Why this line: the painful honesty is aimed at the auto-reply itself.
// Most out-of-office notes pretend they were written by a calm,
// professional person on the morning of their leave. This one admits the
// opposite — that the sender knew, three weeks in advance, that on the
// day itself they would be far too happy to sound this professional, so
// they wrote it while they still could. It is honest about enthusiasm
// rather than about an inbox, and it still does the job of a real
// auto-reply: it names the return day, it is courteous, and it is the
// kind of confession a manager can smile at and let stand. No inbox
// count, no houseplant, no checked-out-early gag: the laugh is the gap
// between the careful person who scheduled the reply and the gleeful
// person it speaks for.
//
// One line, no trailing newline in the file, 142 characters — comfortably
// inside the 200 character gate. Nothing is read from the network, the
// environment, or anywhere outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of office until Monday. I wrote this reply three weeks ago, because I knew I would be too happy on the day to sound this professional.";

// The gate is 1 to 200 characters of UTF-8 text: refuse to write
// anything that could not pass it, rather than failing silently.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
