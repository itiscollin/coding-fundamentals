const notification = document.querySelector(".notification")
const button = document.querySelector(".add__button")
const close = document.querySelector(".cta__button")

button.addEventListener("click", ()=> {
    notification.classList.add("show")
})

close.addEventListener("click", ()=> {
    notification.classList.remove("show")
})