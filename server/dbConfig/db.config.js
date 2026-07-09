const mongoose = require('mongoose')

async function connectDB(){
        try{

        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connect success")

    }catch(err){
        console.log("error while connecting db")
    }
}


module.exports = connectDB
