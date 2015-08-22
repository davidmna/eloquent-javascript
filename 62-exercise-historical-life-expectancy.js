var ancestry = require("./ancestry.js");
ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byCentury = {};
ancestry.forEach(function(person) {
    var century = Math.ceil(person.died / 100);

    if (!(century in byCentury))
        byCentury[century] = { ages: [] };
    
    byCentury[century].ages.push(person.died - person.born);    
});

console.log(byCentury);

for (var century in byCentury) {
    console.log(century,":",average(byCentury[century].ages));
}

/*
//Book solution

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}
*/