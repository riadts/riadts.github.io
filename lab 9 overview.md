# LAB 9 — CUSTOM CSS STYLESHEET (CHEAT SHEET)
**Submit this sheet first.** Defence order: one lab at a time.

> *(Labeled "Laboratory Work 3" in the template code comments.)*

- **Repository:** `riadts.github.io` (FolioOne portfolio template)
- **Student:** Mariia Fytsa
- **Main file:** `assets/css/custom.css` (692 lines)
- **Loaded on:** every HTML page via `<link href="assets/css/custom.css" rel="stylesheet">` — loaded AFTER `main.css` so custom rules override the template via cascade.

---

## What was done
A custom stylesheet was created and loaded after `main.css` on every page to override the FolioOne template defaults:
- **Typography:** body font changed to a system stack; headings (h1–h6) set to "Playfair Display" with custom sizes/weights; paragraphs restyled.
- **Colour palette:** dark theme (`#020617` background), indigo accent (`#6366f1`), custom CSS variables (`--accent`, `--accent-hover`, `--surface`, `--border`, `--muted`).
- **Components:** restyled buttons, links, skill boxes, service items, portfolio cards, progress bars, section borders.
- **Spacing/layout:** custom padding for About/Resume/Portfolio sections, equal-height skill boxes, centred resume columns.
- **Two selected components restyled:** (1) Portfolio cards — `.portfolio-img` with hover scale effect; (2) Skill/progress bars — `.progress-bar` set to indigo colour.

---

## Where changes were implemented
- **File:** `assets/css/custom.css` (692 lines)
- **Loaded on every HTML page** (commented "Laboratory Work 3"):
  - `index.html` line 30
  - `about.html` line 31
  - `resume.html` line 31
  - `services.html` line 31
  - `portfolio.html` line 31
  - `skills.html` line 31
  - `contact.html` line 31
  - `starter-page.html` line 31

---

## Where to find in code (line numbers in `assets/css/custom.css`)
| Feature | Lines | Selector |
|---------|-------|----------|
| CSS variables / colours | 11–22 | `:root` |
| Body font & background | 25–29 | `body` |
| Headings h1–h6 | 32–72 | `h1`…`h6` |
| Paragraphs | 75–80 | `p` |
| Buttons (+ :hover, :active) | 89–117 | `.btn`, `.btn-primary`, etc. |
| Links (+ :hover) | 120–127 | `a` |
| Section padding/layout | 136–146 | `#about`, `#resume`, `#portfolio` |
| Borders/shadows on components | 164–206 | `.section`, `.skill-box`, `.service-item`, `.portfolio-card` |
| Portfolio filter buttons | 209–242 | `.portfolio-filters` |
| Portfolio cards (component 1) | 249–269 | `.portfolio-img`, `.portfolio-info h4` |
| Progress bars / skill boxes (component 2) | 272–280 | `.progress-bar`, `.skill-item h4` |
| Resume columns centred | 283–298 | `#resume .row`, `#resume .col-lg-6` |

---

## How to demo / defend (talking points)
- Open any page in the browser and compare to the original FolioOne template (darker theme, indigo accents, Playfair Display headings).
- Open DevTools → Elements → inspect an element (e.g., a button or portfolio card) to see `custom.css` rules overriding `main.css` (crossed-out template styles).
- Open `assets/css/custom.css` and show:
  - `:root` variables (line 11–22) — "changing one variable updates the whole site."
  - `.portfolio-img:hover img` (line 261) — hover scale effect on portfolio cards.
  - `.progress-bar` (line 272–275) — indigo progress bars.
- **Key phrase:** "I linked custom.css after main.css so my rules override the template via the CSS cascade."

---

## Key files to have open
- `assets/css/custom.css`

---

> Labs 1, 2, 4, 5, 6, 7, 9 are NOT implemented in this repository. If your instructor expects those, they are separate assignments not part of this website.
