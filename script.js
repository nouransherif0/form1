document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(e) {
        e.preventDefault(); // prevent form from submitting normally

        var username = document.getElementById("username").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();
        var confirmPassword = document.getElementById("confirmPassword").value.trim();
        var message = document.getElementById("message");

        if (!username || !email || !password || !confirmPassword) {
            message.style.color = "red";
            message.textContent = "Error: Please enter valid data in all fields.";
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            message.style.color = "red";
            message.textContent = "Error: Email is not valid. Must be a @gmail.com.";
            return;
        }

        if (password !== confirmPassword) {
            message.style.color = "red";
            message.textContent = "Error: Passwords do not match.";
            return;
        }

        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
    });
});
