const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})
class LogoutMode {
    static logout() {
       sessionStorage.clear();
        
        // Redirect to index.html
        window.location.href = '/index.html';
    }
}

// Example usage: Bind the logout method to a button
document.getElementById('logoutButton').addEventListener('click', () => {
    LogoutMode.logout();
});
document.addEventListener('DOMContentLoaded', function () {
    checkLoginStatus();
});

function checkLoginStatus() {
    // Check if a user is logged in
    const loggedInUser = localStorage.getItem('loggedInUser'); // Assuming user details are stored in localStorage
    
    if (loggedInUser) {
        // Parse the logged in user data
        const user = JSON.parse(loggedInUser);
        
        // Check if the user is admin or staff
        if (user.role === 'admin') {
            // Redirect to Admin home page
            window.location.href = '/Admin/Home.html';
        } else if (user.role === 'staff') {
            // Redirect to Staff home page
            window.location.href = '/Staff/Home.html';
        } else {
            // For other roles, redirect to a generic page
            window.location.href = '/User/Home.html';
        }
    } else {
        // If no user is logged in, redirect to error page
        window.location.href = '/Error/Error_ERROR.html';
    }
}