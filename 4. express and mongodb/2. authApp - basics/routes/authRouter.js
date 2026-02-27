//! --- import required modules ---
const express = require('express');
const { getDB } = require('../database');
const bcrypt = require('bcrypt');

//! --- create router instance ---
const authRouter = express.Router();

//! --- define route handlers ---

//* REGISTER
authRouter.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        // database
        const db = getDB();
        // collection
        const userCollection = db.collection("users");
        // insert data
        const existingUser = await userCollection.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                message: "User with this email already exists"
            })
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const result = await userCollection.insertOne({
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "User created successfully",
            result
        });

    } catch (error) {
        console.error("Error creating user:", error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

//* LOGIN
authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        // db
        const db = getDB();
        // collection
        const userCollection = db.collection("users");
        // find user
        const userFound = await userCollection.findOne({ email });

        if (!userFound) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, userFound.password)

        if (!isMatch) {
            return res.status(401).json({
                message: "Either email or password is incorrect"
            });
        }

        return res.status(200).json({
            message: "Login successful",
            email: userFound.email
        });

    } catch (error) {
        console.error("Error logging in user:", error.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
})

//! --- export the modules ---
module.exports = authRouter;
