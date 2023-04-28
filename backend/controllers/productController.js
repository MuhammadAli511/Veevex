const asyncHandler = require('express-async-handler')
const Products = require('../models/product')
require('dotenv').config()


const getAllProducts = asyncHandler(async(req,res) => {
    const products = await Products.find({})
    const data = {
        status: 200,
        products: products
    }
    res.status(200).json(data)
})

const getMensProducts = asyncHandler(async(req,res) => {
    const products = await Products.find({category:"men's clothing"})
    const data = {
        status: 200,
        products: products
    }
    res.status(200).json(data)
})

const getWomensProducts = asyncHandler(async(req,res) => {
    const products = await Products.find({category:"women's clothing"})
    const data = {
        status: 200,
        products: products
    }
    res.status(200).json(data)
})

const getElectronicProducts = asyncHandler(async(req,res) => {
    const products = await Products.find({category:"electronics"})
    const data = {
        status: 200,
        products: products
    }
    res.status(200).json(data)
})

const getJeweleryProducts = asyncHandler(async(req,res) => {
    const products = await Products.find({category:"jewelery"})
    const data = {
        status: 200,
        products: products
    }
    res.status(200).json(data)
})

const addNewProduct = asyncHandler(async(req,res) => {
    const {name,price,description,category,image} = req.body
    const product = await Products.create({
        name,
        price,
        description,
        category,
        image
    })
    const data = {
        status: 200,
        product: product
    }
    res.status(200).json(data)
})

const deleteProduct = asyncHandler(async(req,res) => {
    const {id} = req.body
    const product = await Products.findByIdAndDelete(id)
    const data = {
        status: 200,
        product: product
    }
    res.status(200).json(data)
})

const updateProduct = asyncHandler(async(req,res) => {
    const {id,name,price,description,category,image} = req.body
    const product = await Products.findByIdAndUpdate(id,{
        name,
        price,
        description,
        category,
        image
    })
    const data = {
        status: 200,
        product: product
    }
    res.status(200).json(data)
})

const getAllCategories = asyncHandler(async(req,res) => {
    const categories = await Products.find().distinct('category')
    const data = {
        status: 200,
        categories: categories
    }
    res.status(200).json(data)
})

const getSingleProduct = asyncHandler(async(req,res) => {
    const {id} = req.params
    const product = await Products.find({id:id})
    const data = {
        status: 200,
        product: product
    }
    res.status(200).json(data)
})

const getLimitProducts = asyncHandler(async(req,res) => {
    const {limit} = req.body
    const products = await Products.find({}).limit(limit)
    const data = {
        status: 200,
        products: products
    }
    res.status(200).json(data)
})

const getSortProducts = asyncHandler(async(req,res) => {
    const {sort} = req.body
    const products = await Products.find({}).sort(sort)
    const data = {
        status: 200,
        products: products
    }
    res.status(200).json(data)
})

const getSearchProducts = asyncHandler(async(req,res) => {
    const {q} = req.body
    const products = await Products.find({name:{$regex:q,$options:'i'}})
    const data = {
        status: 200,
        products: products
    }
    res.status(200).json(data)
})

module.exports = {
    getAllProducts,
    getMensProducts,
    getWomensProducts,
    getElectronicProducts,
    getJeweleryProducts,
    addNewProduct,
    deleteProduct,
    updateProduct,
    getAllCategories,
    getSingleProduct,
    getLimitProducts,
    getSortProducts,
    getSearchProducts
}