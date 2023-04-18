const express = require('express')
const router = express.Router()

// GET  api/customerRoute/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working (Customer)")
})

// POST  api/customerRoute/signup/
router.post('/signup',(req,res) => {
    console.log(req.body)
})



module.exports = router