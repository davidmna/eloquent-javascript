/* 
High-order functions allow us to abstract over actions, not just values.
They come in several forms. For example, you can have functions that create new functions.
*/
function greaterThan(n) {
    return function(m) { return m > n; };
}

var greatherThan10 = greaterThan(10);
console.log(greatherThan10(11));

/* 
And you can have functions that change other functions.
*/

console.log("-----");

function noisy(f) {
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}

noisy(Boolean)(0);

console.log("-----");

/*
You can even write functions that provide new types of control flow
*/

function unless(test, then) {
    if(!test) then();
}

function repeat(times, body) {
    for(var i = 0; i < times; i++)
        body(i);
}

repeat(10, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});

/*
    output:
        0 'is even'
        2 'is even'
        4 'is even'
        6 'is even'
        8 'is even'
*/