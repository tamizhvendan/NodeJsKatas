function route(handle, pathname, response){
    console.log("About to route the path: " + pathname);    
    
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    }else{
        console.log("No request handlers found for path name : " + pathname);
        response.writeHead(404);
        response.end();
    }
};


exports.route = route;