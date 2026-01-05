//! 1 --- import required modules ---
const express = require("express")

//! 2 --- create the router instance ---
const postRouter = express.Router()

//! 3 --- define the route handler ---
// get all posts
postRouter.get("/", (req, res) => {
    res.json({
        message: "All posts fetched.",
    })
})

// get a post
postRouter.get("/:id", (req, res) => {
    res.json({
        message: "Post fetched.",
    })
})

// update a post
postRouter.put("/:id", (req, res) => {
    res.json({
        message: "Post updated.",
    })
})

// delete a post
postRouter.delete("/:id", (req, res) => {
    res.json({
        message: "Post deleted.",
    })
})

//! 4 --- exporting routes ---
module.exports = postRouter
