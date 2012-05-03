var events = require('events'),
    eventEmitter = new events.EventEmitter();

eventEmitter.on('off', function(){
	console.log('Switching off');
});

process.nextTick(function(){ eventEmitter.emit('off'); });
console.log('off event Emitted');

