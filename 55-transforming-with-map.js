var ancestry = require("./ancestry.js");
ancestry = JSON.parse(ancestry);

function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}

var overNinety = ancestry.filter(function(person) {
    return person.died - person.born > 90;
});

console.log(map(overNinety, function(person) {
    return person.name;
}));

/* Using method .map() or an array */
console.log(overNinety.map(function(person){
    return person.name;
}));

/*
    output: [ 'Clara Aernoudts', 'Emile Haverbeke', 'Maria Haverbeke' ]
*/