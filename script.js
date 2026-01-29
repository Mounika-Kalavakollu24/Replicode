const btn = document.getElementById("theme-toggle");

if (!btn) {
    console.error("Theme toggle button not found");
}

// Set initial theme (system preference)
if (!document.documentElement.getAttribute("data-theme")) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
    );
}

// Update icon based on current theme
function updateIcon() {
    const theme = document.documentElement.getAttribute("data-theme");
    btn.innerHTML =
        theme === "dark"
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
}

// Initial icon setup
updateIcon();

// Toggle theme on click
btn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
        "data-theme",
        currentTheme === "dark" ? "light" : "dark"
    );
    updateIcon();
});
