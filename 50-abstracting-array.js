// page 83
JOURNAL = require("./jacques_journal.js");
var journal = JOURNAL;

function logEach(array) {
    for (var i = 0; i < array.length; i++)
        console.log(array[i]);
}

var array = ["Wampeter", "Foma", "Granfalloon"];

logEach(array);

console.log("-----");

function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}


forEach(array, console.log);

console.log("-----");

var numbers = [1, 2, 3, 4, 5], sum = 0;

forEach(numbers, function(number) {
    sum += number;
});

console.log(sum); // 15

console.log("-----");