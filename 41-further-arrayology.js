// page 72
var todoList = [];

function rememberTo(task) {
    todoList.push(task); // add element at the end
}

function whatIsNext() {
    return todoList.shift(); // returns the first element and delete it
}

function urgentlyRememberTo(task) {
    todoList.unshift(task); // add element at the beginning
}

rememberTo("eat");
rememberTo("wash the dishes");
rememberTo("walk the dog");

console.log(whatIsNext());

urgentlyRememberTo("pay credit card");

console.log(todoList);

console.log("-----");

console.log([1, 2, 3, 2, 1].indexOf(2)); // 1
console.log([1, 2, 4, 2, 1].lastIndexOf(2)); // 3


console.log("-----");

/* The start index is inclusive, the end index exclusive */

console.log([0, 1, 2, 3, 4].slice(2, 4)); // [ 2, 3 ]
console.log([0, 1, 2, 3, 4].slice(2)); // [ 2, 3, 4 ]

console.log("-----");

function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2)); // [ 'a', 'b', 'd', 'e' ]