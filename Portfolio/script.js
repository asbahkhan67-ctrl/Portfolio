
/* =========================
   VIEW MORE / VIEW LESS
========================= */

const buttons = document.querySelectorAll(".view-more");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const description = button.previousElementSibling;

        description.classList.toggle("show");

        button.textContent =
            description.classList.contains("show")
                ? "View Less"
                : "View More";

    });

});


/* =========================
   THEME TOGGLE
========================= */

const themeButton = document.getElementById("theme-toggle");

function setTheme(theme) {

    document.documentElement.dataset.theme = theme;

    localStorage.setItem("theme", theme);

}


/* Load saved theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    setTheme("light");

} else {

    setTheme("dark");

}


/* Theme button */

if (themeButton) {

    themeButton.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.dataset.theme;

        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        setTheme(newTheme);

    });

}

