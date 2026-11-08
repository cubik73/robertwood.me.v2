# CLAUDE.md: project memory for robertwood.me

Context for Claude Code (and anyone else) picking up this project. Read this first.

## What this is

The redesigned portfolio of **Robert (Rob) Wood**, Senior Front-End Developer in York, UK. It replaces the old React/Bootstrap site at robertwood.me. Rob is open to new roles (contract, hybrid or remote), so the site's job is to get a hiring manager to "this person is senior, ships real things, and cares about quality" within 30 seconds.

Tone: **professional first, personality second.** Rob came to the web from print design; that background shows up as a quiet "print" signature, never as a gimmick. An earlier comic/halftone-heavy direction was rejected as not professional enough.

## Stack and why

- **Astro 5 + TypeScript (strict).** Static HTML/CSS, zero JS by default. Chosen because the portfolio leads with performance and accessibility work, so it should score near-perfectly itself. Add a React island only if something genuinely needs interactivity.
- **Plain modern CSS, no Sass.** Theming must be runtime CSS custom properties anyway; native nesting, `@layer`, `color-mix()` cover the rest. Rob likes Sass; it was discussed and deliberately left out. Adding it for mixins only would be acceptable, but tokens must stay as CSS variables.
- **Self-hosted variable fonts** via Fontsource: Space Grotesk (display), Inter (body), JetBrains Mono (labels). No third-party requests, no tracking (see `/privacy/`).
- **Content collections** (`src/content.config.ts`) mirror the CMS model designed earlier, so a Git-based CMS (Decap/Sveltia) or SeeCMS can be added later against the same fields.
- **Hosting:** static files over FTPS to Rob's existing host. **cv-gen** (Rob's AI CV tool) is a *separate app* at `robertwood.me/cv-gen/`; never put it in this repo, and never delete it on the server.

## Design system: "Print, toned down"

Tokens live in `src/styles/tokens.css` (light = warm paper, dark = black stock). Theme follows `prefers-color-scheme`; the toggle saves a choice in `localStorage`, applied by an inline script in `BaseLayout` before first paint.

Signature details (keep them subtle, don't add more):

- Logo text **robertwood.me** (never "rw.me") with a 1px cyan/magenta misregistration `text-shadow`.
- Halftone used in exactly two places: the cluster of C/M/Y dot circles behind the hero portrait, and the light dot texture in project image frames.
- A printer's registration mark in the contact section corner.
- Section labels in mono, magenta (`--label`): "01 / The problem". Numbers are generated from block order.

## Accessibility is a hard requirement: WCAG 2.2 AA

- Every page is tested with axe in **both themes** at desktop and mobile (`tests/a11y.spec.ts`). CI must stay green.
- All token pairings were checked by contrast calculation. Rules:
  - Accent (cyan) text only on `--paper`/`--card`; never on placeholders or dark bands.
  - On `--deep`/`--band` surfaces use `--on-deep`, `--on-deep-muted` or `--hi` for text.
  - `--hi` (yellow) always carries dark text (`--on-hi`); `--label` (pink) only for small labels.
  - Controls need a 3:1 boundary: outline buttons use an ink border, inputs use `--muted` borders.
  - Two-tone focus ring (`--focus-in` + `--focus-out`) everywhere; targets ≥ 24px (links get vertical padding).
- Don't add `aria-label` that hides visible text (WCAG 2.5.3); the logo link uses its visible text as its name.

## Content rules (important)

- **Never invent facts, metrics or quotes.** Everything in the case studies came from an interview with Rob. Unknowns are written as `[bracketed placeholders]`. Ask Rob, one question at a time, to fill gaps.
- Verified figures: ~80% average image file-size reduction; 9 stores / 9 countries / 7 languages on one Magento 2 platform; 20+ colleagues trained; 100% team retention; 30 years on the web; myfstvl: 187 sets across two Shiiine On weekends, 16 automated tests, 100% offline.
- **myfstvl** is Rob's unofficial fan app (repo `cubik73/GrooveGuide`; "GrooveGuide" was an early name). It is *not* affiliated with or endorsed by Shiiine On Weekender: keep the footnote, never use the festival's logo. Concept credit: **Andrew Holloway** (Rob to confirm Andrew is happy to be named before launch).
- **Wex-Work** is a prototype; its repo is private: offer "screenshots and a code walkthrough on request", don't link the code.
- **cv-gen** is live at https://robertwood.me/cv-gen/ with server-side rate limiting; describe its fact check as "a safeguard, not a guarantee".
- **Image Size Highlighter** script was re-authored under Rob's name and MIT licence; filename on GitHub assumed to be `image-size.user.js`.
- British English throughout.

## Repo conventions

- Branch per change, open a PR to `main`; don't push directly to `main`.
- Conventional commit messages (`feat:`, `fix:`, `test:`, `chore:`, `docs:`).
- Rob chose to **keep Claude co-author trailers for transparency**: end commit messages with
  `Co-Authored-By: Claude <noreply@anthropic.com>`; end PR descriptions with the Claude Code footer. The colophon page says so too.
- Commit author email: `159596787+cubik73@users.noreply.github.com` (GitHub noreply; the repo is public).
- Add every new page route to `tests/routes.ts` so it gets accessibility-tested.

## Commands

```bash
npm run dev        # local dev server
npm run check      # astro check (types + content schemas)
npm run build      # static build to dist/
npm run test:e2e   # Playwright + axe against the built site (npx playwright install chromium first)
npm test           # all of the above
```

## Where things are

- Content: `src/content/case-studies/*.md` (frontmatter only, made of blocks), `src/content/tools/*.md`, `src/data/experience.json`, `src/data/site.ts` (global settings, stats, skills).
- Blocks: `src/components/blocks/` (+ `BlockRenderer.astro`). Homepage sections: `src/components/home/`.
- Design reference: the Claude Design canvas "Portfolio Redesign Wireframes" (private to Rob): https://claude.ai/artifact/QB7PU3wbVk5Mi3Jt6Tgi9d, which holds wireframes, visual designs, the CMS content-model board and the colour studies.

## Status

Done (PR #1, `feature/scaffold`, CI green: 58 tests passing):
scaffold, tokens + theme toggle, layout, content collections with all four case studies and three tools, block components, homepage, case study / tool / basic pages, 404, Playwright + axe tests, CI, manual FTPS deploy workflow, README.

Next:

1. Rob reviews and merges PR #1.
2. Run `npm install` locally, commit `package-lock.json`, then switch CI to `npm ci` with `cache: npm`.
3. Real images: set `src` on each image slot (alt text already written). Portrait, candid photo, app screenshots, storefront, tool screenshots.
4. CV PDF at `public/robert-wood-cv.pdf`.
5. Deploy: add secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR` and a `production` environment; deploy to a staging folder first.
6. Optional: contact form (needs a handler such as Formspree or a small endpoint), Open Graph share images, sitemap/robots review, Lighthouse budget in CI.
7. Open content questions: See Green dates/summary (currently 2025 – 2026), Andrew Holloway naming consent, image captions marked `[Caption…]`.

## Working with Rob

- He prefers being **interviewed one question at a time** when filling content gaps.
- Show options visually before big design changes; he picks and refines.
- Keep explanations plain; flag trade-offs (e.g. accessibility, ownership, branding) briefly and honestly.
