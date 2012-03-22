var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    sitePublicFolderName = 'BornToCode',
    extensions = {
        ".html" : "text/html",
        ".css" : "text/css",
        ".js" : "application/javascript",
        ".png" : "image/png",
        ".gif" : "image/gif",
        ".jpg" : "image/jpg"
    };

function handleFileNotFound(response) {
    response.writeHead(404);
    response.end();
}

function handleInternalServerError(response){
    response.writeHead(500);
    response.end();
}

function writeFileContentInResponse(filePath, contentType, response){
    fs.readFile(filePath, function(isFileReadError, fileContents){
        if(isFileReadError){
            handleInternalServerError(response);
        }else{
            response.writeHead(200,{
                "Content-Type" : contentType,
                "Content-Length" : fileContents.length
            });
            response.end(fileContents);
        }
    });
}

http.createServer(function(request, response){    

    var requestUrl = request.url,
        fileName = path.basename(requestUrl) || "index.html",
        fileExtension = path.extname(fileName),
        directoryName = path.dirname(requestUrl).substring(1), // Removing the prefix '/'
        localPath = path.join(__dirname, sitePublicFolderName, directoryName, fileName);
    
    if(extensions[fileExtension]){
        path.exists(localPath, function(isFileExist){
            if(isFileExist) {
                writeFileContentInResponse(localPath, extensions[fileExtension], response);
            }else{
                handleFileNotFound(response);
            }          
        });
    }
        
}).listen(process.env.PORT || 2000);