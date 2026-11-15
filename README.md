# Abuzer Ditta — Portfolio

An interactive one-page portfolio for Abuzer Ditta, a Senior Product / UX-UI Designer.
The visual language follows the "Hapeniz" Figma direction: a mint header, a dark cosmic hero,
Poppins typography, rounded cards and a light/dark theme.

The site is fully static — plain HTML, CSS and vanilla JavaScript, with **no build step and no
dependencies**. The only remote asset is the Poppins webfont from Google Fonts.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page markup, copy, section content and inline SVG icon sprite |
| `styles.css` | Design tokens, themes, layout, components, responsive/print rules |
| `script.js` | Project data, filtering, dialogs, command palette and every interaction |
| `assets/work/` | Project artwork downloaded from the Behance portfolio |

## Run it locally

Open `index.html` directly, or serve the folder so relative paths behave exactly as they will
in production:

```bash
# Ruby (pre-installed on macOS)
ruby -run -e httpd . -p 8787
# then visit http://localhost:8787

# or Python
python3 -m http.server 8787
```

A local server is recommended: the browser clipboard API used by the “copy email” button only
works on `localhost` or HTTPS.

## Deploy

Any static host works because there is nothing to compile:

- **GitHub Pages** — push the folder to a repo, then Settings → Pages → deploy from `main` / root.
- **Netlify / Vercel** — drag the folder onto the dashboard, or connect the repo with no build
  command and publish directory `.`.
- **Cloudflare Pages** — connect the repo, leave the build command empty, output directory `/`.

Before publishing, deploy over HTTPS so the clipboard, fonts and share links all behave.

## What is interactive

- **Work gallery** — category filters with live counts, keyword search, empty state and a
  “Showing X of 14 projects” status line.
- **Case-study dialog** — every card opens a detail view with role, tools, overview and scope.
  Deep links (`#p-<id>`) open a project directly, and the dialog supports **Next project**.
- **Command palette** — `⌘K` / `Ctrl+K` or the header search button. Search sections, projects,
  skills and social links from the keyboard.
- **Experience accordion** — eleven roles expand to show responsibilities, focus areas and a key achievement.
- **Skills** — filter cards by discipline (research, design, systems).
- **Toolkit** — animated proficiency meters that fill when scrolled into view.
- **Process** — five tabbed stages (Discover → Deliver) with deliverables for each.
- **Recommendations** — quote carousel with previous/next controls and auto-advance.
- **Theme** — light/dark toggle, remembered in `localStorage` and applied before first paint to
  avoid a flash.
- **Contact** — click-to-copy email, phone link, local Tampa time, social links and a project
  brief form that composes a `mailto:` message in the visitor’s email app.
- **Chrome** — sticky header with scroll progress, active-section highlighting, scroll reveal,
  animated hero stats, back-to-top and a reduced-motion fallback.

## Editing content

The page is deliberately split so content stays easy to change.

### Projects

All fourteen projects live in the `PROJECTS` array at the top of `script.js`. Each entry supports:

```js
{
  id: "hyke-distributor",      // URL slug used by #p-<id>
  title: "HYKE Distributor Dashboard",
  client: "HYKE",
  cats: ["product", "web"],    // filters: product | mobile | web | brand
  catLabel: "Product · Web",
  role: "Senior Product Designer — …",
  tools: "Figma, Sketch",
  summary: "One-line card description.",
  overview: "Longer case-study paragraph.",
  scope: ["Bullet one", "Bullet two"],
  achievement: "One-line key achievement shown as a callout in the dialog.",
  image: "assets/work/example.jpg", // omit to use a generated gradient tile
  alt: "Description for screen readers",
  link: "https://www.behance.net/…",
  linkLabel: "Behance",
  tile: ["#dff7e8", "#b9ecd0"], // gradient for the no-image fallback
  initials: "HD"
}
```

Filter counts, the result total and the case-study dialog all derive from this array, so adding
or removing an entry updates the whole gallery automatically. If a project has no `image`, it
gets a branded gradient tile using `tile` and `initials`.

### Everything else

- **Hero copy, stats, marquee** — `index.html`, hero section. Stats use `data-count` for the
  count-up target.
- **Experience** — the accordion items in `index.html` under `#experience`.
- **Skills** — the cards in `#skills`; each has a `data-skill-cat` used by the filters.
- **Toolkit meters** — change `data-pct` on the percentage label; the bar reads the same value.
- **Process** — the tabs and panels in `#process`.
- **Recommendations** — the quote slides in `#recommendations`.
- **Contact details** — the email/phone links and `EMAIL` constant in `script.js`.
- **Colors, spacing, radii, type** — CSS custom properties at the top of `styles.css`, with
  `[data-theme="dark"]` overrides immediately below.
- **Footer year** — filled automatically from the visitor’s clock.

## Imagery

The artwork in `assets/work/` was downloaded from Abuzer’s public
[Behance](https://www.behance.net/abuzerad) portfolio and is used here for the portfolio itself.
Projects without available artwork use CSS gradient tiles rather than borrowed images. Replace
an image by dropping a new file into `assets/work/` and pointing the project’s `image` field at it.

## Accessibility and quality

- Skip link, semantic landmarks, labelled controls and visible focus states.
- `prefers-reduced-motion` disables reveals, counters and carousel auto-advance.
- Dialogs use native `<dialog>` with Escape/backdrop close and focus management.
- Light and dark palettes are checked for readable contrast; print styles are included.
- Lighthouse: **100 accessibility, 100 best practices, 100 SEO** on the local build.
- The work grid degrades to a short `noscript` note linking to Behance and Dribbble.
