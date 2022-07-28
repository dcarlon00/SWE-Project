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


    const {addressOne, addressTwo, city, state, zipcode} = req.body.profileData

    if(!addressOne || !city || !state || !zipcode){
        res.status(400)
        throw new Error('Please enter all fields.')
    }

    const profile = await Profile.create({
        name: req.user.name, //Grabs name from initial profile creation.
        addressOne,
        addressTwo,
        city,
        state,
        zipcode,
        user: req.user.id,
    })

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
        {
            name: req.body.nameUpdate,
            addressOne: req.body.addressOneUpdate,
            addressTwo: req.body.addressTwoUpdate,
            city: req.body.cityUpdate,
            state: req.body.stateUpdate,
            zipcode: req.body.zipcodeUpdate,
        }
        /*req.body, { new: true }*/)

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
