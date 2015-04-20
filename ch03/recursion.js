// Recursion
function isEven (number) {
  var absNumber = Math.abs(number);
  if (absNumber == 1)
    return false;
  else if (absNumber == 2)
    return true;
  else return isEven (number -2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
