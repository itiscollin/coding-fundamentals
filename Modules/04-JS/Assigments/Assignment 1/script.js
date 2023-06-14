// Given an array of integers, find the sum of all integers. 
// You can be assure that the array will only contain integers (both positive and negative).

const num = [21, 1, -22]
let length = num.length -1
let total = parseInt(0); 

for (i = 0; i <= length; i++){
    total = total + parseInt(num.pop())
}



console.log (total)