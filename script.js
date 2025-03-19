document.addEventListener("DOMContentLoaded", function () {
    // Load dark mode preference from localStorage
    const darkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark", darkMode);

    // Toggle dark mode
    document.getElementById("darkModeToggle").addEventListener("click", function () {
        const isDark = document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", isDark);
        updateDarkModeIcon(isDark);
    });

    function updateDarkModeIcon(isDark) {
        document.getElementById("darkModeIcon").innerHTML = isDark
            ? "☀️"  // Sun icon
            : "🌙"; // Moon icon
    }

    updateDarkModeIcon(darkMode);
});

document.getElementById("year").textContent = new Date().getFullYear();
