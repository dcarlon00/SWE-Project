const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')




//Register New User
//POST api/users/
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, dashComplete} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //We must check to see if user exists.
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //Create the user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        dashComplete,
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            dashComplete: user.dashComplete,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//Authenticate a User
//POST api/users/login
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            dashComplete: user.dashComplete,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})

//Get user data
//GET api/users/me
//Access Private
const getMe = asyncHandler(async(req, res) => {
    
    res.status(200).json(req.user)
})

//Generate Token jwt
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}