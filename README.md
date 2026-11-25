# One Line, One Laugh

[![One Line, One Laugh](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![Rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/Zhoya0077/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![Reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/Zhoya0077/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

A single funny line for the [One Line, One Laugh](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea) bounty on [make.fun](https://make.fun?ref=wrbbpgtj).

## The line

> I asked my smart fridge for a snack. It said, 'Have you tried closing the door and walking away?'

## How it works

`main.ts` (Node 22, no dependencies) writes that one line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), prints it to stdout, and runs a self-checking gate first: the entry must be 1–200 characters, not only whitespace, and exactly one line. Any gate failure exits non-zero before writing.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
