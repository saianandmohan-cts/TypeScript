const jwt = require('jsonwebtoken')

const verify = (req,res,next)=>{
    const token = req.cookies.token

    if(!token){
        res.status(400).json("token not provided")
    }

    try{
        decodedToken = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decodedToken
        return next()
    }catch(err){
        res.status(400).json("invalid token")
    }
}

module.exports = verify