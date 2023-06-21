//Boolean check if there's possibility for A to roll a dice(1-6) to reach B for a bonus
// But A cannot go backward

function possibleBonus(possitionA, possitionB){
    const distance = possitionB - possitionA;

    if(distance > 6 || distance < 1){
        return false
    }

    return true

}


// Test

console.log((possibleBonus(3,7) === true))
console.log(possibleBonus(1,9) === true)
console.log(possibleBonus(5,3) === true)
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false