//Sum of a Range
function range(start, end, step) {
  var arr = [], i;

  if(arguments.length == 2)
    step = 1;

  if (start < end) {
    for (i = start; i <= end; i+=step) {
      arr.push(i);
    }
  }
  else {
    for (i = start; i >= end; i+=step) {
      arr.push(i);
    }
  }
    return arr;
}

function sum(arr) {
  var total = 0;
  for (var i=0; i< arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
