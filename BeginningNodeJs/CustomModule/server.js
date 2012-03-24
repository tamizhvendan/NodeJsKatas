var http = require('http'),
    url = require('url'),
    port = process.env.PORT || 2000;

function start(route, handle){    
    
    function handleRequest(request, response) {
        
        var pathname = url.parse(request.url).pathname;
        
        route(handle, pathname);
        
        
        response.writeHead(200, { "Content-Type" : "text/html" });
        response.end("Hello World from Custom Module in node.js");
    }

    http.createServer(handleRequest).listen(port);
    console.log("Server Started!");
}

exports.start = start;
