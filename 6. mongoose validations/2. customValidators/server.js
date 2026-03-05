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
    res.send("Mongoose - Validators (Custom)")
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
            validate: { // custom validator
                validator: (value) => {
                    return /^[a-zA-Z0-9]+$/.test(value)
                },
                message: "Username can only contain alphanumeric chars",
            }
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Sorry, Email is required"],
            validate: { // custom validator
                validator: (value) => {
                    return (
                        value.endsWith("@gmail.com") ||
                        value.endsWith("@outlook.com") ||
                        value.endsWith("@hotmail.com") ||
                        value.endsWith("@yahoo.com") ||
                        value.endsWith("@baidu.com") ||
                        value.endsWith("@live.com")
                    )
                },
                message: "Corporate emails are not allowed",
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
        username: "ArianaGrande",
        email: "mail@gmail.com",
    }

    try {
        const result = await User.create(newUser)
        console.log("User created with Validation:", result)
    } catch (error) {
        console.log("Error creating User with Valids:", error.message)
    }
}

//! start server
app.listen(PORT, () => {
    console.log(`Server is running at: 'http://localhost:${PORT}'`);
})
