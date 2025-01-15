//Primitive 
//  7 types : String , Number, Boolean ,null, undefined, symbol,BigInt

const score=100
const scoreValue=100.22

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('234')
const anotherId = Symbol('234')
 
// console.log(id === anotherId);


//  const bigNumber= 145875557168456n






 // Reference (Non primitive)

 // Array[],Objects,Functions

 const heros=["shaktiman","ironman"]
let myObj = {
    name: "sonu",
    age: 21,
 }

 const myFunction = function(){
    console.log("Hello World");
    
 }

//  console.log(typeof myFunction)






 // **************************

 // Stack (Primitive) , Heap (Non-Primitive)

 let myYoutubename = "Sonuyadavdotcom"

 let anotherName = myYoutubename
 anothername = "Sonu"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email: "sonu@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "sonu@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 
 





  


