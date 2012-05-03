var events = require('events'),
    util = require('util');

var Customer = function(){
	
	events.EventEmitter.call(this);
	
	this.register = function(userName) {
		this.emit('success', userName);	
	};
}; 

util.inherits(Customer, events.EventEmitter);
module.exports = new Customer();
