var express = require('express'),
    app = express.createServer(),
    port = process.env.PORT || 2000,
    products = require('./lib/products');

app.configure(function () {
    
    app.use(express.logger());
    app.use(express.errorHandler({
        dumpExceptions : true,
        showStack : true
    }));
    app.use(express.static(__dirname + '/public'));
    
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
});


app.get('/', function (req, res) {
    res.render('root');
});

app.get('/products', function (req, res) {
    res.render('products/index', {
        locals : {
            products : products.all
        }
    });
});

app.get('/products/:id', function(req, res) {
    var product = products.find(req.params.id);
    console.log(require('util').inspect(product));
    res.render('products/show', {
        locals : {
            product : product         
        }
    });
});

app.listen(port);
console.log('Express listening @ PORT : ' + port);
