//! import required modules
const express = require("express")
const mongoose = require("mongoose")
const { connectDB } = require("./db")
require("dotenv").config()

//! create app instance
PORT = process.env.PORT || 3000
const app = express()

//! define route handler
app.get("/", (req, res) => {
    res.send("Mongoose - Validators (Built-In)")
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
            minLength: [3, "Username must be at least 3 chars long"],
            maxLength: [12, "Username can't be longer than 12 chars"],
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Sorry, Email is required"],
            match: /@/,
        },
        age: {
            type: Number,
            required: [true, "Sorry, age is required"],
            min: [18, "Sorry, u must be at least 18yo"],
            max: [60, "Sorry, age can't be greater than 60"],
        },
        gender: {
            type: String,
            enum: ["Male", "Female"],
            default: "Male",
        }
    },
    { timestamps: true }
)
// compile to model
const User = mongoose.model("User", userSchema)

//! create with validations
const createUser = async () => {
    const newUser = {
        username: "Arya",
        email: "mail@mail.com",
        age: 22,
        gender: "Male",
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
