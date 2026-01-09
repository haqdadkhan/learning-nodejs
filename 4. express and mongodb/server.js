//! --- import required modules ---
const express = require("express")
const { connectDB } = require("./database")
require("dotenv").config()
const cors = require("cors")
const todoRouter = require("./routes/todoRouter")

//! --- create app instance ---
const PORT = process.env.PORT || 3030
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

//! --- connect db ---
connectDB()

//! --- define the handlers ---
app.use("/api/todos", todoRouter)

//! --- start the server ---
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
