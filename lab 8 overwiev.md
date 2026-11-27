# LAB 8 — SERVICES PAGE: TABLES & LISTS (CHEAT SHEET)
**Submit this sheet second.** Defence order: one lab at a time.

- **Repository:** `riadts.github.io` (FolioOne portfolio template)
- **Student:** Mariia Fytsa
- **Main HTML file:** `services.html`
- **Main CSS file:** `assets/css/custom.css`

---

## What was done
On `services.html`:
- **Mandatory Task 2 — Table:** A services table (`<table class="table table-dark table-striped ...">`) with caption "My Services" and columns Service / Description / Price. Four service rows: Web Development, Traditional/Digital Art illustrations, Digital sketches, Programming C++ & Python.
- **Mandatory Task 3a — Unordered + Nested lists:** Technologies & Tools section with top-level `<ul class="tech-tools-list">` and nested `<ul class="nested-list">` (Programming languages → C++, Python; Traditional art tools → Paper, Pencils, Paints; Digital art tools → paintX, Drawing tablet, Digital brushes).
- **Mandatory Task 3b — Ordered lists:** Three service-stages columns, each with an `<ol>` (Traditional & Digital Art, Web Development, Programming — 5 steps each).
- **Complementary Task 1 — Media:** embedded `<video>`, YouTube `<iframe>`, and `<audio>` elements.

In `assets/css/custom.css` (section "COMPLEMENTARY TASK - Services.html (Laboratory Work 8)", lines ~307–428):
- Ordered list with CSS counter (`counter-reset`/`counter-increment`, `li::before` showing circled numbers).
- Unordered list with custom `▹` marker pseudo-element.
- Nested list with left border and `–` marker.
- Table header restyled (indigo background), zebra striping on even rows, hover effect, centred cell padding.

---

## Where changes were implemented
- **HTML:** `services.html`
  - Table: lines 91–122
  - Ordered lists (stages): lines 135–169
  - Unordered + nested lists: lines 180–201
  - Media (video/audio/iframe): lines 210–229
- **CSS:** `assets/css/custom.css` lines 307–428 (`.services ol`, `.services ul.tech-tools-list`, `.services ul.nested-list`, `.services table`)

---

## Where to find in code
| Feature | File | Lines |
|---------|------|-------|
| Services table | `services.html` | 91–122 |
| Ordered lists (stages) | `services.html` | 135–169 |
| Unordered + nested lists | `services.html` | 180–201 |
| Media (video/audio/iframe) | `services.html` | 210–229 |
| CSS counter lists | `assets/css/custom.css` | 310–380 |
| CSS table styles | `assets/css/custom.css` | 382–428 |

---

## How to demo / defend (talking points)
- Open `services.html` in the browser.
- Show the table with indigo header, zebra striping, and hover effect.
- Show the three ordered-list columns with circled numbers (CSS counters, not default list styling).
- Show the unordered list with `▹` markers and the nested lists with `–` markers + left border.
- Show the embedded video, YouTube iframe, and audio player.
- Open DevTools → Elements → inspect the table/li elements to see `::before` pseudo-elements generating markers/numbers.
- **Key phrases:**
  - "I used CSS counters (`counter-reset`/`counter-increment`) for the ordered list numbers instead of default list styling."
  - "The nested list has a left border and custom dash marker to visually distinguish it from the parent list."
  - "Table uses zebra striping (`:nth-child(even)`) and an indigo header row."
  - "Media content includes video, audio, and an embedded YouTube iframe."

---

## Key files to have open
- `services.html`
- `assets/css/custom.css`
