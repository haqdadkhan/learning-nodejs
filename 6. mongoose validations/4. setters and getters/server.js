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
    res.send("Mongoose - Validators (Setters & Getters)")
})

//! connect database
connectDB()

//! schema and model
// scheme design
const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Name is required"],
            set: (value) => value.trim(), // setters
        },
        author: {
            type: String,
            required: [true, "Author name is required"],
            set: (value) => value.trim(), // setters
        },
        price: {
            type: Number,
            required: [true, "Enter a price"],
            set: (value) => { // setters
                return Math.floor(parseFloat(value) * 100) / 100
            },
        },
        tags: {
            type: [String],
            required: [true, "Add one or more tags"],
            set: (value) => { // setters
                return value.map((tag) => tag.toLowerCase())
            },
        }
    },
    { timestamps: true }
)
// compile to model
const Book = mongoose.model("Book", bookSchema)

//! create with validations
const createBook = async () => {
    const newBook = {
        title: " Chloe's Body Spray",
        author: "Haqdad Khan ",
        price: 125.999,
        tags: ["Body", "SprAy"],
    }

    try {
        const result = await Book.create(newBook)
        console.log("Book created with Validation:", result)
    } catch (error) {
        console.log("Error creating Book with Valids:", error.message)
    }
}
createBook()

//! start server
app.listen(PORT, () => {
    console.log(`Server is running at: 'http://localhost:${PORT}'`);
})
