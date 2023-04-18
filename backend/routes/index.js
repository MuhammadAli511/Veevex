const express = require('express')
const customerRoutes = require('./customerRoutes')
const router = express.Router()


// GET  api/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working")
})

router.use('/customerRoute',customerRoutes)

module.exports = router