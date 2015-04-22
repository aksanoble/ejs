//Arrays to List and Lists to Array
function arrayToList(arr){
  var list = {value: arr[arr.length-1], rest:null};
  for (var i = arr.length -2; i >=0; i--) {
    var local = JSON.parse(JSON.stringify(list));
    list.value = arr[i];
    list.rest = local;
  }
  return list;
}

function listToArray(list) {
  var arr = [];
  while(list) {
   arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function prepend(element, list) {
  var newList = {value: element, rest:list};
  return newList;
}

function nth(list, number){
var arrayOfList = listToArray(list);
  return arrayOfList[number];
}

// Recursive nth
function nth(list, number) {
if (number == 0)
  return list.value;
else return nth(list.rest, number-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
