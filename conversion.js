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