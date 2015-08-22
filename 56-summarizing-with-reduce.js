// page 90
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

console.log(reduce([1,2,3,4], function(a, b) {
    return a + b;
}, 0)); // 10

/*
The standard array method reduce, which of course corresponds to this function,
has an added convenience. If your array contains at least one element, you are
allowed to leave off the start argument. The method will take the first element
of the array as its start value and start recuding at the second element.

To use reduce to find the most ancient known ancestor,
we can write something like this.
*/

var ancestry = require("./ancestry.js");
ancestry = JSON.parse(ancestry);

console.log(ancestry.reduce(function(min, cur) {
    if (cur.born < min.born) return cur;
    else return min;
}));