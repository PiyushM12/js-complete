// here we will talk about the conversion that can happen in a js file
let num =33;
let strnum= String(num)

// we can convert one data type to another
let string1 = " m"
let numstring = Number(string1)

console.log(typeof numstring);
console.log(numstring);
/* conversion from string to number
undefined ==> NAN
" "==> 0
"piyush "==> nan
true => 1
false => 0
*/
let newstring =" 2"
let newbool= Boolean(newstring)
console.log(newbool);


/* conversion of string to boolean
"0 " => false
" "=> false #empty string
"piyush"=> true
*/


//now we will study about operations in js 

let value = 3

// basic operations
let str1 = " piyush "
let str2 ="mishra"
let str3 = str1+ str2
// console.log(str3)    //piyush mishra
// console.log(1 + "2")  //12

// console.log("2" + 1) //21
// console.log(1+ 1 + "2")  //22
// console.log("2" +"2"+1)  //221
// console.log(true)   //true
// console.log(+true)  // 1
// console.log(true+) is not defined 
console.log(+"") //0
let marks = 100
marks++
console.log(marks) //101
console.log(marks++) //101
console.log(++marks) // 103

