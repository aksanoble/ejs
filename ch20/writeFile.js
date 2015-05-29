var fs = require('fs');
fs.writeFile("grafitti.txt", "Node was here?", function(err){
    if(err)
        console.log("Failed to write file: ", error);
    else
        console.log("File written");

});
