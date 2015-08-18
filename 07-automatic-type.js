/* type coercion */ 
console.log(8 * null); // 0

console.log("5" - 1); // 4

console.log("5" + 1); // 51

console.log("five" * 2); // NaN

console.log(false == 0); // true

console.log(null == undefined); // true

/*
When you want to test whether a value has a real value instead of null or undefined,
you can simply compare it to null with == or != operator.
*/
var value = "hey";
console.log(null == 0); // false
console.log(value == null); // false

/*
0, NaN and "" (empty string) count as false, while all other values count as true
*/
console.log("" == false); // true
console.log(0 == false); // true

/*
When you don't want any automatic type convertions to  happen,
there are two extra operators: === and !===
*/

console.log("" === false); // false
console.log(0 === false); // false
