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

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
