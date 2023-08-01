const slideContainer = document.querySelector(".slide-over-container")
const bg = document.querySelector(".bg-backdrop")
const register = document.getElementById("registerBtn")
const closeBtn = document.querySelector(".x-icon")


register.addEventListener("click", ()=>{
    console.log("buttone pressed")
    bg.classList.remove("hidden")
    slideContainer.classList.remove("hidden")
    bg.classList.remove("slide-out")
    slideContainer.classList.remove("slide-out")
    bg.classList.add("slide-in")
    slideContainer.classList.add("slide-in")
})

function slideOut(){
    bg.classList.remove("slide-in")
    slideContainer.classList.remove("slide-in")
    bg.classList.add("slide-out")
    slideContainer.classList.add("slide-out")
}

bg.addEventListener("click", slideOut)
closeBtn.addEventListener("click", slideOut)