import { apiKey } from "./config.js";

// const url = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=EUR&amount=5000';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "87837ab451msh58703c983764998p1eab71jsn1c69c1b1adfd",
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
	}
};

async function convertCurrency(inputCurrency, outputCurrency, amount){
try {
	const response = await fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${inputCurrency}&want=${outputCurrency}&amount=${amount}`, options);
	const result = await response.json();
	console.log(result);
    return result
} catch (error) {
	console.error(error);
}
}

convertCurrency("USD", "MYR", "1000")

// DOM Element

const currencyEl1 = document.querySelector("#currency1")
const currencyEl2 = document.querySelector("#currency2")

const amountEl1 = document.querySelector("#amount1")
const amountEl2 = document.querySelector("#amount2")

const swap = document.querySelector("#swap")
const rateE1 = document.querySelector("#rate")

async function calculate(){
    let currency1 = currencyEl1.value
    let currency2 = currencyEl2.value
    let amount = amountEl1.value
    console.log(currency1, currency2, amount);

    let data =  await convertCurrency(currency1, currency2, amount)
    console.log("DATA", data);

    let convertedValue = data.new_amount
    
    let rates = (data.new_amount/data.old_amount)
    
    console.log(rates);

    rateE1.innerText= `1 ${currency1} : ${rates.toFixed(3)} ${currency2}`
    amountEl2.value = convertedValue

    console.log("El2 Updated");
}

amountEl1.addEventListener("input", calculate)
currencyEl1, addEventListener("change",calculate)
currencyEl2, addEventListener("change",calculate)

swap.addEventListener ("click", ()=>{
    let temporaryVariable = currencyEl1.value
    currencyEl1.value = currencyEl2.value
    currencyEl2.value = temporaryVariable
    calculate()
})

calculate()