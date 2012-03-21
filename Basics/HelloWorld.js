var http = require('http');
var port = process.env.PORT;

http.createServer(function(request, response){
    response.writeHead('200', {
        'Content-Type' : 'text/html'
    });
    response.end('<h1>Hello World</h1>');
}).listen(port);

