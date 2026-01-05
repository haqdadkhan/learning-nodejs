//! 1 --- import required modules ---
const express = require("express")
const userRouter = require("./routes/userRouter")
const postRouter = require("./routes/postRouter")
const isAuthenticated = require('./middleware/isAuthenticated')
const PORT = 3030

//! 2 --- create the instance ---
const app = express()
app.use(express.json())

//! 3 --- define the route handler ---
//* home route
app.get("/", (req, res) => {
    res.json({
        message: "Hellow, welcome to the HomePage.",
    })
})

//* users' route
app.use("/users", isAuthenticated, userRouter)

//* posts' route
app.use("/posts", isAuthenticated,  postRouter)

//! 4 --- start the server ---
app.listen(PORT, () => {
    console.log(`App is running at 'http://localhost:${PORT}'`)
})
