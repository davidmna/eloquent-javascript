var ancestry = require("./ancestry.js");
ancestry = JSON.parse(ancestry);

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person) {
    return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
    return isInSet(theSet, person);
}));

console.log(ancestry.filter(isInSet.bind(null, theSet)));

/* output:
[ { name: 'Maria van Brussel',
    sex: 'f',
    born: 1801,
    died: 1834,
    father: 'Jan Frans van Brussel',
    mother: 'Joanna de Causmaecker' },
  { name: 'Carel Haverbeke',
    sex: 'm',
    born: 1796,
    died: 1837,
    father: 'Pieter Antone Haverbeke',
    mother: 'Livina Sierens' } ]
*/