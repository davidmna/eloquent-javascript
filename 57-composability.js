/*
The previous example without high-order functions.
*/

var ancestry = require("./ancestry.js");
ancestry = JSON.parse(ancestry);

var min = ancestry[0];

for (var i = 1; i < ancestry.length; i++) {
    cur = ancestry[i];
    if (cur.born < min.born)
        min = cur;
}

console.log(min);
console.log("----");

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));

/*
It's a little bit silly that we have to define plus as a function, but operators
in JavaScript, unlike functions, are not values, so you can't pass them as arguments.)
*/