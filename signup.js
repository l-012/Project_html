document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    // Handle form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (validateName(name) && validateEmail(email) && validatePassword(password) && password === confirmPassword) {
            alert('Signup successful!');
            signupForm.reset(); // Reset the form
        } else {
            alert('Please check your details and try again.');
        }
    });
});

// Name validation function (non-empty name)
function validateName(name) {
    return name.trim().length > 0;
}

// Simple email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Simple password validation function
function validatePassword(password) {
    return password.length >= 6; // Password should have at least 6 characters
}
