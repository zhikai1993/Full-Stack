var fake = require("faker");

var products = [];

for (var i = 0; i < 10; i++) {
    var product = {
        name: fake.commerce.productName(),
        price: fake.commerce.price()
    };
    products.push(product);
}

for (var i = 0; i < 10; i++) {
    console.log(products[i].name + " " + product[i].price);
}
