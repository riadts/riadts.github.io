# LAB 12 — KANBAN BOARD WITH LOCAL STORAGE (CHEAT SHEET)
**Submit this sheet sixth (last).** Defence order: one lab at a time.

- **Repository:** `riadts.github.io` (FolioOne portfolio template)
- **Student:** Mariia Fytsa
- **Main HTML file:** `skills.html`
- **Main JS file:** `assets/js/custom.js`

---

## What was done
An extension of the User Competency Progress Module on `skills.html`:
- **Mandatory (6 pts):** Skill cards with status dropdowns (Planned / In Progress / Completed). Changing status moves the card between Kanban columns and recalculates XP, level, rank, progress bar, and statistics.
- **Complementary (4 pts):** Local Storage persistence — skills are saved to `localStorage` under key `"cv_progress_skills"` and loaded on page reload, so progress persists.

Same 8 skills data as Lab 10 (total completed XP = 155 → Level 3 Specialist).

---

## Where changes were implemented
- **HTML:** `skills.html` — Kanban board (lines 125–155), statistics (160–193). Same as Lab 10.
- **JS:** `assets/js/custom.js` — Lab 12 block (lines 436–662)
  - `initialSkills` array: lines 446–455
  - `STORAGE_KEY = "cv_progress_skills"`: line 497
  - `loadSkills()` / `saveSkills()`: lines 499–514
  - `renderSkills()` builds cards + attaches status selectors: lines 551–602
  - `changeStatus()` saves to localStorage + re-renders + updates progress: lines 607–614
  - `updateProgress()` recalculates everything: lines 619–654
  - Init call: lines 659–661

---

## Where to find in code
| Feature | File | Lines |
|---------|------|-------|
| Skill data array | `assets/js/custom.js` | 446–455 |
| Local Storage key + load/save | `assets/js/custom.js` | 497–514 |
| renderSkills (cards + listeners) | `assets/js/custom.js` | 551–602 |
| changeStatus (persist + re-render) | `assets/js/custom.js` | 607–614 |
| updateProgress (XP/level/rank/stats) | `assets/js/custom.js` | 619–654 |
| Init call | `assets/js/custom.js` | 659–661 |
| Kanban board HTML | `skills.html` | 125–155 |
| Statistics HTML | `skills.html` | 160–193 |

---

## How to demo / defend (talking points)
- Open `skills.html` in the browser.
- Change a skill's status via the dropdown — card moves between columns, localStorage saves, XP/level/rank/stats recalculate.
- Open DevTools → Application → Local Storage → key `cv_progress_skills` to see the persisted JSON.
- Refresh the page — progress persists (skills stay in their columns).
- **Key phrases:**
  - "Changing a skill's status via the dropdown immediately saves to `localStorage` and re-renders the board."
  - "On page refresh, `loadSkills()` reads from `localStorage`, so the user's progress persists."
  - "If localStorage is missing or corrupt, it falls back to `initialSkills`."
  - "Total XP only counts Completed skills; changing a skill to Completed adds its XP."

---

## Key files to have open
- `skills.html`
- `assets/js/custom.js`
- (DevTools → Application → Local Storage)
