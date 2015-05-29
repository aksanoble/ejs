var http = require('http');

function requestByType (type) {
    var request = http.request({
        hostname: "eloquentjavascript.net",
        path: "/author",
        method: "GET",
        headers: {Accept: type}
        },  function(response) {
                readStreamAsString(response, function(_,data){
                    process.stdout.write(data);
                });
            }
    );
    request.end();
}

function readStreamAsString(stream, callback) {
    var data = "";
    stream.on("data", function(chunk) {
        data += chunk.toString();
    });
    stream.on("end", function() {
        callback(null, data);
    });
    stream.on("error", function(error) {
        callback(error);
    });
}

requestByType("text/html");
requestByType("text/plain");
requestByType("application/json");
