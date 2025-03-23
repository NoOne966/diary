// Random Quote of the Day
const quotes = [
    "Believe in yourself!",
    "You are stronger than you think.",
    "Every day is a fresh start.",
    "Keep shining!",
    "Happiness comes from within."
];

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("quote")) {
        document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
    }
});

// Save Diary Entry
function saveEntry() {
    let entry = document.getElementById("entry").value;
    if (entry) {
        let entries = localStorage.getItem("diary") ? JSON.parse(localStorage.getItem("diary")) : [];
        entries.push({ date: new Date().toLocaleDateString(), text: entry });
        localStorage.setItem("diary", JSON.stringify(entries));
        displayEntries();
    }
}

// Display Entries
function displayEntries() {
    let entries = localStorage.getItem("diary") ? JSON.parse(localStorage.getItem("diary")) : [];
    let entriesDiv = document.getElementById("entries");
    if (entriesDiv) {
        entriesDiv.innerHTML = entries.map(entry => `<p><strong>${entry.date}:</strong> ${entry.text}</p>`).join("");
    }
}

// Apply Theme
function setTheme(theme) {
    let bgColors = {
        light: "#ffe4e1",
        dark: "#333",
        pink: "#ffb6c1",
        purple: "#9370db"
    };
    document.body.style.backgroundColor = bgColors[theme];
    localStorage.setItem("theme", theme);
}

// Load Theme on Startup
document.addEventListener("DOMContentLoaded", function () {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    }
    displayEntries();
});
