//! import required modules
const mongoose = require("mongoose")
require("dotenv").config()
const MONGO_URI = process.env.MONGO_URI

//! connect database
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected successfully...")
    } catch (error) {
        console.log("Error connecting MongDB:", error)
    }
}

//! export modules
module.exports = { connectDB }
