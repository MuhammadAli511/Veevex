const express = require('express')
const router = express.Router()
const {signup, login} = require('../controllers/customerController')


// GET  api/customerRoute/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working (Customer)")
})

// POST  api/customerRoute/signup/
router.post('/signup',signup)

// POST  api/customerRoute/login/
router.post('/login',login)

module.exports = router