const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
const button = document.querySelector(".button")

const ENDPOINT = "https://api.quotable.io/random"


async function getQuote()
{
    const response = await fetch(ENDPOINT)
    const data = await response.json()
    
    const quoteContent = data.content
    const authorContent = data.author

    if(authorContent && quoteContent !== null){
        quote.innerHTML = quoteContent
        author.innerHTML = `- ${authorContent}` 
    }

}


button.addEventListener("click", (e)=> {
    e.preventDefault()
    getQuote()
})

getQuote()


