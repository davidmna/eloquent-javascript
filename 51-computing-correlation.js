// page 68

JOURNAL = require("./jacques_journal.js");

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1])); // 0.06859943405700354
console.log("-----");

function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL)); // [ 76, 9, 4, 1 ]
console.log("-----");

var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map); // true
console.log(map["touched tree"]); // -0.81
console.log("-----");

for (var event in map) {
    console.log("The correlation for '" + event + "' is " + map[event]);
}
console.log("-----");

/*
function gatherCorrelations(JOURNAL) {
    var journal = JOURNAL, phis = {};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if(!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        }
    }
    return phis;
}
*/

function gatherCorrelations(JOURNAL) {
    var journal = JOURNAL, phis = {};
    journal.forEach(function(entry) {
        entry.events.forEach(function(event) {
            if(!(event in phis))
                phis[event] = phi(tableFor(event, journal));
            });
    });
    return phis;
}


var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza); // 0.068599434
//console.log(correlations);

console.log("-----");

for (event in correlations) {
    //console.log(event + ": " + correlations[event]);
    var correlation = correlations[event];
    if (correlation > 0.1 || correlation < -0.1)
        console.log(event + ": " + correlation);

}

console.log("-----");

for (var i = 0; i < JOURNAL.length; i++) {
    var entry = JOURNAL[i];
    if(hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry))
        entry.events.push("peanut teeth");
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));
