const profilePicture = document.querySelector("#profile-picture")
const username = document.getElementById("user-name")

const userBio = document.querySelector("#user-bio")
const userDate = document.querySelector("#user-date-joined")
const button = document.querySelector("#searchButton")
const searchData = document.querySelector("#userSearch")
const ENDPOINT = "https://api.github.com/users/"




button.addEventListener("click", async(e)=>{
    e.preventDefault()
    const userName = searchData.value
    const userSearch = ENDPOINT+userName
    
    console.log(userSearch);

    const response = await fetch(userSearch)
    const userData = await response.json()
    profilePicture.innerHTML = `<img src=${userData.avatar_url}> `
    
  

    username.textContent = `${userData.login}`
    userBio.textContent= `${userData.bio}`

    const createdDate = new Date(userData.created_at).toLocaleDateString('en-us',{day:"numeric", month:"long", year:"numeric"})

    console.log(createdDate);
    userDate.textContent = `Joined at: ${createdDate}`

    
})

