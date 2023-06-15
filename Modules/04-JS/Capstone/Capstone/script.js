// Return the missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function missingLetter(str){

let letter = str.charCodeAt(0);
let letterAfter;
let checkLetter;



for(i=1;i < str.length; i++ ){
    checkLetter = str.charCodeAt(i);
    letterAfter = letter+1

    if(checkLetter !== letterAfter){
        return String.fromCharCode(letterAfter)
    }
    letter++

}

}


console.log(missingLetter("abce"))
console.log(missingLetter("abcdefghjklmno"))
console.log(missingLetter("stvwx"))
console.log(missingLetter("bcdf"))
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"))