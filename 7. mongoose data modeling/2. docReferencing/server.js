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
    res.send("Mongoose - Document Referencing")
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
const Address = mongoose.model("Address", addressSchema)

//* user schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
        }, // referenced schema doc
    },
    { timestamps: true }
)
const User = mongoose.model("User", userSchema)

//! create with modeling
const createUser = async () => {
    try {
        // create address
        const address = await Address.create({
            street: "Main street dream gardens",
            appartment: "Appartment no 6 ground floor, Archise Building"
        })
        console.log("Address created:", address)

        // create user
        const result = await User.create({
            username: "Ali",
            address: address._id,
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

