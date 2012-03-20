var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    indexFilePath = "index.html";

http.createServer(function(req, res){
    path.exists(indexFilePath,function(exists){
        if(exists){
            fs.readFile(indexFilePath, function(err, contents){
                if(!err){
                    res.end(contents);
                }else{
                    res.writeHead(500);
                    res.end();
                }
            });
        }else{
            res.writeHead(404);
            res.end();
        }
    });
}).listen(2000);

console.log("Listening @ locahost:2000");
