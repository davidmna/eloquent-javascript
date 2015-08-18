var exponent = 2.998e8;
console.log(exponent);

var arithmetic = 100 + 4 * 11; // * is precedence
console.log(arithmetic);

var arithmetic2 = (100 + 4) * 11;
console.log(arithmetic2);

var arithmetic3 = 1 - 2 + 1; // left to right
console.log(arithmetic3);

var arithmetic4 = 314 % 100; // remainder operation. Remainder's precedence is the same as that of multiplication and division.
console.log(arithmetic4);

var nan = 0 / 0;
console.log(nan);

var nan2 = Infinity - Infinity;
console.log(nan2);