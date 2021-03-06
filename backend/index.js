const express = require('express')
const mongoose = require('mongoose') 
const config = require('./helpers/config')

const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/product')


// Mongoose Connection
mongoose.connect(config.MONGODB_URI, config.MONGOOSE_OPTIONS)
.then(()=> {
    console.log(`MONGODB Connection Successful ON '${config.N0DE_ENV}' environment`)
}).catch(exception=> {
    console.log("MONGODB Connection Failed\n", exception)
})

const app = express()


// Usage of middlewares
app.use(express.json())

app.use(authRoutes)
app.use(productRoutes)




app.listen(config.PORT, ()=> {
    console.log(`Server started on PORT: ${config.PORT}`)
})