// primitive data types 

const { useImperativeHandle } = require("react");

// 7 types : string, number, boolean, null, undefined, symbol, bigInt


// const score = 100
// const scoreValue = 100.3
// console.log(scoreValue );

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol ('123')

// console.log(anotherId);

const bigNumber = 99174176823234123323345343n

// reference (non primitive datatypes)
// array, object, functions

const heros = ["shaktiman", "nagraj", "doga"];

{
    name: "zaid"
    age: 22
}

 const myFunction = function(){};

// console.log("hello world");

// console.log(typeof id);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , heap (non-primitive)

let myYoutubename = "yourszaid"
let anothername = myYoutubename
anothername = "zaididhere"


// console.log(anothername);
// console.log(myYoutubename);

let userOne = {
    email: "kzaid@gmail.com",
    upi: "zaid@ybl"

}

let userTwo = userOne

userTwo.email = "zaid@gmail.com"

   console.log(userOne.email);
   console.log(userTwo.email);
   
