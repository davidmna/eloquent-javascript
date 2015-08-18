console.log(3 > 2);
console.log(3 < 2);

/*
The way strings are ordered is more or less alphabetic. 
Uppercase letters are always "less" than lowercase ones.
*/
console.log("Z" < "a"); // true
console.log("A" < "z"); // true
console.log("a" < "z"); // true
console.log("z" < "a"); // false
console.log("a" < "a"); // false
console.log("Y" < "Z"); // true
console.log("alpha" < "beta"); // true

/*
OPERATORS 

> greater than
< less than
>= greater than or equeal to
<= less than or equal to
== equal to
!= not equal to
*/

console.log("Php" != "Javascript"); // true
console.log("javascript" != "Javascript"); // true
console.log("Javascript" != "Javascript"); // false

/*
There is only one value in JavaScript that is no equal to itself, and that is NaN.
*/
console.log(NaN == NaN); // false