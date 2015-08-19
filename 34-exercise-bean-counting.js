// page 56
function countBs(text) {
    /*
    var total = 0;
    for (var index = 0; index < text.length; index++) {
        if (text.charAt(index) == "B")
            total++;
    }*/
    var character = "B";
    return countChar(text, character);
}

console.log(countBs("oBlivion")); // 1
console.log(countBs("BlackBerry")); // 2

function countChar(text, character) {
    var total = 0;
    for (var index = 0; index < text.length; index++) {
        if (text.charAt(index) == character)
            total++;
    }
    return total;
}