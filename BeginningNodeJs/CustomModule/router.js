function route(handle, pathname){
    console.log("About to route the path: " + pathname);    
    
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    }else{
        console.log("No request handlers found!");    
    }
};


exports.route = route;