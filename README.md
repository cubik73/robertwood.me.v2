# robertwood.me

Personal portfolio of Robert Wood, Senior Front-End Developer, York, UK.

Built with [Astro](https://astro.build) and TypeScript: static HTML and CSS by default, with JavaScript only where a component needs it (currently just the theme switch).

## Getting started

```bash
nvm use            # Node 22 (see .nvmrc)
npm install        # then commit package-lock.json
npm run dev        # http://localhost:4321
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check Astro, TypeScript and content schemas |
| `npm run test:e2e` | Playwright end-to-end + WCAG 2.2 AA tests against the build |
| `npm test` | All of the above, in order |

First time running tests locally: `npx playwright install chromium`.

## Project structure

```
src/
  content.config.ts      Content model: collections + block library (mirrors the CMS board)
  content/
    case-studies/*.md     One file per case study (frontmatter only, made of blocks)
    tools/*.md            One file per Tampermonkey tool
  data/
    site.ts               Global settings: contact details, availability, nav, stats, skills
    experience.json       Career timeline
  components/
    blocks/               Reusable content blocks + BlockRenderer
    home/                 Homepage sections
    frames/               Browser and phone frames for screenshots
  layouts/                BaseLayout (shell), BasicLayout (simple pages)
  pages/                  Routes: /, /work/[slug]/, /tools/[slug]/, /colophon/, /privacy/, 404
  styles/
    tokens.css            Design tokens: light + dark colour themes
    global.css            Layered global styles
tests/                    Playwright specs (a11y in both themes, theme toggle, keyboard, links)
```

## Editing content

- **Add a case study:** copy a file in `src/content/case-studies/`, change the frontmatter, set `order`. It appears on the homepage (if `featured`) and gets its own page at `/work/<filename>/`. Then add the route to `tests/routes.ts`.
- **Blocks:** a case study's `blocks` list can use `stats`, `bars`, `media`, `text`, `steps`, `images`, `feature`, `cards` and `tags`, in any order. Section numbers ("01 / The problem") are generated automatically. `npm run check` tells you if a field is missing or mistyped.
- **Images:** every image slot has `alt` and `placeholder`. Add `src` (a path in `/public`) to swap the placeholder for the real image.
- **CV:** put the PDF at `public/robert-wood-cv.pdf` (or change `cv` in `src/data/site.ts`; set it to `''` to hide the buttons).

## Theming

Colours live in `src/styles/tokens.css` as CSS custom properties, with a light set ("paper") and a dark set ("black stock"). The site follows `prefers-color-scheme`; the toggle saves an explicit choice in `localStorage`, applied by an inline script before first paint so there's no flash.

All text and UI pairings used meet WCAG 2.2 AA in both themes (text ≥ 4.5:1, large text and UI components ≥ 3:1). Rules of thumb when adding styles:

- Accent (cyan) text only on `--paper` or `--card`, never on placeholders or the dark bands.
- On `--deep` / `--band` surfaces use `--on-deep`, `--on-deep-muted` or `--hi` for text.
- Pink (`--label`) is for small section labels only; yellow (`--hi`) always carries dark text.
- Controls need a visible boundary: use `.btn--outline` (ink border) rather than a light border.

## Quality checks

CI (`.github/workflows/ci.yml`) runs on every push and pull request: type-check, build, then Playwright tests on desktop and mobile viewports, including [axe](https://github.com/dequelabs/axe-core) WCAG 2.2 AA checks on every page in **both** themes. A failing check blocks the merge.

## Deploying

`.github/workflows/deploy.yml` is **manual only**: Actions → Deploy → Run workflow → type `deploy`. It builds the site and uploads `dist/` over FTPS with `lftp`, uploading new and changed files only. It never deletes anything on the server, so other apps on the host (such as `/cv-gen`) are untouched.

Add these repository secrets (Settings → Secrets and variables → Actions) and a `production` environment:

| Secret | Example |
| --- | --- |
| `FTP_SERVER` | `ftp.example.com` |
| `FTP_USERNAME` | FTP account user |
| `FTP_PASSWORD` | FTP account password |
| `FTP_SERVER_DIR` | `/public_html/` (try a staging folder first) |

## Related

- **cv-gen** is a separate app, linked from this site at `/cv-gen/`.
- Tampermonkey scripts: [cubik73/Tampermonkey-Scripts](https://github.com/cubik73/Tampermonkey-Scripts)
