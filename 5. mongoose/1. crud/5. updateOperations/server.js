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
    res.send("Mongoose CRUD: Update Operations")
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

//! update operations
//* .updateOne()
const updateOneStudent = async () => {
    try {
        const result = await Student.updateOne(
            { name: "Abidah" },
            {
                age: 10,
                subjects: ["Engineering", "Technology"]
            },
            { new: true }
        )
        console.log("Updated Student:", result)
    } catch (error) {
        console.log("Error updating Student:", error.messgae)
    }
}

//* .updateMany()
const updateManyStudents = async () => {
    try {
        const result = await Student.updateMany(
            { age: 10 },
            {
                class: "Matric",
                subjects: ["Urdu", "Islamiyat"]
            },
            { new: true }
        )
        console.log("Updated Students:", result)
    } catch (error) {
        console.log("Error updating many Students:", error.message)
    }
}

//* .findOneAndUpdate()
const findOneAndUpdateStudent = async () => {
    try {
        const result = await Student.findOneAndUpdate(
            { name: "Abidah" },
            { name: "Alishar" },
            { new: true }
        )
        console.log("Updated Student:", result)
    } catch (error) {
        console.log("Error finding and updating the Student:", error.message)
    }
}

//* .findByIdAndUpdate()
const findByIdAndUpdateStudent = async () => {
    try {
        const result = await Student.findByIdAndUpdate(
            "69a7f6bee45fcf517c327224",
            { name: "Ashir" },
            { new: true }
        )
        console.log("Updated Student:", result)
    } catch (error) {
        console.log("Error finding and updating the Student:", error.message)
    }
}

//! start the server
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
