const btn = document.getElementById("theme-toggle");

// Initial theme (system preference)
if (!document.documentElement.getAttribute("data-theme")) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
}

// Set correct icon
function updateIcon() {
    const theme = document.documentElement.getAttribute("data-theme");
    btn.innerHTML = theme === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}

updateIcon();

// Toggle theme
btn.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
        "data-theme",
        theme === "dark" ? "light" : "dark"
    );
    updateIcon();
});
