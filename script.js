const buttons = document.querySelectorAll(".view-more");

buttons.forEach(button => {

    button.addEventListener("click", ()=>{

        const description =
        button.previousElementSibling;

        description.classList.toggle("show");

        button.textContent =
        description.classList.contains("show")
        ? "View Less"
        : "View More";

    });

});