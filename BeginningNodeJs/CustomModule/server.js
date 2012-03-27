var http = require('http'),
    url = require('url'),
    port = process.env.PORT || 2000;

function start(route, handle){    
    
    function handleRequest(request, response) {
        
        var pathname = url.parse(request.url).pathname;
        
        route(handle, pathname, response);        
    }

    http.createServer(handleRequest).listen(port);    
}

exports.start = start;
