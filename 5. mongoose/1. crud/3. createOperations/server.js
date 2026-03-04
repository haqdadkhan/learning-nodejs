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
    res.send("Mongoose CRUD: Create Operations")
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

//! create operations
//* .save()
const saveStudent = async () => {
    try {
        const student = new Student({
            name: "Ali",
            age: 18,
            class: "8th Class",
            subjects: ["Biology", "Chemistry"]
        })

        const result = await student.save();
        console.log("Saved Doc:", result)
    } catch (error) {
        console.error("Error saving Doc:", error.message)
    }
}

//* .create()
const createStudent = async () => {
    try {
        const result = await Student.create({
            name: "Nadeem",
            age: 15,
            class: "5th Class",
            subjects: ["Urdu", "English"],
        })

        console.log("Created Doc:", result)
    } catch (error) {
        console.error("Error creating Doc:", error.message)
    }
}

//* .insertMany()
const insertStudents = async () => {
    try {
        const result = await Student.insertMany([
            {
                name: "Ali",
                age: 28,
                class: "11th Class",
                subjects: ["Biology", "Chemistry"]
            },
            {
                name: "Abida",
                age: 18,
                class: "Graduation",
                subjects: ["Accounting", "Finance"]
            },
        ])

        console.log("Inserted Docs:", result)
    } catch (error) {
        console.log("Error inserting Docs:", error.message)
    }
}

insertStudents()

//! start the server
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
