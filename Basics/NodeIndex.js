var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    indexFilePath = "index.html";

http.createServer(function(req, res){
    path.exists(indexFilePath,function(exists){
        if(exists){
            fs.readFile(indexFilePath, function(err, contents){
                if(!err){
                    res.writeHead(200, { 
                        "Content-Type" : "text/html",
                        "Content-Length" : contents.length 
                    });
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
}).listen(process.env.PORT || 2000);