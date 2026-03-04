//! import required modules
const express = require("express")
const mongoose = require("mongoose")
const { connectDB } = require("./db")
require("dotenv").config()

//! create app instance
const PORT = process.env.PORT
const app = express()

//! create route handler
app.get("/", (req, res) => {
    res.send("Mongoose CRUD: Read Operations")
})

//! connect db
connectDB()

//! schema & model
//* schema design
const studentSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        class: String,
        subjects: [String],
    }
)
//* compile to model
const Student = mongoose.model("Student", studentSchema)

//! read operations
//* .find()
const getAllStuds = async () => {
    try {
        const result = await Student.find() // can also be conditional
        console.log("Students Found:", result)
    } catch (error) {
        console.log("Error finding Student:", error.message)
    }
}

//* .findOne()
const getOneStud = async () => {
    try {
        const result = await Student.findOne({name: "Ali"})
        console.log("Student Found:", result)
    } catch (error) {
        console.log("Error finding Student:", error.message)
    }
}

//* .findById()
const getStudById = async () => {
    try {
        const result = await Student.findById("69a7f6bee45fcf517c327223")
        console.log("Student Found by ID:", result)
    } catch (error) {
        console.log("Error finding Student:", error.message)
    }
}

//* .countDocuments()
const getDocCount = async () => {
    try {
        const result = await Student.countDocuments() // can also be conditional
        console.log("Students Count:", result)
    } catch (error) {
        console.log("Error counting Docs:", error.message)
    }
}
getDocCount()

//* .where()
//* .sort()
//* .limit()

//! start the server
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
