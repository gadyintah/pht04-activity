let name= "Jimmu";
console.log(name);

const my_age = 26;
console.log(my_age);

const myDice = false;
console.log(myDice);

if(myDice){
    console.log("my dice is", myDice);
}
else{
    console.log("my dice is", myDice);
}

// JS Operators
// Arithmetic Operators
// addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
let x = 5;
let y = 2;
let sum = x+y; //Addition
console.log(sum)
//difference
let diff=x-y;
console.log(diff);
// product
let product = x*y;
console.log(product);
//division
let quotient=x/y;
console.log(quotient);
// remainder - modulus
let remainder  = x % y;
console.log(remainder);

//Logical Expression
// && (AND) , || (OR) , ! (NOT)
let sunny = true; //1
let warm = false; //0
// ADD multiply
// OR add
//NOT !

console.log("sunny and warm", sunny && warm);
console.log("sunny or warm", sunny || warm);
console.log("!Sunny", !sunny);
//Assignment Operators
// += -= *= /=
let a = 10;
let b = 5;
a += b;  // shorthand for a = a+b
console.log(a);
a += a; //short a= a+a
console.log(a);
a -=b; //short a = a -b
console.log(a);
a *= b;  //a = a * b
console.log(a);
a /=b;
console.log(a)

function Sum(a, b) {
    const sum = a + b;
    return sum;
}

console.log(Sum(5, 3));

function Product(a, b) {
    const product = a * b;
    return product;
}

console.log(Product(5, 3));

let myNames=['John', 'Jimmu', 'Ralph', 'Michael'];

for(let index=0; index<myNames.length; index++){
    console.log(myNames[index]);
}
//To output each index from start to last
