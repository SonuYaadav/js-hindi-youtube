const accountId = 14453
let accountEmail = "sonu@gmail.com"
var accountPassword = "12445"
accountCity = "ranchi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hss@hds"
accountPassword = "4564"
accountCity = "delhi"

console.log("accountId");


/* 
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

