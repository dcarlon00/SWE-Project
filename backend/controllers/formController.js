const asynchHandler = require('express-async-handler')

const Form = require('../models/formModel')
const User = require('../models/userModel')
const Profile = require('../models/profileModel')

// This gets all forms.
// GET /api/forms
const getForm = asynchHandler(async (req, res) => {
    const forms = await Form.find({ user: req.user.id})

    res.status(200).json(forms)
})

//This sets all forms
// POST /api/forms
const setForm = asynchHandler( async (req, res) => {
    const {galReq, delAdd, delDate, ppGal, total} = req.body.formData

   if(!galReq || !delAdd || !delDate || !ppGal || !total){
    res.status(400)
    throw new Error('Please enter all fields')
   }

   const form = await Form.create({
    galReq,
    delAdd,
    delDate,
    ppGal,
    total,
    user: req.user.id,
   })

    res.status(200).json(form)
})

const updateForm = asynchHandler(async (req, res) => {
    const form = await Form.findById(req.params.id)

    if(!form) {
        res.status(400)
        throw new Error('Form not found')
    }

    
    //check if user exists
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    //Check if the logged in user matched the form user.
    if(form.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedForm = await Form.findByIdAndUpdate(req.params.id, 
        req.body, {
        new: true,
    })

    res.status(200).json(updatedForm)
})

const deleteForm = asynchHandler(async (req, res) => {
    const form = await Form.findById(req.params.id)

    if(!form) {
        res.status(400)
        throw new Error('Form not found')
    }

    /* const user = await User.findById(req.user.id) */
    //check if user exists
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    //Check if the logged in user matched the form user.
    if(form.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await form.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getForm, setForm, updateForm, deleteForm
}