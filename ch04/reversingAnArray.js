//Reversing an Array
function reverseArray(arr) {
  var revArr = [];
  for (var i= (arr.length -1); i >=0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

function reverseArrayInPlace(arr) {
  var revArr = reverseArray(arr);

  for (var i=0; i< arr.length; i++) {
  		arr[i]=revArr[i];
  }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
