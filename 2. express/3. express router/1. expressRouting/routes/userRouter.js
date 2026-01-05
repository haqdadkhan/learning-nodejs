//! 1 --- import required modules ---
const express = require("express")

//! 2 --- create the router instance ---
const userRouter = express.Router()

//! 3 --- define the route handler ---
// get all users
userRouter.get("/", (req, res) => {
    res.json({
        message: "All users fetched.",
    })
})

// get a user
userRouter.get("/:id", (req, res) => {
    res.json({
        message: "User fetched.",
    })
})

// update a user
userRouter.put("/:id", (req, res) => {
    res.json({
        message: "User updated.",
    })
})

// delete a user
userRouter.delete("/:id", (req, res) => {
    res.json({
        message: "User deleted.",
    })
})

//! 4 --- exporting routes ---
module.exports = userRouter;
