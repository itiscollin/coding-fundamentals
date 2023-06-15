

function factorial(anyNumber){  
    let answer = 1;

    for(i = 1; i <= anyNumber; i++){
        answer = answer * i
    }

    return answer
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)
console.log(factorial(0) === 1)

