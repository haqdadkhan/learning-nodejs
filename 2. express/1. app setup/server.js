//! 1 --- import required modules ---
const express = require('express')
const PORT = 3030

//! 2 --- create the instance ---
const app = express()

//! 3 --- define the handler ---
app.get("/", (req, res) => {
    res.send("Welcome to my first Express.js App.")
})

//! 4 --- start the server ---
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}`)
})
