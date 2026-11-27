# LAB 11 — CONTACT FORM: VALIDATION, PHONE FORMATTING, CLEAR, DATA DISPLAY (CHEAT SHEET)
**Submit this sheet fifth.** Defence order: one lab at a time.

- **Repository:** `riadts.github.io` (FolioOne portfolio template)
- **Student:** Mariia Fytsa
- **Main HTML file:** `contact.html`
- **Main JS file:** `assets/js/custom.js`

---

## What was done
On `contact.html` with JavaScript in `custom.js`:
- **Mandatory:** Real-time validation of first name, last name, email, address, and 3 ratings (scale 1–10). Submit button disabled until all valid. On submit: prevent default, collect data into JS object, log to console, display data on page, calculate and show average rating.
- **Complementary Task 1:** Real-time validation with immediate feedback on `input` event (phone excluded from validation).
- **Complementary Task 2:** Phone number auto-formatting to Lithuanian format `+370 6xx xxxx`, digits only.
- **Complementary Task 3:** Clear Form button resets all fields, error messages, validation state, and disables submit.

---

## Where changes were implemented
- **HTML:** `contact.html`
  - Form: lines 133–212
  - `formDataDisplay` div: line 215
  - Submit / Clear buttons: lines 207–208
- **JS:** `assets/js/custom.js` — "LABORATORY WORK 11" block (lines 23–434)
  - `escapeHtml` helper: lines 13–21
  - Validation helpers + field validators: lines 112–203
  - Real-time `input` listeners: lines 196–202
  - Phone formatting + listener: lines 211–256
  - Clear form + listener: lines 262–300
  - Form submit handler + data display + average rating: lines 308–423

---

## Where to find in code
| Feature | File | Lines |
|---------|------|-------|
| Contact form HTML | `contact.html` | 133–212 |
| Form data display div | `contact.html` | 215 |
| Validation functions | `assets/js/custom.js` | 112–203 |
| Real-time input listeners | `assets/js/custom.js` | 196–202 |
| Phone format + listener | `assets/js/custom.js` | 211–256 |
| Clear form + listener | `assets/js/custom.js` | 262–300 |
| Submit handler + display + avg rating | `assets/js/custom.js` | 308–423 |
| `escapeHtml` helper | `assets/js/custom.js` | 13–21 |

---

## How to demo / defend (talking points)
- Open `contact.html` in the browser.
- Show the submit button starts disabled.
- Type invalid data — show immediate error messages (real-time validation).
- Fill all fields correctly — submit button enables.
- Type a phone number — watch it auto-format to `+370 6xx xxxx` (digits only).
- Click Submit — page does NOT reload (prevent default); open DevTools → Console to see the logged form data object; see the data displayed below the form with the average rating.
- Click Clear Form — all fields, errors, and validation state reset; submit button re-disables.
- **Key phrases:**
  - "Submit button starts disabled and only enables when all 6 required fields pass validation."
  - "Phone is formatted live (`+370 6xx xxxx`) but is NOT part of validation, so it doesn't block submit."
  - "On submit I prevent page reload, log the object to console, render it below the form, and show the average of the 3 ratings."
  - "Clear Form resets fields, errors, validation state, and re-disables the button."
  - "XSS protection: `escapeHtml()` is used before rendering user data into the page."

---

## Key files to have open
- `contact.html`
- `assets/js/custom.js`
