function reverseArray(array) {
    var new_array = [];
    for(var i = array.length -1; i >= 0; i--)
        new_array.push(array[i]);
    return new_array;

}

function reverseArrayInPlace(array) {
    var limit = Math.floor(array.length / 2);
    for(var i = 0; i < limit; i++) {
        var backup = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = backup;
    }
    return array;
}

var array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));
console.log(array);
console.log(reverseArrayInPlace(array));
console.log(array);

