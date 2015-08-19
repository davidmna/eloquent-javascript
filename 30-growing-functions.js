// page 53
/*
// First attempt
function printFarmInventory(cows, chickens) {
    var cowString = String(cows);
    while (cowString.length < 3)
        cowString = "0" + cowString;
    console.log(cowString + " Cows");
    var chickeString = String(chickens);
    while (chickeString.length < 3)
        chickeString = "0" + chickeString;
    console.log(chickeString + " Chickens");

}

printFarmInventory(7, 11);
*/
/*
// Second attempt
function printZeroPaddedWithLabel(number, label) {
    var numberString = String(number);
    while (numberString.length < 3)
        numberString = "0" + numberString;
    console.log(numberString + " " + label);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
*/
// Third attempt
function zeroPad(number, width) {
    var numberString = String(number);
    while (numberString.length < width)
        numberString = "0" + numberString;
    return numberString; 
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Cows");
    console.log(zeroPad(chickens, 3) + " Chickens");
    console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 11, 3);