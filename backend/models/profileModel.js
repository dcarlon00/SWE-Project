const mongoose = require('mongoose')

const profileSchema = mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true,'Please add full name'],
    },
    addressOne: {
        type: String,
        required: [true,'Please add an address'],
    },
    addressTwo: {
        type: String
    },
    city: {
        type: String,
        required: [true,'Please enter a city'],
    },
    state: {
        type: String,
        required: [true,'Please select a state'],
    },
    zipcode: {
        type: String,
        required: [true,'Please add zipcode'],
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Profile', profileSchema)
//The export allows us to reference the model later as 'Profile'.