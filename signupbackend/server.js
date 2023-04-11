const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))

app.use(express.json())

// Add CORS headers using the cors middleware
app.use(cors({
  origin: 'https://yds-eight.vercel.app/',
  credentials: true
}))

app.use('/app', routesUrls)
app.listen(process.env.PORT || 4000, () => console.log("server is up and listening"))
