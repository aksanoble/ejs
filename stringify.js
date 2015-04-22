//Simple program to convert stringify not dealing with Array and Null value types


// Test Object
var myObj = {a: "foo", b: 2, c: {a:"a", b:"b"}, d: true};

// To find the total number of keys present. This helps us stringify at the end
function objToArray (obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

// Add quotes to string types simply return the rest
function addQuotes(element) {
    if(typeof element == "string") return '"' + element + '"';
    else if(typeof element == "number") return element;
    else if (typeof element == "boolean") return element;
    else if(typeof element == "object") return element;
  }

// Main Stringify function
function myStr(obj) {
  var string = '';
  var i = 0;
    for (var key in obj) {
     var arr = objToArray(obj);
     if (typeof obj[key] == "object") {
       string += '"'+key+'"' +':' + myStr(obj[key]); i++;}
      else {
        string+= '"'+key+'"' +':'+ addQuotes(obj[key]);
        i++;
      }

// Do not add Comma at the End
      if (i != (arr.length))
        string += ",";

  }

  return "{"+string+"}";
}
console.log(JSON.stringify(myObj));
console.log(myStr(myObj));
