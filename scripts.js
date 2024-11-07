/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        if (email) {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            emailInput.value = '';  // Clear the input field
        } else {
            messageDiv.textContent = 'Please enter a valid email address.';
        }
    });
});