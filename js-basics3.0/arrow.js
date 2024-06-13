const user = {
    username: "piyush",
    price : 999,

    welcomemessgae :function(){
        console.log(`HELLO,${this.username} welcome to the site`) // this is sued here to show current context.
       // console.log(this);  prints the complete current context
    }
    
}
// user.welcomemessgae // this will not print without the small braces
 // user.welcomemessgae()

// user.username= "ayush"
// user.welcomemessgae()
//console.log(this);  // now this gives empty object in the node environment
// but the case is different in the case of a browser,
//in case of the browser it returns window object as its the global scope
function pani(){
   const  username = "piyush"
   // console.log(this.username); // we cannot access using this inside a function this only works for an object
}
// pani() // gives a lot of functions

// declaration of an arrow function
// const panii = () =>{
//     let username = "piyush"
//     console.log(this); // returns empty object
// }
// panii()  // again undefined
// console.log(this);
//  const addtwo = (num1,num2) => {
//  return num1 +num2
//  }
 // implicit return
// const addtwo = (num1,num2) => (num1 +num2)
// returning an object
 const addtwo = (num1,num2) => ({unsername:"piyush"})
 console.log(addtwo(4,8))