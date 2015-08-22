// page 87
/*
    JSON.stringify: converts data to JSON string
    JSON.parse: converts JSON string to data
*/
var string = JSON.stringify({name: "X", born: 1980});

console.log(string); // {"name":"X","born":1980}
console.log(JSON.parse(string).born); // 1980

var ACESTRY_FILE = require("./ancestry.js");

console.log(JSON.parse(ACESTRY_FILE).length); // 39