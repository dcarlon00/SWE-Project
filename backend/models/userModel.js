const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    //userID exists by default.
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    dashComplete: {
        type: Boolean,
        required: false,
        default: false
    },
})

module.exports = mongoose.model('User', userSchema)
//The export allows us to reference the model later as 'User'.