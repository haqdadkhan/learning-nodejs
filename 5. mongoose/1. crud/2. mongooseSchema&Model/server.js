//! import required modules
const express = require("express")
const mongoose = require("mongoose")
const { connectDB } = require("./db")
require("dotenv").config()

//! create app instance
const app = express()
const PORT = process.env.PORT || 3000

//! connect to database
connectDB()

//! create route handlers
app.get("/", (req, res) => {
    res.send("Hellow World!");
})

//! mongoose schema & model
// scheme design
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        age: Number,
    }
)
// compile to model
const User = mongoose.model("User", userSchema)

//! start the server
app.listen(PORT, () => {
    console.log(`Server is running at: 'http://localhost:${PORT}'`)
})
