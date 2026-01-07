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

        //* update operations
        try {
            // - update one -
            // const result = await teacher.updateOne(
            //     { // doc to find
            //         name: "D'Mitry Bivol",
            //     },
            //     { // props to update
            //         $set: {
            //             name: "Ali",
            //             class: ["5", "6"],
            //         },
            //     },
            // )

            // - update many -
            // const result = await teacher.updateMany(
            //     { // doc to find
            //         name: "Irfan Afzal",
            //     },
            //     { // props to update
            //         $set: {
            //             name: "Bruce Lee",
            //             subject: "Philosophy",
            //         }
            //     }
            // )

            // - find one and update -
            const result = await teacher.findOneAndUpdate(
                { // doc to find
                    name: "Bruce Lee",
                },
                { // props to update
                    $set: {
                        name: "Muhammad Ali",
                        subject: "Philosophy",
                        class: ["Pro"],
                    }
                }
            )

            console.log("Updated document(s):", result)
        } catch (error) {
            console.log("Error updating document(s):", error.message)
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
