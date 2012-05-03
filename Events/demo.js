var customer = require('./customer');

//console.log(customer.events);

customer.on('success', function(userName){
	console.log(userName + ' Registered Successfully');
});

customer.register('tamizh');
