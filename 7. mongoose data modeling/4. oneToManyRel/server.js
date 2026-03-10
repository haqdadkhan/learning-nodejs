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
    res.send("Mongoose - One to Many Relationship")
})

//! connect db
connectDB()

//! schema and model
//* book schema
const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        content: {
            type: String,
        }
    }
)
const Book = mongoose.model("Book", bookSchema)

//* author schema
const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        books: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        }], // referenced schema doc
    },
    { timestamps: true }
)
const Author = mongoose.model("Author", authorSchema)

//! create with modeling
const createAuthor = async () => {
    try {
        // create book
        const book = await Book.create({
            title: "Chloe's Life",
            content: "This book tells day-to-day life of Chloe."
        })
        console.log("Book created:", book)

        // create author
        const author = await Author.create({
            name: "Ali",
            books: [book._id],
        })
        console.log("Author created:", author)

    } catch (error) {
        console.log("Error creating Author and Book:", error)
    }
}

// createAuthor()

//! start server
app.listen(PORT, () => {
    console.log(`Server is running on 'http://localhost:${PORT}'`)
})

