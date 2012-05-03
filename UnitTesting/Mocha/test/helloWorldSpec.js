var helloWorld = require('../helloworld'),
    should = require('should');

describe('Hello World', function() {

	it('should say hello world', function() {
		var actualResult = helloWorld.sayHelloWorld();
		actualResult.should.equal('hello world');
	});
});
