console.log(2 > 1);     // true
console.log("2" > 1);   // true
console.log("02" > 1);  // true
console.log("0" > 1);   // false
console.log("" > 1);    // false
console.log(2 >= 1);    // true
console.log(2 < 1);     // false
console.log(2 == 1);    // false
console.log(2 != 1);    // true

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0);    // false
console.log(undefined > 0);     // false
console.log(undefined < 0);     // false
console.log(undefined >= 0);    // false


console.log("2"==2);    // true
console.log("2"===2);   // false
