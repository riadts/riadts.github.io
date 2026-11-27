# LAB 10 — COMPLEMENTARY TASK: CSS SHAPES + GRADIENT BACKGROUND (CHEAT SHEET)
**Submit this sheet fourth.** Defence order: one lab at a time.

- **Repository:** `riadts.github.io` (FolioOne portfolio template)
- **Student:** Mariia Fytsa
- **Main CSS file:** `assets/css/custom.css`

---

## What was done
- **About page (`about.html`):** Three CSS-drawn shapes (circle, triangle, square) in an `.about-shapes` container — pure CSS, no images.
- **Services page (`services.html`):** `.services-gradient-bg` section with a subtle indigo linear-gradient pseudo-element background.

---

## Where changes were implemented
- **CSS:** `assets/css/custom.css` lines 608–690 ("LABORATORY WORK 10 - Complementary Task")
  - `.services-gradient-bg` / `::before` gradient: lines 613–637
  - `.about-shapes`, `.shape`, `.shape.circle`, `.shape.triangle`, `.shape.square`, `.shape-1/2/3` positions: lines 640–688
- **HTML:**
  - `about.html` lines 120–124 (`.about-shapes` with 3 `.shape` divs)
  - `services.html` line 78 (`services section services-gradient-bg`)

---

## Where to find in code
| Feature | File | Lines |
|---------|------|-------|
| CSS shapes (circle/triangle/square) | `assets/css/custom.css` | 645–688 |
| Gradient background | `assets/css/custom.css` | 613–637 |
| Shapes HTML | `about.html` | 120–124 |
| Gradient section class | `services.html` | 78 |

---

## How to demo / defend (talking points)
- Open `about.html` — show three shapes (circle, triangle, square) drawn with pure CSS below the intro.
- Open `services.html` — show the subtle indigo gradient background on the services section.
- Open DevTools → Elements → inspect `.shape.circle`, `.shape.triangle`, `.shape.square` to confirm no `` tags — pure CSS.
- **Key phrases:**
  - "Shapes are drawn with pure CSS (border-radius for circle, border trick for triangle, plain div for square) — no image files."
  - "Gradient uses a `::before` pseudo-element with `z-index: 0` so content stays on top (`z-index: 1`)."

---

## Key files to have open
- `assets/css/custom.css`
- `about.html`
- `services.html`
