//! 1 --- import required modules ---
const express = require("express")
const PORT = 3030

//! 2 --- create the instance ---
const app = express()
app.use(express.json())

// mimic database
const books = [
    { id: 1, title: "Computer Networks", author: "Hammad Khalid Khan", },
    { id: 2, title: "Intro to Programming", author: "Naveed A. Malik", },
    { id: 3, title: "Soft Design and Arch", author: "Dr. Fakhar Lodhi", },
]

//! 3 --- define the handler(s) ---
// home
app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Welcome to the HomePage...",
    })
})

// fetch books
app.get("/books", (req, res) => {
    res.json({
        status: "success",
        message: "Books fetched successfully...",
        books: books,
    })
})

// fetch single book
app.get("/books/:id", (req, res) => {
    // finding the book
    const id = req.params.id
    const bookFound = books.find((book) => book.id == id)

    // sending possible responses
    if (!bookFound) {
        res.json({
            status: "failed",
            message: `Book with id '${id}' not found`
        })
    } else {
        res.json({
            status: "success",
            message: "Book fetched successfully...",
            book: bookFound,
        })
    }
})

// create book
app.post("/books", (req, res) => {
    // getting the book
    const newBook = req.body

    // sending possible responses
    if (!newBook) {
        res.json({
            status: "failed",
            message: "Failed creating the book..."
        })
    } else {
        books.push(newBook)
        res.json({
            status: "success",
            message: "New book created successfully",
            newBook: newBook,
            books: books,
        })
    }
})

//! 4 --- start the server ---
app.listen(PORT, () => {
    console.log(`The app is running at 'http://localhost:${PORT}'`)
})
