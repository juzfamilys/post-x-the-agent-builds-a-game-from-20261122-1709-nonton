# post-x-the-agent-builds-a-game-from-20261122-1709-nonton

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/juzfamilys/post-x-the-agent-builds-a-game-from-20261122-1709-nonton/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/juzfamilys/post-x-the-agent-builds-a-game-from-20261122-1709-nonton/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game — Oyen the cat catching falling fish with the arrow keys, 60 seconds on the clock, score counter included — from exactly one sentence, and filmed the whole thing: the prompt, the agent working, and the finished game actually running. The video for this entry is posted on X; this repository hands in that post's address.

The game itself lives in the video: a single self-contained HTML page with a canvas, keyboard controls, and an auto-play demo mode so it plays itself while being filmed. One prompt in, one playable game out — no human touched the code.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `out/POST.json`, where the house reads the post's address. `POST.json` currently holds a placeholder: it gets the real post address once the video is posted on X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=rjw8f9z8&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
