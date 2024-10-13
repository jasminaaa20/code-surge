// Helper function to add/remove valid/invalid classes
function updateFieldValidation(field, isValid) {
    if (isValid) {
        field.classList.remove('invalid');
        field.classList.add('valid');
    } else {
        field.classList.remove('valid');
        field.classList.add('invalid');
    }
}

// Function to validate phone number format
function validatePhone() {
    const phone = document.getElementById('phone');
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const phoneError = document.getElementById('phone-error');

    if (!phonePattern.test(phone.value.trim())) {
        phoneError.textContent = 'Phone number must be in the format 123-456-7890';
        updateFieldValidation(phone, false);  // Apply invalid class
    } else {
        phoneError.textContent = ''; // Clear the error message if valid
        updateFieldValidation(phone, true);   // Apply valid class
    }
}

// Function to validate email format
function validateEmail() {
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('email-error');

    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        updateFieldValidation(email, false);  // Apply invalid class
    } else {
        emailError.textContent = ''; // Clear the error message if valid
        updateFieldValidation(email, true);   // Apply valid class
    }
}

// Function to validate date of birth (must not be in the future)
function validateDOB() {
    const dob = document.getElementById('dob');
    const dobDate = new Date(dob.value);
    const today = new Date();
    const dobError = document.getElementById('dob-error');

    if (dobDate > today) {
        dobError.textContent = 'Date of birth cannot be in the future.';
        updateFieldValidation(dob, false);  // Apply invalid class
    } else {
        dobError.textContent = ''; // Clear the error message if valid
        updateFieldValidation(dob, true);   // Apply valid class
    }
}

// Function to validate start date (must not be in the future)
function validateStartDate() {
    const startDate = document.getElementById('start-date');
    const startDateDate = new Date(startDate.value);
    const today = new Date();
    const startDateError = document.getElementById('start-date-error');

    if (startDateDate > today) {
        startDateError.textContent = 'Start date cannot be in the future.';
        updateFieldValidation(startDate, false);  // Apply invalid class
    } else {
        startDateError.textContent = ''; // Clear the error message if valid
        updateFieldValidation(startDate, true);   // Apply valid class
    }
}

// Function to check form validity and enable/disable the submit button
function checkFormValidity() {
    const submitButton = document.querySelector('button[type="submit"]');
    const form = document.getElementById('employee-form');
    submitButton.disabled = !form.checkValidity(); // Disable button if form is invalid
}

// Add event listeners for real-time validation and enable/disable submit button
document.getElementById('phone').addEventListener('input', function() {
    validatePhone();
    checkFormValidity(); // Check form validity after validating phone
});
document.getElementById('email').addEventListener('input', function() {
    validateEmail();
    checkFormValidity(); // Check form validity after validating email
});
document.getElementById('dob').addEventListener('change', function() {
    validateDOB();
    checkFormValidity(); // Check form validity after validating DOB
});
document.getElementById('start-date').addEventListener('change', function() {
    validateStartDate();
    checkFormValidity(); // Check form validity after validating start date
});

// Form submit event (validates all fields one final time)
document.getElementById('employee-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Validate all fields again on submission
    validatePhone();
    validateEmail();
    validateDOB();
    validateStartDate();

    const phoneError = document.getElementById('phone-error').textContent;
    const emailError = document.getElementById('email-error').textContent;
    const dobError = document.getElementById('dob-error').textContent;
    const startDateError = document.getElementById('start-date-error').textContent;

    // If there are no errors, display success message
    if (!phoneError && !emailError && !dobError && !startDateError) {
        alert('Form successfully validated!');
    } else {
        alert('Please correct the highlighted errors before submitting.');
    }
});

// Disable the submit button initially (when the page loads)
document.addEventListener('DOMContentLoaded', function() {
    checkFormValidity(); // Check form validity when the page loads
});
