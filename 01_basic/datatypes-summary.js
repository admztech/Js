//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // number 
const scoreValue = 100.3 // number 

const isLoggedIn = false  // boolean
const outsideTemp = null    //object
let userEmail;    // undefined

const id = Symbol('123')  // symbol
const anotherId = Symbol('123') // symbol

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
// heros = > object 

const myFunction = function(){
    console.log("Hello world");
}
//myfnction => function
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//stack (primitive), heap (non-promitive)
let myYoutubeName = "Adnan sandhu";
let anotherName = myYoutubeName;
anotherName = "chaiaurcode";
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne;
userTwo.email = "hser@google.com";
 console.log(userOne);
console.log(userTwo);