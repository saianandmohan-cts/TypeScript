const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/authRoutes')
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:4200",
    credentials:true
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/auth',authRoutes)

module.exports = app