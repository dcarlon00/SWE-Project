const asynchHandler = require('express-async-handler')

const Form = require('../models/formModel')

// This gets all forms.
// GET /api/forms


const getForm = asynchHandler(async (req, res) => {
    const forms = await Form.find()

    res.status(200).json(forms)
})

//This sets all forms
// POST /api/forms
const setForm = asynchHandler( async (req, res) => {
   if(!req.body.text){
    res.status(400)
    throw new Error('Please add fields')
   }

   const form = await Form.create({
    text: req.body.text
   })

    res.status(200).json(form)
})

const updateForm = asynchHandler(async (req, res) => {
    res.status(200).json({ message:  `Update Form ${req.params.id}` })
})

const deleteForm = asynchHandler(async (req, res) => {
    res.status(200).json({ message:  `Delete Form ${req.params.id}` })
})

module.exports = {
    getForm, setForm, updateForm, deleteForm
}