//! import required modules
const express = require("express")
const mongoose = require("mongoose")
const { connectDB } = require("./db")
require("dotenv").config()

//! create app instance
const app = express()
const PORT = process.env.PORT

//! define the route handler
app.get("/", (req, res) => {
    res.send("Mongoose - Document Embedding")
})

//! connect db
connectDB()

//! schema and model
//* address schema
const addressSchema = new mongoose.Schema(
    {
        street: {
            type: String,
        },
        appartment: {
            type: String,
        }
    }
)

//* user schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        address: addressSchema, // embedded schema doc
    },
    { timestamps: true }
)
const User = mongoose.model("User", userSchema)

//! create with modeling
const createUser = async () => {
    try {
        const result = await User.create({
            username: "Ali",
            address: {
                street: "Garden Town main street",
                appartment: "Appartment no 6 ground floor"
            }
        })
        console.log("User created:", result)
    } catch (error) {
        console.log("Error creating user:", error)
    }
}

// createUser()

//! start server
app.listen(PORT, () => {
    console.log(`Server is running on 'http://localhost:${PORT}'`)
})

