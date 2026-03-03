//! import required modules
const express = require("express")
const { connectDB, getDB }= require("./db")
require("dotenv").config()

//! create app instance
const PORT = process.env.PORT || 3000
const app = express()

//! connect to database
connectDB()

//! create route handlers
app.get("/", (req, res) => {
    res.send("Hellow World!");
})

//! start the server
app.listen(PORT, () => {
    console.log(`Server is running at: 'http://localhost:${PORT}'`)
})
