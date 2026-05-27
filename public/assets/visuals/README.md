# Visual Assets

All images and videos in this directory are **strictly complementary**.

They exist to provide atmosphere, scale, and memory anchors for readers engaging with the serious scholarly text. They are never evidence, never a substitute for citations, and never allowed to carry interpretive weight.

## Rules

- Every asset **must** have a matching `.meta.json` file validated against `data/schemas/visual-asset.schema.ts`.
- New assets require a PR + review by at least one relevant historian (CODEOWNER).
- High and extreme sensitivity assets (e.g. Gulag, Famine) require extra explicit approval.
- All assets must have excellent `altText` + `extendedDescription`.

## Current Status

See the master [Visual Assets Tracker](../../design-artifacts/visual-assets-tracker.md) for the full registry of all 16 slots, full prompts, and review status.

## Structure

- `*.jpg` / `*.mp4` — The actual media files
- `*.meta.json` — Machine + human readable metadata (required)

This system is part of the media pipeline defined in PR 1 of the main design document.
