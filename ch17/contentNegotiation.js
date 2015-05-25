function request(type) {
var req = new XMLHttpRequest();
  req.open("GET", "http://eloquentjavascript.net/author", false);
req.setRequestHeader("Accept", type)
req.send(null);
console.log(req.responseText);
}

request("text/plain");
request("text/html");
request("application/json");
request("rainbows+unicorns");
