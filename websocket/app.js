var http = require('http'),
    fs = require('fs'),
    socketIo = require('socket.io');

var handleRequest = function (req, res) {
    fs.readFile(__dirname + '/index.html', function(err, content){
        res.writeHead('200', { 'content-type' : 'text/html'});
        res.end(content);
    });
};

var app = http.createServer(handleRequest);

var io = socketIo.listen(app);

app.listen(2000);

io.sockets.on('connection', function(socket){

    socket.on('clientMsg', function(clientMsg) {
        console.log('Received : ' + clientMsg );
        socket.send('Got ur msg. Have fun with Socket.Io');
    });

});

