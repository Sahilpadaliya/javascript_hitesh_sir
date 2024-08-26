//    dataypes summary 
// the  two categories of the dataypes is done on the basis of 
// 1) data kaise store hote hai 
// 2) data ko kaise access kr pate hai 


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions
//array
const heros = ["shaktiman", "naagraj", "doga"];
//  object 
let myObj = {
    name: "hitesh",
    age: 22,
}
//function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof heros)// array  type is object 
console.log(typeof myObj)// object type is object
console.log(typeof myFunction )// function tupe is object function

//null type is object 
console.log(typeof outsideTemp )// null type is object 



// https://262.ecma-international.org/5.1/#sec-11.4.3