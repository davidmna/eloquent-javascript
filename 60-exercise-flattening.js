var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce(function(a, b) {
    var output = [];
    return output.concat(a).concat(b);
}));

/*
// Book solution:

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));

*/

// → [1, 2, 3, 4, 5, 6]