//var exec = require("child_process").exec;
var fs = require('fs');

function start(response){    
    console.log("Request for start invoked");    
    //exec("dir", function(error, stdout, stderr){
        //response.writeHead(200, { 'Content-Type' : 'text/plain' });
        //response.end(stdout);
    //});
    fs.readFile("UploadForm.html", function(isReadError, contents){
        if(!isReadError){
            response.writeHead(200, {
                "Content-Type" : "text/html",
                "Content-Length" : contents.length
            });
            response.end(contents);
        }
    });    
}

function upload(response){
    console.log("Request for upload invoked"); 
    response.writeHead(200, { 'Content-Type' : 'text/plain' });
    response.end("Work In Progress!!");
}

exports.start = start;
exports.upload = upload;
