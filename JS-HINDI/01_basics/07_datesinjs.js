//dates

//date ka type of OBJECT hota hai. Date ek object hota hai javascript me.

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(myTimeStamp);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// `${newDate.getDAy()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(newDate);








