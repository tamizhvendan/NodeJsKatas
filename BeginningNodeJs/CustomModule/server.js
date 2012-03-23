var http = require('http'),
    port = process.env.PORT || 2000;

function handleRequest(request, response) {
        console.log("Request Received");
        response.writeHead(200, { "Content-Type" : "text/html" });
        response.end("Hello World from Custom Module in node.js");
}

function start(){    
    http.createServer(handleRequest).listen(port);
    console.log("Server Started!");
}

exports.start = start;
