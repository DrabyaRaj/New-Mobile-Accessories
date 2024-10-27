document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get email and password values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check the email and password
    if (email === "account.admin@gmail.com" && password === "Drabya134") {
        // Redirect to Admin home page if email and password match
        window.location.href = "/Admin/Home.html";
    } else {
        // Show an error message if email or password is incorrect
        var errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Invalid email or password. Please try again.";
        errorMessage.style.display = "block";
    }
});
// logout.js
class LogoutMode {
    static logout() {
        // Set a flag in session storage
        sessionStorage.setItem('logout-mode', 'true');

        // Redirect to index.html
        window.location.href = '/index.html';
    }
}

// Example usage: Bind the logout method to a button
document.getElementById('logoutButton').addEventListener('click', () => {
    LogoutMode.logout();
});
