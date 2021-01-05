const router = require('express').Router()

const {getAllProducts} = require('../controllers/product')


// User should be to get all products using the get HTTP Verb

router.get("/api/products/", getAllProducts)

// localhost:3400/api/products/


module.exports = router