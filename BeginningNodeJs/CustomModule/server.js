var http = require('http'),
    port = process.env.PORT || 2000;
    
function start(){
    
    function handleRequest(request, response) {
        console.log("Request Received");
        response.writeHead(200, { "Content-Type" : "plain/text" });
        response.end("Hello World from Custom Module in node.js");
    }
    
    http.createServer(handleRequest).listen(port);
    console.log("Server Started!");
}

exports.start = start;
