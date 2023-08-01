
const pallete = document.querySelector(".palette")

addEventListener("keydown", (event) => {
    if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        pallete.classList.toggle("fade-out");
        pallete.classList.toggle("fade-in");
    }
})