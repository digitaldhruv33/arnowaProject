const express = require("express")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth.js")


const app = express()
dotenv.config()

app.use('/api/user', authRoute)


const PORT = process.env.PORT

app.listen(PORT, ()=>{console.log(`app is running on ${PORT}`)})