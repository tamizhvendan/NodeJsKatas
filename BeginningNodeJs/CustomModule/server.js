var http = require('http'),
    url = require('url'),
    port = process.env.PORT || 2000;

function start(route, handle){    
    
    function handleRequest(request, response) { 
        
        var pathname = url.parse(request.url).pathname,
            dataPosted = "";
            
        request.setEncoding("utf-8");
        
        request.addListener("data", function(dataChunkPosted){
            dataPosted += dataChunkPosted;
            console.log("Received[POST] : " + dataPosted);
        });
        
        request.addListener("end", function(){            
            route(handle, pathname, response);        
        });   
        
    }

    http.createServer(handleRequest).listen(port);    
}

exports.start = start;
