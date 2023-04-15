const express = require('express')
const userRoutes = require('./userRoutes')
const router = express.Router()


// GET  api/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working")
})

router.use('/userRoute',userRoutes)

module.exports = router