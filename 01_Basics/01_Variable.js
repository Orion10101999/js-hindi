const accountId = 14453
let accountEmail = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
accountEmail = "sandeep@gmail.com"
accountPassword = "38676581"

// accountId = 2  Not Allowed because of const keyword 

console.log(accountId);
console.log(accountCity);
console.table([accountId,accountEmail,accountCity,accountPassword,accountState]);

/*

prefer Not to Use Var because of Issue in Block Scope 
and Function Scope .

*/