const express = require("express")
const dotenv = require("dotenv")
const dbConnect = require("./config/db/dbConnect")

dotenv.config();
const app = express()

//DB
dbConnect() 

// server
const PORT = process.env.PORT || 5000
app.listen(PORT , console.log(`server running ${PORT}`))