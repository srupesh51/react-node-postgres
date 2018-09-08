var pgClient = require('../../pg-connect');

const insertProduct = function(title,price,done){
   pgClient.query('INSERT INTO products(title, price) values($1, $2)',
  [title, price], function(err){
    if(err){
      done(err,null);
      return;
    }
    done(null,null);
  });
};
const findProducts = function(done){
   pgClient.query('SELECT * FROM products', function(err,products){
    if(err){
      done(err,null);
      return;
    }
    done(null,products.rows);
  });
};
module.exports = {
  insertProduct: insertProduct,
  findProducts: findProducts
};
