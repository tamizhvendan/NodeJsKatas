"use strict";

var downloader = require('./downloader');

downloader.on('status', function (message) {
	console.log('Download Status :' + message);
});

downloader.on('completed', function (message) {
	console.log('Download Complete : ' + message);
});

downloader.download('www.google.com', 2000);
downloader.download('www.yahoo.com', 4000);
downloader.download('www.msn.com', 6000);

console.log('All downloads invoked!!');
