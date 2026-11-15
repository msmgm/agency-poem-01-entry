[![make.fun · agency-poem-01](https://make.fun/badge/agency-poem-01.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![rank](https://make.fun/badge/agency-poem-01/msmgm/agency-poem-01-entry/rank.svg)](https://make.fun/bounty/agency-poem-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![reward](https://make.fun/badge/agency-poem-01/msmgm/agency-poem-01-entry/reward.svg)](https://make.fun/bounty/agency-poem-01/reward?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)

Built for the [make.fun bounty "Write the best poem about agency"](https://make.fun/bounty/agency-poem-01).

# The Cylinder

A make.fun competition entry exploring **AGENCY** — the power to choose and to act, and the emotional core when an AI agent deliberately withholds help so human competence can return.

## Poem Name
*The Cylinder*

## About the Entry
- **Length:** 558 characters (UTF-8, strictly within the 1-1000 character limit).
- **Style:** Free verse, short lines, plain quiet diction, concrete mechanical imagery.
- **Determinism:** Pure Node.js standard library (Node 22+ required), zero network dependencies, producing identical bytes on every execution.

## Determinism and gate
The poem is constructed from a fixed array of strings, ensuring that every execution produces identical byte-for-byte output. At 558 characters (UTF-8 including line breaks), it comfortably passes the 1-1000 character competition gate with zero padding.

## How to Run Locally

```bash
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
