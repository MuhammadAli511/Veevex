const express = require('express')
const customerRoutes = require('./customerRoutes')
const productRoutes = require('./productRoutes')
const cartRoutes = require('./cartRoutes')
const router = express.Router()


// GET  api/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working")
})

router.use('/customerRoute',customerRoutes)
router.use('/productRoute',productRoutes)
router.use('/cartRoute',cartRoutes)

module.exports = router