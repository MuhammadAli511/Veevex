const asyncHandler = require('express-async-handler')
const Customer = require('../models/customer')
const bcrypt = require('bcryptjs')
const path = require("path");
const jwt = require('jsonwebtoken')


const signup = asyncHandler(async(req,res) => {
    const {firstName,lastName,email,password} = await req.body
    if (!firstName || !lastName || !email || !password ) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User already exists!')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        firstName,
        lastName,
        email,
        password:hashedPassword
    })

    if (user){
        console.log("Completed")
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName
        })
    }
    else{
        res.status(400)
        throw new Error("Error creating account!")
    }
})


module.exports = {
    signup
}