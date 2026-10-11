// MEMBER 3: all JavaScript interactivity
function toggleTheme() { 
    var bodyObj = document.body;
    var btnObj = document.getElementById('theme-toggle');

    if (bodyObj.className == "dark-mode") {
        bodyObj.className = ""; 
        btnObj.innerHTML = "🌙 Dark Mode"; 
    } else {
        bodyObj.className = "dark-mode"; 
        btnObj.innerHTML = "☀️ Light Mode"; 
    }
};

