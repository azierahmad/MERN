const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api/findAllProduct', ProductController.findAllProduct);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/getproduct/:id', ProductController.getProduct);
}