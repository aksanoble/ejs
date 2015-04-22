// Test Object
var myObj = {a: "foo", b: 2, c: {a:"a", b:"b"}, d: true, e:null};

// Add quotes to string types simply return the rest
function addQuotes(element) {
    if(typeof element == "string") return '"' + element + '"';
    else return element;
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
      if (i != ((Object.keys(myObj).length)))
        string += ",";
 }

  return "{"+string+"}";
}
console.log(JSON.stringify(myObj));
console.log(myStr(myObj));
