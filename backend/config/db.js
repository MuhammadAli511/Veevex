const mongoose = require('mongoose')
require('dotenv').config();
const connectDB = async () => {
    let dbURI = process.env.MONGODB_URI;
    try {
        const conn = await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongoDB Connected at ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB