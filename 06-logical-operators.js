/*
Logical operators

&&  and
||  or
!   not

|| has the lowest precedence, then comes &&, then comparison operators (<, >, ==)
*/

// AND. Its result is true if all the values given to it are true.
console.log(true && false); // false
console.log(true && true); // true
console.log(false && !false); // false

// OR. Its result is true if either of the values given to it is true.
console.log(true || false); // true
console.log(false || false || false || !false);  // true

console.log(1 + 1 == 2 && 10 * 10 > 50); // true

/*
Ternary operator
*/

console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2