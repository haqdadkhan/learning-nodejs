//! import required modules
const express = require('express');
const authRouter = require('./routes/authRouter');
const { connectDB } = require('./database');
const cors = require('cors');
require('dotenv').config();

//! create app instance
const PORT = process.env.PORT || 3030;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//! connect to database
connectDB();

//! create route handlers
app.use("/auth/", authRouter)

//! start the server
app.listen(PORT, () => {
    console.log(`Server is running at: 'http://localhost:${PORT}'`)
})
