const Product = require('../models/product')


/**
 * Add products
 * Get a list of products
 * Get a single product
 * Update a single product
 */


const controller = {}

/**
 * Get's a list of products
 */
controller.getAllProducts = async (request, response) => {
    await Product.find({}).exec((error, products) => {
        if (error) {
            response.status(500).send({error: "INTERNAL SERVER ERROR"})
        }

        response.send(products)
    })
}




module.exports = controller