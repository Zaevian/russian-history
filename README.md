# RussiaHistory.org

A world-class, scholarly digital reference for the entire history of Russia — from the pre-state period through the present day.

Built to the standard of a 5-star university textbook, with every major claim backed by multiple prominent historians and explicit treatment of historiographical debates.

## Status

**Current Phase:** PR 1 — Repository Foundation & Media Pipeline

This project is being built according to the detailed implementation plan in:

**`design-artifacts/design-doc-08f36848.md`**

All visual assets, prompts, and production rules live in:
- `design-artifacts/visual-assets-tracker.md`
- `assets/visuals/` (with `.meta.json` files)

## Philosophy (Non-negotiable)

- Text + citations = the knowledge
- Images and videos = purely complementary atmosphere and memory aids
- Never sensationalist. Never a substitute for scholarship.

See Appendix D of the design document for the full visual philosophy and reserved slots.

## Tech Stack (per design)

- Next.js 15 (App Router + Turbopack)
- TypeScript (strict)
- Tailwind 4 + shadcn/ui
- Framer Motion (tasteful, scholarly, reduced-motion first)
- Zod for all schemas
- Self-hosted Typesense (hybrid search)
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

## Project Structure (Early)

- `content/` — MDX source (Git is the source of truth)
- `data/` — Structured data (maps, genealogy, schemas, etc.)
- `assets/visuals/` — All complementary images/videos + `.meta.json`
- `components/` — Reader shell, maps, trees, timelines, etc.
- `design-artifacts/` — Authoritative design document + generated visuals + tracker

## License & Contribution

Core content will be CC-BY-NC-SA.

See the design document for the full PR plan, governance model, and contribution process.

---

This is a long-term scholarly project. Content velocity is the #1 risk. Quality over speed. Always.
