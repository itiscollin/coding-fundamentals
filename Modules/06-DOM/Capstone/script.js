/* 



*/


const navBarContainer = document.querySelector(".nav-bar-container")
const navBar = document.querySelector(".nav-bar")

function handleScroll() {
    // Get the scroll position in pixels
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // Display or hide the scroll-to-top button based on the scroll position
    if (scrollTop > 0) {
      navBarContainer.style.position = "sticky";
      navBar.classList.add("slide-in")
      navBarContainer.addEventListener("mousemove", slideIn)
      addEventListener("scroll", mouseStop)
    } else {
      navBarContainer.style.position = "absolute";
      removeEventListener("scroll", mouseStop)
      navBar.classList.remove("slide-out")
      navBar.classList.remove("slide-in")
      navBarContainer.removeEventListener("mousemove", slideIn(), {passive: true})
    }
}

window.addEventListener("scroll", handleScroll)


function slideIn(){
    navBar.classList.remove("slide-out")
    navBar.classList.add("slide-in")
   mouseCheck()
}

let timer;
const timeInterval = 5000


function mouseCheck(){
    clearTimeout(timer)
    timer = setTimeout(mouseStop, timeInterval)
}

function mouseStop(){

    if(navBar.classList.contains("slide-in")){
        navBar.classList.add("slide-out")
        navBar.classList.remove("slide-in")
    }

    
}

