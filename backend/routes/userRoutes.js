const express = require('express')
const router = express.Router()

// GET  api/userRoute/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working (User)")
})


module.exports = router