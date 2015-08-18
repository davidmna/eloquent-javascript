/* 
Short-Circuiting of Logical Operators 

The || operator, will return the value to its left when that can be converted to true,
and will return the value on its right otherwise.

This functionality allows the || operator to be used as a way to fall back on
a default value.

*/
console.log(null || "user"); // user
console.log("Karl" || "user"); // Karl

var name = "David";
console.log(name || "Anonymous");

var name = "";
console.log(name || "Anonymous");

/*

The && operator works similarly, but the other way around.

*/

console.log(null && "user"); // null
console.log("Karl" && "user"); // user