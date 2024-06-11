// basically two types primitives and non primitives
/* primitives same as pass by value
string, number, boolean ,null ,undefined ,symbol, big int 
non primitive pass by reference
array object and functions
declaration of a symbol


js is dynamically typed
const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id === anotherid)
for bigint add "n " at the last of the number, it will convert to bigint
*/
 // reference type
 // their datatype is object
 //arrays , objects,functions
  const heroes =["a","b","c"]
  let myObj= {
    name : 'piyush',
    age: '19'
  }
  const myFunction= function(){
    console.log("hello world")
  }
let str1 = undefined;
let str2 = null;
console.log(typeof str1) //undefined
console.log(typeof str2) //object
//datatype of bigint is undefined