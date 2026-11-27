# LAB 10 — USER COMPETENCY PROGRESS MODULE (CHEAT SHEET)
**Submit this sheet third.** Defence order: one lab at a time.

- **Repository:** `riadts.github.io` (FolioOne portfolio template)
- **Student:** Mariia Fytsa
- **Main HTML file:** `skills.html`
- **Main CSS file:** `assets/css/custom.css`
- **Main JS file:** `assets/js/custom.js`

---

## What was done
A "User Competency Progress Module" on `skills.html`:
- **Task 1 (implied):** 8 skills with status (planned/in-progress/completed) and XP values. Total XP of completed skills ≥ 300 (well-formed initial data).
- **Task 2 — Kanban board:** Three columns (To Be Planned / In Progress / Completed) with skill cards rendered dynamically by JavaScript.
- **Task 3 — XP, Level, Rank:** Total XP (only completed skills count), current level, and rank displayed in stat cards.
- **Task 4 — Progress bar:** Visual progress bar showing XP to next level, plus current XP vs next-level threshold text.
- **Task 5 — Statistics:** Total skills, completed, in-progress, completion rate percentage.

Skills data (8 skills):
| Skill | Status | XP |
|-------|--------|----|
| HTML & CSS | planned | 45 |
| Python | planned | 50 |
| Traditional Art | planned | 60 |
| JavaScript | inprogress | 60 |
| MATLAB | inprogress | 40 |
| C++ | completed | 70 |
| Git & GitHub | completed | 35 |
| Bootstrap | completed | 50 |

Level/rank system: Level 1 Beginner (0–49), Level 2 Trainee (50–149), Level 3 Specialist (150–299), Level 4 Professional (300+).

> With initial data: Completed XP = C++ 70 + Git & GitHub 35 + Bootstrap 50 = 155 XP → **Level 3 Specialist**.

---

## Where changes were implemented
- **HTML:** `skills.html`
  - XP / Level / Rank stat cards: lines 89–108
  - Progress bar HTML: lines 111–122
  - Kanban board columns (structure): lines 125–155
  - Statistics area: lines 160–193
- **CSS:** `assets/css/custom.css` — Lab 10 section (lines 430–596): `.xp-stats-row`, `.progress-section`, `.kanban-board`, `.kanban-column`, `.skill-card`, `.statistics-area`.
- **JS:** `assets/js/custom.js` — Lab 10/12 block (lines 436–662): skill data, LEVELS, `calculateTotalXP`, `renderSkills`, `changeStatus`, `updateProgress`.

---

## Where to find in code
| Feature | File | Lines |
|---------|------|-------|
| Kanban HTML columns | `skills.html` | 125–155 |
| XP / Level / Rank stat cards | `skills.html` | 89–108 |
| Progress bar HTML | `skills.html` | 111–122 |
| Statistics area | `skills.html` | 160–193 |
| CSS: xp-stats, progress, kanban, skill-card, statistics | `assets/css/custom.css` | 434–595 |
| JS: skill data, LEVELS, calculateTotalXP, renderSkills, changeStatus, updateProgress | `assets/js/custom.js` | 446–654 |

---

## How to demo / defend (talking points)
- Open `skills.html` in the browser.
- Show the three stat cards (Total XP, Level, Rank) and the progress bar with percentage.
- Show the Kanban board with three columns and skill cards.
- Change a skill's status via the dropdown — watch the card move columns and XP/level/rank/stats recalculate.
- **Key phrases:**
  - "Only Completed skills count toward total XP (C++ 70 + Git 35 + Bootstrap 50 = 155 XP → Level 3 Specialist)."
  - "The Kanban board is rendered dynamically from a JavaScript array; moving a card re-renders all columns."
  - "Level thresholds: 0–49 Beginner, 50–149 Trainee, 150–299 Specialist, 300+ Professional."
  - "Progress bar percentage is calculated within the current level band."

---

## Key files to have open
- `skills.html`
- `assets/css/custom.css`
- `assets/js/custom.js`
