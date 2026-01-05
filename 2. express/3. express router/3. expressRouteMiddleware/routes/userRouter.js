//! 1 --- import required modules ---
const express = require("express")

//! 2 --- create the router instance ---
const userRouter = express.Router()

//! 3 --- define the route handler ---
// get all users - with 'Router.route()' method
userRouter.route("/").get((req, res) => {
    res.json({
        message: "All users fetched.",
    })
})

//* handling routes with method chaining
userRouter.route("/:id")
    .get((req, res) => {// get a user
        res.json({
            message: "User fetched.",
        })
    })
    .put((req, res) => {// update a user
        res.json({
            message: "User updated.",
        })
    })
    .delete((req, res) => {// delete a user
        res.json({
            message: "User deleted.",
        })
    })

//! 4 --- exporting routes ---
module.exports = userRouter;
