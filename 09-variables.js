var caught = 5 * 5;
var ten = 10;

console.log(ten * ten) // 100

var $value = 1;
var _value = 2;

console.log($value);
console.log(_value);

var mood = "light";
console.log(mood); // light

mood = "dark";
console.log(mood); // dark

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // 105

/*
    If you ask for the value of an empty variable, you'll get the value undefined.
*/
var nothing;
console.log(nothing); // undefined

/* 
    A single var statement may define multiple variables.
    The definitions must be separated by commas.
*/

var one = 1, two = 2;
console.log(one + two // 3