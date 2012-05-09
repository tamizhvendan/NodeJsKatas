process.env.NODE_ENV = 'development';

var express = require('express'),
    app = express.createServer();

app.configure(function(){
    app.use(express.logger());
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

app.configure('development', function(){
	app.use(express.errorHandler({
		dumpExceptions : true, showStack : true
	}));
});

app.get('/', function(req, res){
	throw new Error('An unexpected Error!');
});

app.listen(2000);
