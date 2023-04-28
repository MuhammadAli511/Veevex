const express = require('express')
const router = express.Router()
const {getAllProducts, getMensProducts, getWomensProducts, getElectronicProducts, getJeweleryProducts, getAllCategories, getSingleProduct, getLimitProducts, getSortProducts, getSearchProducts} = require('../controllers/productController')
const {requireAuth} = require('../middleware/auth')

// GET  api/productRoute/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working (Products)")
})

// GET  api/productRoute/getAllProducts/
router.get('/getAllProducts',requireAuth,getAllProducts)

// GET  api/productRoute/getMensProducts/
router.get('/getMensProducts',requireAuth,getMensProducts)

// GET  api/productRoute/getWomensProducts/
router.get('/getWomensProducts',requireAuth,getWomensProducts)

// GET  api/productRoute/getElectronicProducts/
router.get('/getElectronicProducts',requireAuth,getElectronicProducts)

// GET  api/productRoute/getJeweleryProducts/
router.get('/getJeweleryProducts',requireAuth,getJeweleryProducts)

// GET api/productRoute/getAllCategories
router.get('/getAllCategories',requireAuth,getAllCategories)

// GET api/productRoute/getSingleProduct
router.get('/getSingleProduct/:id',requireAuth,getSingleProduct)

// GET api/productRoute/getLimitProducts
router.get('/getLimitProducts',requireAuth,getLimitProducts)

// GET api/productRoute/getSortProducts
router.get('/getSortProducts',requireAuth,getSortProducts)

// GET api/productRoute/getSearchProducts
router.get('/getSearchProducts',requireAuth,getSearchProducts)

module.exports = router