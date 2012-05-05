var redis = require('redis'),
    util = require('util'),
    redisClient = redis.createClient(),
    person = { 
        name : 'tamizh', 
        email : 'tamizh@foo.com', 
    };

redisClient.on('error', function(err){
    console.log('Error :' + err); 
});

redisClient.set('person', JSON.stringify(person), function(err, data){    
    err || console.log("insertion  : " + data);
});

redisClient.get('person', function(err, data) {
    data = JSON.parse(data);
    console.log('Name : ' + data.name);
    console.log('Email : ' + data.email);
});

redisClient.quit();


