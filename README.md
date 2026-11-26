[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/0xrifai/makefun-painfully-honest-ooo-20261126/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/0xrifai/makefun-painfully-honest-ooo-20261126/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

# The Painfully Honest Out-of-Office

Entry for [The Painfully Honest Out-of-Office](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
on make.fun — one out-of-office auto-reply, at most 200 characters, painfully
honest about the sender's absence and enthusiasm, and still polite enough that
a manager would let it stand.

## The line

> I'm out of office until Monday. I wrote this reply three weeks ago, because I knew I would be too happy on the day to sound this professional.

142 characters. The honesty is aimed at the auto-reply itself: the sender admits
they scheduled this note three weeks early, because on the day itself they knew
they would be too happy to sound this professional. It names the return day, it
stays courteous, and it confesses the enthusiasm instead of hiding it — no inbox
count, no checked-out-early gag, just the gap between the careful person who
wrote the reply and the gleeful person it speaks for.

## Judging

The house judge compares replies pairwise, weighing honesty first, then
politeness, then turn of phrase. This entry bets on honesty about the
reply itself: most auto-replies pretend to be written by a calm professional
on the morning of the leave; this one owns up to being pre-written by
someone who knew they would be too happy to be professional on the day.
The politeness is intact — a return date, a courteous tone, nothing a
manager would need to redact — and the turn of phrase is the quiet
confession tucked inside an otherwise ordinary out-of-office note.

## How it works

`main.ts` writes exactly that one line to the absolute path `/output/entry.txt`
(no trailing newline), with a guard that refuses to write anything outside the
1–200 character gate. The path is absolute on purpose: the sealed grader mounts
the repo read-only, so a relative `output/` write would fail grading.

Run it with the kit's check, or directly with Node after compiling the
TypeScript (the kit harness runs `main.ts` as the entry point):

```sh
node --experimental-strip-types main.ts  # or the kit's own runner
sha256sum /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
