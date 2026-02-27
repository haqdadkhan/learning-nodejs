//! --- import required modules ---
const { MongoClient, ServerApiVersion } = require("mongodb")
require("dotenv").config()

//! --- connect to db ---
// create instance
const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        depricationErrors: true,
    }
})

// connect db
let db;

const connectDB = async () => {
    try {
        await client.connect()

        // database name
        db = client.db("prac-project");
        console.log("MongoDB connected successfully...")

    } catch (error) {
        console.log("Error connecting MongoDB:", error.message)
    }
}

// get db
const getDB = () => db

//! export modules
module.exports = { connectDB, getDB }
