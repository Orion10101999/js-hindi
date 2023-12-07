let score = "33abc"
let score1 = null
let score2 = undefined
let score3 = false

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)

console.table([typeof valueInNumber,typeof valueInNumber1,typeof valueInNumber2,typeof valueInNumber3]);
console.table([valueInNumber,valueInNumber1,valueInNumber2,valueInNumber3]);

let booleanIsLoggedIn = 1
let booleanIsLoggedIn1 = Boolean(booleanIsLoggedIn)

console.log(booleanIsLoggedIn1);

// 1 => true , 0 => false
// "" => false
// "hitesh" => true

let stringNumber =32
let stringNumber1 = String(stringNumber)
console.log(stringNumber1);
console.log(typeof stringNumber1);


// time 1:15:55 second
