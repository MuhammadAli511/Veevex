const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT
const routes = require('./routes/index')

connectDB()
const app = express()

app.use('/api', routes)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.listen(port, () => console.log(`Server running on port ${port}`))