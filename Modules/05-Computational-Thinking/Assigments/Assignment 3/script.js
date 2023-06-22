// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

function generation(num, gender){

if (num === 0) return "Me!"

if (gender === "f"){
    switch(num){

        // Case 0 for me

    
        case (1):
            return "Daughter"

      
        case (2):
            return "GrandDaughter"

        case (3):
            return "Great Granddaughter"


        case (-1):
            return "Mother"

        case (-2):
            return "Grandmother"


        case (-3):
            return "Great grandmother"
        
            default:
                return "Gotta get in the DeLorean Marty!"
    }
}

if (gender === "m"|| gender === "M"){
    switch(num){

        // Case 0 for me
        case(0):
            return "Me!"

   
        
        // Case 1
        case([1]):
        return "Son"


        // Case 2
        case(2):
        return "GrandSon"


        // Case 3
        case(3):
        return "Great Grandson"
 

        // Case -1
        case(-1):
        return "Father"


        // Case -2
        case(-2):
        return "Grandfather"


        // Case -3
        case(-3):
        return "Great grandfather"
        
        default:
            return "Gotta get in the DeLorean Marty!"
    }

}
    

}

console.log(generation(2, "m"))

