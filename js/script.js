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
} 
document.getElementById('theme-toggle').onclick = toggleTheme;

document.getElementById('contact-form').onsubmit = function(event) {
    event.preventDefault(); 
    
    var emailStr = document.getElementById('email').value;
    var successMsg = document.getElementById('form-success');
    
    
    if (emailStr == "" || emailStr.indexOf('@') == -1) {
        alert("Please enter a valid email address with an '@'.");
        successMsg.className = ""; 
        return false;
    }
    successMsg.className = "success-show"; 
    
    document.getElementById('contact-form').reset();
    return true; 
};

var words = ["passion.", "teamwork.", "Git & GitHub."];
var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;

function typeEffect() {
    var textElement = document.querySelector('.typed-text');
    
    if (!textElement) return;

    var currentWord = words[wordIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    textElement.innerHTML = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex == currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); 
    } else if (isDeleting && charIndex == 0) {
        isDeleting = false;
        wordIndex++;
        if(wordIndex == words.length) { wordIndex = 0; } 
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, 150);
    }
}
window.onload = typeEffect;