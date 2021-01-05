const mongoose = require('mongoose')


/**
 * Product
 * -------
 * 1. title (name) -->  String
 * 2. description  -->  String
 * 3. price        -->  Number
 * 4. image        --> ...
 * 5. rating       --> Number
 */ 

    
const productSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {
        type: String,
        img: {
            data: Buffer,
            contentType: String
        }
    },
    rating: {type: Number, required: true}

})


// Create a model from the schema
const Product = mongoose.model('Product', productSchema)


module.exports = Product