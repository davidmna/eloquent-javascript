function range(a, b, step) {
    step = step || 1;
    var array = [];
    if (step < 0)
        for( ; a >= b; a += step)
            array.push(a);
    else 
        for( ; a <= b; a += step)
            array.push(a);
    return array;
}

function sum(range) {
    var sum = 0;
    for(n in range)
        sum += Number(range[n]);   
    return sum;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

/*
// Book solution

function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

*/