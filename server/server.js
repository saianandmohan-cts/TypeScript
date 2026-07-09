require('dotenv').config()
const app = require('./app')
const port = process.env.PORT
const connectDB = require('./dbConfig/db.config')

connectDB()

app.listen(port,()=>{
    console.log(`sever is running on port ${port}`)
}) 
