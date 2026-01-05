//! 1 --- import required modules ---
const express = require("express")
const PORT = 3030

//! 2 --- create the instance && middlewares ---
const app = express()

//* BUILT IN MIDDLEWARES

// serve static
// app.use(express.static())

// serve urlencoded data
// app.use(express.urlencoded())

// serve incoming json data
app.use(express.json())

//! 3 --- define the handler ---

// home route
app.get("/", (req, res) => {
    res.json(
        {
            status: "success",
            message: "Welcome to my first BookAPI using 'Express Middlewares'",
        }
    )
})

// create a book
app.post("/books", (req, res) => {
    console.log(req.body) // sent via postman
    res.json(
        {
            status: "success",
            message: "Welcome to my first BookAPI using 'Express Middlewares'",
        }
    )
})

//! 4 --- start the server ---
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
