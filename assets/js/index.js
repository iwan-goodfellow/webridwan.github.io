document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector(".footer");

    // Cek mode sebelumnya di localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        navbar.classList.add("dark-mode");
        footer.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        navbar.classList.toggle("dark-mode");
        footer.classList.toggle("dark-mode");

        // Simpan preferensi ke localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
