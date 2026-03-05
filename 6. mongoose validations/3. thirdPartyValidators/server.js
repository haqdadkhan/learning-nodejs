//! import required modules
const express = require("express")
const mongoose = require("mongoose")
const validator = require("validator") // it only works on strings
const { connectDB } = require("./db")
require("dotenv").config()

//! create app instance
PORT = process.env.PORT || 3000
const app = express()

//! define route handler
app.get("/", (req, res) => {
    res.send("Mongoose - Validators (Third Party)")
})

//! connect database
connectDB()

//! schema and model
// scheme design
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: [true, "Sorry, Name is required"],
            validate: { // third party validator
                validator: (value) => {
                    return validator.isAlphanumeric(value)
                },
                message: "Username can only contain alphanumeric chars",
            }
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Sorry, Email is required"],
            validate: { // third party validator
                validator: (value) => {
                    return validator.isEmail(value)
                },
                message: "Invalid email address",
            }
        },
    },
    { timestamps: true }
)
// compile to model
const User = mongoose.model("User", userSchema)

//! create with validations
const createUser = async () => {
    const newUser = {
        username: "Chloe",
        email: "mail@mail.com",
    }

    try {
        const result = await User.create(newUser)
        console.log("User created with Validation:", result)
    } catch (error) {
        console.log("Error creating User with Valids:", error.message)
    }
}
createUser()

//! start server
app.listen(PORT, () => {
    console.log(`Server is running at: 'http://localhost:${PORT}'`);
})
