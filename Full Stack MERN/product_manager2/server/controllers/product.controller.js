const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { Title, Price, Description } = request.body;
    Product.create({
        Title,
        Price,
        Description
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}


module.exports.findAllProduct = (request, response) => {
    Product.find()
        .then(allProducts => response.json(allProducts))
        .catch(err => response.json({message: "something wrong", error: err}));
};

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
