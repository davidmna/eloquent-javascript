function every(array, func){
    for(var i = 0; i < array.length; i++) {
        if(func(array[i]) == false) {
            return false;
            break;
        }
    }
    return true;
}

function some(array, func){
    for(var i = 0; i < array.length; i++) {
        if(func(array[i]) == true) {
            return true;
            break;
        }
    }
    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → 

/*
//Book solution


function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      return false;
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
  }
  return false;
}
*/