// page 56

function isEven(number) {

    if (number < 0)
        number *= -1;

    if (number == 0)
        return true;
    else if (number == 1)
        return false;
    else
        return isEven(number - 2); 
}

var n = -2;
console.log(isEven(n));

/*
// Book solution

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

*/