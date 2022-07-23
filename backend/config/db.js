const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://team7group:cosc4353@cluster0.8kbwb.mongodb.net/?retryWrites=true&w=majority")

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.
        underline);
    }catch (error){
        console.log(error);
        process.exit(1)

    }
}

module.exports = connectDB
