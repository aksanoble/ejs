var fs = require('fs');
fs.readFile("main.js", "utf8", function(error, buffer){
    if(error)
        throw error;
    console.log("File contained \n", buffer, "bytes");
    console.log("The first byte is:", buffer[0]);
})
