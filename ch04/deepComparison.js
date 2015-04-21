// Deep Comparison
function deepEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null) {
  	if (obj1 === obj2) return true;
  	else return false;
  }
  else  if (typeof(obj1) == "object" && typeof(obj2) == "object") {
  	      for (var key in obj1) {
    	      if (!(deepEqual(obj1[key], obj2[key]))) return false;
  	        else return true;
          }
        }
  else if (obj1 === obj2) return true;
  else return false;
}


var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
