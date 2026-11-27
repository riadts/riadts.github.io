/**
 * custom.js - Laboratory Work 10 & 11 (JavaScript)
 * All JavaScript changes for this laboratory work are implemented only in this file.
 * Loaded AFTER main.js to run on top of the template scripts.
 */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // References to form elements
  // ------------------------------------------------------------------
  const form = document.getElementById("contactForm");
  if (!form) return; // Only run on pages that have the contact form

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
  // Process and display form data (Lab 10 task 4 / Lab 11 task 5)
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

  // Escape HTML to avoid XSS when displaying user input
  function escapeHtml(text) {
    if (!text) return text;
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

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

    // Show the sent-message UI and hide others (simulating successful submission)
    const loading = document.querySelector(".php-email-form .loading");
    const errorMessage = document.querySelector(".php-email-form .error-message");
    const sentMessage = document.querySelector(".php-email-form .sent-message");
    if (loading) loading.style.display = "none";
    if (errorMessage) errorMessage.style.display = "none";
    if (sentMessage) sentMessage.style.display = "block";

    // Optionally reset the form after a short delay so the user can see the result
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
    }, 1500);
  });

  // Initialize: submit button starts disabled
  submitBtn.disabled = true;
})();
