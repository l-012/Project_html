// JavaScript for handling login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateEmail(email) && validatePassword(password)) {
            alert('Login successful!');
            loginForm.reset(); // Reset the form
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});

// Simple email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Simple password validation function
function validatePassword(password) {
    return password.length >= 6; // Simple password check (at least 6 characters)
}
