//Flattening an Array
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(previousValue, currentValue, index, array) {
  		return previousValue.concat(currentValue);
}));

// → [1, 2, 3, 4, 5, 6]
