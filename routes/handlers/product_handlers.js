const product = require('../models/product');
console.log(product);
const saveProduct = function(productObj1, done){
  productObj1 = {
    title: productObj1.title,
    price: productObj1.price
  }
  product.insertProduct(productObj1.title,productObj1.price,function(err,products){
    done(err,products);
  });
};

const getProducts = function(done){
  product.findProducts(function(err, products){
    done(err, products);
  });
};

module.exports = {
  saveProduct: saveProduct,
  getProducts: getProducts
}
