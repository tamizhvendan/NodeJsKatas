var products = [{
    id : 1,
    name : 'Dell Laptop',
    description : '4GB i5 14 inch',
    price : 36000
}, {
    id : 2,
    name : 'Compaq',
    description : '2GB i3 15 inch',
    price : 24000
}];

module.exports.all = products;

module.exports.find = function(id) {
   
    var products = products.filter(function(product) {
        return product.id === parseInt(id, 10);
    });

    return products ? product[0] : {};
};
