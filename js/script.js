// MEMBER 3: all JavaScript interactivity
function toggleTheme() { 
    var bodyObj = document.body;
    var btnObj = document.getElementById('theme-toggle');

    if (bodyObj.className == "dark-mode") {
        bodyObj.className = ""; // Light mode ekata enawa
        btnObj.innerHTML = "🌙 Dark Mode"; // Button eke text eka wenas karanawa
    } else {
        bodyObj.className = "dark-mode"; // Dark mode ekata yanawa
        btnObj.innerHTML = "☀️ Light Mode"; // Button eke text eka wenas karanawa
    }
};

