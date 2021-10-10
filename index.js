const express = require("express")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth.js")
const Connection = require("./connection/db.js")
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()
dotenv.config()



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ extended: false }))
app.use(express.json())


app.use('/api/user', authRoute)
Connection





const PORT = process.env.PORT
app.listen(PORT, ()=>{console.log(`app is running on ${PORT}`)})