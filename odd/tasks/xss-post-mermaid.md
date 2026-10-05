# Feature: XSS blog post with Mermaid diagrams

## Objective
Publish a post about Cross-Site Scripting (XSS), paraphrased from the vault note
`MyVault/Notebooks/cybersecurity/XSS Cross-Site Scripting.md`, with Mermaid diagrams
rendered on the site. Published date: 2025-11-07 (first post 2025-10-23 + 15 days).

## Problem
The site has no Mermaid support: ```` ```mermaid ```` blocks render as plain code via Expressive Code.

## Scope / constraints
- Client-side rendering (npm `mermaid`, dynamic import only on pages that contain diagrams).
- A remark plugin converts `mermaid` code nodes to `<pre class="mermaid">` before Expressive Code sees them.
- Diagrams follow the active site theme (CSS variables), including the theme selector.
- Post is written in English (site language), paraphrased, not a copy of the vault note.
- Ethical-use note retained; no weaponized payloads beyond harmless `alert` demos.
- Out of scope: other vault notes, home/about changes.

## Mode
- TDD: off (no test runner in project). Applicable check: `npm run build` (astro build + pagefind).
- Delivery strategy: ask-on-risk; forecast well under 400 authored lines.

## Tasks
- [x] T1 Mermaid support (remark plugin + astro.config + client loader + `mermaid` dependency). Route: delegated writer (needs layout/CSS research). Commit: 5431c53. Review tier: unassessable (untracked files) -> treated as high, review pending.
- [x] T2 Post `src/content/posts/xss-cross-site-scripting.md`, published 2025-11-07, 7 Mermaid diagrams (after rewrite). Route: inline (single file, source content already in parent context).

## Acceptance
- `npm run build` succeeds; the post page contains rendered diagrams; other posts unaffected.

## Progress / evidence
- `npm run build`: succeeded (parent re-run); `dist/posts/xss-cross-site-scripting/index.html` contains 9 `<pre class="mermaid"`.
- Not verified: client-side rendering and theme re-render in a real browser.
- Untracked, intentionally not committed: `.atl/`, `.codegraph/`, `pnpm-lock.yaml`, `pnpm-workspace.yaml` (appeared during the session).

## Accepted change
- User asked for a shorter post, a journal-like first-person voice, and no examples (no real cases, no code scenarios). Post rewritten; diagrams kept (7).

## Next step
Visual check in browser (`npm run dev`), then user decides on review/PR.
