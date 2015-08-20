function noArguments() {}
noArguments(1, 2, 3); // This is okay

function threeArguments(a, b, c) {}
threeArguments(); // And so is this

function argumentCounter() {
    console.log("You gave me", arguments.length, "arguments.");
}

argumentCounter("Straw man", "Tautology", "Ad homimem"); 

console.log("-----");

var journal = [];

function addEnty(squirrel) {
    var entry = { events: [], squirrel: squirrel };
    //for (var i = 1; i < arguments.length; i++)
        //entry.events.push(arguments[i]);
    for(argument in arguments)
        entry.events.push(argument);
    journal.push(entry);
}

addEnty(true, "work", "touched tree", "pizza", "running", "television");

console.log(journal);