var http = require('http');
var Router = require('./router');
var ecstatic = require('ecstatic');

var fileServer = ecstatic({root: "./public"});
var router = new Router();

http.createServer(function(request, response){
    if(!router.resolve(request, response))
    fileServer(request, response);
}).listen(8000);

var talks = Object.create(null);

router.add("GET", /^\/talks\/([^\/]+)$/,
           function(request, response, title) {
  if (title in talks)
    respondJSON(response, 200, talks[title]);
  else
    respond(response, 404, "No talk '" + title + "' found");
});

router.add("PUT", /^\/talks\/([^\/]+)$/, function(request, response, title){
    readStreamAsJSON(request, function(error, talk) {
        if(error) {
            respond(response, 400, error.toString());
        } else if (!talk ||
            typeof talk.presenter != "string" ||
            typeof talk.summary != "string") {
                respond(response, 400, "Bad talk Data");
        } else {
                talks[title] = {
                                title: title,
                                presenter: talk.presenter,
                                summary: talk.summary,
                                comments: []};
                registerChange(title);
                respond(response, 204, null);
        }

    });
});

var waiting = [];

function waitForChanges(since, response) {
  var waiter = {since: since, response: response};
  waiting.push(waiter);
  setTimeout(function() {
    var found = waiting.indexOf(waiter);
    if (found > -1) {
      waiting.splice(found, 1);
      sendTalks([], response);
    }
  }, 90 * 1000);
}


var changes = [];
function registerChange(title) {
  changes.push({title: title, time: Date.now()});
  waiting.forEach(function(waiter) {
    sendTalks(getChangedTalks(waiter.since), waiter.response);
  });
  waiting = [];
}

function respond(response, status, data, type) {
  response.writeHead(status, {
    "Content-Type": type || "text/plain"
  });
  response.end(data);
}

    function readStreamAsJSON(stream, callback) {
        var data = "";
        stream.on("data", function(chunk) {
            data += chunk;
        });
        stream.on("end", function() {
            var result, error;
            try { result = JSON.parse(data); }
            catch (e) { error = e; }
            callback(error, result);
        });
        stream.on("error", function(error) {
            callback(error);
        });
    }
