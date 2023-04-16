const Products = require('../models/product')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'products.json')
const connectDB = require('../config/db')

connectDB()

const addProduct = async () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8')
        const products = JSON.parse(data)
        await Products.deleteMany()
        await Products.insertMany(products)
        console.log('Data imported')
    } catch (err) {
        console.log(err)
    } finally {
        process.exit()
    }
}

addProduct()