const express = require('express')
const colors= require('colors')
const cors = require('cors');

require('dotenv').config()
const connectDB = require('./config/db')
const commodityRoutes =  require('./routes/commudityRoutes')
const productRoutes =  require('./routes/productRoutes')
const warehouseRoutes=  require('./routes/warehouseRoutes')
const userRoutes =  require('./routes/userRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
connectDB()
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/commodity' ,commodityRoutes)
app.use('/api/warehouse' ,warehouseRoutes)
app.use('/api/product' ,productRoutes)
app.use('/api/user' ,userRoutes)
app.use(errorHandler)
app.listen(port, () => console.log(`server started on port ${port}`))