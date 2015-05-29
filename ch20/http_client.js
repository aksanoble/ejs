var http = require('http');
var request = http.request({
hostname: "localhost",
port: 8000,
path: "",
method: "GET",
headers: {}}, function(response) {
    console.log("Server responded with", response.body);
}
);
request.end();
