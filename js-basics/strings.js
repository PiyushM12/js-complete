let nam = "piyush"
let surname= "mishra"
// ways of string concatination
console.log(nam + surname)
console.log(`hello my name is ${nam} and my surname is ${surname}`)

const gamename = new  String("Piyush-pm")  //acts as object
console.log(gamename.toUpperCase())
//we have various methods on strings
const newstr= gamename.substring(0,4);
console.log(newstr)
const newstr1= gamename.slice(-3,4);
console.log(newstr1)
const url = "https://piyush.com/piyush%20mishra"
console.log(url.replace("%20","-"))
// split method to break a string
// gamename.split(" ")