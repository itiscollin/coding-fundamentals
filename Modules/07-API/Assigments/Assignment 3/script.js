const nameText = document.querySelector('#name')
const hobbiesList =  document.querySelector('#hobbies')
const hobbiesHeader = document.querySelector(`#hobbiesHeader`)
const button = document.querySelector(`button`)

const ENDPOINT = "https://api.github.com/gists/f535065cfa8a5cf72335279baef3cf8f"

async function getData(){
   const response = await fetch (ENDPOINT)
   const data = await response.json()

   console.log(data);
   return JSON.parse(data.files["resume.json"].content)
}

function displayData({name, hobbies}){
    nameText.textContent = `Name: ${name}`
    hobbiesHeader.textContent = `My Hobbies: `

    let list = []
    hobbies.forEach((hobby) => {
        list.push(`<li>${hobby}</li>`)
        let hobbyList = list.join("")
        hobbiesList.innerHTML = hobbyList
    })

    
}

button.addEventListener(`click`, async ()=> {
    const data = await getData()

    displayData(data);
})