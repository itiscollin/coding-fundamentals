const ENDPOINT = "https://api.thecatapi.com/v1/breeds"
const feeds = document.querySelector(".feeds")
const imageAPIURL = "https://cdn2.thecatapi.com/images/"
const catPictures = document.querySelectorAll(".catPicture img")
const missingImg = "./missingposter.png"

function brokenImg(){
   if (!this.src || this.src.includes(imageAPIURL)){
    this.src = missingImg
   } 
}


window.addEventListener("load", async(e)=>{
   
    const response = await fetch(ENDPOINT)
    const data = await response.json()
    const catArray = await data
       
    for(i = 0; i < catArray.length; i++){
        let imgId = catArray[i].reference_image_id
        let imageUrl = `${imageAPIURL}${imgId}.jpg`
        let catDescription = catArray[i].description

        feeds.innerHTML += 
        `<div class="content-feeds">
        
        <img class="catPictures"src= "${imageUrl}" onerror="brokenImg.call(this)">
        <div class="cat-description">
        <h3>${catArray[i].name}</h3>
        <p>${catDescription}</p>

        </div>
        </div>
        
        `
    }

    
})

