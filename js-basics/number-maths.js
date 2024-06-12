// const score = 400;
// const newscore =  new Number(400)
// console.log(score)
// console.log(newscore)
// console.log(newscore.toString())
// console.log(newscore.toFixed(2)) //400.00

const othernumber= 123.7859
console.log(othernumber.toPrecision(5)); //123.79


const hundreds = 1000000
console.log(hundreds);
console.log(hundreds.toLocaleString('en-IN'));  //for indian number system


// +++++++++++++++++++++++++++ MATHS 

console.log(Math.round(25554.254));
console.log(Math.ceil(25554.254));
console.log(Math.floor(25554.254));
console.log(Math.min(4,8,7,6,5)); // returns minimum
console.log(Math.max(8,7,6,4,9,2));

// declaring random number
 console.log(Math.random()) // returns a random number
 console.log((Math.random()*10)+1) //returns a number between 1 to 10
 console.log(Math.floor(((Math.random())*10)+1)) //returns an integer
 
 // now getting a random number between two numbers
 const min =10
 const max =20
 console.log(Math.floor(((Math.random())*(max-min+1))+min))