var events = require('events'),
    util = require('util');

var Downloader = function(){
	
	this.download = function(url, timeToDownload) {
		var count = 1,
		    self = this;
		self.emit('status', 'Download started : URL ==> ' + url);
		setTimeout(function(){
			self.emit('completed', 'Download Completed : URL ==> ' + url);		
		}, timeToDownload);
		self.emit('status', 'Downloading ' + url + ' Please wait...');
			
	};
};

util.inherits(Downloader, events.EventEmitter);
module.exports = new Downloader();
