var calculator = require('../lib/calculator'),
    should = require('should');

describe('calculator', function () {
	
	it("exists", function () {
		should.exist(calculator);
	});

	it('add two numbers', function () {
		var result = calculator.add(1,2);
		result.should.equal(3);	
	});
}); 

