for(var number = 1; number <= 100 ; number++) {
    var line = "";
    if (number % 3 == 0) {
        line += "Fizz";
    } 
    if (number % 5 == 0){
        line += "Buzz";
    }
    
    console.log(line || number);
}