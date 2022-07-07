const mongoose = require('mongoose')

const formSchema = mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    galReq:{
        type: Number,
        required: [true, 'Please enter a number'],
    },
    delAdd:{
        type: String,
        required: [true, 'Please enter an Address']
    },
    delDate:{
        type: Date,
        required: [true, 'Please enter a date']
    },
    ppGal:{
        type: Number,
        required: [true, 'Please enter the Price per gallon']
    },
    total:{
        type: Number,
        required: true
    },
 },
 {
    timestamps: true,
 })

 module.exports = mongoose.model('Form', formSchema)
 //The export allows us to reference the model later as 'Form'.
 