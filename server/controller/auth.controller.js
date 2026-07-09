const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res, next) => {

    let { name, email, password } = req.body

    try {



        if (!email || !name || !password) {
            res.status(400).json("Data is empty")
        }

        const user = await User.findOne({ email: email })
        console.log(user)

        if (user) {
            res.status(409).json("user already exist")
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPasword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPasword
        })

        if (newUser) {
            res.status(200).json({ message: "new user created" })
        }



    } catch (err) {

        res.status(400).json("error while creating user")
    }

}


exports.login = async (req, res, next) => {
    let { email, password } = req.body

    try {
        if (!email || !password) {
            return res.status(400).json("email and password is required")
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json("invalid credentials")
        }
            const isMatch = await bcrypt.compare(password, user.password)
            console.log(isMatch)

            if (!isMatch) {
                return res.status(400).json("invalid password")
            }
                const token = jwt.sign({
                    id: user._id,
                    name: user.name,
                    email: user.email
                }, process.env.JWT_SECRET,
                    { expiresIn: process.env.JWT_EXPIRY }
                )

                const cookieOptions = {
                    httpOnly: true,
                    secure: false,
                    sameSite: "lax",
                    maxAge: 24 * 60 * 60 * 1000
                }

            return res
            .status(200)
            .cookie("token", token, cookieOptions)
            .json({ 
                message: "Logged In successfully", 
                user: { id: user._id, name: user.name, email: user.email } 
            });

    }catch (err) {
        res.status(400).json("error while logging in")
}
}

exports.profile=(req,res)=>{
    res.json({message:"welcome to profile"})
}