//! --- import required modules ---
const express = require("express")
const ObjectId = require("mongodb")
const { getDB } = require("../database")

//! --- create router instance ---
const todoRouter = express.Router()

//! --- define router handler ---
//* CREATE
todoRouter.post("/", async (req, res) => {
    // todo data
    const todo = req.body
    try {
        // database
        const db = getDB()
        // collection
        const todos = db.collection("todos")
        // inserting
        const result = await todos.insertOne(todo)
        // sending response
        res.json(result)

        console.log("Todo created:", result)
    } catch (error) {
        console.log("Error creating Todo:", error.message)
    }
})

//* READ
todoRouter.get("/", async (req, res) => {
    try {
        // database
        const db = getDB()
        // collection
        const todos = await db.collection("todos")
        // fetching
        const result = await todos.find({}).toArray()
        // sending response
        res.json(result)

        console.log("Todos fetched:", result)
    } catch (error) {
        console.log("Error fetching Todos:", error.message)
    }
})

//* UPDATE
todoRouter.put("/:id", async (req, res) => {
    // todo data
    const todo = req.body
    try {
        // database
        const db = getDB()
        // collection
        const todos = await db.collection("todos")
        // updating
        const result = await todos.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: todo }
        )
        // sending response
        res.json(result)

        console.log(`Updated todo with id: ${req.params.id}`)
    } catch (error) {
        console.log("Error updating Todo:", error.message)
    }
})

//* DELETE
todoRouter.delete("/:id", async (req, res) => {
    // todo data
    const todo = req.params.id
    try {
        // database
        const db = getDB()
        // collection
        const todos = await db.collection("todos")
        // deleting
        const result = await todos.deleteOne(
            { _id: new ObjectId(todo) }
        )
        // sending response
        res.json(result)

        console.log(`Deleted todo with id: ${req.params.id}`)
    } catch (error) {
        console.log("Error deleting Todo:", error.message)
    }
})

//! --- export modules ---
module.exports = todoRouter
