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
    res.send("Mongoose CRUD: Delete Operations")
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

//! delete operations
//* .deleteOne()
const deleteOneStudent = async () => {
    try {
        const result = await Student.deleteOne(
            { name: "Ali" }
        )
        console.log("Deleted Student:", result)
    } catch (error) {
        console.log("Error deleting Student:", error.message)
    }
}

//* .deleteMany()
const deleteManyStudents = async () => {
    try {
        const result = await Student.deleteMany(
            { age: 10 }
        )
        console.log("Deleted multiple Students:", result)
    } catch (error) {
        console.log("Error deleting multiple Students:", error.message)
    }
}

//* .findOneAndDelete()
const findOneAndDeleteStudent = async () => {
    try {
        const result = await Student.findOneAndDelete({ name: "Ashir" })
        console.log("Found and deleted student:", result)
    } catch (error) {
        console.log("Error finding and deleting Student:", error.message)
    }
}

//* .findByIdAndDelete()
const findByIdAndDeleteStudent = async () => {
    try {
        const result = await Student.findByIdAndDelete("69a7f6bee45fcf517c327223")
        console.log("Found and deleted student:", result)
    } catch (error) {
        console.log("Error finding and deleting Student:", error.message)
    }
}
findByIdAndDeleteStudent()

//! start the server
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
