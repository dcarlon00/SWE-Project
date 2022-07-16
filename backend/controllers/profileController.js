const asyncHandler = require('express-async-handler')

const Profile = require('../models/profileModel')
const User = require('../models/userModel')

// This will get the profile of the user.
//GET /api/profile


const getProfile = asyncHandler(async(req, res) => {
    const profile = await Profile.find({ user: req.user.id })

    res.status(200).json(profile)
})


const setProfile = asyncHandler(async(req, res) => {


    const {name, addressOne, addressTwo, city, state, zipcode} = req.body.profileData
 /*    {
        name:'Naruto',
        addressOne: '123 Acorn way',
        addressTwo: '',
        city: 'Spring',
        state: 'Texas',
        zipcode: '77389'
    }  */



    console.log("request: "+ JSON.stringify(req.body.profileData))
    console.log(name)
    console.log(addressOne)
    console.log(addressTwo)
    console.log(city)
    console.log(state)
    console.log(zipcode)

    if(/* !name ||  */!addressOne || !city || !state || !zipcode){
        res.status(400)
        throw new Error('Please enter all fields.')
    }

    const profile = await Profile.create({
        name, //Grabs name from initial profile creation.
        addressOne,
        addressTwo,
        city,
        state,
        zipcode,
        user: req.user.id, //Grabs user id from initial profile creation.
    })

    if(profile){
        res.status(201).json({
            name: profile.name,
            addressOne: profile.addressOne,
            addressTwo: profile.addressTwo,
            city: profile.city,
            state: profile.state,
            zipcode: profile.zipcode,
            user: req.user.id, //Grabs user id from initial profile creation.
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
    res.status(200).json(profile)
})


const updateProfile = asyncHandler(async(req, res) => {
    const profile = await Profile.findById(req.params.id)

    if(!profile){
        res.status(400)
        throw new Error('Profile not found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    if(profile.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id,
        req.body, {
            new: true,
        })

     res.status(200).json(updatedProfile)   
})


const deleteProfile = asyncHandler(async(req, res) => {
    const profile = await Profile.findById(req.params.id)

    if(!profile){
        res.status(400)
        throw new Error('Profile not found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
    if(profile.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await profile.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getProfile, setProfile, updateProfile, deleteProfile
}

