// Create a function that takes two dates and returns the number of days between the first and second date.

function getDays(firstDate, secondDate){
    const date1 = new Date(firstDate)
    const date2 = new Date(secondDate)
    const timeDiff = date2.getTime() - date1.getTime()
    const daysDiff = timeDiff / (1000 * 3600 *24)

    return daysDiff


}

console.log(getDays("July 20, 2019","July 30, 2019"))

/* 
getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ) ➞ 6
  
  
  getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  ) ➞ 3
  // Dates may not all be in the same month/year.
  
  
  getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
  ) ➞ 10 
  */