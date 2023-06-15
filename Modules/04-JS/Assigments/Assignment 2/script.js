// Create a function that takes in user's birth date in dd/mm/yyyy format, and calculate user's age.

function findDate(){
// Get current date

const dateToday = new Date
const thisDay = dateToday.getDate()
let thisMonth = dateToday.getMonth()
thisMonth = thisMonth + 1
const thisYear = dateToday.getFullYear()


return [thisDay, thisMonth, thisYear]

}

function calculateAge(inputDate){

// Get birthday input and dissect

const date = String(inputDate)
const [birthDay, birthMonth, birthYear] = date.split('/')

const [thisDay, thisMonth, thisYear] = findDate()

let age = thisYear - birthYear

// Condition if Birth Month is still far

if(birthMonth > thisMonth){
    return age - 1
}

// Condition if it's Birth Month but before Birth Day

if(birthMonth == thisMonth && birthDay > thisDay){
    return age-1
}

return age
}



console.log(calculateAge("16/6/1998"))

