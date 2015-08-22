var ancestry = require("./ancestry.js");
ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function hasKnownMother(person) {
    return byName[person.mother] || false;
}

console.log(average(ancestry.filter(hasKnownMother).map(function(p) {
    /* Return the age of the mother when the child is born */ 
    return p.born - byName[p.mother].born;
})));


/*
// Book solution:

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));
*/