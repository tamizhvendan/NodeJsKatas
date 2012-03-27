var exec = require("child_process").exec;

function start(response){    
    console.log("Request for start invoked");    
    exec("dir", function(error, stdout, stderr){
        response.writeHead(200, { 'Content-Type' : 'text/plain' });
        response.end(stdout);
    });
}

function upload(){
    console.log("Request for upload invoked"); 
    response.writeHead(200, { 'Content-Type' : 'text/plain' });
    response.end("Work In Progress!!");
}

exports.start = start;
exports.upload = upload;