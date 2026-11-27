/**
 * custom.js - Laboratory Work 11 & 12 (JavaScript)
 * All JavaScript changes for these laboratory works are implemented only in this file.
 * Loaded AFTER main.js to run on top of the template scripts.
 */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // Shared helper: escape HTML to avoid XSS
  // ------------------------------------------------------------------
  function escapeHtml(text) {
    if (!text) return text;
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ========================================================
  // LABORATORY WORK 11 - Contact Form (Mandatory + Complementary)
  // ========================================================
  const form = document.getElementById("contactForm");

  if (form) {
    const firstNameEl = document.getElementById("firstName");
    const lastNameEl = document.getElementById("lastName");
    const emailEl = document.getElementById("email");
    const phoneEl = document.getElementById("phone");
    const addressEl = document.getElementById("address");
    const rating1El = document.getElementById("rating1");
    const rating2El = document.getElementById("rating2");
    const rating3El = document.getElementById("rating3");

    const submitBtn = document.getElementById("submitBtn");
    const clearBtn = document.getElementById("clearBtn");

    // Error message containers
    const errFirstName = document.getElementById("err-firstName");
    const errLastName = document.getElementById("err-lastName");
    const errEmail = document.getElementById("err-email");
    const errPhone = document.getElementById("err-phone");
    const errAddress = document.getElementById("err-address");
    const errRating1 = document.getElementById("err-rating1");
    const errRating2 = document.getElementById("err-rating2");
    const errRating3 = document.getElementById("err-rating3");

    // Container where submitted form data is displayed below the form
    const dataDisplay = document.getElementById("formDataDisplay");

    // ------------------------------------------------------------------
    // Validation state (tracks whether each field is currently valid)
    // ------------------------------------------------------------------
    const validState = {
      firstName: false,
      lastName: false,
      email: false,
      address: false,
      rating1: false,
      rating2: false,
      rating3: false,
    };

    // ------------------------------------------------------------------
    // Helpers
    // ------------------------------------------------------------------

    // Show an error message under a field
    function showError(fieldId, message) {
      const el = document.getElementById(fieldId);
      if (el) el.textContent = message;
    }

    // Clear an error message under a field
    function clearError(fieldId) {
      const el = document.getElementById(fieldId);
      if (el) el.textContent = "";
    }

    // Check if a string contains only letters (Lithuanian letters included)
    function isLettersOnly(value) {
      return /^[A-Za-zĄČĘĖįŠŲŪŽąčęėįšųūž]+$/.test(value);
    }

    // Validate email with a simple regex
    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    // Recalculate whether the submit button should be enabled
    function updateSubmitButton() {
      const allValid =
        validState.firstName &&
        validState.lastName &&
        validState.email &&
        validState.address &&
        validState.rating1 &&
        validState.rating2 &&
        validState.rating3;
      submitBtn.disabled = !allValid;
    }

    // ------------------------------------------------------------------
    // Real-time validation (Complementary task 1)
    // Fields validated: first name, last name, email, address, ratings (1-10).
    // Phone number is excluded from validation.
    // ------------------------------------------------------------------

    function validateFirstName() {
      const value = firstNameEl.value.trim();
      if (value.length === 0) {
        showError("err-firstName", "First name is required.");
        validState.firstName = false;
      } else if (!isLettersOnly(value)) {
        showError("err-firstName", "First name must contain letters only.");
        validState.firstName = false;
      } else if (value.length < 2) {
        showError("err-firstName", "First name must contain at least 2 letters.");
        validState.firstName = false;
      } else {
        clearError("err-firstName");
        validState.firstName = true;
      }
      updateSubmitButton();
    }

    function validateLastName() {
      const value = lastNameEl.value.trim();
      if (value.length === 0) {
        showError("err-lastName", "Last name is required.");
        validState.lastName = false;
      } else if (!isLettersOnly(value)) {
        showError("err-lastName", "Last name must contain letters only.");
        validState.lastName = false;
      } else {
        clearError("err-lastName");
        validState.lastName = true;
      }
      updateSubmitButton();
    }

    function validateEmail() {
      const value = emailEl.value.trim();
      if (value.length === 0) {
        showError("err-email", "Email address is required.");
        validState.email = false;
      } else if (!isValidEmail(value)) {
        showError("err-email", "Please enter a valid email address.");
        validState.email = false;
      } else {
        clearError("err-email");
        validState.email = true;
      }
      updateSubmitButton();
    }

    function validateAddress() {
      const value = addressEl.value.trim();
      if (value.length === 0) {
        showError("err-address", "Address is required.");
        validState.address = false;
      } else {
        clearError("err-address");
        validState.address = true;
      }
      updateSubmitButton();
    }

    function validateRating(elId, errId, stateKey) {
      const el = document.getElementById(elId);
      const value = parseInt(el.value, 10);
      if (isNaN(value) || value < 1 || value > 10) {
        showError(errId, "Rating must be a number between 1 and 10.");
        validState[stateKey] = false;
      } else {
        clearError(errId);
        validState[stateKey] = true;
      }
      updateSubmitButton();
    }

    function validateRating1() {
      validateRating("rating1", "err-rating1", "rating1");
    }
    function validateRating2() {
      validateRating("rating2", "err-rating2", "rating2");
    }
    function validateRating3() {
      validateRating("rating3", "err-rating3", "rating3");
    }

    // Attach real-time validation listeners (input event for immediate feedback)
    firstNameEl.addEventListener("input", validateFirstName);
    lastNameEl.addEventListener("input", validateLastName);
    emailEl.addEventListener("input", validateEmail);
    addressEl.addEventListener("input", validateAddress);
    rating1El.addEventListener("input", validateRating1);
    rating2El.addEventListener("input", validateRating2);
    rating3El.addEventListener("input", validateRating3);

    // ------------------------------------------------------------------
    // Real-time phone number formatting (Complementary task 2)
    // - Allows digits only while formatting characters (spaces, hyphens) are added automatically.
    // - Limits the length of the entered phone number.
    // - Final phone number must follow the Lithuanian format (+370 6xx xxxx).
    // ------------------------------------------------------------------

    function formatPhone(value) {
      // Keep only digits
      let digits = value.replace(/\D/g, "");

      // Limit length: Lithuanian mobile numbers are up to 8 digits after the country code
      if (digits.length > 8) {
        digits = digits.slice(0, 8);
      }

      let formatted = "+370";
      if (digits.length > 0) {
        formatted += " " + digits.slice(0, 2);
      }
      if (digits.length > 2) {
        formatted += " " + digits.slice(2, 5);
      }
      if (digits.length > 5) {
        formatted += " " + digits.slice(5, 8);
      }

      return formatted;
    }

    function handlePhoneInput() {
      let value = phoneEl.value;

      // Remove any existing formatting to start from raw digits
      const digitsOnly = value.replace(/\D/g, "");

      // If user typed a non-digit formatting char, ignore it (digits only)
      if (value !== digitsOnly && value !== formatPhone(digitsOnly)) {
        // keep formatting but only digits are stored
      }

      const formatted = formatPhone(digitsOnly);

      // Only update the field if the value actually changed (prevents cursor jump loops)
      if (phoneEl.value !== formatted) {
        phoneEl.value = formatted;
      }

      clearError("err-phone");
      // Phone is not validated, so it does not affect submit button state
    }

    phoneEl.addEventListener("input", handlePhoneInput);

    // ------------------------------------------------------------------
    // Clear form functionality (Complementary task 3)
    // ------------------------------------------------------------------

    function clearForm() {
      // Clear all input fields
      form.reset();

      // Clear all error messages
      showError("err-firstName", "");
      showError("err-lastName", "");
      showError("err-email", "");
      showError("err-phone", "");
      showError("err-address", "");
      showError("err-rating1", "");
      showError("err-rating2", "");
      showError("err-rating3", "");

      // Reset validation state
      validState.firstName = false;
      validState.lastName = false;
      validState.email = false;
      validState.address = false;
      validState.rating1 = false;
      validState.rating2 = false;
      validState.rating3 = false;

      // Disable submit button (back to initial state)
      submitBtn.disabled = true;

      // Clear the displayed form data below the form
      if (dataDisplay) {
        dataDisplay.innerHTML = "";
      }

      // Remove success/error messages from the PHP email form area
      const errorMessage = document.querySelector(".php-email-form .error-message");
      const sentMessage = document.querySelector(".php-email-form .sent-message");
      if (errorMessage) errorMessage.style.display = "none";
      if (sentMessage) sentMessage.style.display = "none";
    }

    clearBtn.addEventListener("click", clearForm);

    // ------------------------------------------------------------------
    // Process and display form data (Lab 11 mandatory task)
    // - Prevents default form submission so the page is not reloaded.
    // - Collects all field values into a JavaScript object.
    // - Logs the object to the browser console.
    // - Displays the object's values on the webpage below the form.
    // - Calculates and displays the average rating of the 3 questions.
    // ------------------------------------------------------------------

    function displayFormData(data) {
      if (!dataDisplay) return;

      // Compute average rating of the 3 questions
      const avg =
        (parseFloat(data.rating1) +
          parseFloat(data.rating2) +
          parseFloat(data.rating3)) /
        3;

      let html = `
        <div class="form-data-card">
          <h4>Submitted Form Data</h4>
          <p><strong>First name:</strong> ${escapeHtml(data.firstName)}</p>
          <p><strong>Last name:</strong> ${escapeHtml(data.lastName)}</p>
          <p><strong>Email address:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Phone number:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>Address:</strong> ${escapeHtml(data.address)}</p>
          <p><strong>Rating 1:</strong> ${escapeHtml(data.rating1)}</p>
          <p><strong>Rating 2:</strong> ${escapeHtml(data.rating2)}</p>
          <p><strong>Rating 3:</strong> ${escapeHtml(data.rating3)}</p>
          <p><strong>First name:</strong> ${escapeHtml(data.firstName)} <strong>average rating:</strong> ${avg.toFixed(2)}</p>
        </div>
      `;
      dataDisplay.innerHTML = html;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      try {
        // Final validation check before submitting
        validateFirstName();
        validateLastName();
        validateEmail();
        validateAddress();
        validateRating1();
        validateRating2();
        validateRating3();

        if (submitBtn.disabled) {
          // There is a validation error; do not submit
          return;
        }

        // Collect all field values into a JavaScript object
        const formData = {
          firstName: firstNameEl.value.trim(),
          lastName: lastNameEl.value.trim(),
          email: emailEl.value.trim(),
          phone: phoneEl.value.trim(),
          address: addressEl.value.trim(),
          rating1: rating1El.value.trim(),
          rating2: rating2El.value.trim(),
          rating3: rating3El.value.trim(),
        };

        // Log the object values to the browser console (Console Log)
        console.log("Form submitted:", formData);

        // Display the object values on the webpage below the form
        displayFormData(formData);

        // Show the sent-message UI (simulating successful submission)
        const loading = document.querySelector(".php-email-form .loading");
        const errorMessage = document.querySelector(".php-email-form .error-message");
        const sentMessage = document.querySelector(".php-email-form .sent-message");
        if (loading) loading.style.display = "none";
        if (errorMessage) errorMessage.style.display = "none";
        if (sentMessage) {
          sentMessage.style.display = "block";
          sentMessage.style.opacity = "1";
        }

        // Highlight the submitted data area
        if (dataDisplay) {
          dataDisplay.style.border = "2px solid var(--accent)";
          dataDisplay.style.background = "rgba(99, 102, 241, 0.1)";
          dataDisplay.style.borderRadius = "8px";
          dataDisplay.style.padding = "16px";
        }

        // Reset form after delay so user can see the confirmation
        setTimeout(() => {
          form.reset();
          validState.firstName = false;
          validState.lastName = false;
          validState.email = false;
          validState.address = false;
          validState.rating1 = false;
          validState.rating2 = false;
          validState.rating3 = false;
          submitBtn.disabled = true;
          showError("err-firstName", "");
          showError("err-lastName", "");
          showError("err-email", "");
          showError("err-phone", "");
          showError("err-address", "");
          showError("err-rating1", "");
          showError("err-rating2", "");
          showError("err-rating3", "");
          if (sentMessage) sentMessage.style.display = "none";
          if (dataDisplay) {
            dataDisplay.style.border = "";
            dataDisplay.style.background = "";
            dataDisplay.style.borderRadius = "";
            dataDisplay.style.padding = "";
          }
        }, 3000);
      } catch (err) {
        console.error("Form submission error:", err);
      }
    });

    // Initialize: submit button starts disabled, then validate all fields once
    submitBtn.disabled = true;
    validateFirstName();
    validateLastName();
    validateEmail();
    validateAddress();
    validateRating1();
    validateRating2();
    validateRating3();
  }

  // ========================================================
  // LABORATORY WORK 12 - User Competency Progress Module
  // Mandatory task (6 points) + Complementary task (4 points)
  // ========================================================
  const kanbanBoard = document.querySelector(".kanban-board");

  if (kanbanBoard) {
    // ------------------------------------------------------------------
    // Skill data (same 8 skills as Laboratory Work 10, total XP >= 300)
    // ------------------------------------------------------------------
    const initialSkills = [
      { name: "HTML & CSS", status: "planned", xp: 45 },
      { name: "Python", status: "planned", xp: 50 },
      { name: "Traditional Art", status: "planned", xp: 60 },
      { name: "JavaScript", status: "inprogress", xp: 60 },
      { name: "MATLAB", status: "inprogress", xp: 40 },
      { name: "C++", status: "completed", xp: 70 },
      { name: "Git & GitHub", status: "completed", xp: 35 },
      { name: "Bootstrap", status: "completed", xp: 50 },
    ];

    let skills = [];

    // ------------------------------------------------------------------
    // DOM element references
    // ------------------------------------------------------------------
    const columnPlanned = document.getElementById("column-planned");
    const columnInProgress = document.getElementById("column-inprogress");
    const columnCompleted = document.getElementById("column-completed");

    const countPlanned = document.getElementById("count-planned");
    const countInProgress = document.getElementById("count-inprogress");
    const countCompleted = document.getElementById("count-completed");

    const totalXpEl = document.getElementById("totalXp");
    const currentLevelEl = document.getElementById("currentLevel");
    const currentRankEl = document.getElementById("currentRank");

    const progressPercentEl = document.getElementById("progressPercent");
    const xpProgressBar = document.getElementById("xpProgressBar");
    const currentXpForLevelEl = document.getElementById("currentXpForLevel");
    const nextLevelXpEl = document.getElementById("nextLevelXp");

    const statTotalSkillsEl = document.getElementById("statTotalSkills");
    const statCompletedSkillsEl = document.getElementById("statCompletedSkills");
    const statInProgressSkillsEl = document.getElementById("statInProgressSkills");
    const statCompletionRateEl = document.getElementById("statCompletionRate");

    // ------------------------------------------------------------------
    // Level and rank system (same as Laboratory Work 10)
    // ------------------------------------------------------------------
    const LEVELS = [
      { level: 1, min: 0, max: 49, rank: "Beginner" },
      { level: 2, min: 50, max: 149, rank: "Trainee" },
      { level: 3, min: 150, max: 299, rank: "Specialist" },
      { level: 4, min: 300, max: Infinity, rank: "Professional" },
    ];

    // ------------------------------------------------------------------
    // Local Storage persistence (Complementary task)
    // ------------------------------------------------------------------
    const STORAGE_KEY = "cv_progress_skills";

    function loadSkills() {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          skills = JSON.parse(saved);
        } catch (e) {
          skills = [...initialSkills];
        }
      } else {
        skills = [...initialSkills];
      }
    }

    function saveSkills() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
    }

    // ------------------------------------------------------------------
    // Helper: get level info for a given XP total
    // ------------------------------------------------------------------
    function getLevelInfo(xp) {
      for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].min) {
          return LEVELS[i];
        }
      }
      return LEVELS[0];
    }

    // ------------------------------------------------------------------
    // Helper: calculate progress bar percentage within current level
    // ------------------------------------------------------------------
    function getProgressPercent(xp, levelInfo) {
      if (levelInfo.level >= 4) return 100;
      const nextLevel = LEVELS.find((l) => l.level === levelInfo.level + 1);
      if (!nextLevel) return 100;
      const progress = (xp - levelInfo.min) / (nextLevel.min - levelInfo.min);
      return Math.min(100, Math.max(0, progress * 100));
    }

    // ------------------------------------------------------------------
    // Function 1: Calculate total XP (only Completed skills count)
    // ------------------------------------------------------------------
    function calculateTotalXP() {
      return skills
        .filter((s) => s.status === "completed")
        .reduce((sum, s) => sum + s.xp, 0);
    }

    // ------------------------------------------------------------------
    // Function 2: Render skill cards dynamically into Kanban columns
    // ------------------------------------------------------------------
    function renderSkills() {
      // Clear all columns
      columnPlanned.innerHTML = "";
      columnInProgress.innerHTML = "";
      columnCompleted.innerHTML = "";

      const columns = {
        planned: columnPlanned,
        inprogress: columnInProgress,
        completed: columnCompleted,
      };

      const statusLabels = {
        planned: "Planned",
        inprogress: "In Progress",
        completed: "Completed",
      };

      skills.forEach((skill, index) => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.dataset.status = skill.status;
        card.dataset.xp = skill.xp;
        card.dataset.name = skill.name;

        card.innerHTML = `
          <div class="skill-header d-flex justify-content-between align-items-start mb-2">
            <h5 class="skill-name mb-0">${escapeHtml(skill.name)}</h5>
            <span class="skill-xp">${skill.xp} XP</span>
          </div>
          <p class="skill-status small text-muted">Status: ${statusLabels[skill.status]}</p>
          <div class="status-selector mt-3">
            <select class="form-select form-select-sm" data-skill-index="${index}">
              <option value="planned" ${skill.status === "planned" ? "selected" : ""}>Planned</option>
              <option value="inprogress" ${skill.status === "inprogress" ? "selected" : ""}>In Progress</option>
              <option value="completed" ${skill.status === "completed" ? "selected" : ""}>Completed</option>
            </select>
          </div>
        `;

        columns[skill.status].appendChild(card);
      });

      // Attach change listeners to status selectors
      document.querySelectorAll(".status-selector select").forEach((select) => {
        select.addEventListener("change", function () {
          const index = parseInt(this.dataset.skillIndex, 10);
          const newStatus = this.value;
          changeStatus(index, newStatus);
        });
      });
    }

    // ------------------------------------------------------------------
    // Function 3: Change skill status, move card, recalculate everything
    // ------------------------------------------------------------------
    function changeStatus(index, newStatus) {
      if (index < 0 || index >= skills.length) return;

      skills[index].status = newStatus;
      saveSkills(); // Complementary task: persist to Local Storage
      renderSkills();
      updateProgress();
    }

    // ------------------------------------------------------------------
    // Function 4: Auto-update XP, Level, Rank, progress bar, statistics
    // ------------------------------------------------------------------
    function updateProgress() {
      const totalXP = calculateTotalXP();
      const levelInfo = getLevelInfo(totalXP);
      const progress = getProgressPercent(totalXP, levelInfo);

      const completedCount = skills.filter((s) => s.status === "completed").length;
      const inProgressCount = skills.filter((s) => s.status === "inprogress").length;
      const plannedCount = skills.filter((s) => s.status === "planned").length;
      const completionRate = Math.round((completedCount / skills.length) * 100);

      // Update column counts
      countPlanned.textContent = plannedCount;
      countInProgress.textContent = inProgressCount;
      countCompleted.textContent = completedCount;

      // Update total XP, Level, Rank
      totalXpEl.textContent = totalXP + " XP";
      currentLevelEl.textContent = "Level " + levelInfo.level;
      currentRankEl.textContent = levelInfo.rank;

      // Update progress bar
      progressPercentEl.textContent = Math.round(progress) + "%";
      xpProgressBar.style.width = progress + "%";
      xpProgressBar.setAttribute("aria-valuenow", Math.round(progress));

      // Progress detail: current XP within level vs next level threshold
      const nextLevel = LEVELS.find((l) => l.level === levelInfo.level + 1);
      currentXpForLevelEl.textContent = totalXP;
      nextLevelXpEl.textContent = nextLevel ? nextLevel.min : "MAX";

      // Update statistics area
      statTotalSkillsEl.textContent = skills.length;
      statCompletedSkillsEl.textContent = completedCount;
      statInProgressSkillsEl.textContent = inProgressCount;
      statCompletionRateEl.textContent = completionRate + "%";
    }

    // ------------------------------------------------------------------
    // Initialize the module
    // ------------------------------------------------------------------
    loadSkills();
    renderSkills();
    updateProgress();
  }
})();
