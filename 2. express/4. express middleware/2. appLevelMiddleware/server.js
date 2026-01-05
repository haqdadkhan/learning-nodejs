//! 1 --- import required modules ---
const express = require("express")
const PORT = 3030;

//! 2 --- create the instance && middlewares ---
const app = express()

//* BUILT IN MIDDLEWARES
// serve static (HTML, CSS, JS)
// app.use(express.static())

// serve urlencoded data
// app.use(express.urlencoded())

// serve incoming json data
app.use(express.json())

//* APP LEVEL MIDDLEWARE
const logRequest = (req, res, next) => {
    console.log(`Request received at: ${new Date().toISOString()}, for '${req.method}' method, at '${req.path}' path`)
    // call next
    next();
}

app.use(logRequest)

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
    console.log("Requested data to be sent: ", req.body)
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
