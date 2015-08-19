var num = 0;
while (num <= 12) {
    console.log(num);
    num = num + 2;
}

// output: 0, 2, 4, 6, 8, 10, 12

var result = 1;
var counter = 0;

while(counter < 10) {
    result = result * 2;
    counter = counter + 1;
}

console.log(result); // 1024

/* next code only works in browser environment */
/*
do {
    var name = prompt("Who are you?");
}  while(!name);

console.log(name);
*/