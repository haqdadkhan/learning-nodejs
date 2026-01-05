//! 1 --- import required modules ---
const express = require("express")

//! 2 --- create the router instance ---
const postRouter = express.Router()

//! 3 --- define the route handler ---
// get all posts - with 'Router.route()' method
postRouter.route("/").get((req, res) => {
    res.json({
        message: "All posts fetched.",
    })
})

//* handling routes with method chaining
postRouter.route("/:id").get((req, res) => { // get a post
    res.json({
        message: "Post fetched.",
    })
}).put((req, res) => { // update a post
    res.json({
        message: "Post updated.",
    })
}).delete((req, res) => { // delete a post
    res.json({
        message: "Post deleted.",
    })
})

//! 4 --- exporting routes ---
module.exports = postRouter
