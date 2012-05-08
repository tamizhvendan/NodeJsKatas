var express = require('express'),
    app = express.createServer();

app.configure(function(){
    app.use(express.logger());
});

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(2000);
