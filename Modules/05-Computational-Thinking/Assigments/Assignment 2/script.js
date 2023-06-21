function perimeter(shape, num){
    let answer;
    switch (shape){
        case "s":
        case "S":
            answer = num * 4;
            return answer
    
        
        case "c":
        case "C":
            answer = num * 6.28
            return answer
         
    }
}
console.log(perimeter("C",10))