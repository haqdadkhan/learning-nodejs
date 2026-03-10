//! import required modules
const express = require("express")
const mongoose = require("mongoose")
const { connectDB } = require("./db")
require("dotenv").config()

//! create app instance
const app = express()
const PORT = process.env.PORT

//! define the route handler
app.get("/", (req, res) => {
    res.send("Mongoose - One to Many Relationship")
})

//! connect db
connectDB()

//! schema and model
//* movie schema
const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        actors: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Actor",
        }], // referenced schema doc
    }
)
const Movie = mongoose.model("Movie", movieSchema)

//* actor schema
const actorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        movies: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
        }], // referenced schema doc
    },
    { timestamps: true }
)
const Actor = mongoose.model("Actor", actorSchema)

//! create with modeling
const createActor = async () => {
    try {
        // create actor
        const actor = await Actor.create({
            name: "Henry Cavill",
        })

        // create movie
        const movie = await Movie.create({
            title: "The Witcher",
            actors: [actor._id]
        })
        console.log("Movie created:", movie)

        // update actor
        actor.movies.push(movie._id)
        await actor.save()
        console.log("Author created:", actor)

    } catch (error) {
        console.log("Error creating Actor and Movie:", error)
    }
}

createActor()

//! start server
app.listen(PORT, () => {
    console.log(`Server is running on 'http://localhost:${PORT}'`)
})

