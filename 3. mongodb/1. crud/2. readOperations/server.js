//! --- import required modules ---
const express = require("express")
const { MongoClient, ServerApiVersion } = require("mongodb")
require("dotenv").config()

//! --- create app instance ---
const PORT = process.env.PORT || 3030
const app = express()

//! --- connect db ---
// create instance
const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

// connecting
const connectDB = async () => {
    try {
        await client.connect()
        console.log("MongoDB connected successfully.")

        // database name
        const database = client.db("school")
        // collection name
        const teacher = database.collection("teacher")

        //* read operations
        try {
            // - find -
            // const result = await teacher.find().toArray()

            // - find one -
            const result = await teacher.findOne({class: "9"})

            console.log("Retrieved document(s):", result)
        } catch (error) {
            console.log("Error retrieving document(s):", error.message)
        }

    } catch (error) {
        console.log("Error connecting DB:", error.message)
    }
}
connectDB()


//! --- define the handlers ---
app.get("/", (req, res) => {
    res.send("Welcome to the app.")
})

//! --- start the server ---
app.listen(PORT, () => {
    console.log(`Server is running at 'http://localhost:${PORT}'`)
})
