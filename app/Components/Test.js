const months = ["January", "February", "March" , "April", "May", "June", "July", "August", "September", "October", "November", "December"]


months.map((month)=>{
    console.log(month + " ")
})


function getDaysInMonth(month, year){
    return new Date(year, month, 0).getDate()
   }


   console.log(getDaysInMonth(3, 2026));



 console.log(new Date().getHours())
 console.log(new Date().getMinutes())
 console.log(new Date().getSeconds());